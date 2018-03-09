import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { SoundcampService } from '../../services/soundcamp.service';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css'],
    providers: [SoundcampService]

})
export class LocationListComponent implements OnInit, OnChanges {
  @Input() searchQuery;
  locationResults=[];
  perPage: number; // how many results per page, usually 5
  totalResults: number; // total number of results
  currentPage = 1; // the current page of results
  resultsShown: number; // how many results that's shown in the template

  constructor(private service: SoundcampService, private dataservice: DataService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.searchLocation();
  }
  searchLocation() {
    this.service.getLocation(this.searchQuery, this.currentPage).subscribe(
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
      for (const location of data.resultsPage.results.location) {
        this.locationResults.push(location);
      }
    } else {
      console.log('found no results for location!');
    }
  }
  showMore() {
    this.currentPage += 1;
    this.resultsShown = this.currentPage * this.perPage;
    this.searchLocation();
  }

  clearResults() {
    this.locationResults = [];
    this.currentPage = 1;
    this.perPage = 0;
    this.totalResults = 0;
    this.resultsShown = 0;
  }

}
