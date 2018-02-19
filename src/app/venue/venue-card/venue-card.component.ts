import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-venue-card',
  templateUrl: './venue-card.component.html',
  styleUrls: ['./venue-card.component.css']
})
export class VenueCardComponent implements OnInit {
  // todo:
  // 1) import DataService and Router and inject it
  // 2) find and store the information from input variable 'venue' such as names and artist id
  // 3.1) create a function onSelected() which calls DataService and stores the input variable 'venue' to the data service by calling saveVenue()
  // 3.2) in the same function call router and navigate to venue detail page with venue id as argument
  // 4) in the template show venue name, location, and other useful information but not too much
  // 5) when the venue is clicked by user, call onSelected()
  // see event-card.component.ts for help
  @Input() venue;
  id:any;
  country:any;
  state:any;
  name:any;
  street:any;
  website:any;
  zip:any;
  phone:any;

    constructor() { }

    ngOnInit() {

    }
  }
