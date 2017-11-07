# -*- encoding: utf-8 -*- #
""" views.py

Defines the routes for the web app and routes Slack client requests
to the correct endpoints based on the data passed to the route.
"""
from flask import Flask
app = (__name__)

""" MAKEBOT """
@app.route('/makebot/sign-in')
def sign_in:
    return 'Sign in'


""" WEB APP """
@app.route('/')
def index:
    return 'Hello World!'

