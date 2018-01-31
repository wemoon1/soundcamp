/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventCardComponent } from './event-card/event-card.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { HeaderComponent } from './header/header.component';

/* Routes (move to separate file?) */
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'search', component: SearchPageComponent,
    children: [
      { path: ':id', component: SearchListComponent }
    ]
  },
  { path: 'event/:id', component: EventDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EventListComponent,
    EventCardComponent,
    EventDetailComponent,
    SearchListComponent,
    SearchFormComponent,
    SearchPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
