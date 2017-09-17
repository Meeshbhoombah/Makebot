/*

Makebot.js - a Slackbot for Make School's Product College slack
@author Meeshbhoombah

*/

if (!process.env.token) {
    console.log("Add a token via command line.");
    process.exit(1);
}

if (!process.env.uri) {
    console.log("Add a Firebase URI via command line.");
    process.exit(1);
}

var Botkit = require("botkit");
// TODO - Add Firebase URI
var os = require("os");
var cron = require("cron").CronJob;
var mongoStorage = require('botkit-storage-mongo')({mongoUri: process.env.uri});
var controller = Botkit.slackbot({
    debug: true,
    require_delivery: true,
    storage: mongoStorage
});

var makebot = controller.spawn({
    token: process.env.token
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

