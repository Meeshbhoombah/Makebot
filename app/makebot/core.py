# -*- Makebot -*-
"""
Makebot Core Functionality
"""

import os

from flask import Flask, request, jsonify
from app import app
from flask_pymongo import PyMongo
from slackclient import SlackClient

slack_token = os.environ['SLACK_API_TOKEN']
makebot = SlackClient(slack_token)

# -*- Configuration -*- 
def setup():
    # get user data from Slack
    team_data = makebot.api_call('users.list')
    members = team_data['members']

    # loop thru all members and save them to the database
    for member in members:
        # don't save slackbot or other bots
        if member['is_bot'] == False and member['id'] != 'USLACKBOT':
            member_id = member['id']
            member_name = member_profile['real_name']
            member_email = member_profile['email']
            
            

