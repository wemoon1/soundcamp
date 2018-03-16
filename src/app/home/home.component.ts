import { Component, OnInit } from '@angular/core';
import { SoundcampService } from '../services/soundcamp.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clientHasGeolocationEnabled = true;
  geolocationPosition: Position;
  loading = true;
  nearEvents: any;
  loggedIn = false;
  // artistsOnTour = [];
  upcomingEvents = [];

  constructor(private soundcamp: SoundcampService,
              private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private data: DataService) { }

  ngOnInit() {
    this.notifyEvents();
    this.getMyEvents();
    this.findEventsNearMe();
  }

  notifyEvents() {
    // sample id: mock@gmail.com | mock123
    const followingArtists = {};
    this.afAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.loggedIn = true;
        this.afs.collection('users')
        .doc(user.uid)
        .collection('following-artists').ref.get().then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            followingArtists[doc.id] = doc.data();
          });
        }).then(() => {
          this.findArtistsOnTour(followingArtists);
        });
      } else {
        this.loggedIn = false;
      }
    });
  }

  findArtistsOnTour(artists: any) {
    const artistsOnTour = [];
    for (const key in artists) {
      if (artists.hasOwnProperty(key)) {
        const artistId = artists[key].id;
        this.soundcamp.getArtistEvents(artistId, 1).subscribe((res: any) => {
          console.log('called sc service!');
          if (res.resultsPage.totalEntries > 0) {
            artistsOnTour.push(key);
          }
        });
      }
    }
    this.data.changeMsg(artistsOnTour);
  }

  getMyEvents() {
    const something = [];
    this.afAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.afs.collection('users').doc(user.uid).collection('future-events').ref.get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              something.push(doc.data().name);
            });
        }).then(() => {
          this.upcomingEvents = something;
          console.log(this.upcomingEvents);
        });
      }
    });
  }

  findEventsNearMe() {
    this.afAuth.auth.onAuthStateChanged((user) => {
      if (!user) {
        if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
          (position) => {
            this.loading = false; // the geo location has been loaded, set it to false
            this.clientHasGeolocationEnabled = true; // client has enabled geolocation
            this.geolocationPosition = position;
            const backupPosition = {
              coords : {
                'latitude': 51.5074,
                'longitude': 0.1278
              }
            };
            this.soundcamp.getNearestEvents(backupPosition, 1).subscribe( (data: any) => {
              this.nearEvents = data.resultsPage.results.event;
              console.log(this.nearEvents);
            });
          }
        );
      }
    }
    });
  }
}
