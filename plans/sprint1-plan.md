# Sprint 1 Plan

## Team members
Danny Moon, David McLellan, Sota Nakajima, Yang Wu

## Sprint completion date: Feb 2nd 2018

## High level goals
Be able to enter and navigate through the site. Have responsive layouts e.g, there's no problem viewing the website in any devices.

## User stories

**User story 1**: As a user, I want to visit and navigate through the website so that I can understand the site structure.

**Tasks**
1. Add and include components for each pages (3 hrs)
2. Setup and configure router in ```app.module``` (3 hrs)
3. Add router links for each component and link it to an appropriate page (3 hrs)
4. Edit view file (HTML) and add some placeholder text (2 hrs)
5. Test router (2 hrs)

**Total estimated time for user story 1:** 13 hours

**User story 2**: As a user, I want the website to be responsive so that I can view it properly on any device

**Tasks**
1. Read Bootstrap 4 documentation (2 hrs)
2. Replace some HTML code with Bootstrap (1 hr)
3. View it on different devices (1 hr)

**Total estimated time for user story 1:** 4 hours

## Team roles

Danny: Developer, Tester

David: Developer, Scrum master

Sota: Developer

Yang: Developer

## Initial task assignments

### Danny:

**User story 1.** Add ```home```, ```about```, ```header```, ```event-list```, ```event-card```, ```event-detail```, ```search-list```, ```search-form```, ```search-page``` components. Add and configure router. Route ```''``` to ```HomeComponent```, ```about``` to ```AboutComponent```, ```search``` to ```SearchPageComponent```, ```event/:id``` to ```EventDetailComponent```. Route child path ```:id``` of parent path ```search``` to ```SearchListComponent```. Create a simple hyperlink in the component template that navigates to the following: ```home``` to ```about```, ```home``` to ```search-page```, ```event-card``` to ```event-detail```.

**User story 2.** Create a responsive header for the website and add to the top of app view. Create a simple view for: ```event-card```, ```event-detail```, ```home```, ```about```, ```search-page```.

### David:

**User story 1.** Add ```artist-list```, ```artist-card```, ```artist-detail```, ```login``` components. Route ```artist/:id``` to ```ArtistDetailComponent```, ```login``` to ```LoginComponent```. Create a simple hyperlink in the component template that navigates to the following: ```artist-card``` to ```artist-detail```.

**User story 2.** Create a simple view for: ```artist-card```, ```artist-detail```, ```login```.

### Sota:

**User story 1.** Add ```location-list```, ```location-card```, ```location-detail```, ```register``` components. Route ```location/:id``` to ```LocationDetail```, ```register``` to ```RegisterComponent```. Create a simple hyperlink in the component template that navigates to the following: ```location-card``` to ```location-detail```.

**User story 2.** Create a simple view for: ```location-card```, ```location-detail```, ```register```.

### Yang:

**User story 1.** Add ```venue-list```, ```venue-card```, ```venue-detail```, ```user``` components. Route ```venue/:id``` to ```VenueDetail```, ```user/:id``` to ```UserComponent```. Create a simple hyperlink in the component template that navigates to the following: ```venue-card``` to ```venue-detail```. 


**User story 2.** Create a simple view for: ```venue-card```, ```venue-detail```, ```user```.

## Initial burn up chart

[Link to the burn up chart](https://docs.google.com/a/ucsc.edu/spreadsheets/d/1BbZ8ndXCgSjON6_fsBFhCn7kF9Nb4B7S5VAnLSBvdJg/edit?usp=sharing)

## Initial scrum board
See the github [project](https://github.com/wemoon1/soundcamp/projects/1?) page.

## Scrum times
Meet at the Sandwich Spot every Monday 4pm.