/*

Makebot.js - a Slackbot for Make School's Product College slack
@author Meeshbhoombah

*/

var Botkit = require("botkit");
var os = require("os");
var cron = require("cron").CronJob;
var mongoStorage = require('botkit-storage-mongo')({mongoUri: global.MONGO_URI});

var controller = Botkit.slackbot({
    debug: true,
    require_delivery: true,
    storage: mongoStorage
});

var makebot = controller.spawn({
    token: global.SLACK_TOKEN
}).StartRTM();

// Save all Slack users to database
bot.startRTM(function(err, makebot, payload){
    if (err) {
        throw new Error('Unable to connect to Slack channel.');
    } else {
        
    }
});

// Send sign in message at 9:00 AM, repeat from M to F
var signInJob = new CronJob({
    cronTime: '00 00 09 * * 1-5',
    onTick: function() {
           
    },
    start: false,
    timeZone: 'America/Los_Angeles'
});

job.start();

