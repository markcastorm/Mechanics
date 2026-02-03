import os
from flask import Flask, jsonify
from flask_cors import CORS
from flask_migrate import Migrate
from models import db  # Import db from models

app = Flask(__name__)

# CORS
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

# DB Config
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'Mechanics.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize DB first
db.init_app(app)
migrate = Migrate(app, db)

from routes.bookings import bookings_bp
from routes.subscriptions import subscriptions_bp

app.register_blueprint(bookings_bp, url_prefix="/api/bookings")
app.register_blueprint(subscriptions_bp, url_prefix="/api/subscribe")

@app.route("/api/health", methods=['GET'])
def health_check():
    return jsonify({
        'status': 'healthy',
        'database': 'sqlite',
        'message': 'Mechanic backend is running'
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)