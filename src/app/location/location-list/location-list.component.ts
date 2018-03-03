import { Component, Input, OnInit } from '@angular/core';
import { SoundcampService } from '../../services/soundcamp.service';
import { DataService } from '../../services/data.service';

//import {Location} from '../../Location';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css'],

})
export class LocationListComponent implements OnInit {

  // todo:
  // 1) import Soundcamp service and inject it
  // 2) call getLocations() and pass the argument searchQuery into the function and subscribe to it
  // 2.5) inside .subscribe(), find and save the array object "location" to a variable e.g locationResult
  // 3) in the template, loop through locationResult and pass each element to child component location-card
  @Input() searchQuery;

  constructor(private service: SoundcampService,private dataservice: DataService) { }

ngOnInit() {


  }





}
