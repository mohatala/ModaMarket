#!/usr/bin/python3
"""Authors : Talaini
State objects that handles all default RESTFul API actions"""
from api.v1.views import app_views
#from models.categorie import Categorie
from flask import abort, request, jsonify
import mysql.connector
#from flask import Flask

#app_views = Flask(__name__)

mydb = mysql.connector.connect(
  host="54.89.109.168",
  user="med",
  password='med123',
  database='market'
)



@app_views.route("/products", strict_slashes=False, methods=['GET', 'POST'])
def product(product_id=None):
    """show Product and Product with id"""
    if request.method == 'GET':
      if product_id is None:
          mycursor = mydb.cursor(dictionary=True)
          mycursor.execute("SELECT * FROM Product")
          myresult = mycursor.fetchall()
          mycursor.close()
          return jsonify(myresult)
    else:
        """create a new post req"""
        mycursor = mydb.cursor(dictionary=True)
        data = request.get_json(force=True, silent=True)
        if not data:
            abort(400, "Not a JSON")

        sql = "INSERT INTO Product (name_Product, price_product,image,discount ,categorie) VALUES (%s, %s,%s, %s, %s)"
        val = (data["name_Product"], data["price_product"],data["image"],data["discount"], data["categorie"])
        mycursor.execute(sql, val)
        mydb.commit()
        mycursor.close()
        #print(email)
        return jsonify("ok", 201)
        
        
@app_views.route('/products/<product_id>', methods=['DELETE'],strict_slashes=False)
def del_product(product_id=None):
  if product_id is not None:
    mycursor = mydb.cursor(dictionary=True)
    sql = "DELETE FROM Product WHERE id_product ={}".format(product_id)
    #val = [product_id]
    mycursor.execute(sql)
    mydb.commit()
    mycursor.close()
    return jsonify("DELETE OK", 201)

#if __name__ == '__main__':
    #app_views.run(host='0.0.0.0', port='5000')

