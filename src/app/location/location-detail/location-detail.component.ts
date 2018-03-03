import { Component, Input, OnInit } from '@angular/core';
import { SoundcampService } from '../../services/soundcamp.service';
import { DataService } from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  moduleId:module.id,
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css'],
  providers: [SoundcampService,DataService],
})
export class LocationDetailComponent implements OnInit {
  // todo:
  // 1) import DataService, SoundcampService
  // 2) on component load, call loadLocation() from DataService
  // 3) get relevant information from the location such as city name, country, state, etc.
  // 4) retrieve events from this location by calling getLocationEvents and passing location id
  // 5) display where the location is using google maps api?
  // 6) in the template, call *ngFor on 'event' and pass each element to event-list component
  @Input() location;
  searchEvent=[];
  pagenumber = 1;
  constructor(private service: SoundcampService,private route: ActivatedRoute,
    private dataservice: DataService) { }

  ngOnInit() {
    this.eventdata();

  }


eventdata(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  console.log(id);
  this.service.getEvent(id,1)
  .subscribe((data:any) =>{
       this.searchEvent=data.resultsPage.results.event;
         console.log('this is event',this.searchEvent);
       })
     }
}
