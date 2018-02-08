# Sprint 2 Plan

## Team members
Danny Moon, David McLellan, Sota Nakajima, Yang Wu

## Sprint completion date: Feb 18th 2018

## High level goals
Be able to search for music events by artists, venue, or location. Be able to view event information. Create REST API with node and express.js.

## User stories

**User story 1**: As a user, I want to search for music events by artist, location, or location so that the web app is usable for me

**Tasks**
1. Create a REST API that returns concert information from the Songkick API. (5 hrs)
2. Define the following routes in express.js:
    1. ```/artist/search/{query}/{page-#}``` returns all results of artists using search query (2 hrs)
    2. ```/artist/{artist-id}/events/{page-#}``` returns artist's upcoming events (2 hrs)
    3. ```/artist/{artist-id}/gigography/{page-#}``` returns artist's past events (2 hrs)
    4. ```/location/search/{query}/{page-#}``` returns all results of locations using search query (2 hrs)
    5. ```/location/{location-id}/events/{page-#}``` returns upcoming events given location id (2 hrs)
    6. ```/location/{latlng}/events/{page-#}``` returns upcoming events near the given latitude and longitude (2 hrs)
    7. ```/venue/search/{query}/{page-#}``` returns all results of venue using search query (2 hrs)
    8. ```/venue/{venue-id}/events/{page-#}``` returns venue's upcoming events
3. Deploy express.js app to heroku (2 hrs)
4. Create a service in Angular app that connects to heroku service. (2 hrs)

**Total estimated time for user story 1:** 23 hrs

**User story 2**: As a user, I want to see all the information about a certain event.

**Tasks**
1. Create a data service that temporarily holds data from backend (1 hr)
2. Display all event information in ```event-detail``` view (3 hr)
3. Display quick event info in ```event-card``` (2 hr)

**Total estimated time for user story 1:** 6 hours

## Team roles

Danny: Developer, Tester

David: Developer

Sota: Developer, Scrum master

Yang: Developer

## Initial task assignments

### Danny:

**User story 1.** Create a express.js app and deploy it to Heroku. In express.js app, define a route ```/venue/search/{query}/{page-#}``` and make HTTP call to ```/api/3.0/search/venues.json?query={venue_name}&per_page=50&page={page-#}&apikey={your_api_key}```, and return the API's response. Pass the parameters to API. Do the same with ```/venue/{venue-id}/{page-#}``` and ```api/3.0/venues/{venue_id}/calendar.json?apikey={your_api_key}```. Generate service in Angular titled ```songkick``` and connect it Heroku app.

**User story 2.** 

### David:

**User story 1.**  Define a route ```/location/search/{query}/{page-#}``` and make HTTP call to ```/api/3.0/search/locations.json?query={search_query}&per_page=50&page={page-#}apikey={your_api_key}```, and return the API's response. Pass the parameters to API. Do the same with ```/location/{location-id}/events/{page-#}``` and ```api/3.0/metro_areas/{metro_area_id}/calendar.json?per_page=50&page={page-#}&apikey={your_api_key}```.

**User story 2.** 

### Sota:

**User story 1.** Define a route ```/artist/search/{query}/{page-#}``` and make HTTP call to ```api/3.0/search/artists.json?apikey={your_api_key}&query={artist_name}&per_page=50&page={page-#}``` and return the API's response. Pass the parameters to API. Do the same with ```/artist/{artist-id}/events/{page-#}``` and ```api/3.0/artists/{artist_id}/calendar.json?apikey={your_api_key}&per_page=50&page={page-#}```.

**User story 2.** 

### Yang:

**User story 1.** Define a route ```/artist/{artist-id}/gigography/{page-#}``` and make HTTP call to ```api/3.0/artists/{artist_id}/gigography.json?apikey={your_api_key}&per_page=50&page={page-#}``` and return the API's response. Pass the parameters to API. Do the same with ```/location/{lat,lng}/events/{page-#}``` and ```api/3.0/search/locations.json?location=geo:{lat,lng}&per_page=50&page={page-#}&apikey={your_api_key}```.

**User story 2.** 

## Initial burn up chart

[Link to the burn up chart](https://docs.google.com/a/ucsc.edu/spreadsheets/d/1BbZ8ndXCgSjON6_fsBFhCn7kF9Nb4B7S5VAnLSBvdJg/edit?usp=sharing)

## Initial scrum board
See the github [project](https://github.com/wemoon1/soundcamp/projects/2?) page.

## Scrum times
Meet at Sota's apartment every Monday 4pm.
