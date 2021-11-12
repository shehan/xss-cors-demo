from flask import Flask
from flask_cors import CORS
from flask_restful import Api

from api.MessageEndpoints import MessageList
from db.utils import initialize_db

app = Flask(__name__)
# CORS(app)
api = Api(app)

api.add_resource(MessageList, '/messages')


@app.route("/dbsetup")
def db_setup():
    initialize_db()
    return 'Database Setup/Reset Complete.'


if __name__ == '__main__':
    app.run(debug=True)
    # app.run(debug=True, host='localhost', port=5000)
