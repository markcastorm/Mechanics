import { useState, useEffect, useRef } from 'react';

// --- Icons ---
const ChevronLeft = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>;
const ChevronRight = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>;
const CalendarIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;
const ClockIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;

const BookingForm = () => {
  // --- State ---
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [booking, setBooking] = useState({ date: null, time: null });
  const [currentDate, setCurrentDate] = useState(new Date()); // For Calendar Navigation
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // --- Refs for Animation ---
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('animate-slide-up-in');
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    if (leftColRef.current) observer.observe(leftColRef.current);
    if (rightColRef.current) observer.observe(rightColRef.current);
    return () => observer.disconnect();
  }, []);

  // --- Calendar Logic ---
  const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const handlePrevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  const handleDateClick = (day) => {
    const selected = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    // Prevent selecting past dates
    if (selected < new Date().setHours(0,0,0,0)) return;
    
    setBooking({ date: selected, time: null }); // Reset time when date changes
    setErrors(prev => ({ ...prev, booking: '' }));
  };

  const handleTimeClick = (time) => {
    setBooking(prev => ({ ...prev, time }));
    setErrors(prev => ({ ...prev, booking: '' }));
  };

  // Mock Time Slots
  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'];
  const services = ['General Maintenance', 'Engine Repair', 'Brake Service', 'Tire Service', 'Electrical Systems', 'AC Repair', 'Transmission', 'Other'];

  // --- Form Handling ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!booking.date || !booking.time) newErrors.booking = 'Please select a date and time slot';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        console.log('Booking Data:', { ...formData, ...booking });
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setBooking({ date: null, time: null });
        setIsSubmitting(false);
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 3000);
      }, 1500);
    }
  };

  // --- Styles ---
  const inputStyle = {
    width: '100%',
    padding: '1rem',
    backgroundColor: '#262626',
    border: '1px solid #3f3f3f',
    borderRadius: '8px',
    color: '#fff',
    outline: 'none',
    transition: 'all 0.3s ease',
    fontSize: '0.95rem'
  };

  return (
    <section className="relative bg-[#1a1a1a] text-white py-24 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT COLUMN: Heading & Calendar */}
        <div 
          ref={leftColRef}
          className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
              Book Your Service <span className="text-[#ffd700]">Today</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              Check our availability and schedule your appointment instantly. We value your time as much as you do.
            </p>
          </div>

          {/* Calendar Component */}
          <div className="bg-[#262626] p-6 rounded-2xl border border-[#3f3f3f] shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white">
                {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
              </h3>
              <div className="flex gap-2">
                <button onClick={handlePrevMonth} className="p-2 hover:bg-[#333] rounded-full transition-colors text-gray-300">
                  <ChevronLeft />
                </button>
                <button onClick={handleNextMonth} className="p-2 hover:bg-[#333] rounded-full transition-colors text-gray-300">
                  <ChevronRight />
                </button>
              </div>
            </div>

            {/* Week Days Header */}
            <div className="grid grid-cols-7 mb-4 text-center">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                <div key={day} className="text-xs font-bold text-gray-500 uppercase">{day}</div>
              ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-2 text-center">
              {Array.from({ length: getFirstDayOfMonth(currentDate) }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {Array.from({ length: getDaysInMonth(currentDate) }).map((_, i) => {
                const day = i + 1;
                const dateObj = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                const isSelected = booking.date && booking.date.getDate() === day && booking.date.getMonth() === currentDate.getMonth();
                const isPast = dateObj < new Date().setHours(0,0,0,0);
                const isToday = dateObj.toDateString() === new Date().toDateString();

                return (
                  <button
                    key={day}
                    onClick={() => handleDateClick(day)}
                    disabled={isPast}
                    className={`
                      h-10 w-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200
                      ${isSelected ? 'bg-[#ffd700] text-black shadow-lg scale-110' : ''}
                      ${!isSelected && !isPast ? 'hover:bg-[#333] text-gray-200' : ''}
                      ${isPast ? 'text-gray-700 cursor-not-allowed' : ''}
                      ${isToday && !isSelected ? 'border border-[#ffd700] text-[#ffd700]' : ''}
                    `}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            {/* Time Slots Area */}
            <div className={`mt-6 pt-6 border-t border-[#3f3f3f] transition-all duration-500 ${booking.date ? 'opacity-100' : 'opacity-50 pointer-events-none grayscale'}`}>
              <h4 className="text-sm font-medium text-gray-400 mb-3 flex items-center gap-2">
                <ClockIcon /> Available Slots for {booking.date ? booking.date.toLocaleDateString() : '...'}
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    onClick={() => handleTimeClick(time)}
                    className={`
                      py-2 px-1 text-sm rounded border transition-all duration-200
                      ${booking.time === time 
                        ? 'bg-[#ffd700] border-[#ffd700] text-black font-semibold' 
                        : 'bg-transparent border-[#4a4a4a] text-gray-300 hover:border-[#ffd700] hover:text-[#ffd700]'}
                    `}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
            {errors.booking && <p className="text-red-500 text-sm mt-3 text-center">{errors.booking}</p>}
          </div>
        </div>

        {/* RIGHT COLUMN: Form */}
        <div 
          ref={rightColRef}
          className="opacity-0 translate-y-8 transition-all duration-700 ease-out lg:pt-12"
          style={{ transitionDelay: '200ms' }}
        >
          <form onSubmit={handleSubmit} className="bg-[#202020] p-8 md:p-10 rounded-2xl border border-[#333] shadow-lg relative overflow-hidden">
            {/* Success Overlay */}
            {isSuccess && (
              <div className="absolute inset-0 bg-[#202020] z-20 flex flex-col items-center justify-center animate-fade-in">
                 <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                 </div>
                 <h3 className="text-2xl text-white font-bold">Booking Confirmed!</h3>
                 <p className="text-gray-400 mt-2">We'll see you on {booking.date?.toLocaleDateString()}.</p>
              </div>
            )}

            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-medium text-white border-b border-[#333] pb-4 mb-2">
                Client Details
              </h3>

              {/* Input Group */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    type="text" name="name"
                    value={formData.name} onChange={handleChange}
                    style={{...inputStyle, borderColor: errors.name ? '#ef4444' : '#3f3f3f'}}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone</label>
                    <input
                      type="tel" name="phone"
                      value={formData.phone} onChange={handleChange}
                      style={{...inputStyle, borderColor: errors.phone ? '#ef4444' : '#3f3f3f'}}
                      placeholder="(555) 000-0000"
                    />
                    {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone}</span>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email</label>
                    <input
                      type="email" name="email"
                      value={formData.email} onChange={handleChange}
                      style={{...inputStyle, borderColor: errors.email ? '#ef4444' : '#3f3f3f'}}
                      placeholder="john@example.com"
                    />
                    {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service} onChange={handleChange}
                    style={{...inputStyle, cursor: 'pointer', appearance: 'none', borderColor: errors.service ? '#ef4444' : '#3f3f3f'}}
                  >
                    <option value="">Select Service Type</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.service && <span className="text-red-500 text-xs mt-1 block">{errors.service}</span>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Special Request / Message</label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message} onChange={handleChange}
                    style={{...inputStyle, resize: 'none'}}
                    placeholder="Briefly describe the issue..."
                  />
                </div>
              </div>

              {/* Booking Summary Box */}
              <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#333] mt-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ffd700] flex items-center justify-center text-black">
                     <CalendarIcon />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Appointment</p>
                    <p className="text-sm font-medium text-white">
                      {booking.date ? `${booking.date.toLocaleDateString()} at ${booking.time || '--:--'}` : 'Select a date'}
                    </p>
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#ffd700] hover:bg-[#ffe033] text-black font-bold py-4 rounded-lg transition-all transform active:scale-[0.98] mt-2"
              >
                {isSubmitting ? 'Processing...' : 'Confirm Appointment'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;