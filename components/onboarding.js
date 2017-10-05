var debug = require('debug')('botkit:onboarding');

module.exports = function(controller) {
    controller.on('onboard', function(bot, team) {

        debug('Starting an onboarding experience!');

        bot.api.users.list({}, function(err, response){
            if (err) {
                debug('Error creating user database:', err)
            } else {
                // renamed because I hate using response
                var userData = response
               
                // loop through all members in team and save id, name, and email
                for (var member in userData.members) {
                    if (userData.members.hasOwnProperty(member)) {
                        var userId = userData.members[member].id
                        var userName = userData.members[member].name
                        var userEmail = userData.members[member].profile.email
                        
                        // creates a database of all humans in Slack team
                        if (userEmail != null) {
                            controller.storage.team.save({
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
            }
        })

        if (controller.config.studio_token) {
            bot.api.im.open({user: bot.config.createdBy}, function(err, direct_message) {
                if (err) {
                    debug('Error sending onboarding message:', err);
                } else {
                    controller.studio.run(bot, 'onboarding', bot.config.createdBy, direct_message.channel.id, direct_message).catch(function(err) {
                        debug('Error: encountered an error loading onboarding script from Botkit Studio:', err);
                    });
                }
            });
        } else {
            bot.startPrivateConversation({user: bot.config.createdBy},function(err,convo) {
              if (err) {
                console.log(err);
              } else {
                convo.say('I am a bot that has just joined your team');
                convo.say('You must now /invite me to a channel so that I can be of use!');
              }
            });
        }
    });

}
