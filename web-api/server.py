from flask import Flask, jsonify
from client import get_meter_usage

app = Flask(__name__)


@app.route('/')
def hello():
    data = 'Hello, World!'
    response = jsonify(data)
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response


@app.route('/meterusage')
def meterusage():
    data = get_meter_usage()

    measurements = data.measurements

    # convert to list of dicts, so it's JSON serializable
    ser = [{'time': x.time, 'meterusage': x.meterusage} for x in measurements]

    response = jsonify(ser)
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response
