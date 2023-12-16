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
  database='market'
)

mycursor = mydb.cursor(dictionary=True)

@app_views.route("/orders", strict_slashes=False, methods=['GET', 'POST'])
def order(order_id=None):
    """show orders and order with id"""
    user_list = {}
    if request.method == 'GET':
        if order_id is None:
            mycursor.execute("SELECT * FROM Orders")
            myresult = mycursor.fetchall()
            #for k,v in myresult:
                #user_list[k]=v
            return jsonify(myresult)
    else:
        """create a new post req"""
        data = request.get_json(force=True, silent=True)   
        sql = "INSERT INTO User (first_name_User, last_name_User, dateofbirth_User, phone, email, adresse, password ) VALUES (%s,%s, %s, %s, %s,%s, %s)"
        val = (data["first_name_User"], data["last_name_User"], data["dateofbirth_User"], data["phone"], data["email"], data["adresse"], "test")
        mycursor.execute(sql, val)
        mydb.commit()
        val=(data["email"],data["last_name_User"])
        mycursor.execute("SELECT id_User FROM User where email=%s and last_name_User=%s",val)
        myresult = mycursor.fetchall()
        #print(myresult)
        for key in data.keys():
          #value = d[key]
          if len(key)<3:
            #print(data[key]["categorie"])
            sql = "INSERT INTO Orders (id_Product, id_User, qty) VALUES (%s,%s, %s)"
            val = (int(data[key]["id_Product"]), int(myresult), int(data[key]["qty"]))
            mycursor.execute(sql, val)
            mydb.commit()
        return "ok", 201


#if __name__ == '__main__':
    #app.run(host='0.0.0.0', port='5000')

