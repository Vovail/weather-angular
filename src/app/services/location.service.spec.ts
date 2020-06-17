import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { LocationService } from './location.service';
import { ILocationsApiData } from '../store/location/location.reducer';
import { locationSearchUrl, locationParams } from './api-constants';

const mockLocationRespons: ILocationsApiData = {
  location: {
    address: [
      'Kyiv, Kyiv Oblast, Ukraine',
      'Khiv, Khivsky District, Republic of Dagestan, Russia',
    ],
    adminDistrict: ['Kyiv Oblast', 'Republic of Dagestan'],
    adminDistrictCode: [null, null],
    city: ['Kyiv', 'Khiv'],
    country: ['Ukraine', 'Russia'],
    countryCode: ['UA', 'RU'],
    displayName: ['Kyiv', 'Khiv'],
    ianaTimeZone: ['Europe/Kiev', 'Europe/Moscow'],
    latitude: [50.45, 41.753],
    locale: [
      { locale1: null, locale2: 'Kyiv', locale3: null, locale4: null },
      {
        locale1: 'Khivsky District',
        locale2: 'Khiv',
        locale3: null,
        locale4: null,
      },
    ],
    longitude: [30.524, 47.929],
    neighborhood: [null, null],
    placeId: [
      'd198c31dca17aa9ac8e4ff2e4dbdb48e4ca8c01f0fd1369998f0a09f53ef0b1d',
      'cda62f9946a9a990d2f27b1c7085d1062bd5e055531f475bd02f877c62f13047',
    ],
    postalCode: ['010', '3686'],
    postalKey: ['010:UA', '3686:RU'],
    disputedArea: [false, false],
    iataCode: ['IEV', 'MCX'],
    icaoCode: ['UKKK', 'URML'],
    locId: [null, null],
    locationCategory: [null, null],
    pwsId: [null, null],
    type: ['city', 'city'],
  },
};

describe('LocationService', () => {
  let service: LocationService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LocationService],
    });
    service = TestBed.get(LocationService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should provide mocked data', () => {
    service.getLocations('test').subscribe((data: ILocationsApiData) => {
      expect(data).not.toBe(null);
      expect(JSON.stringify(data)).toEqual(JSON.stringify(mockLocationRespons));
    });
    const params = Object.entries({ ...locationParams, query: 'test' })
      .map(([key, val]) => `${key}=${val}`)
      .join('&');
    
    const req = httpTestingController.expectOne(
      locationSearchUrl + '?' + params
    );

    req.flush(mockLocationRespons);
  });
});
