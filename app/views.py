# -*- encoding: utf-8 -*- #
""" views.py

Defines the routes for the web app and routes Slack client requests
to the correct endpoints based on the data passed to the route.
"""
from flask import Flask
app = Flask(__name__)


""" WEB APP """
@app.route('/')
def index():
    return 'Hello World!'


@app.route('/sign-in')
def index():
    return 'Sign-in dashboard'


""" DB """
# CREATE student
@app.route('/new/student')
def create_new_student():
    return 'New student'


# CREATE instructor
@app.route('/new/instructor')
def create_new_instructor():
    return 'New instructor'

