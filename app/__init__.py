# -*- encoding: utf-8 -*-
"""
Makebot Configruation
"""

import os

from flask import Flask
from slackclient import SlackClient
from flask_pymongo import PyMongo

app = Flask(__name__)

#Configuration of application, see configuration.py, choose one and uncomment.
#app.config.from_object('configuration.ProductionConfig')
app.config.from_object('app.configuration.DevelopmentConfig')
#app.config.from_object('configuration.TestingConfig')

db = PyMongo(app)

slack_token = os.environment['SLACK_API_TOKEN']
makebot = SlackClient(slack_token)

from app import routes, makebot

