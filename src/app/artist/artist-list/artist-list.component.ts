import { Component, Input, OnInit } from '@angular/core';
import { SoundcampService } from '../../services/soundcamp.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {
  // todo:
  // 1) import Soundcamp service and inject it
  // 2) call getArtists() from SoundcampService and pass the argument searchQuery into the function and subscribe to it
  // 2.5) inside .subscribe(), find and save the array object "artist" to a variable e.g artistResult
  // 3) in the template, loop through artistResult and pass each element to child component artist-card

  @Input() searchQuery;
  artistResults: any;
  perPage: number;
  totalResults: number;
  currentPage = 1;
  resultsShown: number;

  constructor(private service: SoundcampService) { }

  ngOnInit() {
    this.searchArtists();
  }

  searchArtists() {
    this.service.getArtists(this.searchQuery, this.currentPage).subscribe(
      data => this.parseResults(data));
  }

  parseResults(data: any) {
    // don't have to repeat when searchArtist() is called again
    if (this.currentPage < 2) {
      this.perPage = data.resultsPage.perPage;
      this.totalResults = data.resultsPage.totalEntries;
    }
    // how many artists we have shown so far
    this.resultsShown = this.perPage * this.currentPage;
    if (this.totalResults) {
      // for (const artist of data.resultsPage.results.artist) {
      //   this.artistResults.push(artist);
      // }
      this.artistResults = data.resultsPage.results.artist;
    } else {
      console.log('found no results for artst!');
    }
  }

}
