import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/model/country';
import { CountriesService } from 'src/app/service/card-countries-service/countries.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private api: CountriesService, private router: Router) { }

  countriesFromRestApi: any;
  searchCountry: string = '';

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries() {
    this.api
      .getData().subscribe((result: Country[]) => {
        this.countriesFromRestApi = result
      });
  }

  onPress(i: any) {
    this.router.navigate(['/prova', {data:JSON.stringify(i)}]);
  }
}
