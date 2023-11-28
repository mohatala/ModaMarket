#!/usr/bin/python3
"""Authors : Talaini
State objects that handles all default RESTFul API actions"""
from flask import abort, request, jsonify
import mysql.connector
from flask import Flask

app = Flask(__name__)

mydb = mysql.connector.connect(
  host="54.89.109.168",
  user="med",
  password='med123',
  database='moda_market'
)

mycursor = mydb.cursor(dictionary=True)

@app.route("/procls", strict_slashes=False, methods=["GET"])
def user(categorie_id=None):
    """show categorie and categorie with id"""
    cat_list = {}
    if categorie_id is None:
        mycursor.execute("SELECT * FROM Product")
        myresult = mycursor.fetchall()
        #mydb.close()
        #for k,v in myresult:
         #   cat_list[k]=v
        return jsonify(myresult)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5000')
