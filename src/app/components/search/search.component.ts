import { Component, Input, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/service/card-countries-service/countries.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private api: CountriesService) { }

  country: string = ''
  
  ngOnInit(): void {
    
  }
  searchCountry: any;

  onKey(event: any) {
    this.country = event.target.value;
    console.log(this.country)

    this.getCountryInputSearch(this.country)
  }


  getCountryInputSearch(countryParam: string) {
    this.api.getCountry(countryParam).subscribe((countries: any) => {
        this.searchCountry = countries
        console.log(this.searchCountry)
      });
  }

}
