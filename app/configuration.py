# -*- encoding: utf-8 -*-
"""
Python Aplication Template
Licence: GPLv3
"""

class Config(object):
    """
    Configuration base, for all environments.
    """
    DEBUG = False
    TESTING = False
    DATABASE_URI = 'sqlite:///application.db'
    BOOTSTRAP_FONTAWESOME = True


class ProductionConfig(Config):
    DATABASE_URI = 'mysql://user@localhost/foo'
    SLACK_TOKEN  = os.environ['SLACK_API_TOKEN']


class DevelopmentConfig(Config):
    DEBUG = True
           

class TestingConfig(Config):
    TESTING = True
