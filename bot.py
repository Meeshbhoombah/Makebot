'''
Makebot
~~~~~~~

A Slack bot written in Flask with Mongo and python Slackclient
'''

from models import User
from mongoengine import *
from slackclient import SlackClient
import os

# bot config
BOT_NAME     = 'makebot'
BOT_ID       = os.environ.get('BOT_ID')
slack_client = SlackClient(os.environ.get('SLACK_BOT_TOKEN'))

'''
DATABASE SETUP =====================================================
'''
# get user data from Slack
team_data = slack_client.api_call('users.list')
members = team_data['members']

# loop thru all members and save them to the database
for member in members:
    # don't save slackbot or other bots

    if member['is_bot'] == False and member['id'] != 'USLACKBOT':
        member_id = member['id']
        
        member_profile = member['profile']
        member_name = member_profile['real_name']
        member_email = member_profile['email']
        
        new_member = User(slack_id = member_id, name = member_name, email = member_email)
        new_member.save()

'''
SKILLS ============================================================
'''

