# -*- encoding: utf-8 -*-
"""
Makebot Base Configuration
"""

from app import app
from app import makebot

# -*- Routes -*-
"""
/emoji/
Displays the emoji site
"""
@app.route('/emoji/')
def emoji():
    return render_template('emoji.py')


# -*- Makebot -*-
"""
/slack/event
Handing events from the Slack team
"""
@app.route('/slack/event')
def event():
    

