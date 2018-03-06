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
  artist: any;

  constructor() { }
  saveArtist(artist: any) {
    this.artist = artist;
  }

  loadArtist(): any {
    return this.artist;
  }

  saveEvent(response: any) {
    this.event = response;
  }

  loadEvent(): any {
    return this.event;
  }
}
