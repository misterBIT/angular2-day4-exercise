import {Injectable} from '@angular/core';
import {URLSearchParams, Jsonp} from '@angular/http';
import {Observable} from "rxjs";
@Injectable()
export class StocksService {
  static baseUrl = `http://dev.markitondemand.com/Api/v2/`;

  constructor(private http: Jsonp) {
  }

  lookup(search: string): Observable<any[]> {
    let searchParams = new URLSearchParams();
    searchParams.set('input', search);
    searchParams.set('jsoncallback', 'JSONP_CALLBACK');
    return this.http.get(StocksService.baseUrl + 'Lookup/jsonp', {search: searchParams}).map(res => res.json());
  }

  qoute(symbol: string): Observable<any[]> {
    let searchParams = new URLSearchParams();
    searchParams.set('symbol', symbol);
    searchParams.set('jsoncallback', 'JSONP_CALLBACK');
    return this.http.get(StocksService.baseUrl + 'Quote/jsonp', {search: searchParams}).map(res => res.json());
  }


}
