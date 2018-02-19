import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.css']
})
export class VenueListComponent implements OnInit {
    // todo:
  // 1) import Soundcamp service and inject it
  // 2) call getVenues() from SoundcampService and pass the argument searchQuery into the function and subscribe to it
  // 2.5) inside .subscribe(), find and save the array object "venue" to a variable e.g venueResult
  // 3) in the template, loop through venueResult and pass each element to child component venue-card

  @Input() searchQuery;
    constructor() { }

    ngOnInit() {

  }
  }
