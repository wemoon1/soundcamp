import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})

export class UserCardComponent implements OnInit, OnChanges {
  @Input() searchQuery;
  userResults = [];

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.clearUsers();
    this.searchUsers();
    console.log(this.searchQuery);
  }

  searchUsers() {
    const inputParam = this.searchQuery;
    const results = [];
    if (this.searchQuery) {
      const regex = new RegExp(".*"+this.searchQuery+".*");
      this.afs.collection("users").ref.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          if (regex.test(doc.data().displayName)) {
            results.push({id: doc.id, title: doc.data().displayName});
          }
        });
      });
      this.userResults = results;
    }
  }

  clearUsers() {
    this.userResults = [];
  }
}


