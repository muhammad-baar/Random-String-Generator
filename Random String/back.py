from flask import Flask, jsonify
from flask_cors import CORS   # ✅ import CORS
import random
import string

app = Flask(__name__)
CORS(app)   # ✅ enable CORS for all routes

@app.route("/random-string")
def random_string():
    result = ''.join(random.choices(string.ascii_letters + string.digits, k=10))
    return jsonify({"string": result})

if __name__ == "__main__":
    app.run(debug=True)

