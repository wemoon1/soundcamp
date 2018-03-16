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
  events: any;

  constructor(private soundcamp: SoundcampService,
              private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private data: DataService) { }

  ngOnInit() {
    this.notifyEvents();
    // if (window.navigator.geolocation) {
    //   window.navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //       this.loading = false; // the geo location has been loaded, set it to false
    //       this.clientHasGeolocationEnabled = true; // client has enabled geolocation
    //       this.geolocationPosition = position;
    //       this.soundcamp.getNearestEvents(position, 1).subscribe(data => {
    //         console.log(data);
    //       });
    //     }
    //   );
    // }
  }

  notifyEvents() {
    // sample id: mock@gmail.com | mock123Q
    const followingArtists = {};
    this.afAuth.auth.onAuthStateChanged((user) => {
      if (user) {
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
        console.log('user not logged in');
      }
    });
  }

  findArtistsOnTour(artists: any) {
    const artistsOnTour = [];
    for (const key in artists) {
      if (artists.hasOwnProperty(key)) {
        const artistId = artists[key].id;
        artistsOnTour.push(key)
        // this.soundcamp.getArtistEvents(artistId, 1).subscribe((res: any) => {
        //   if (res.resultsPage.totalEntries > 0) {
        //     artistsOnTour.push(key);
        //   }
        // });
      }
    }
    this.data.changeMsg(artists);
  }

}
