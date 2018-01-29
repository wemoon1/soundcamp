/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VenueListComponent } from './venue-list/venue-list.component';
import { VenueCardComponent } from './venue-card/venue-card.component';
import { VenueDetailComponent } from './venue-detail/venue-detail.component';
import { UserComponent } from './user/user.component';
import { VenueIdComponent } from './venue-detail/venue-id.component';
import { UserIdComponent } from './user/user-id.component';
/* Routes (move to separate file?) */
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'venue-list', component:  VenueListComponent  },
  { path: 'venue-card', component: VenueCardComponent },
  { path: 'venue-detail', component: VenueDetailComponent },
  { path: 'venue-detail/:id', component: VenueIdComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/:id', component: UserIdComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    VenueListComponent,
    VenueCardComponent,
    VenueIdComponent,
    VenueDetailComponent,
    UserComponent,
    UserIdComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
