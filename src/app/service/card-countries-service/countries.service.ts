import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Country } from 'src/app/model/country';



@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }
  countries: Country[] | undefined;

  localUrlData = 'https://restcountries.com/v3.1/all';
  
  
  getData() {
    return this.http.get<Country[]>(this.localUrlData);
  }

  
  getCountry(country: string) {
    return this.http.get(`https://restcountries.com/v2/name/${country}`);
  }

}
