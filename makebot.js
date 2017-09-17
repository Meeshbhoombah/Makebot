/*

Makebot.js - a simple Slackbot that sends a message with Buttons at 9 AM everyday

*/

if (!process.env.token) {
    console.log("Specefiy token in the environment");
    process.exit(1);
}
