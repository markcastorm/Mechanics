from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from datetime import datetime

db = SQLAlchemy()



class Bookings(db.Model):
    __tablename__ = 'bookings'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    service = db.Column(db.String(50), nullable=False)
    message = db.Column(db.Text, nullable=True)
    
    # Store date/time. Using String for date is often safer 
    # if you don't need complex DB date math immediately.
    appointment_date = db.Column(db.String(50), nullable=False) 
    appointment_time = db.Column(db.String(20), nullable=False)
    
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'service': self.service,
            'date': self.appointment_date,
            'time': self.appointment_time
        }
    
class Subscriptions(db.Model):
    __tablename__ = 'subscriptions'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), nullable=False, unique=True)
    subscriptions_date = db.Column(db.String(50), nullable=False) 
    subscriptions_time = db.Column(db.String(20), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'email': self.email,
            'date': self.subscriptions_date,
            'time': self.subscriptions_time
        }