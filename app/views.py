# -*- encoding: utf-8 -*-
from . import app

@app.route
def index():
    return 'Hello World!'

