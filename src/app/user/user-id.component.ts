import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user.component.css']
})
export class UserIdComponent implements OnInit {


id = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
  }

}
