from flask import Blueprint, request, jsonify
from models import db, Bookings

bookings_bp = Blueprint('bookings', __name__)


@bookings_bp.route('', methods=['POST']) 
def create_booking():
    try:
        data = request.get_json()

        # Validate required fields
        required_fields = ['name', 'email', 'phone', 'service', 'appointmentDate', 'appointmentTime']
        for field in required_fields:
            if field not in data or not data[field]:
                return jsonify({'error': f'Missing field: {field}'}), 400

        # Create new booking instance
        new_booking = Bookings(
            name=data['name'],
            email=data['email'],
            phone=data['phone'],
            service=data['service'],
            message=data.get('message', ''),
            appointment_date=data['appointmentDate'],
            appointment_time=data['appointmentTime']
        )

        db.session.add(new_booking)
        db.session.commit()

        return jsonify({
            'message': 'Booking created successfully!',
            'booking': new_booking.to_dict()
        }), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({'error': 'Internal Server Error', 'details': str(e)}), 500