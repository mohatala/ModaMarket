import mysql.connector

mydb = mysql.connector.connect(
  host="54.89.109.168",
  user="med",
  password='med123',
  database='market'
)

mycursor = mydb.cursor()

#sql = "INSERT INTO Categorie (id_Categorie, name_Categorie) VALUES (%s, %s)"
#val = (4, "Shirts")
#sql = "INSERT INTO User (id_user, first_name_User, last_name_User, dateofbirth_User, phone, email, adresse, password ) VALUES (%s, %s,%s, %s, %s, %s,%s, %s)"
#val = (1, "med", "talaini",'1995/5/5', "0642585325", "qwerty@gmail.com", "qwerty", "med123")
sql = "INSERT INTO Product (name_Product, price_product, categorie,image,discount) VALUES (%s,%s, %s,%s, %s)"
val = ("Keanu Jacket", 300,"jacket","flash-1.png",50)

mycursor.execute(sql, val)
mydb.commit()
#print(mycursor.rowcount, "record inserted.")

mycursor.execute("SELECT * FROM Product")

myresult = mycursor.fetchall()

for x in myresult:
  print(x)

#mycursor.execute("ALTER TABLE User ADD COLUMN password varchar(100)")



