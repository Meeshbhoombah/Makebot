# -*- encoding: utf-8 -*-
"""
Route Handler
"""

from app import app

# -*- Routes -*-
"""
/emoji/
Displays the emoji site
"""
@app.route('/emoji/')
def emoji():
    return render_template('emoji.py')

"""
/slack/event
Webhook for Slack events
"""
@app.route('/slack/event')
def slack_event():
    print('Recieved event')

