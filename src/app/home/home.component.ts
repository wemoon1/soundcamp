import { Component, OnInit } from '@angular/core';
import { SoundcampService } from '../services/soundcamp.service';
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

  constructor(private soundcamp: SoundcampService) { }

  ngOnInit() {
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

}
