#!/usr/bin/python3
"""Endpoint (route) will be to return the status of your API"""
import os
from flask import Flask
from api.v1.views import app_views

app = Flask(__name__)

app.register_blueprint(app_views, url_prefix="/api/v1")


@app.errorhandler(404)
def error_404(exception):
    return {"error": "Not found"}, 404


@app.errorhandler(400)
def error_400(exception):
    message = exception.description
    return message, 400


if __name__ == "__main__":
    app.run(host = "0.0.0.0", threaded=True)
