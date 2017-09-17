/*

Makebot.js - a Slackbot for Make School's Product College slack
@author Meeshbhoombah

*/

if (!process.env.token) {
    console.log("Specefiy token: ");
    process.exit(1);
}

var Botkit = require("node_modules/botkit.js");
// TODO - Add Firebase URI
firebaseStorage = require('botkit-storage-firebase')({firebase_uri: '...'}),
controller = Botkit.slackbot({
    storage: firebaseStorage
});
var os = require("os");
var cron = require("cron").CronJob;

var controller = Botkit.slackbot({
    debug: true,
});

var bot = controller.spawn({
    token: process.env.token
}).StartRTM();


