
# bot.py

import os
import time
import json

from flask import Flask
from flask_pymongo import PyMongo

from slackclient import SlackClient

BOT_NAME     = 'makebot'
BOT_ID       = os.environ.get('BOT_ID')
slack_client = SlackClient(os.environ.get('SLACK_BOT_TOKEN'))

app = Flask(__name__)

# user database
app.config['MONGO_DBNAME'] = 'usersdb'
users = PyMongo(app)

# API =============================================================

# create database of members
team_data = json.load(slack_client.api_call('users.list'))
members = team_data['members']

for member in members:
    print(member['id'])

