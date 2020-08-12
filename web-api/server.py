from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def base():
    data = {'time': '2019-01-01', 'meterusage': 45.56}
    response = jsonify(data)
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response



