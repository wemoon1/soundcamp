import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  singleEvent: any;

  constructor() { }

  setSingleEvent(response: any) {
    this.singleEvent = response;
  }
  getSingleEvent(): any {
    return this.singleEvent;
  }
}
