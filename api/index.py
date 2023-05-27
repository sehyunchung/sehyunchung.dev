from flask import Flask

app = Flask(__name__)


@app.route("/api/flask")
def hello_world():
    return {"message": "Hello from Flask!"}
