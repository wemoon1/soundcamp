/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ArtistCardComponent } from './artist/artist-card/artist-card.component';
import { ArtistListComponent } from './artist/artist-list/artist-list.component';
import { ArtistDetailComponent } from './artist/artist-detail/artist-detail.component';
import { VenueListComponent } from './venue/venue-list/venue-list.component';
import { VenueCardComponent } from './venue/venue-card/venue-card.component';
import { VenueDetailComponent } from './venue/venue-detail/venue-detail.component';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user/user-profile.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventCardComponent } from './event/event-card/event-card.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { SearchListComponent } from './search/search-list/search-list.component';
import { SearchFormComponent } from './search/search-form/search-form.component';
import { SearchPageComponent } from './search/search-page/search-page.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LocationDetailComponent } from './location/location-detail/location-detail.component';
import { LocationListComponent } from './location/location-list/location-list.component';
import { LocationCardComponent } from './location/location-card/location-card.component';
import { UserCardComponent } from './user/user-card/user-card.component';

/* Services */
import { SoundcampService } from './services/soundcamp.service';
import { DataService } from './services/data.service';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NotificationComponent } from './notification/notification.component';

/* Routes (move to separate file?) */
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'artist/:id', component: ArtistDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchPageComponent,
    children: [
      { path: ':id', component: SearchListComponent }
    ]
  },
  { path: 'event/:id', component: EventDetailComponent },
  { path: 'venue/:id', component: VenueDetailComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'location/:id', component: LocationDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    ArtistCardComponent,
    ArtistListComponent,
    ArtistDetailComponent,
    VenueListComponent,
    VenueCardComponent,
    VenueDetailComponent,
    UserComponent,
    UserProfileComponent,
    EventListComponent,
    EventCardComponent,
    EventDetailComponent,
    SearchListComponent,
    SearchFormComponent,
    SearchPageComponent,
    HeaderComponent,
    LocationDetailComponent,
    LocationListComponent,
    LocationCardComponent,
    RegisterComponent,
    NotificationComponent,
    UserCardComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgbModule.forRoot()
  ],
  providers: [
    DataService,
    SoundcampService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
