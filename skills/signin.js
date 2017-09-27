// signin.js

var CronJob = require('cron').CronJob;

var startOfTheDay = new CronJob({
  cronTime: '00 00 09  * * 1-5',
  onTick: function() {
    
  },
  start: false,
  timeZone: 'America/Los_Angeles'
});

var signInReminder = new CronJob({
  cronTime: '00 00 09  * * 1-5',
  onTick: function() {
    
  },
  start: false,
  timeZone: 'America/Los_Angeles'
}

var endOfTheDay = new CronJob({
    cronTime: '00 00 18  * * 1-5',
    onTick: function() {
      
    },
    start: false,
    timeZone: 'America/Los_Angeles'
}

