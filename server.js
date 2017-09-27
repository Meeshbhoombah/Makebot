/*

Makebot.js - a Slackbot for Make School's Product College slack
@author Meeshbhoombah

*/

var tokens = require('./tokens');

var botkit = require('botkit');
var redisConfig = {};
var redisStorage = require('botkit-storage-redis')(redisConfig);
var cron = require('cron').CronJob;

var controller = botkit.slackbot({
    clientId: tokens.SLACK_CLIENT_ID,
    clientSecret: tokens.SLACK_CLIENT_SECRET,
    redirectUri: 'http://localhost:5000',
    storage: redisStorage,
    scopes: ['bot', 'users.profile:read', 'users:read', 'users:read.email'],
    debug: true,
    require_delivery: true
});

var bot = controller.spawn({
    token: tokens.SLACK_BOT_TOKEN
}).startRTM(function(err) {
    if (err) {
        console.log('Unable to connect to Slack');
    }
});

bot.api.users.list({}, function(err, response) {
    members = response.members;

    for (var i in members){
        email = members[i].profile.email

        var user  = {
            id: members[i].id,
            email: members[i].profile.email
        };

        controller.storage.users.save(user);
    }   
});

