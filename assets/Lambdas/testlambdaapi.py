import mysql.connector
import json

mydb = mysql.connector.connect(
  host="182.68.252.215",
  user="atul",
  password="atul@123",
  database="talentum_dev"
 )
  
def handler(event, context):
    """
    This function fetches content from MySQL RDS instance
    """
    mycursor = mydb.cursor()
    cur = mydb.cursor()
    cur.execute("select * from user_details")
    query_results = cur.fetchall()
    a= ['lambda is working','great']
    jsonString = json.dumps(query_results)
    print(jsonString)
    return {
    'statusCode': 200,
    "headers": {
            "Access-Control-Allow-Headers": "Content-Type,Access-Control-Allow-Headers,X-Requested-With,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
            "Access-Control-Allow-Methods": "GET, PUT, PATCH, POST, DELETE, OPTIONS",
            "Access-Control-Allow-Origin": "*",
        },
    'body': jsonString
    }