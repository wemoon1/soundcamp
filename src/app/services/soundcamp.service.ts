import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SoundcampService {
  private BASE_URL = 'https://desolate-harbor-18722.herokuapp.com/api';

  constructor() { }

  private urlBuilder(resourceUrl: string, params?: Array<string>) {
    let url = `${this.BASE_URL}${resourceUrl}`;
    if (params) {
      url += `${params.join('/')}`;
    }
    return url;
  }
}
