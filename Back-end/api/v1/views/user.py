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

@app_views.route("/users", strict_slashes=False, methods=['GET', 'POST'])
def user(user_id=None):
    """show user and user with id"""
    user_list = {}
    if request.method == 'GET':
        if user_id is None:
            mycursor.execute("SELECT * FROM User")
            myresult = mycursor.fetchall()
            #for k,v in myresult:
                #user_list[k]=v
            return jsonify(myresult)
    else:
        """create a new post req"""
        data = request.get_json(force=True, silent=True)
        #email = request.form['email']
        #password = request.form['password']
        if not data:
            abort(400, "Not a JSON")
        if "email" not in data:
            abort(400, "Missing email")
        if "password" not in data:
            abort(400, "Missing password")
        sql = "INSERT INTO User (first_name_User, last_name_User, dateofbirth_User, phone, email, adresse, password ) VALUES (%s,%s, %s, %s, %s,%s, %s)"
        val = (data["first_name_User"], data["last_name_User"], data["dateofbirth_User"], data["phone"], data["email"], data["adresse"], data["password"])
        mycursor.execute(sql, val)
        mydb.commit()
        #print(email)
        return "ok", 201


@app_views.route("/users/login", strict_slashes=False, methods=["POST"])
def login():
    data = request.get_json(force=True, silent=True)
    if not data:
        abort(400, "Not a JSON")
    if "email" not in data["userlogin"]:
        abort(400, "Missing email")
    if "password" not in data["userlogin"]:
        abort(400, "Missing password")
    user_list = {}
    mycursor.execute("SELECT * FROM User WHERE email=%s AND password=%s", ( data["userlogin"]['email'], data["userlogin"]['password']))
    myresult = mycursor.fetchall()
    if myresult:
        # Successful login
        # You can extract specific fields from the result if needed
        user_data = {"user_id": myresult[0]["id_User"], "email": myresult[0]["email"]}
        return 200
    else:
        # Login failed
        return jsonify({"message": "Invalid credentials"}), 401

#if __name__ == '__main__':
    #app.run(host='0.0.0.0', port='5000')

