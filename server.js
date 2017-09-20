/*

Makebot.js - a Slackbot for Make School's Product College slack
@author Meeshbhoombah

*/

var tokens = require('./tokens').tokens;
var botkit = require('botkit');
var cron = require('cron').CronJob;

var controller = botkit.slackbot({
    clientId: tokens.slackClientID,
    clientSecret: tokens.slackClientSecret,
    debug: true,
    require_delivery: true,
    scopes: ['users']
});

var makebot = controller.spawn({
    token: tokens.slack
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

