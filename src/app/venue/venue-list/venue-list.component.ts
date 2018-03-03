import { Component, OnInit, Input } from '@angular/core';
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
export class VenueListComponent implements OnInit {
    // todo:
  // 3) in the template, loop through venueResult and pass each element to child component venue-card
  venueResult:any;
  @Input() searchQuery;
  
  constructor(private service: SoundcampService){ }

  ngOnInit() {
    if (this.searchQuery) {
	  this.service.getVenues(this.searchQuery, 1).subscribe(data => {
	    console.log("data " + data);
	    this.venueResult = data;
	  });
	}
  }
}