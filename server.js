// makebot.js

var moongose   = require('mongoose')

// Botkit
var tokens     = require('./tokens')
var botkit     = require('botkit')

// Components
var about      = require('skills/about')

// Skills
var signin     = require('skills/signin')

// Instantiate Botkit Slack controller 
var controller = botkit.slackbot({
    clientId: tokens.SLACK_CLIENT_ID,
    clientSecret: tokens.SLACK_CLIENT_SECRET,
    scopes: ['bot', 'users.profile:read', 'users:read', 'users:read.email'],
    debug: true,
    require_delivery: true
})

// Botkit webserver 
controller.setupWebserver(process.env.port, function(err, webserver) {
    controller.createWebhookEndpoints(controller.webserver)
})

