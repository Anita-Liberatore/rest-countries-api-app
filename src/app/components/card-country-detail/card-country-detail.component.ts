import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { CountriesService } from 'src/app/service/card-countries-service/countries.service';


@Component({
  selector: 'app-card-country-detail',
  templateUrl: './card-country-detail.component.html',
  styleUrls: ['./card-country-detail.component.scss']
})
export class CardCountryDetailComponent implements OnInit {

  elem: any;
  obj: any;
  population: string = ''
  output: string[] = [];
  languagesOutput: string[] = [];
  currencies: string = '';
  languages: string = '';

  constructor(private route: ActivatedRoute, private api: CountriesService, private router: Router) { }

  ngOnInit(): void {

  this.getCountryData();
  }

  onBack() {
    this.router.navigate(['/']);
  }

  getCountryData() {
    const countryFromRoute = this.route.snapshot.paramMap;

  }
  
}


