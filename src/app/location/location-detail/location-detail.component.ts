import { Component, Input, OnInit } from '@angular/core';
import { SoundcampService } from '../../services/soundcamp.service';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css'],
})
export class LocationDetailComponent implements OnInit {
  location: any;
  searchEvent = [];
  pagenumber = 1;

  constructor(private service: SoundcampService, private route: ActivatedRoute,
    private dataservice: DataService,
  private router: Router) { }

  ngOnInit() {
    this.location = this.dataservice.loadLocation();
    if(this.location) {
      this.eventdata();
    } else {
      this.router.navigate(['']);
    }
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
