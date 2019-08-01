import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import 'rxjs/operators';

import {Country, State, City} from '../../../data-models/geo-entities.model';

@Injectable()
export class GeoDataService {
  private restApi = 'http://battuta.medunes.net/api/';
  private apiKey = '00000000000000000000000000000000';
  private callback = 'JSONP_CALLBACK';

  urlParams: URLSearchParams;

  constructor(private  httpClient: HttpClient) {
    this.urlParams = new URLSearchParams();

    this.urlParams.set('key', this.apiKey);
    this.urlParams.set('callback', this.callback);
  }

  getAllCountries(): Promise<Country[]> {
    const queryParameters = new HttpParams().set('key', this.apiKey);

    return this.httpClient.get<Country>(this.restApi + 'country/all/', {params: queryParameters})
      .toPromise().then((response: any) => response as Country[]);
  }

  getAllStatesByCountryCode(countryCode: string): Promise<State[]> {
    const queryParameters = new HttpParams().set('key', this.apiKey);

    return this.httpClient.get<State>(this.restApi + 'region/' + countryCode + '/all/', {params: queryParameters})
      .toPromise().then((response: any) => response as State[]);
  }

  getAllCitiesByStateName(countryCode: string, stateName: string): Promise<City[]> {
    const queryParameters: HttpParams = new HttpParams()
      .set('region', stateName)
      .set('key', this.apiKey);

    return this.httpClient.get<City>(this.restApi + 'city/' + countryCode + '/search/', {params: queryParameters})
      .toPromise()
      .then((response: any) => response as City[])
      .catch();
  }

}
