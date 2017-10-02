/*
    makebot.js
*/
  
var tokens      = require('./tokens')
var botkit      = require('botkit')

var express     = require('express')
var app         = express()
var bodyParser  = require('body-parser')

var cronJob     = require('cron').CronJob

// Makebot ===============================================================================
var controller = botkit.slackbot({
    clientId: tokens.SLACK_CLIENT_ID,
    clientSecret: tokens.SLACK_CLIENT_SECRET,
    scopes: ['bot', 'users.profile:read', 'users:read', 'users:read.email'],
    json_file_store: './database.json',
    debug: true,
    require_delivery: true
})

// The Birth of Makebot 🤖
var makebot = controller.spawn({
    token: tokens.SLACK_BOT_TOKEN
})

// Skills ================================================================================
var signIn = require('./skills/signin')

// Components ============================================================================
// var onboard  = require('./components/onboard')
// var about    = require('./components/about')
// var setup    = require('./components/setup')

// Handle I/O ============================================================================
var startOfDay = new cronJob({
  cronTime: '00 43 18 * * 1-5',
  onTick: function() {
    // runs everyday Monday to Friday at 09:00:00 AM
    console.log('suprise motherfuckers')
  },
  start: false,
  timeZone: 'America/Los_Angeles'
})

var endOfDay = new cronJob({
  cronTime: '00 00 18 * * 1-5',
  onTick: function() {
    // runs everyday Monday to Friday at 06:00:00 AM
  },
  start: false,
  timeZone: 'America/Los_Angeles'
})

// to see if Cron jobs are running
console.log('startOfDay status', startOfDay.running)
startOfDay.start()
console.log('startOfDay status', startOfDay.running)
endOfDay.start()

