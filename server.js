
// makebot.js
   
var express     = require('express')

var tokens      = require('./tokens')
var botkit      = require('botkit')

var app         = express()
var bodyParser  = require('body-parser')

// Skills ================================================================================
var SignIn      = require('./skills/signin')

// Makebot ===============================================================================
var controller = botkit.slackbot({
    clientId: tokens.SLACK_CLIENT_ID,
    clientSecret: tokens.SLACK_CLIENT_SECRET,
    scopes: ['bot', 'users.profile:read', 'users:read', 'users:read.email'],
    debug: true,
    require_delivery: true
})

// The Birth of Makebot 🤖
var makebot = controller.spawn({
    token: tokens.SLACK_BOT_TOKEN
})

// Makebot Express Server ================================================================
controller.setUpWebserver(port, function(err, express_webserver) {
    controller.createWebhookEndpoints(express_webserver)  
})

