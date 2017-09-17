/*

Makebot.js - a Slackbot for Make School's Product College slack
@author Meeshbhoombah

*/

if (!process.env.token) {
    console.log("Specefiy token: ");
    process.exit(1);
}

var Botkit = require("node_modules/botkit.js");
firebaseStorage = require('botkit-storage-firebase')({firebase_uri: '...'}),
    controller = Botkit.slackbot({
        storage: firebaseStorage
    });
var os = require("os");
var cron = require("cron").CronJob;

var controller = Botkit.slackbot({
    debug: true,
});

var makebot = controller.spawn({
    token: process.env.token
}).StartRTM();

// Send sign in message at 9:00 AM, repeat from M to F
var signInJob = new CronJob({
    cronTime: '00 30 11 * * 1-5',
    onTick: function() {
        
    },
    start: false,
    timeZone: 'America/Los_Angeles'
});

job.start();

