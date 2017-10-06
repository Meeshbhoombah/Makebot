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
        # TODO - uncomment:  new_member.save()

'''
TESTING
'''
import time
import random

# from mongoengine import *
# from slackclient import SlackClient
import schedule
import emoji

general_emoji_list = [':smile:', ':shit:',':alien:', ':heart:', ':robot:', ':ocean:', ':octocat:',':ghost:']
this_day_emoji_list = []

def generate_emojis():
    for i in range(4):
        random_emoji = random.choice(general_emoji_list)

        if random_emoji not in this_day_emoji_list:
            this_day_emoji_list.append(random_emoji)
        else:
            i--
            pass

def sign_in_open():
    generate_emojis()

    for user in User.objects:
        send_sign_in_message(user.slack_id)
    

sign_in_open()

