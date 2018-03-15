import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable'

import { AngularFireAuth } from 'angularfire2/auth';


export interface Event {
  eventid: string;
  eventname: string;
}


@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {
  @Input() event;
  eventName;
  id;
  auth;
  user;
  constructor(private router: Router, private data: DataService,
  private afs: AngularFirestore, private afsAuth: AngularFireAuth) { }

  ngOnInit() {



    if (this.event) {
      this.eventName = this.event.displayName;
      this.id = this.event.id;
    }
  }

  selectEvent() {
    this.data.saveEvent(this.event);
    this.router.navigate(['event', this.id]);
  }
  addtoFirestore(){
    this.user = this.afsAuth.auth.currentUser
     if (this.user) {
      this.afs.collection("users").doc(this.user.uid).collection("future-events")
           .doc(String(this.id)).set({name: this.eventName},{merge: true})
           console.log('following...');
           console.log(this.user);

  }

}
}
