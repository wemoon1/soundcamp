import { Component, Input, OnInit } from '@angular/core';
import { SoundcampService } from '../../services/soundcamp.service';
import { DataService } from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css'],
})
export class LocationDetailComponent implements OnInit {
  @Input() location;
  searchEvent = [];
  pagenumber = 1;
  constructor(private service: SoundcampService, private route: ActivatedRoute,
    private dataservice: DataService) { }

  ngOnInit() {
    this.eventdata();
  }

  eventdata(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.service.getEvent(id, 1)
    .subscribe((data: any) => {
        this.searchEvent = data.resultsPage.results.event;
          console.log('this is event', this.searchEvent);
        });
  }
}
