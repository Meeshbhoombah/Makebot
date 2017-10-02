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

var debug  = require('debug')('makebot:signin')

var SignIn = function() {
    var emojiObject = {
        pass: "",
        ran1: "",
        ran2: "",
        ran3: ""
    }

    /*
    Parses through the members database and sends each student a 
    sign in message. */ 
    function signInOpen() {
    }

    /* 
    Handles the student's response to the sign in message. If the
    right button is selected, the student is signed in, otherwise
    ask the user to make another attempt. */
    function sendSignInMessage(memberId) {
        bot.startPrivateConversation(memberId, function(err, convo){
            if (err) {
                console.log(err)
            } else {
                convo.ask({

                })
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
}()

module.exports = SignIn

