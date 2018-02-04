import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-venue-detail',
  templateUrl: './venue-detail.component.html',
  styleUrls: ['./venue-detail.component.css']
})
export class VenueDetailComponent implements OnInit {
Child_id:any;
    constructor(private route: ActivatedRoute) { }
  ngOnInit() {
   this.Child_id = this.route.snapshot.params.id;

}



}
