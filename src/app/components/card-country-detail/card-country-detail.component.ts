import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { CountriesService } from 'src/app/service/card-countries-service/countries.service';


@Component({
  selector: 'app-card-country-detail',
  templateUrl: './card-country-detail.component.html',
  styleUrls: ['./card-country-detail.component.scss']
})
export class CardCountryDetailComponent implements OnInit {

  elem: any;
  obj: any;
  objCountryName: any;
  population: String = ''

  constructor(private route: ActivatedRoute, private api: CountriesService) { }

  ngOnInit(): void {
    this.elem = this.route.snapshot.paramMap.get("data");
    this.obj = JSON.parse(this.elem);
    this.population = this.obj.population.toLocaleString('de-DE');
    this.getCountryName(this.obj.name.common);
  }
  

  getCountryName(countryName: string) {
    this.api.getCountry(countryName).subscribe((country: any) => {
        this.objCountryName = country
      });
  }
}
