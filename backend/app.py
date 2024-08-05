from flask import Flask, request, jsonify
from werkzeug.security import generate_password_hash
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/encrypt', methods=['POST'])
def encrypt_password():
    data = request.json
    password = data.get('password', '')
    hashed_password = generate_password_hash(password)

    parts = hashed_password.split('$')
    key_hash= parts[-1] if len(parts) > 1 else hashed_password

    return jsonify({'hashed_password': key_hash})

if __name__ == '__main__':
    app.run(debug=True)
