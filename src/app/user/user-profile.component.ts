import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user-Profile.component.html',
  styleUrls: ['./user.component.css']
})
export class UserProfileComponent implements OnInit {


id = '';
  constructor(private route: ActivatedRoute,
              public auth: AuthService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
  }

}
