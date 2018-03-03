import { Component, Input, OnInit } from '@angular/core';
import { SoundcampService } from '../../services/soundcamp.service';
import { DataService } from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.css'],
  providers: [SoundcampService,DataService]
})
export class LocationCardComponent implements OnInit {
  // todo:
  // 1) import DataService and Router and inject it
  // 2) create a variable for storing: city, country, state, and metroArea id
  // 3) find and store the information from input variable location to said variables
  // 4.1) create a function onSelected() which calls DataService and stores the
  // input variable 'location' to the service by calling saveLocation()
  // 4.2) call router and navigate to location with argument metroArea id
  // 5) in the template display the city name, state, and country
  // 6) when the location is clicked by user, call onSelected()
  // see event-card.component.ts for help
  @Input() searchQuery;
  searchRes = [];
  searchEvent=[];

  constructor(private service: SoundcampService,private route: ActivatedRoute,
    private dataservice: DataService) { }

  ngOnInit() {

this.getData();



  }
  getData(){
    this.service.getLocation(this.searchQuery, 1).subscribe((data:any) =>{
      this.searchRes=data.resultsPage.results.location;
      console.log(this.searchQuery);
      console.log('this is data',this.searchRes);


      })
    }


}
