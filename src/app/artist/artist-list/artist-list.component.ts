import { Component, Input, OnInit } from '@angular/core';
import { SoundcampService } from '../../services/soundcamp.service';
@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css'],
  providers: [SoundcampService]
})
export class ArtistListComponent implements OnInit {

  // todo:
  // 1) import Soundcamp service and inject it
  // 2) call getArtists() from SoundcampService and pass the argument searchQuery into the function and subscribe to it
  // 2.5) inside .subscribe(), find and save the array object "artist" to a variable e.g artistResult
  // 3) in the template, loop through artistResult and pass each element to child component artist-card

  @Input() searchQuery;

  constructor(private service: SoundcampService) { }

  ngOnInit() {

  }

}
