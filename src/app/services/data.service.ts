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
  location: any;

  constructor() { }
  saveLocation(response: any) {
    this.location = response;
  }
  loadLocation(response: any) {
    return this.location;
  }


  saveEvent(response: any) {
    this.event = response;
  }

  loadEvent(): any {
    return this.event;
  }
}
