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
    this.elem = this.route.snapshot.paramMap.get("data");
    this.obj = JSON.parse(this.elem);
    this.population = this.obj.population.toLocaleString('de-DE');

    Object.keys(this.obj.currencies).map((item) => {
      this.obj.currencies[item]['name']
      this.output.push(this.obj.currencies[item]['name']);
    });

    this.currencies = this.output.join()

    console.log(this.currencies)

  }

  onBack() {
    this.router.navigate(['/']);
  }
  
}


