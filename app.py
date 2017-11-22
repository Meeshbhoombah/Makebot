# -*- encoding: utf-8 -*-
""" app.py

Routing layer for makerbot
"""

import json
#import makebot
from flask import Flask, request, make_response, render_template

app =  Flask(__name__)

@app.route('/makebot/listenting', methods = ['GET', 'POST'])
def listener():
    """
    Listens for incoming events from Slack and uses Makebot's built-in
    event-handler helper function to route events to the right plugins.
    """
    event = json.loads(request.data)

    # Slack URL Verification
    if 'challenge' in event:
        # response must include challenge request token
        response_token   = event['challenge']
        response_code    = 200
        response_headers = { 'content_type': 'application/json' }

        # response to challenge request
        return make_response(response_token, response_code, response_headers)

    # TODO - Verify Incoming Request

    # Handler
    if 'event' in event:
        event_type = event['event']['type']
        #makebot.handle_event(event_type, event)

# WEBSERVER
@app.route('/dashboard/signin-emoji')
def daily_sign_in():
    return 'Sign-in'

if __name__ == '__main__':
    app.run(debug = True, use_reloader = True) # reloader = dev

