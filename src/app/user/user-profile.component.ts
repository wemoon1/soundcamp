import { Component, OnInit } from '@angular/core';
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
artistsFollowings=[];
auth;
  constructor(private afs: AngularFirestore,
              private afsauth: AngularFireAuth,
              public Auth: AuthService,
              private data: DataService
               ) { }

  ngOnInit() {
     this.Auth.user.subscribe(data => this.getFutureEvents(data));
     this.Auth.user.subscribe(data => this.getFollowingArtists(data));
  }

  getFutureEvents(data:any){
    const collection: AngularFirestoreCollection<any> = this.afs.collection('users').doc(data.uid).collection('future-events')
    collection.valueChanges().subscribe(data => this.collections=data);
  }
  getFollowingArtists(data){
    const artistsFollowing = [];
    this.afs.collection('users').doc(data.uid).collection('following-artists').ref.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        artistsFollowing.push([doc.id,doc.data().id]);
        console.log(artistsFollowing)
      });
    });
    this.artistsFollowings = artistsFollowing;
  }
}
