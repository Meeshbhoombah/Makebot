# -*- encoding: utf-8 -*-
"""
signin.py

Sends each student in the Slack team a sign in message at 9:00 AM. At 6:00 PM 
logs a file of absent students and the time at which a student signed in.
"""

import os
import json
import time
import schedule
import random
import pprint
from slackclient import SlackClient

""" BOT TOKEN """
BOT_TOKEN = os.environ.get("BOT_TOKEN")

""" CONFIGURE CLIENT """
makebot = SlackClient(BOT_TOKEN)

""" CONFIGURE DB CONNECTION """
#connect("makebot", host="localhost", port=27017)

def run():
    open_sign_in()


def open_sign_in():
    """ Create sign and send sign in message for this day """

    # get list of emojis
    response = makebot.api_call(
        "emoji.list"         
    )

    emojis = select_emojis(response["emoji"])

    # set first emoji as key
    os.environ["EMOJI_KEY"] = emojis[0]

    # get list of users
    response = makebot.api_call(
        "users.list"        
    )

    # parse response
    user_list = response["members"]

    for user in user_list:
        # ignore bots and slackbot
        if user["is_bot"] == False and user["name"] != "slackbot":
            if "@students" in user["profile"]["email"]:
                user_slack_id = user["id"]
                send_sign_in_message(user_slack_id, emojis)


def select_emojis(emoji_list):
    """ Select four random emojis, set one as key """
    emoji_li = list(emoji_list)

    emojis = []
    for i in range(4):
        emojis.append(random.choice(emoji_li))

    return emojis


def send_sign_in_message(user, emoji_list):
    """ Generate message and send emoji """
    
    # shuffle emojis for each user
    random.shuffle(emoji_list)
    emoji_list = [":" + emoji + ":" for emoji in emoji_list]

    message = {
            "text": "Select the correct emoji to sign in:",
            "attachments": [
                {
                    "fallback": "Upgrade your slack client.",
                    "callback_id": "signin",
                    "color": "#000000",
                    "attachment_type": "default",
                    "actions": [
                        {
                            "name": emoji_list[0],
                            "text": emoji_list[0],
                            "type": "button",
                            "value": emoji_list[0]
                        },
                        {
                            "name": emoji_list[1],
                            "text": emoji_list[1],
                            "type": "button",
                            "value": emoji_list[1]
                        },
                        {
                            "name": emoji_list[2],
                            "text": "three",
                            "type": emoji_list[2],
                            "value": emoji_list[2]
                        },
                        {
                            "name": emoji_list[3],
                            "text": "four",
                            "type": emoji_list[3],
                            "value": emoji_list[3]
                        }
                    ]
                }
            ]
        }   
    # open channel
    response = makebot.api_call(
        "conversations.open",
        return_im = False,
        users = user
    )

    channel_id = response["channel"]["id"]

    response = makebot.api_call(
        "chat.postMessage",
        channel = channel_id,
        text = "Hi, ready to start the day?",
        attachments = message
    )

    print(response)

