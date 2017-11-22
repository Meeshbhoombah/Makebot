# -*- encoding: utf-8 -*-
"""
slack.py

Handles incoming interactions from the Slack client
"""

from flask import Flask

# INTERACTIVE COMPONENTS
@app.route('/slack/interactions')
def slack_callback(callback):
    """ Handle all incoming responses from messages, buttons, and dialogs """
    if callback is not None:
        makebot.route('callback_id')

# EVENT SUBSCRIPTIONS
@app.route('/slack/events')
def events(event):
    """ Handle all events """
    if event is not None:

