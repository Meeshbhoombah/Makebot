'''
Models
~~~~~~

Models for the MongoDB database
'''
from mongoengine import *
connect('userdb')

class User(Document):
    slack_id = StringField(required = True) 
    name = StringField(required = True)
    email = EmailField(required = True)
    meta = {'allow_inheritance': True}

