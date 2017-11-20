# -*- encoding: utf-8 -*-
"""
__init__.py

Initalizes the Makebot server and the bot itself.
"""
from flask import Flask
import os

app = Flask(__name__)
from app import routes

