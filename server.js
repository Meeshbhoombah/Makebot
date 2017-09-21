/*

Makebot.js - a Slackbot for Make School's Product College slack
@author Meeshbhoombah

*/

var tokens = require('./tokens').tokens;
var botkit = require('botkit');
var redisConfig = {};
var redisStorage = require('botkit-storage-redis')();
var cron = require('cron').CronJob;

var controller = botkit.slackbot({
    storage: redisStorage,
    debug: true,
    require_delivery: true
});

var makebot = controller.spawn({
    clientId: tokens.slack.slackClientID,
    clientSecret: tokens.slack.slackClientSecret,
    redirectUri: 'http://localhost:5000',
    scopes: ['bot', 'users.profile:read', 'users:read', 'users:read.email']
}).startRTM();

// On start, save all users to database using Botkit's storage system
makebot.startRTM(function(err, makebot, payload) {
    if (err) {
        throw new Error(err);
    } else {
        makebot.api.users.list({}, function(err, response) {
            var members = response.members

            for(var i in members) {
                var user  = {
                    id: members[i].id,
                    email: members[i].profile.email
                }
            }   
        })
    }
});

