# -*- encoding: utf-8 -*-
"""
roster.py

Creates a database of students and instructors from currentl Slack Channel.

Attributes:
    - BOT_TOKEN (string): The bot token for usage with the Slack API
"""

import os
import json
from slackclient import SlackClient
from mongoengine import *

""" BOT TOKEN """
BOT_TOKEN = os.environ.get("BOT_TOKEN")

""" CONFIGURE CLIENT """
makebot = SlackClient(BOT_TOKEN)

""" CONFIGURE DB CONNECTION """
connect("makebot", host="localhost", port=27017)

def run():
    response = makebot.api_call(
        "users.list"
    )
    
    if response == None:
        print("Could not get user list")
        return

    # parse response
    user_list = response["members"] 

    for user in user_list:
        # ignore bots and makebot
        if user["is_bot"] == False and user["name"] != "slackbot":
            role = user_role(user)

            if role == "student":
                create_student(user)
            
            if role == "instructor":
                create_instructor(user)


def user_role(user):
    """ Find the role of the user """
    email = user["profile"]["email"]

    if "@students" in email:
        return "student"
    else:
        return "instructor"


""" MODELS """
class Student(Document):
    slack_id = StringField(required = True)
    email = StringField(required = True)


class Instructor(Document):
    slack_id = StringField(required = True)
    email = StringField(required = True)

""" SAVE """
def create_student(user):
    """ Create a student """
    student = Student (
        slack_id = user["id"],
        email = user["profile"]["email"]
    )

    student.save()


def create_instructor(user):
    """ Create an instructor """
    instructor = Instructor (
        slack_id = user["id"],
        email = user["profile"]["email"]
    )

    instructor.save()

