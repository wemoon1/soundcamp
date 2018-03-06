import { Component, Input, OnInit } from '@angular/core';
import { SoundcampService } from '../../services/soundcamp.service';
import { DataService } from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.css'],
})
export class LocationCardComponent implements OnInit {
  @Input() location;

  constructor(private service: SoundcampService, private route: ActivatedRoute,
    private dataservice: DataService) { }

  ngOnInit() {
  }
}
