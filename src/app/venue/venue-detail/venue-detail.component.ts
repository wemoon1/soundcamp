import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { SoundcampService } from '../../services/soundcamp.service';

@Component({
  selector: 'app-venue-detail',
  templateUrl: './venue-detail.component.html',
  styleUrls: ['./venue-detail.component.css']
})
export class VenueDetailComponent implements OnInit {

  venue: any;
  upcomingEvents = [];
  totalUpcomingEvents = 0;
  currentPageUpcoming = 1;
  upcomingEventsShown = 0;

  perPage = 5;

  constructor(private route: ActivatedRoute,
              private data: DataService,
              private service: SoundcampService,
              private router: Router) { }

  ngOnInit() {
    this.clearResults();
    this.route.params.subscribe(params => {
      this.venue = this.data.loadVenue();
      if (this.venue) {
        console.log('the detail of this venue: ', this.venue);
        this.getUpcomingEvents();
      } else {
        this.router.navigate(['']);
      }
    });
  }

  getUpcomingEvents() {
    this.service.getVenueEvents(this.venue.id, this.currentPageUpcoming).subscribe(data => {
      this.updateUpcomingEvents(data);
    });
  }

  updateUpcomingEvents(events: any) {
    if (this.currentPageUpcoming < 2) {
      this.totalUpcomingEvents = events.resultsPage.totalEntries;
    }
    this.upcomingEventsShown = this.currentPageUpcoming * this.perPage;
    if (this.totalUpcomingEvents) {
      for (const event of events.resultsPage.results.event) {
        this.upcomingEvents.push(event);
      }
    }
  }

  showMoreUpcoming() {
    this.currentPageUpcoming += 1;
    this.getUpcomingEvents();
  }

  clearResults() {
    this.upcomingEvents = [];
    this.totalUpcomingEvents = 0;
    this.currentPageUpcoming = 1;
    this.upcomingEventsShown = 0;
  }
}
