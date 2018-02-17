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
  singleEvent: any;

  constructor() { }

  setSingleEvent(response: any) {
    this.singleEvent = response;
  }
  getSingleEvent(): any {
    return this.singleEvent;
  }
}
