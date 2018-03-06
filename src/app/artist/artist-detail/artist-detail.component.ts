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

  perPage = 5;

  onTour = false;
  constructor(
    private data: DataService,
    private soundcamp: SoundcampService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.artist = this.data.loadArtist();
    if (this.artist) {
      if (this.artist.onTourUntil) {
        this.onTour = true;
        this.getUpcomingEvents();
      }
    } else {
      this.router.navigate(['']);
    }
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

  clearResults() {
    this.upcomingEvents = [];
    this.totalUpcomingEvents = 0;
    this.currentPageUpcoming = 1;
    this.upcomingEventsShown = 0;
  }

}
