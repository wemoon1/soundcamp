
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { SoundcampService } from '../../services/soundcamp.service';


@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css'],
  providers: [SoundcampService]
})

export class ArtistListComponent implements OnInit, OnChanges {

  // todo:
  // 1) import Soundcamp service and inject it
  // 2) call getArtists() from SoundcampService and pass the argument searchQuery into the function and subscribe to it
  // 2.5) inside .subscribe(), find and save the array object "artist" to a variable e.g artistResult
  // 3) in the template, loop through artistResult and pass each element to child component artist-card

  @Input() searchQuery;
  artistResults = []; // self explanatory, a list of artists
  perPage: number; // how many results per page, usually 5
  totalResults: number; // total number of results
  currentPage = 1; // the current page of results
  resultsShown: number; // how many results that's shown in the template

  constructor(private service: SoundcampService) { }

  ngOnInit() {

  }

  // called when searchQuery changes
  // clear the results and search artist(s)
  ngOnChanges() {
    this.clearResults();
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
      for (const artist of data.resultsPage.results.artist) {
        this.artistResults.push(artist);
      }
    } else {
      console.log('found no results for artst!');
    }
  }

  showMore() {
    this.currentPage += 1;
    this.resultsShown = this.currentPage * this.perPage;
    this.searchArtists();
  }

  clearResults() {
    this.artistResults = [];
    this.currentPage = 1;
    this.perPage = 0;
    this.totalResults = 0;
    this.resultsShown = 0;
  }
}
