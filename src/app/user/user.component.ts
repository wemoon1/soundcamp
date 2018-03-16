import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../core/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  id;
  user;
  upcomingEvents = [];
  artistsFollowing = [];

  constructor(private route: ActivatedRoute,
              private afs: AngularFirestore,
              private afsauth: AngularFireAuth,
              public Auth: AuthService,) { }

  ngOnInit(){
    this.id = this.route.snapshot.params.id;
    this.getUser();
    this.getFutureEvents();
    this.getFollowingArtists();
  }

  getUser(){
    console.log(this.id)
    const userInfo;
    var user = this.afs.collection('users').doc(this.id)
    user.ref.get().then(function(doc) {
        userInfo = doc.data();
    }).then(() => {
      this.fetchUser(userInfo);
    });
  }

  getFutureEvents(){
    const Events = [];
    this.afs.collection('users').doc(this.id)
    .collection('future-events').ref.get().then(function(querySnapshot){
      querySnapshot.forEach(function(doc) {
        Events.push(doc.data());
      });
    }).then(() => {
      this.fetchEvents(Events);
    });
  }

  getFollowingArtists(){
    const Artists = [];
    this.afs.collection('users').doc(this.id)
    .collection('following-artists').ref.get().then(function(querySnapshot){
      querySnapshot.forEach(function(doc) {
        Artists.push([doc.id,doc.data().id]);
      });
    }).then(() => {
      this.fetchArtists(Artists);
    });
  }

  fetchUser(userInfo){
    this.user = userInfo;
  }
  fetchEvents(Events) {
    this.upcomingEvents = Events;
  }
  fetchArtists(Artists) {
    this.artistsFollowing = Artists;
    console.log(this.artistsFollowing)
  }
}
