import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable'
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user-Profile.component.html',
  styleUrls: ['./user.component.css']
})
export class UserProfileComponent implements OnInit {


id = '';
collections=[];
auth;
  constructor(private route: ActivatedRoute,
              private afs: AngularFirestore,
              private afsauth: AngularFireAuth,
              public Auth: AuthService
               ) { }

  ngOnInit() {

this.Auth.user.subscribe(data => this.getdata(data));
  }
//this.user = this.afsauth.auth.currentUser
getdata(data:any){
const collection: AngularFirestoreCollection<any> = this.afs.collection('users').doc(data.uid).collection('future-events').valueChanges()
collection.subscribe(data => this.collections=data) )
}
console.log(this.collections)
}
