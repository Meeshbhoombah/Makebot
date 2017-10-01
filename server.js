/*

    makebot.js
    
*/

var express     = require('express')

var tokens      = require('./tokens')
var botkit      = require('botkit')

var app         = express()
var bodyParser  = require('body-parser')

// Skills ================================================================================
var signin      = require('skills/signin')

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
controller.hears('another_keyword','direct_message,direct_mention',function(bot,message) {
  var reply_with_attachments = {
    'username': 'My bot' ,
    'text': 'This is a pre-text',
    'attachments': [
      {
        'fallback': 'To be useful, I need you to invite me in a channel.',
        'title': 'How can I help you?',
        'text': 'To be useful, I need you to invite me in a channel ',
        'color': '#7CD197'
      }
    ],
    'icon_url': 'http://lorempixel.com/48/48'
    }

  bot.reply(message, reply_with_attachments);
});

