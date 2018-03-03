import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SoundcampService } from '../../services/soundcamp.service';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {
  // todo:
  // 1) import DataService
  // 2) on component load, call loadArtist() from DataService
  // 3) get the array object "event" by calling getArtistEvents() from SoundcampService
  // 4) in the template, call *ngFor on 'event' and pass each element to event-list component
  // see event-card.component.ts for help
  artist: any;
  upcomingEvents: any;
  onTour = false;
  constructor(private data: DataService, private service: SoundcampService) { }

  ngOnInit() {
    this.artist = this.data.loadArtist();
    if (this.artist) {
      if (this.artist.onTourUntil) {
        this.onTour = true;
        this.getUpcomingEvents();
      }
    }
  }

  getUpcomingEvents() {
    this.service.getArtistEvents(this.artist.id, 1).subscribe(data => {
      this.upcomingEvents = data;
      this.upcomingEvents = this.upcomingEvents.resultsPage.results.event;
    });
  }

}
