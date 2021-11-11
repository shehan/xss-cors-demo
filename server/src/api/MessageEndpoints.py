import urllib

from flask import request, jsonify
from flask_restful import Resource

from db.utils import exec_get_all, exec_get_one, exec_commit




class MessageList(Resource):
    def get(self):
        sql = "SELECT * FROM MESSAGES;"
        exec_get_all(sql)
        output = exec_get_all('SELECT * FROM MESSAGES')
        
        response = jsonify(result=output)
        response.status_code = 200
        return response
 
 
    def post(self):
        title = request.json.get('title')
        body = request.json.get('body')


        sql = "INSERT INTO MESSAGES (TITLE, BODY) VALUES (%s, %s);"
        exec_commit(sql, [title,body])

        response = jsonify(result='True')
        response.status_code = 200
        return response





