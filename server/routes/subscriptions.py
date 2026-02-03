from flask import Blueprint, request, jsonify
from models import db, Subscriptions
from datetime import datetime # Import datetime

subscriptions_bp = Blueprint('subscriptions', __name__)

@subscriptions_bp.route('', methods=['POST'])
def create_subscription():
    try:
        data = request.get_json()

        # 1. Validate required fields
        if not data or 'email' not in data or not data['email']:
            return jsonify({'error': 'Email is required'}), 400

        email = data['email']

        # 2. Check if email already exists (Optional but recommended)
        existing_sub = Subscriptions.query.filter_by(email=email).first()
        if existing_sub:
            return jsonify({'message': 'You are already subscribed!'}), 200

        # 3. Generate Current Date and Time (Server Side)
        now = datetime.now()
        current_date = now.strftime("%Y-%m-%d") # e.g., "2023-10-27"
        current_time = now.strftime("%I:%M %p") # e.g., "02:30 PM"

        # 4. Create new Subscription instance
        new_subscription = Subscriptions(
            email=email,
            subscriptions_date=current_date,
            subscriptions_time=current_time
        )

        # 5. Save to Database
        db.session.add(new_subscription)
        db.session.commit()

        return jsonify({
            'message': 'Subscribed successfully!',
            'data': new_subscription.to_dict()
        }), 201

    except Exception as e:
        db.session.rollback()
        print(f"Subscription Error: {e}")
        return jsonify({'error': 'Internal Server Error'}), 500