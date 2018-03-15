import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable'

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

  constructor(private data: DataService,
              private router: Router,
              private afsAuth: AngularFireAuth,
              private afs:  AngularFirestore   ) { }

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
           console.log('following...');


  }
}
