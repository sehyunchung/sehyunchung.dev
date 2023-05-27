from fastapi import FastAPI

app = FastAPI()


@app.get("/api/py")
def hello_world():
    return {"message": "Hello from /api/py"}
