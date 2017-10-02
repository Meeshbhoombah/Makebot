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

// array of emojis for today
var emojiArr  = []

/*
Parses through the members database and sends each student a 
sign in message. */ 
module.exports.open = function (controller, makebot) {
    // create daily emoji array
    for (i = 0; i < 4; i++) {
        var ranEmoji = generateEmoji.random().emoji

        if (ranEmoji == emojiArr[0]) {
            i-- 
            break
        } else {
            emojiArr[i] = ranEmoji
        }
    }

    controller.storage.users.all(function(err, all_user_data) {
        try {
            for (var user in all_user_data) {
                console.log(all_user_data[user].id)

                sendSignInMessage(all_user_data[user].id, makebot)
            }
        } catch (e) {
            console.log(e)
        }
    })
}

/* 
Handles the student's response to the sign in message. If the
right button is selected, the student is signed in, otherwise
ask the user to make another attempt. */
function sendSignInMessage(memberId, makebot) {
    makebot.createPrivateConversation({user: memberId}, function(err, convo) {
        try {
            convo.setVar()
    
            convo.say({
                text: 'Good morning! Remember to commit to GitHub today.',
                 attachments: [
                    {
                        title: 'Please pick a button to sing in:',
                        callback_id: '',
                        attachment_type: 'default',
                        actions: [
                            {
                                "name":"yes",
                                "text": "Yes!",
                                "value": "yes",
                                "type": "button",
                            },
                            {
                               "text": "No!",
                                "name": "no",
                                "value": "delete",
                                "style": "danger",
                                "type": "button",
                                "confirm": {
                                  "title": "Are you sure?",
                                  "text": "This will do something!",
                                  "ok_text": "Yes",
                                  "dismiss_text": "No"
                                }
                            }
                        ]
                    }
                ]
            })
            
            convo.activate()
        } catch (e) {
            console.log(e)
        }   
    })
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

