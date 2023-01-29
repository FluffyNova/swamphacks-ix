from typing import Union

from fastapi import FastAPI, Response

from PIL import Image
import base64

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Welcome to the back end"}

@app.get("/imagetest")
def read_root():
    image = Image.open("straytest.jpeg")
    with open("straytest.jpeg", "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read())
    return {"data": encoded_string}