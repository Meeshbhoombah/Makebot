# -*- encoding: utf-8 -*-
"""
Route Handler
"""

from flask import request
from app import app

@app.route('/slack/action', methods=['POST'])
def handle_interactive_component():
    if request.method == 'POST':
        print request.get_data()   
 
    return request.data
    
