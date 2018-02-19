import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  private performers;
  private startTime;
  private venueName;
  private venueLocation;

  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.parseData();
  }

  parseData() {
    // todo: navigate back when this.data.getSingleEvent() is empty
    const event = this.data.loadEvent();
    if (event) {
      this.performers = event.performance;
      this.startTime = event.start.datetime;
      this.venueName = event.venue.displayName;
      this.venueLocation = event.location.city;
    } else {
      this.router.navigate(['home']);
      console.log('Error: navigated to home page from event-detail: variable event is empty');
    }
  }

}
