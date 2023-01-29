from typing import Union
from fastapi import FastAPI, Response, Request, Body
from PIL import Image
import base64
import openai
from openai.error import InvalidRequestError
import os
import configparser
import requests
import json

#config = configparser.ConfigParser()
#config.read('credential.ini')
#API_KEY = config['openai']['APIKEY']
#openai.api_key = API_KEY

#todo fix creditial.ini pls
openai.api_key = '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'

app = FastAPI()
url = 'https://swamphacksix.ue.r.appspot.com'

@app.get("/")
async def root():
    return {"message": "Welcome to the back end"}

# request image from openai
@app.post("/image_request")
async def get_image(animal: str):
    data = {animal, "https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHVwcHl8ZW58MHx8MHx8&w=1000&q=80"}
    return json.dumps(data)
    
    try:
        #prompt for image
        image_response = openai.Image.create(
            prompt = "panda",
            n=1,
            size="256x256",
            response_format = "url"
        )
        #get url of image (only one so it's at index 0)
        image_url = image_response['data'][0].url
        image_url
        return {"image_url": image_url}
    except InvalidRequestError as e:
        print(e)
    return {"image_url": "No object found"}

# test base64 image
@app.get("/imagetest")
def read_root():
    image = Image.open("straytest.jpeg")
    with open("straytest.jpeg", "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read())
    image_file.close()
    return {"data": encoded_string}
