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


#class ProductionConfig(Config):
class DevelopmentConfig(Config):
    DEBUG = True
           

class TestingConfig(Config):
    TESTING = True
