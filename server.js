
// makebot.js
  
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

controller.startTicking()

// the birth of Makebot 🤖
var makebot = controller.spawn({
    token: tokens.SLACK_BOT_TOKEN
})

// Components ============================================================================
require('./components/config')(controller, makebot)
// var onboard  = require('./components/onboard')
// var about    = require('./components/about')

// Skills ================================================================================
var signIn = require('./skills/signin')
signIn.open(controller, makebot)

// Handle I/O ============================================================================
controller.setupWebserver('5000', function(err, webserver) {
    controller.createWebhookEndpoints(controller.webserver)
})

// cron jobs
var startOfDay = new cronJob({
  cronTime: '00 00 09 * * 1-5',
  onTick: function() {
    // runs everyday Monday to Friday at 09:00:00 AM
    
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

startOfDay.start()
endOfDay.start()

var listener = app.listen(8888, function() {
    console.log('Listening on port ' + listener.address().port) // Listening on port 8888
})

