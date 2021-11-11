from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/secret/<string:value>')
def save_secret(value):
    print('Secret Value: %s' % value)
    return ''


if __name__ == '__main__':
    app.run(debug=True, port=42069)
