# -*- encoding: utf-8 -*-
""" Creates the Flask app

"""
from flask import Flask
app = Flask(__name__, instance_relative_config =  True)

# Configuration #
from app import views
app.config.from_object('config')

