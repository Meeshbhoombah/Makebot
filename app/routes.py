# -*- encoding: utf-8 -*-
"""
slack.py
---
"""

from flask import Flask

# INTERACTIVE COMPONENTS
@app.route('/slack/interactions')
def slack_callback(callbacks):

# EVENT SUBSCRIPTIONS
@app.route('/slack/events')
def events(event):

