# Sprint 3 Plan

## Team members
Danny Moon, David McLellan, Sota Nakajima, Yang Wu

## Sprint completion date: Mar 4th 2018

## High level goals
Be able to register and log in to user account. Be able to search for music events by artists, venue, or location. Be able to view event information.

## User stories

**User story 1**: As a user, I want to search for music events by artist, venue, or location so that the web app is usable for me

**Tasks**
1. Complete ```...-list``` component so that it:
   1. Calls SoundcampService and retrieve search results (1 hr)
   2. Loop through each search results and pass the single result to the child component ```...-card``` (3 hrs)
2. Complete ```...-card``` component so that it:
   1. Gets any relevant information from the input variable and display it in the template (1 hr)
   2. Saves the input variable to DataService and navigates to ```-detail``` component (3 hrs)
3. Complete ```-detail``` component so that it:
   1. Loads the data from DataService and display any relevant information from it (1 hr)
   2. Calls SoundcampService and requests any upcoming events with the ID (3 hrs)
      1. Pass the event array object from the search result to the child component ```event-list``` (3 hrs)

**Total estimated time for user story 1:** 15 hours


**User story 2**: As a user, I want to sign up and log in to my own profile so I can follow artists and be notified of their upcoming events

**Tasks**
1. Finish register and login views (3 hrs)
2. Implement user registration and login functionality (5 hrs)
   1. Send a POST request with password and email (or username) as a body from AuthenticationService to heroku server
   2. Implement Firebase authentication for user creation and login as shown [here](https://firebase.google.com/docs/auth/web/password-auth) in express app backend
3. Connect to Firebase database to heroku (1 hr)
4. Create a database for storing user information and a list of following artists (2 hrs)
5. Set rules for database so only authorized accounts can read/write and only they can read/write their own list (1 hr)

**Total estimated time for user story 2:** 11 hours

## Team roles

Danny: Developer, Tester

David: Developer

Sota: Developer

Yang: Developer, Scrum master

## Initial task assignments

### Danny:
**User story 1.** Complete ```artist-list```, ```artist-card```, and ```artist-details```.

**User story 2.** Set up express app so that it connects to Firebase database. Set up database for storing the list of following artists and user accounts. Set rules for the database.

### David:

**User story 1.** Complete ```venue-list```, ```venue-card```, and ```venue-details```.

### Sota:

**User story 2.** Complete ```register``` and ```login``` component. Implement registration and login functionality.

### Yang:

**User story 1.** Complete ```location-list```, ```location-card```, and ```location-details```.

## Initial burn up chart

[Link to the burn up chart](https://drive.google.com/open?id=1ua310rGsGIqH09MfcrmPfZvHzYbLW7tEDKGWAuVuPwI)

## Initial scrum board
See the github [project](https://github.com/wemoon1/soundcamp/projects/3?) page.

## Scrum times
Meet at Sota's apartment every Monday 4pm.
