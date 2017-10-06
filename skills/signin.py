'''
Sign In
~~~~~~~
'''
import time
import random

from mongoengine import *
import schedule
import emoji

general_emoji_list = [':smile:', ':shit:',':alien:', ':heart:', ':nose:', ':ocean:', ':thumbsup:',':ghost:']
this_day_emoji_list = []

# propogate this_day_emoji_list with four emojis
def generate_emojis():
    for i in range(4):
        random_emoji = random.choice(general_emoji_list)
        
        while(random_emoji in this_day_emoji_list):
            random_emoji = random.choice(general_emoji_list)

        this_day_emoji_list.append(random_emoji)
        
def send_sign_in_message(user_slack_id):
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

def sign_in_open():
    generate_emojis()

    for user in User.objects:
        send_sign_in_message(user.slack_id)
    
sign_in_open()
