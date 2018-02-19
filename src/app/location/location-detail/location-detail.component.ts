import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent implements OnInit {
  // todo:
  // 1) import DataService, SoundcampService
  // 2) on component load, call loadLocation() from DataService
  // 3) get relevant information from the location such as city name, country, state, etc.
  // 4) retrieve events from this location by calling getLocationEvents and passing location id
  // 5) display where the location is using google maps api?
  // 6) in the template, call *ngFor on 'event' and pass each element to event-list component

  constructor() { }

  ngOnInit() {
  }

}
