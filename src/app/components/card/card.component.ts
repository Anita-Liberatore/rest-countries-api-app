import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountriesService } from 'src/app/service/card-countries-service/countries.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private api: CountriesService, private router: Router) { }

  item = ['Population', 'Region', 'Capital']

  countriesFromRestApi: any;

  searchCountry: any;

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries() {
    this.api
      .getData().subscribe((countries: any) => {
        this.countriesFromRestApi = countries
      });
  }

  onPress(i: any) {
    this.router.navigate(['/prova', {data:JSON.stringify(i)}]);
    
  }
}
