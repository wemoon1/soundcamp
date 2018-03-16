import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  displayName = [];
  constructor(private data: DataService, private router: Router, private afAuth: AngularFireAuth,
    private afs: AngularFirestore) { }

  ngOnInit() {
    this.data.currentMsg.subscribe(newMsg => {
      this.displayName = newMsg;
    });
  }

  insertNames(obj: any) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        this.displayName.push(key);
      }
    }
  }

  onSelected(artistName) {
    let artistId;
    let artistPayload;
    this.afAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.afs.collection('users')
        .doc(user.uid)
        .collection('following-artists').ref.get().then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            if (doc.id === artistName) {
              artistId = doc.data().id;
              return;
            }
          });
          artistPayload = {
            'displayName' : artistName,
            'id': artistId,
            'onTourUntil': 'yyyy-mm-dd'
          };
        }).then(() => {
          this.data.saveArtist(artistPayload);
          this.router.navigate(['artist', artistId]);
        });
      } else {
        console.log('user not logged in');
      }
    });
  }
}
