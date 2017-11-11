# -*- encoding: utf-8 -*-
""" Creates the Flask app

"""
from flask import Flask
from pymongo import MongoClient

# Initalization #
app = Flask(__name__, instance_relative_config =  True)

client = MongoClient('localhost', 27017)

# Configuration #
from app import views
app.config.from_object('config')

