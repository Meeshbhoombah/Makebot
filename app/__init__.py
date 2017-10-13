# -*- encoding: utf-8 -*-
"""
Makebot Configruation
"""

import sys

from flask import Flask
from slackclient import SlackClient
from flask_pymongo import PyMongo

app = Flask(__name__)

#Configuration of application, see configuration.py, choose one and uncomment.
#app.config.from_object('configuration.ProductionConfig')
app.config.from_object('app.configuration.DevelopmentConfig')
#app.config.from_object('configuration.TestingConfig')

mongo = PyMongo(app)

sys.dont_write_bytecode = True

from app import routes
from makebot import core

core.setup()

