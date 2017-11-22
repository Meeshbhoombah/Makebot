# -*- encoding: utf-8 -*-
"""
run.py
Start Script

Configures the PORT of the server, run's the app on PORT
"""

import os
from app import app

port = int(os.environ.get("PORT", 5000))
app.run(host='0.0.0.0', port=port)

