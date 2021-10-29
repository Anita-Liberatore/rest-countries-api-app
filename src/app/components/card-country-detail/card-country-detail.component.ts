import { Component, OnInit, ɵɵclassMapInterpolate1 } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CountriesService } from 'src/app/service/card-countries-service/countries.service';


@Component({
  selector: 'app-card-country-detail',
  templateUrl: './card-country-detail.component.html',
  styleUrls: ['./card-country-detail.component.scss']
})
export class CardCountryDetailComponent implements OnInit {

  elem: any;
  obj: any;
  population: String = ''

  currenciesValues: String = ''

  constructor(private route: ActivatedRoute, private api: CountriesService) { }

  ngOnInit(): void {
    this.elem = this.route.snapshot.paramMap.get("data");
    this.obj = JSON.parse(this.elem);
    this.population = this.obj.population.toLocaleString('de-DE');
 
    this.loadCurrencies()

  }



  loadCurrencies() {
    for (let key of Object.keys(this.obj.currencies)) {
      let keyValue = this.obj.currencies[key]; 
    }
  }
}


