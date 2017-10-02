/*

    signin.js

    - sends a sign in message every day of the week at startDay() and 
      designates a correct emoji which is displayed on a web app
    - reminds members who have not signed in by 10:00 AM to sign in
    - at endDay() collects all members who not signed in and markes them as
      absent for that day
    - prints all members who were absent to the #attendance channel

    * Doing /attendance as an instructor tells the instructor all the students
      who have not signed thus far today

*/

var debug          = require('debug')('makebot:signin')

var Store          = require("jfs")
var db             = new Store("emojis")

var generateEmoji  = require('node-emoji')
var emojiArr = []

/*
Parses through the members database and sends each student a 
sign in message. */ 
module.exports.open = function (controller, makebot) {
    generateEmojis()
}

function generateEmojis() {
    for (i = 0; i < 4; i++) {
        var ranEmoji = generateEmoji.random().emoji

        if (ranEmoji == emojiArr[0]) {
            i-- 
            break
        } else {
            emojiArr[i] = ranEmoji
        }
    }
}

/* 
Handles the student's response to the sign in message. If the
right button is selected, the student is signed in, otherwise
ask the user to make another attempt. */
function sendSignInMessage(memberId) {
}

/*
Takes passed emoji and checks if it matches the database's
selected emoji. */
function checkEmojiSelection() {

}

/*
Parses through the members database and collects all students
who have not signed in today. Creates a table with the data
and prints it to the #attendance channel. */
function signInClosed() {

}

