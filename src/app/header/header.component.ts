import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private af: AngularFireAuth, public auth: AuthService) { }

  ngOnInit() {
  }

  gLogin(){
      this.auth.googleLogin();
  }
}
