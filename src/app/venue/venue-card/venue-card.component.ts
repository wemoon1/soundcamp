import { Component, OnInit, Input } from '@angular/core';
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

    constructor() { }

    ngOnInit() {

    }
  }
