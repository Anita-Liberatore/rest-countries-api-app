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

  countriesFromRestApi: any;
  searchCountry: any;
  country: string = '';

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries() {
    this.api
      .getData().subscribe((countries: any) => {
        this.countriesFromRestApi = countries
      });
  }

  onKey(event: any) {

    if(event.target.value.length < 1) {
      return this.loadCountries();
    }

    this.country = event.target.value;
    console.log(this.country)

    this.getCountryInputSearch(this.country)
  }


  getCountryInputSearch(countryParam: string) {
    this.api.getCountry(countryParam).subscribe((countries: any) => {
        this.countriesFromRestApi = countries
        console.log(this.countriesFromRestApi)
      });
  }

  onPress(i: any) {
    this.router.navigate(['/prova', {data:JSON.stringify(i)}]);
  }
}
