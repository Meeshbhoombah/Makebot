# -*- encoding: utf-8 -*-
"""
Makebot Base Configuration
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

