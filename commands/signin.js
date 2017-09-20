/*
    signin.js
    @author Meeshbhoombah
    
    sendMessage(studentID)
    - sends a sign in message with a sign in button

    signInUser(requestIPAddress)
    - checks if the request's IP address matches the Make 
      School IP address
        - if match, returns sucess and sends a sucess
          message
        - if not a match, returns failure a and sends a
          failure message
    
    ////////// Emoji Alternative //////////
    generateEmojis()
    - creates a dictionary with four random emojis, one of
      which is the 'password' emoji
    - saves the emoji's to a database which contains only
      the emojis for that day

    sendMessage(rightEmoji, arrOfEmojis)
    - sends a message with four buttons, one of which 
      contains the 'password' emoji
    - randomizes the order of the buttons each time it 
      is called

    checkEmoji(studentID, emoji)
    - checks to see if emoji matches the database's emoji
        - if success, sends success emoji
            - adds student to array of signed in students
        - if failure, gives student another opportunity
          to make a selection
*/

function generateEmojis() {
    
    var emojis = {
        pass: passwordEmoji,
        rand1: em1,
        ramd2: em2,
        rand3: em3
    }

    return emojis

}
