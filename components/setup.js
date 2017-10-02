/*

    setup.js

    - check if database has been created, if not, create a JSON
      database with all the members in the team
    
*/

var debug = require('debug')('makebot:signin')

// if database is empty propogate with members in the Slack channel
var SetUp = function(controller, makebot) {
    controller.storage.users.all(function(err, all_user_data) {
        try {
            if (isEmptyObject(all_user_data)) {
                makebot.api.users.list({}, function(err, response){
                    // turns user data into an obj
                    try {
                        // renamed because I hate using response
                        var userData = response
                       
                        // loop through all users in team and save to id, name, and email to db
                        for (var key in userData.members) {
                            if (userData.members.hasOwnProperty(key)) {
                                var userId = userData.members[key].id
                                var userName =userData.members[key].name
                                var userEmail = userData.members[key].profile.email
                                
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

module.exports.SetUp = SetUp

