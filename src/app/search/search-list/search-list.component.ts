import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SoundcampService } from '../../services/soundcamp.service';


@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css'],
  providers: [SoundcampService]
})
export class SearchListComponent implements OnInit {
 searchQuery: string;
  private searchRes: Location[];
  private list: any;
  events: any;
  constructor(private route: ActivatedRoute, private service: SoundcampService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.searchQuery = params.get('id');
    //  console.log(this.searchQuery);
      });

  }


}
