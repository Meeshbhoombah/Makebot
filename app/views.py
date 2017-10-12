# -*- encoding: utf-8 -*-
"""
Python Aplication Template
Licence: GPLv3
"""

from flask import url_for, redirect, render_template, flash, g, session
from slackclient import SlackClient
from app import app, lm

# -*- Models -*-
from models import Emoji
from models import User


# emoji page for the app
@app.route('/emoji/')
def posts():
    return render_template('emoji.py')


