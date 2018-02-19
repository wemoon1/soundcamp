import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.css']
})
export class LocationCardComponent implements OnInit {
  // todo:
  // 1) import DataService and Router and inject it
  // 2) create a variable for storing: city, country, state, and metroArea id
  // 3) find and store the information from input variable location to said variables
  // 4.1) create a function onSelected() which calls DataService and stores the
  // input variable 'location' to the service by calling saveLocation()
  // 4.2) call router and navigate to location with argument metroArea id
  // 5) in the template display the city name, state, and country
  // 6) when the location is clicked by user, call onSelected()
  // see event-card.component.ts for help
  @Input() location;

  constructor() { }

  ngOnInit() {
  }

}
