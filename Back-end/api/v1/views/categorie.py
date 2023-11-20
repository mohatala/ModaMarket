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

mycursor = mydb.cursor()

@app_views.route("/categories", strict_slashes=False, methods=["GET"])
def categorie(categorie_id=None):
    """show categorie and categorie with id"""
    cat_list = {}
    if categorie_id is None:
        mycursor.execute("SELECT * FROM Categorie")
        myresult = mycursor.fetchall()
        for k,v in myresult:
            cat_list[k]=v
        return jsonify(cat_list)

#if __name__ == '__main__':
    #app.run(host='0.0.0.0', port='5000')

