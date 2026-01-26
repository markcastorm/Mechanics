import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../../Components/Navbar';
import Footer from '../../../Components/Footer';
import Hero from './components/Hero';
import ServiceDetails from './components/ServiceDetails';
import { getServiceBySlug } from './data/servicesData';

function IndividualService() {
  const { slug } = useParams();
  const serviceData = getServiceBySlug(slug);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [slug]);

  return (
    <div>
      <Navbar />
      <Hero serviceData={serviceData} />
      <ServiceDetails serviceData={serviceData} />
      {/* Additional sections will go here */}
      <Footer />
    </div>
  );
}

export default IndividualService;
