import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { SoundcampService } from '../../services/soundcamp.service';

@Component({
  selector: 'app-venue-detail',
  templateUrl: './venue-detail.component.html',
  styleUrls: ['./venue-detail.component.css']
})
export class VenueDetailComponent implements OnInit {
  // todo:
  // 4) in the template, call *ngFor on 'venue' and pass each element to event-list component
  // see event-card.component.ts for help
  Child_id:any;
  Child_description:any;
  venueEvent:any;
  id:any;
  constructor(private route: ActivatedRoute, private data: DataService, private service: SoundcampService) { }
  ngOnInit() {
    this.Child_id = this.route.snapshot.params.id;
	this.id = this.data.loadVenue();
	this.venueEvent = this.service.getVenueEvents(this.id, 1);
  }
}