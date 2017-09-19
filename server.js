/*

Makebot.js - a Slackbot for Make School's Product College slack
@author Meeshbhoombah

*/

var MONGO_URI = require('./tokens').MONGO_URI;
var SLACK_TOKEN = require('./tokens').SLACK_TOKEN;

// Modules
var Botkit = require('botkit');

var os = require('os');
var cron = require('cron').CronJob;

var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var calendar = google.calendar('v3');

var controller = Botkit.slackbot({
    debug: true,
    require_delivery: true,
    scopes: ['users']
});

var makebot = controller.spawn({
    token: SLACK_TOKEN
}).startRTM();

controller.setupWebserver(5000, function(err, webserver) {
    if (err) {
        throw new Error(err);
    } else {
        controller.createWebhookEndpoints(controller.webserver);
        console.log("Web server running");
    }
});

// On start, save all users to database
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

// Send sign in message at 9:00 AM, repeat from M to F
var signInJob = new cron({
    cronTime: '00 00 09 * * 1-5',
    onTick: function() {
               
    },
    start: false,
    timeZone: 'America/Los_Angeles'
});

// '/immissing' Slash command
controller.on('/immissing', function(makebot, message) {
    console.log("Woah");
});

signInJob.start();

