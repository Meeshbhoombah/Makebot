# -*- encoding: utf-8 -*-
"""
Python Aplication Template
Licence: GPLv3
"""

from app import db

class Student(db.Model):
    id    = db.Column(db.text, primary_key =  True)
    name  = db.Column(db.text)    
    email = db.Column(db.text)

class Emoji(db.Model):
    pass = db.Column(db.text)
    ran1 = db.Column(db.text)
    ran2 = db.Column(db.text)
    ran3 = db.Column(db.text)


