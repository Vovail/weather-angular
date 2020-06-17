import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { locationSearchUrl, locationParams } from './api-constants';

@Injectable()
export class LocationService {
  constructor(private http: HttpClient) {}

  getLocations(query: string) {
    const params = new HttpParams({
      fromObject: { ...locationParams, query },
    });

    return this.http.get(locationSearchUrl, { params });
  }
}
