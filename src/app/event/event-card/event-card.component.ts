import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {
  @Input() event;
  eventName;
  id;
  constructor(private router: Router, private data: DataService) { }

  ngOnInit() {
    if (this.event) {
      this.eventName = this.event.displayName;
      this.id = this.event.id;
    }
  }

  selectEvent() {
    this.data.setSingleEvent(this.event);
    this.router.navigate(['event', this.id]);
  }

}
