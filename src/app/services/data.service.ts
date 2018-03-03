import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  /* stores a single element from the array "event", e.g
    "resultsPage":{
      "results":{
        "event":[
          { ... }, <-- store this
          { ... }
        ]}}
  */
  event: any;
  venue: any;

  constructor() { }

  saveEvent(response: any) {
    this.event = response;
  }

  loadEvent(): any {
    return this.event;
  }
  
  saveVenue(response:any) {
    this.venue = response;
  }
  
  loadVenue(): any {
    return this.venue;
  }
}
