import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-venue-card',
  templateUrl: './venue-card.component.html',
  styleUrls: ['./venue-card.component.css']
})
export class VenueCardComponent implements OnInit {
  // todo:
  // 4) in the template show venue name, location, and other useful information but not too much
  // 5) when the venue is clicked by user, call onSelected()
  // see event-card.component.ts for help
  @Input() venue;
  venueName:any;
  id:any;
  country:any;
  state:any;
  name:any;
  street:any;
  website:any;
  zip:any;
  phone:any;
  constructor(private router: Router, private data: DataService) { }
  
  ngOnInit() {
    if (this.venue) {
      this.venueName = this.venue.displayName;
      this.id = this.venue.id;
	  console.log("id: " + this.id + " venueName: " + this.venueName);
    }
  }

  onSelected() {
    this.data.saveVenue(this.venue);
    this.router.navigate(['venue', this.id]);
  }
  
  onFollow() {
    console.log("followed " + this.venueName)
  }
}
