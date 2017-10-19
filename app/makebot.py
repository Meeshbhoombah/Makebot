# -*- encoding: utf-8 -*-
"""
Core Tooling
"""
import os
import json

from app import app
from slackclient import SlackClient
from pymongo import MongoClient

""" Configuration """
connection = MongoClient()
studentdb = connection.users.students
instructordb = connection.users.instructors

# initalizing Slackbot w/ SlackClient
slack_client = SlackClient(os.environ.get('SLACK_USER_TOKEN'))

""" Propogate Database of team members """

# remove current collections
studentdb.remove()
instructordb.remove()

team_data = slack_client.api_call('users.list')
members = team_data['members']

for member in members:
    # no bots allowed
    if member['is_bot'] == False and 'slackbot' not in member['name']:
        slack_id = member['id']
        slack_name = member['real_name']
        slack_profile = member['profile']
        slack_email = slack_profile['email']

        user_data = {
            'slack_id' : slack_id,
            'name'     : slack_name,
            'email'    : slack_email
        }

        # TODO - Remove comments for production
        #if 'student' in slack_email:
        #    studentdb.insert(user_data)
        #else:
        #    instructordb.insert(user_data)

        studentdb.insert(user_data)

""" Plugins """
from app.plugins import signin


