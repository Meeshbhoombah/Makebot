
# bot.py

import os
import time

from flask import Flask
from mongoengine import *

from slackclient import SlackClient

BOT_NAME     = 'makebot'
BOT_ID       = os.environ.get('BOT_ID')
slack_client = SlackClient(os.environ.get('SLACK_BOT_TOKEN'))

app = Flask(__name__)

'''
DATABASE CONFIG ===================================================
'''
# user database
connect('userdb')

# get user data from Slack
team_data = slack_client.api_call('users.list')
members = team_data['members']

# loop thru all members and save them to the database
for member in members:
    # don't save slackbot or other bots
    if member['is_bot'] == False and member['id'] != 'USLACKBOT':

        print(member['id'])
        member_profile = member['profile']
        print(member_profile['real_name'])
        print(member_profile['email'])
      
'''
API ===============================================================
'''

