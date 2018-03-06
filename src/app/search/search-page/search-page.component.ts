import { Component, OnInit } from '@angular/core';
import {SoundcampService} from '../../services/soundcamp.service'

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
  providers: [SoundcampService]
})
export class SearchPageComponent implements OnInit {

  constructor(private soundcampService:SoundcampService) {
   }

  ngOnInit() {

  }

}
