# -*- encoding: utf-8 -*-
""" 
app.py

Creates the Makebot server to extend the functionality of the Makebot Slack bot.
"""

import json
#import makebot
from flask import Flask, request, make_response, render_template

app =  Flask(__name__)

# WEBSERVER
@app.route('/dashboard/signin-emoji')
def daily_sign_in():
    return 'Sign-in'

if __name__ == '__main__':
    app.run(debug = True, use_reloader = True) # TODO - remove use_reloader before installing

