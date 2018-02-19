import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent implements OnInit {
  // todo:
  // 1) import DataService and Router and inject it
  // 2) find and store the information from input variable 'artist' such as names and artist id
  // 3.1) create a function onSelected() which calls DataService and stores the input variable 'artist' to the service by calling saveArtist()
  // 3.2) call router and navigate to artist detail page with argument artist id
  // 4) in the template display the artist name and show if the artist is on tour or not by checking 'onTourUntil'
  // 5) when the artist is clicked by user, call onSelected()
  // see event-card.component.ts for help
  @Input() artist;

  constructor() { }

  ngOnInit() {
  }

}
