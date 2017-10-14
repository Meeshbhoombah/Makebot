# -*- encoding: utf-8 -*-
"""
Config
"""

import sys
import os

from flask import Flask
from slackclient import SlackClient
from pymongo import MongoClient

app = Flask(__name__)

#Configuration of application, see configuration.py, choose one and uncomment.
#app.config.from_object('configuration.ProductionConfig')
app.config.from_object('app.configuration.DevelopmentConfig')
#app.config.from_object('configuration.TestingConfig')

sys.dont_write_bytecode = True

from app import routes, makebot

