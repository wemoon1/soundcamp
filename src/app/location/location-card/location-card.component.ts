import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable'
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.css'],
})
export class LocationCardComponent implements OnInit {
  @Input() location;
locationId;
locationName;
  constructor(private data: DataService,
              private router: Router,
              private afAuth: AngularFireAuth,
              private afs: AngularFirestore,) { }

    ngOnInit() {
      this.parseLocationData();
    }

    parseLocationData() {
      if (this.location) {
        this.locationId = this.location.metroArea.id
        this.locationName = this.location.displayName;
      } else {
        console.log('empty location!');
      }
    }

    onSelected() {
      this.data.saveLocation(this.location);
      this.router.navigate(['location', this.locationId]);
    }


  }
