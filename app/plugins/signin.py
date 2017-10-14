# -*- encoding: utf-8 -*-
"""
Sign in Plugin
"""

import time
import random
import json
import os

from app import app
from slackclient import SlackClient
from pymongo import MongoClient

# intializing connection with MongoClient
connection = MongoClient()
emojidb = connection.emojis.thisday

# initalizing Slackbot w/ SlackClient
slack_client = SlackClient(os.environ.get('SLACK_BOT_TOKEN'))

def open():
    """
    Start the sign in function for this day
    """
    # generate database of emojis
    response = slack_client.api_call('emoji.list')
    emoji_list = response['emoji']

    passmoji_list = []
    for i in range(4):
        emoji = random.choice(emoji_list.keys())
        passmoji_list.append(emoji)

    td_emoji_list = { 'passmoji_list' : passmoji_list }
    emojidb.insert(td_emoji_list)
        

def send_sign_in_message(user_slack_id, this_day_emoji_list):
    """
    Send a sign in message to the given user with the current emoji array
    
    Args:
        user_slack_id: Slack ID of team member to recieve sign in message
        this_day_emoji_list: List of emojis, index 0 is the "password"
    """
    response = slack_client.api_call('conversations.open', users = user_slack_id)
    channel_id = response['channel']['id']
   
    temp = random.sample(this_day_emoji_list, len(this_day_emoji_list))
    attachments = [
        {
            "text": "There's no way you can mess this up...right?",
            "fallback": "You are unable to sign in.",
            "callback_id": "signin",
            "color": "#D3D3D3",
            "attachment_type": "default",
            "actions": [
                {
                    "name": "emoji_one",
                    "text": temp[0],
                    "type": "button",
                    "value": temp[0]
                },
                {
                    "name": "emoji_two",
                    "text": temp[1],
                    "type": "button",
                    "value": temp[1]
                },
                {
                    "name": "emoji_three",
                    "text": temp[2],
                    "type": "button",
                    "value": temp[2],
                },
                {
                    "name": "emoji_four",
                    "text": temp[3],
                    "type": "button",
                    "value": temp[3]
                }
            ]
        }
    ]

    slack_client.api_call(
        'chat.postMessage',
        channel = channel_id,
        text = 'Good morning! Please select the emo"key" for today:',
        attachments = attachments,
        icon_emoji = ':sunny:'
    )

