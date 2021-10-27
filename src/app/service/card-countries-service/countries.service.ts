import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  localUrl = 'https://restcountries.com/v3.1/all';

  getData() {
    return this.http.get(this.localUrl);
  }
}
