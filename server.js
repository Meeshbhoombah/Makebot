// makebot.js

var express    = require('express')
var bodyParser = require('body-parser')
var moongose   = require('mongoose')

// Botkit 
var tokens     = require('./tokens')
var botkit     = require('botkit')

// Instantiate Botkit Slack controller
var controller = botkit.slackbot({
    clientId: tokens.SLACK_CLIENT_ID,
    clientSecret: tokens.SLACK_CLIENT_SECRET,
    scopes: ['bot', 'users.profile:read', 'users:read', 'users:read.email'],
    debug: true,
    require_delivery: true
})

// Makebot 🤖
var makebot = controller.spawn({
    token: tokens.SLACK_BOT_TOKEN
})

makebot.startRTM(function (err, bot, payload) {
    if (err) {
        throw new Error('Unable to connect to Slack')
    } catch(e) {
        alert(e)
        console.log(e)
    }
})

