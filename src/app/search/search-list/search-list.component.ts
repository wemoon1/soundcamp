import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SoundcampService } from '../../services/soundcamp.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
  private searchQuery: string;
  private list: any;
  events: any;
  constructor(private route: ActivatedRoute, private service: SoundcampService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.searchQuery = params.get('id');
    });
  }
}
