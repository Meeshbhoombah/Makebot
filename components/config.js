/*

    setup.js

    - check if database has been created, if not, create a JSON
      database with all the members in the team
    
*/

var debug = require('debug')('makebot:signin')

// if database is empty propogate with members in the Slack channel
module.exports = function (controller, makebot) {
    controller.storage.users.all(function(err, all_user_data) {
        try {
            if (isEmptyObject(all_user_data)) {
                makebot.api.users.list({}, function(err, response){
                    // turns user data into an obj
                    try {
                        // renamed because I hate using response
                        var userData = response
                       
                        // loop through all members in team and save id, name, and email
                        for (var member in userData.members) {
                            if (userData.members.hasOwnProperty(member)) {
                                var userId = userData.members[member].id
                                var userName = userData.members[member].name
                                var userEmail = userData.members[member].profile.email
                               
                                if (userEmail != null) {
                                    controller.storage.users.save({
                                        id: userId,
                                        name: userName,
                                        email: userEmail
                                    }, function(err) {
                                        try {
                                            return
                                        } catch (e) {
                                            console.log(e)
                                        }   
                                    })
                                } else {
                                    console.log('Not a human!')
                                }
                            }
                        }
                    } catch (e) {
                        console.log(e)
                    }
                })
            } else {
                console.log('Members database already exists.')
            }
        } catch (e) {
            console.log(e)
        }
    })
}

function isEmptyObject(obj) {
  return !Object.keys(obj).length;
}

