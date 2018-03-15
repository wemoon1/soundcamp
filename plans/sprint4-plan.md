# Sprint 4 Plan

## Team members
Danny Moon, David McLellan, Sota Nakajima, Yang Wu

## Sprint completion date: Mar 18th 2018

## High level goals
Be able to add past concerts to user's list. Be able to be notified of upcoming concerts for following artists. Search for other users and view their lists.

## User stories

**User story 1**: As a user, I want to add concerts I previously visited to my list so that I keep track and share the list with other users

**Tasks**
1. Add a button in each event which will save it to the firebase.
   1. It will be saved under user firebase document as JSON object with ```eventId``` as key and the actual event id as value.

**Total estimated time for user story 1:** 15 hours


**User story 2**: As a user, I want to be notified of upcoming concerts for the artists I followed so that I know when the next event is coming up.

**Tasks**
1. Add a button in each artist which will save it to the firebase.
2. Add notification functionality via user email and/or web app to user.
   1. Each artist document will hold users following the said artist.
3. For every artist, check if there will be an upcoming event in 2 weeks advance.
   1. If there is one, notify every user under that artist.


**Total estimated time for user story 2:** 14 hours

## Team roles

Danny: Developer, Scrum master

David: Developer

Sota: Developer

Yang: Developer

## Initial task assignments

### Danny:

**User story 1.** Add ```save event``` button for every past events. When pressed, save it in the firebase database. Each event is saved under ```saved event``` document with id of logged in user as a JSON object ```{event:<event>, id:<event-id>}```.

**User story 2.** On the heroku server, check for upcoming events in the next 2 weeks for every artist. If events exist, send notification to all users under that artist via email. Check for events every week.

### David:

**User story 2.** Finalize login and register page (previous user story). Add ```follow artist``` button next to every artist. When pressed, save to firebase database. When selected artist exist, insert firebase user id under said artist. If it doesn't, insert the new artist document, with following user inside it. On the heroku server, check for upcoming events in the next 2 weeks for every artist. If events exist, send notification to all users under that artist via email. Check for events every week.

### Sota:

**User story 2.** See David's user story 2 tasks.

### Yang:

**User story 1.** See Danny's user story 1 and 2 tasks.

## Initial burn up chart

[Link to the burn up chart](https://drive.google.com/open?id=1akFnJhIrnlDv9V4Q-EWvTyTkKip66tUm2BAk8Ke594I)

## Initial scrum board
See the github [project](https://github.com/wemoon1/soundcamp/projects/4?) page.

## Scrum times
Meet at Sota's apartment every Monday 4pm.
