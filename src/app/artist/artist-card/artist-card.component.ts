import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

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

  constructor(private data: DataService,
              private router: Router,
              private afAuth: AngularFireAuth,
              private afs: AngularFirestore,) { }

  ngOnInit() {
    this.parseArtistData();
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
        if (this.artist) {
          this.afs.collection("users").doc(this.user.uid).collection("following-artists")
          .doc(String(this.artistName)).set({id: this.artistId},{merge: true})
          console.log('following...');
          console.log(this.artistName);
        }
        else {
          console.log('empty artist')
        }
    }
    else {
      alert("not logged in!")
    }
  }

}
