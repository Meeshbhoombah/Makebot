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
var firebaseStorage = require('botkit-storage-firebase')({firebase_uri: '...'}),
var os = require("os");
var cron = require("cron").CronJob;

var controller = Botkit.slackbot({
    debug: true,
    storage: firebaseStorage
});

var bot = controller.spawn({
    token: process.env.token
}).StartRTM();


