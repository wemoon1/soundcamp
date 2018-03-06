import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {SoundcampService} from '../../services/soundcamp.service'


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
  providers: [SoundcampService]
})
export class SearchFormComponent implements OnInit {
  searchForm: FormGroup;



  constructor(
    private soundcampService:SoundcampService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required],
    });
  }


  search() {
    const searchQuery = this.searchForm.value.search;

    if (searchQuery) {
      this.router.navigate(['search', searchQuery]);
      console.log('from search form',searchQuery);
    } else {
      console.log('Empty value, please enter something');

    }
  }

}
