import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-card-country-detail',
  templateUrl: './card-country-detail.component.html',
  styleUrls: ['./card-country-detail.component.scss']
})
export class CardCountryDetailComponent implements OnInit {

  elem: any;

  obj: any;

  population: String = ''

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.elem = this.route.snapshot.paramMap.get("data");
    this.obj = JSON.parse(this.elem);

  
    this.population = this.obj.population;
    console.log(this.obj);

  

  }

}