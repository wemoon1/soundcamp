import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notificationItems;
  displayName = [];
  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.data.currentMsg.subscribe(newMsg => {
      this.displayName = [];
      this.notificationItems = newMsg;
      for (const key in newMsg) {
        if (newMsg.hasOwnProperty(key)) {
          this.displayName.push(key);
        }
      }
    });
  }

  onSelected(artistName) {
    const artistId = this.notificationItems[artistName].id;
    const artistPayload = {
      'displayName' : artistName,
      'id': artistId,
      'onTourUntil': 'yyyy-mm-dd'
    };
    this.data.saveArtist(artistPayload);
    this.router.navigate(['artist', artistId]);
  }
}
