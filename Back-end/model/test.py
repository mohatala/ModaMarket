import mysql.connector

mydb = mysql.connector.connect(
  host="54.89.109.168",
  user="med",
  password='med123',
  database='moda_market'
)

mycursor = mydb.cursor()

#sql = "INSERT INTO Categorie (id_Categorie, name_Categorie) VALUES (%s, %s)"
#val = (4, "Shirts")
#mycursor.execute(sql, val)
#mydb.commit()
#print(mycursor.rowcount, "record inserted.")

mycursor.execute("SELECT * FROM Categorie")

myresult = mycursor.fetchall()

for x in myresult:
  print(x)
