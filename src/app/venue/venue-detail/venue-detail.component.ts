import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-venue-detail',
  templateUrl: './venue-detail.component.html',
  styleUrls: ['./venue-detail.component.css']
})
export class VenueDetailComponent implements OnInit {
  // todo:
  // 1) import DataService
  // 2) on component load, call loadVenue() from DataService
  // 3) get the array object "event" by calling getVenueEvents() from SoundcampService
  // 4) in the template, call *ngFor on 'venue' and pass each element to event-list component
  // see event-card.component.ts for help
Child_id:any;
Child_description:any;
    constructor(private route: ActivatedRoute) { }
  ngOnInit() {
   this.Child_id = this.route.snapshot.params.id;

}



}
