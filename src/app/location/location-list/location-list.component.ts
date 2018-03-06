import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { SoundcampService } from '../../services/soundcamp.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css'],

})
export class LocationListComponent implements OnInit, OnChanges {
  @Input() searchQuery;
  locationResults;

  constructor(private service: SoundcampService, private dataservice: DataService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.searchArtists();
  }

  searchArtists() {
    this.service.getArtists(this.searchQuery, 1).subscribe(
      (data: any) => this.locationResults = data);
  }
}
