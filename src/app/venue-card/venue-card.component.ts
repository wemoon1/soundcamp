import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {Http,Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-venue-card',
  templateUrl: './venue-card.component.html',
  styleUrls: ['./venue-card.component.css']
})
export class VenueCardComponent implements OnInit {

  id:any;
  country:any;
  state:any;
  name:any;
  street:any;
   @Input() description:any;
  website:any;
  zip:any;
  phone:any;


    constructor(private http: HttpClient) {

    }
    ngOnInit():void {
      this.http.get('http://api.songkick.com/api/3.0/venues/222.json?apikey=io09K9l3ebJxmxe2')
                      .subscribe((data : any)=> {
                        this.id = data.resultsPage.results.venue.id;
                        this.country = data.resultsPage.results.venue.city.country.displayName;
                        this.state = data.resultsPage.results.venue.city.state.displayName;
                        this.name = data.resultsPage.results.venue.displayName;
                        this.description = data.resultsPage.results.venue.description;
                        this.street = data.resultsPage.results.venue.street;
                        this.zip = data.resultsPage.results.venue.zip;
                        this.phone = data.resultsPage.results.venue.phone;
                        this.website = data.resultsPage.results.venue.website;
                        console.log(data);

                      });
                    }
  }
