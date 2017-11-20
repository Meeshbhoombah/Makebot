# -*- encoding: utf-8 -*-
"""
makebot.py
"""

class Makebot:

    def __init__(self, bot_token, app_token, create_db = True):
        self.bot_token = bot_token
        self.app_token = app_token

        if create_db == True:
            self.create_student_database()

    def propogate_database(self):
        """ Creates a database of students and instructors """
        

    def send_message_to_person(self, person_id):
        """ Send message to a singular person """


