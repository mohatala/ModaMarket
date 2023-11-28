#!/usr/bin/python3
"""Authors : Talaini
State objects that handles all default RESTFul API actions"""
from api.v1.views import app_views
#from models.categorie import Categorie
from flask import abort, request, jsonify
import mysql.connector
#from flask import Flask

#app = Flask(__name__)

mydb = mysql.connector.connect(
  host="54.89.109.168",
  user="med",
  password='med123',
  database='moda_market'
)

mycursor = mydb.cursor(dictionary=True)

@app_views.route("/reviews", strict_slashes=False, methods=["GET"])
def review(review_id=None):
    """show review and review with id"""
    if review_id is None:
        mycursor.execute("SELECT * FROM Review")
        myresult = mycursor.fetchall()
        return jsonify(myresult)

#if __name__ == '__main__':
    #app.run(host='0.0.0.0', port='5000')

