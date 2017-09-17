/*

Makebot.js - a Slackbot for Make School's Product College slack
@author Meeshbhoombah

*/

var MONGO_URI = require('./tokens').MONGO_URI;
var SLACK_TOKEN = require('./tokens').SLACK_TOKEN;

// Modules
var Botkit = require('botkit');
var mongoStorage = require('botkit-storage-mongo')({mongoUri: MONGO_URI});

var os = require('os');
var cron = require('cron').CronJob;

var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var calendar = google.calendar('v3');

var controller = Botkit.slackbot({
    debug: true,
    require_delivery: true,
    storage: mongoStorage,
    scopes: ['users']
});

var makebot = controller.spawn({
    token: SLACK_TOKEN
}).startRTM();

// On start, save all users to database
makebot.startRTM(function(err, makebot, payload) {
    if (err) {
        throw new Error('Unable to connect to Slack channel.');
    } else {
        makebot.api.users.list({}, function(err, response) {
            console.log(response);
        });
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

signInJob.start();

