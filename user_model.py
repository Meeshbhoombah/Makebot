
# usermodel.py

import os

from mongoengine import *
connect('userdb')

class User(Document):
    slack_id = StringField(required = True) 
    name = StringField(required = True)
    email = EmailField(required = True)

class Staff(User):
    role = StringField(required = True, default = True    
    
