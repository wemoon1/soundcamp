import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SoundcampService {
  private BASE_URL = 'https://desolate-harbor-18722.herokuapp.com/api/';

  constructor(private http: HttpClient) { }

  /*
   * urlBuilder
   * useage:
   * resourceUrl = venues/search/catalyst/1
   *
   * url output should look something like:
   * https://desolate-harbor-18722.herokuapp.com/api/venue/search/catalyst/1
   */
  private urlBuilder(resourceUrl: string) {
    return `${this.BASE_URL}${resourceUrl}`;
  }

  /*
   * getVenues
   * useage:
   * query = 'catalyst'
   * pageNumber = 1
   *
   * returns Observable which you can call .subscribe() on it:
   * SoundcampService.getVenues(query, pageNumber).subscribe(data => console.log(data));
   */
  getVenues(query: string, pageNumber: number): Observable<object> {
    const resourceUrl = 'venues/search/' + query + '/' + pageNumber;
    const requestUrl = this.urlBuilder(resourceUrl);

    return this.http.get(requestUrl);
  }

  getVenueEvents(venueId: string, pageNumber: number): Observable<object> {
    const resourceUrl = 'venues/' + venueId + '/events/' + pageNumber;
    const requestUrl = this.urlBuilder(resourceUrl);

    return this.http.get(requestUrl);
  }


  getLocation(query: string, pageNumber: number): Observable<object> {
    const resourceUrl = 'locations/search/' + query + '/' + pageNumber;
    const requestUrl = this.urlBuilder(resourceUrl);

    return this.http.get(requestUrl);
  }

  getArtists(query: string, pageNumber: number): Observable<object> {
    const resourceUrl = 'artists/search/' + query + '/' + pageNumber;

    const requestUrl = this.urlBuilder(resourceUrl);

    return this.http.get(requestUrl);
  }


 getEvent(metroAreaId: number, pageNumber: number): Observable<object> {
   const resourceUrl = 'locations/'+ metroAreaId +'/events/' + pageNumber;
   const requestUrl = this.urlBuilder(resourceUrl);

   return this.http.get(requestUrl);
 }







  getArtistEvents(artistId: string, pageNumber: number): Observable<object> {
    const resourceUrl = 'artists/' + artistId + '/events/' + pageNumber;
    const requestUrl = this.urlBuilder(resourceUrl);

    return this.http.get(requestUrl);
  }

  getArtistPastEvents(artistId: string, pageNumber: number): Observable<object> {
    const resourceUrl = 'artists/' + artistId + '/gigography/' + pageNumber;
    const requestUrl = this.urlBuilder(resourceUrl);

    return this.http.get(requestUrl);
  }

  getNearestEvents(position: any, pageNumber: number): Observable<object> {
    const resourceUrl = 'locations/' + position.coords.latitude + '/' + position.coords.longitude + '/events/' + pageNumber;
    const requestUrl = this.urlBuilder(resourceUrl);

    return this.http.get(requestUrl);
  }

}
