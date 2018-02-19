import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
