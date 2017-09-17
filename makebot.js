/*

Makebot.js - a simple Slackbot that sends a message with Buttons at 9 AM everyday

*/

if (!process.env.token) {
    console.log("Specefiy token: ");
    process.exit(1);
}

var Botkit = require("node_modules/botkit.js");
var os = require("os");
var cron = require("cron").CronJob;
