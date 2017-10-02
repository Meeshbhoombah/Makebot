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

var generateEmoji  = require('node-emoji')
var emojiArr       = []

/*
 * Parses through the members database and sends each student a 
 * sign in message. 
 */ 
module.exports.open = function (controller, makebot) {
    console.log('test')

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
            // send all users sign in message
            for (var user in all_user_data) {
                sendSignInMessage(all_user_data[user].id, makebot)
            }
        } catch (e) {
            console.log(e)
        }
    })
}

/* 
 * Handles the student's response to the sign in message. If the
 * right button is selected, the student is signed in, otherwise
 * ask the user to make another attempt. 
 */
function sendSignInMessage(memberId, makebot) {
    makebot.createPrivateConversation({user: memberId}, function(err, convo) {
        try {
            // randomize the order of the emojis for each user
            for (var i = 0; i < 4; i++) {
                // get random emoji from emojiArr
                var randomEmoji = emojiArr[Math.floor(Math.random() * emojiArr.length)]
                
                // remove emoji after use       
                emojiArr = emojiArr.filter(item => item !== randomEmoji)
                convo.setVar('ran' + i, randomEmoji)
            }

            convo.say({
                text: 'Good morning! Remember to commit to GitHub today.',
                 attachments: [
                    {
                        title: 'You shall not pass! 🚫:',
                        callback_id: 'signin',
                        attachment_type: 'default',
                        actions: [
                            {
                                "name":"A",
                                "text":"{{vars.ran0}}",
                                "value":"{{vars.ran0}}",
                                "type":"button",
                            },
                            {
                                "name":"B",
                                "text":"{{vars.ran1}}",
                                "value":"{{vars.ran1}}",
                                "type":"button",
                            },
                            {
                                "name":"C",
                                "text":"{{vars.ran2}}",
                                "value":"{{vars.ran2}}",
                                "type":"button",
                            },
                            {
                                "name":"D",
                                "text":"{{vars.ran3}}",
                                "value":"{{vars.ran3}}",
                                "type":"button",
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

