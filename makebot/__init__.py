# -*- encoding: utf-8 -*-
"""
__init__.py
Makebot Initalizer
"""

import os

BOT_TOKEN = os.environ.get('BOT_TOKEN')
APP_TOKEN = os.environ.get('APP_TOKEN')

#makebot = Makebot(BOT_TOKEN, APP_TOKEN)

def _makebot_setup():
    """ Runs on server startup """
#    try:
#        makebot.roster.create()
#    except (e):
#        print(e)

