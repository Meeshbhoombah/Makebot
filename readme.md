# Makebot
A bot for Make School's Product College Slack, built by students, for
students.

## Table of Contents

## Contributing
Chatbots, especially Slackbots, can handle pretty much anything you would
want a person to do. That means, yes, in theory you could teach Makebot 
how to order Lyfts for you when you're having a lazy day. But remember,
**just cause you can, doesn't mean you should**.

## Prerequisites
<h1 align="center">
    <br>
    MakeBot
    <br>
</h1>

A Slackbot for students and instructors at the Make School Product
College. Makebot can: 

**Help students...**
- Sign in
- Notify relevant Product College staff/instructors when missing 
  or late to class

**Help instructors...**
- Find which students are not attending their class(es) today
- Assign homework

**Help staff...**
- View attendance

## Students
* Makebot sends a message  everyday at 9:00 AM asking students to
  select one of four emojis.

  In order to sign in for that day the student must select the
  emoji that matches the emoji on the iPad located near the
  entrance of Make School.
  
  Selecting the right emoji sucessfully signs in the students.
  Students must select the right emoji prior to 10:00 AM in order
  to be signed in. If the students picks the wrong emoji twice, 
  that students will not be able to sign in and must see Jade.

## Uses
1. Botkit
2. Node cron

