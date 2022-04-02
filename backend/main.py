# Import flask and datetime module for showing date and time
import json
from flask import Flask, request, jsonify, current_app
from flask_cors import CORS
import datetime
import sys

  
# x = datetime.datetime.now()
  
# Initializing flask app
app = Flask(__name__)

@app.route("/", methods=['GET'])
def home():
    return ("<h1>Flask Server</h1>")
  
# Route for seeing a data
@app.route('/data')
def get_time():
    x = datetime.datetime.now()
    # Returning an api for showing in  reactjs
    return { 
        "TelemetryData":"Some Telemetry Data to display",
        "Date":x, 
        }

@app.post('/post')
def testPost():
    name = request.json.get('name')
    current_app.logger.debug(name) # prints to console
    print('Command received!', file=sys.stderr) # also prints to console (which way is better? idk)
    return jsonify(name=name)

# because backend and frontend use different ports, we have to enable cross-origin requests
cors = CORS(app, resources={'/*':{'origins': 'http://localhost:3000'}})  

# Running app
if __name__ == '__main__':
    app.run(debug=True)