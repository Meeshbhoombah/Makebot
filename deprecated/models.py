'''
Models
~~~~~~

Models for the MongoDB database
'''
from mongoengine import *
connect('userdb')

'''
User
- Slack ID
- Name
- Email
'''
class User(Document):
    slack_id = StringField(required = True) 
    name = StringField(required = True)
    email = EmailField(required = True)

