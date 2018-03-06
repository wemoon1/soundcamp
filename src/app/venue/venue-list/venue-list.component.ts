import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { SoundcampService } from '../../services/soundcamp.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.css']
})
export class VenueListComponent implements OnInit, OnChanges {
    // todo:
  // 3) in the template, loop through venueResult and pass each element to child component venue-card
  venueResult:any;
  perPage: number; // how many results per page, usually 5
  totalResults: number; // total number of results
  currentPage = 1; // the current page of results
  resultsShown: number; // how many results that's shown in the template
  @Input() searchQuery;
  constructor(private service: SoundcampService){ }
  ngOnInit() {
  
  }
  ngOnChanges() {
	this.clearResults();
	this.searchVenues();
  }
  searchVenues() {
    this.service.getVenues(this.searchQuery, this.currentPage).subscribe(
      data => this.parseResults(data));
  }
  parseResults(data: any) {
    // don't have to repeat when searchVenues() is called again
    if (this.currentPage < 2) {
      this.perPage = data.resultsPage.perPage;
      this.totalResults = data.resultsPage.totalEntries;
    }
    // how many venues we have shown so far
    this.resultsShown = this.perPage * this.currentPage;
    if (this.totalResults) {
      for (const venue of data.resultsPage.results.venue) {
        this.venueResult.push(venue);
      }
    } else {
      console.log('found no results for venue!');
    }
  }
  showMore() {
    this.currentPage += 1;
    this.resultsShown = this.currentPage * this.perPage;
    this.searchVenues();
  }
  clearResults() {
    this.venueResult = [];
    this.currentPage = 1;
    this.perPage = 0;
    this.totalResults = 0;
    this.resultsShown = 0;
  }
}
