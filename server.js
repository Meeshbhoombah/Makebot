// makebot.js

// Botkit 
var tokens = require('./tokens');
var botkit = require('botkit');

// Instantiate Botkit Slack controller
var controller = botkit.slackbot({
    clientId: tokens.SLACK_CLIENT_ID,
    clientSecret: tokens.SLACK_CLIENT_SECRET,
    scopes: ['bot', 'users.profile:read', 'users:read', 'users:read.email'],
    debug: true,
    require_delivery: true
});

// Makebot 🤖
var makebot = controller.spawn({
    token: tokens.SLACK_BOT_TOKEN
});

