import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountriesService } from 'src/app/service/card-countries-service/countries.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private api: CountriesService, private http: HttpClient) { }

  item = ['Population', 'Region', 'Capital']


  countriesFromRestApi: any;

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries() {
    this.api
      .getData().subscribe((countries: any) => {
        this.countriesFromRestApi = countries
        console.log(this.countriesFromRestApi)
      });
  }
}