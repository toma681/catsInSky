# Calls WDB API and inserts initial Data into DB

from requests import get, post
from json import loads

cats = loads(
    get("http://cats-in-the-sky.herokuapp.com/api/cats").content.decode())
veges = loads(
    get("http://cats-in-the-sky.herokuapp.com/api/veges").content.decode())

for cat in cats:
    payload = {"cat": cat}
    res = post("http://localhost:3000/cat", json=payload)
    print(res)

for vege in veges:
    payload = {"vege": vege}
    res = post("http://localhost:3000/vege", json=payload)
    print(res)