import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SoundcampService } from '../../services/soundcamp.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {
  artist: any;
  upcomingEvents = [];
  totalUpcomingEvents = 0;
  currentPageUpcoming = 1;
  upcomingEventsShown = 0;

  pastEvents = [];
  totalPastEvents = 0;
  currentPagePast = 1;
  pastEventsShown = 0;
  perPage = 5;

  onTour = false;
  constructor(
    private data: DataService,
    private soundcamp: SoundcampService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.artist = this.data.loadArtist();
      if (this.artist) {
        if (this.artist.onTourUntil) {
          this.onTour = true;
          this.getUpcomingEvents();
        }
        this.getPastEvents();
      } else {
        this.router.navigate(['']);
      }
    });
  }

  getUpcomingEvents() {
    this.soundcamp.getArtistEvents(this.artist.id, this.currentPageUpcoming).subscribe(data => {
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

  //////
  getPastEvents() {
    this.soundcamp.getArtistPastEvents(this.artist.id, this.currentPagePast).subscribe(data => {
      this.updatePastEvents(data);
    });
  }

  updatePastEvents(events: any) {
    if (this.currentPagePast < 2) {
      this.totalPastEvents = events.resultsPage.totalEntries;
    }
    this.pastEventsShown = this.currentPagePast * this.perPage;
    if (this.totalPastEvents) {
      for (const event of events.resultsPage.results.event) {
        this.pastEvents.push(event);
      }
    }
  }

  showMorePast() {
    this.currentPagePast += 1;
    this.getPastEvents();
  }


  clearResults() {
    this.upcomingEvents = [];
    this.totalUpcomingEvents = 0;
    this.currentPageUpcoming = 1;
    this.upcomingEventsShown = 0;

    this.pastEvents = [];
    this.totalPastEvents = 0;
    this.currentPagePast = 1;
    this.pastEventsShown = 0;
  }

}
