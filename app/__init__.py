# -*- encoding: utf-8
from flask import Flask

""" CONFIG """
app = Flask(__name__)
from . import views

