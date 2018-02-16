import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

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

  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit() {
    this.parseData();
  }

  parseData() {
    // todo: navigate back when this.data.getSingleEvent() is empty
    const event = this.data.getSingleEvent();

    this.performers = event.performance;
    this.startTime = event.start.datetime;
    this.venueName = event.venue.displayName;
    this.venueLocation = event.location.city;
  }

}
