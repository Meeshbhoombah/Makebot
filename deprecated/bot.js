var tokens  = require('./tokens')

var Botkit  = require('botkit')
var debug   = require('debug')('botkit:main')

var junk    = require('junk')

// Config ==============================================================================
var bot_options = {
    clientId: tokens.SLACK_CLIENT_ID,
    clientSecret: tokens.SLACK_CLIENT_SECRET,
    debug: true,
    scopes: ['bot']
} 

var mongoStorage = require('botkit-storage-mongo')({mongoUri: tokens.MONGO_URI})
bot_options.storage = mongoStorage

// create controller (controls all instance of Makebot 🤖 )
var controller = Botkit.slackbot(bot_options)
controller.startTicking()

// Components ==========================================================================
var webserver = require(__dirname + '/components/express_webserver.js')(controller)
require(__dirname + '/components/user_registration.js')(controller)
require(__dirname + '/components/onboarding.js')(controller)

// Skills ==============================================================================
var normalizedPath = require("path").join(__dirname, "skills")
require("fs").readdirSync(normalizedPath).forEach(function(file) {
    if (junk.is(file)) {
        return
    } else {
        require("./skills/" + file)(controller);
    }
})

// API =================================================================================
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}

