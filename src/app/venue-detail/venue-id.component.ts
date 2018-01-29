import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-venue-detail',
  templateUrl: './venue-id.component.html',
  styleUrls: ['./venue-detail.component.css']
})
export class VenueIdComponent implements OnInit {


id = ' ';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   this.id = this.route.snapshot.params.id;
}
}
