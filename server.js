/*

Makebot.js - a Slackbot for Make School's Product College slack
@author Meeshbhoombah

*/

var tokens = require('./tokens');

// Bot essentials
var botkit = require('botkit');
var redisConfig = {};
var redisStorage = require('botkit-storage-redis')(redisConfig);

// Instantiate Botkit Slack controller
var controller = botkit.slackbot({
    clientId: tokens.SLACK_CLIENT_ID,
    clientSecret: tokens.SLACK_CLIENT_SECRET,
    redirectUri: 'http://localhost:5000',
    storage: redisStorage,
    scopes: ['bot', 'users.profile:read', 'users:read', 'users:read.email'],
    debug: true,
    require_delivery: true
});

// The birth of Makebot 🤖
modeule.exports makebot = controller.spawn({
    token: tokens.SLACK_BOT_TOKEN
});

