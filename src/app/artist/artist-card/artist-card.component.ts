import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable'
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent implements OnInit {
  @Input() artist;
  artistId;
  artistName;
  user;
  followingArtists: Object[];

  constructor(private data: DataService,
          private router: Router,
          private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
          public Auth: AuthService) { }

  ngOnInit() {
    this.parseArtistData();
    const artistsFollowing = [];
    this.afAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.afs.collection('users')
        .doc(this.afAuth.auth.currentUser.uid)
        .collection('following-artists')
        .ref.get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
          artistsFollowing[doc.data().id] = doc.id;
          });
        });
      }
    });
  this.followingArtists = artistsFollowing;
  }

  parseArtistData() {
    if (this.artist) {
      this.artistId = this.artist.id;
      this.artistName = this.artist.displayName;
    } else {
      console.log('empty artist!');
    }
  }

  onSelected() {
    this.data.saveArtist(this.artist);
    this.router.navigate(['artist', this.artistId]);
  }

  onFollow() {
    this.user = this.afAuth.auth.currentUser
    if (this.user) {
      console.log("currently signed in user:")
      console.log(this.user)

      console.log(this.user.displayName)
      console.log(this)
        if (this.artist) {
          this.afs.collection("users").doc(this.user.uid).collection("following-artists")
          .doc(this.artistName).set({id: this.artistId},{merge: true})
          console.log('following...');
          console.log(this.artistName);
		  this.followingArtists[this.artistId] = this.artistName;
		  console.log(this.followingArtists);
        }
        else {
          console.log('empty artist')
        }
    }
    else {
      alert("not logged in!")
    }
  }
  
  unFollow() {
    this.user = this.afAuth.auth.currentUser
	this.afs.collection("users").doc(this.user.uid).collection("following-artists")
    .doc(String(this.followingArtists[this.artistId])).delete();
	this.followingArtists.splice(this.artistId)
  }

}
