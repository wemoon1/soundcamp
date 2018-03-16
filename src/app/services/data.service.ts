import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

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
  artist: any;
  location: any;
  private msgSource = new Subject<any>();
  currentMsg = this.msgSource.asObservable();

  constructor() { }
  saveArtist(artist: any) {
    this.artist = artist;
  }

  loadArtist(): any {
    return this.artist;
  }
  saveLocation(location: any) {
    this.location = location;
  }
  loadLocation(location: any) {
    return this.location;
  }

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

  changeMsg(msg: any) {
    this.msgSource.next(msg);
  }
}
