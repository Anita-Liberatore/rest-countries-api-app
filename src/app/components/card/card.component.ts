import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CountriesService } from 'src/app/countries.service'
import { Country } from 'src/app/country';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private api: CountriesService, private http: HttpClient) { }

  item = ['Population', 'Region', 'Capital']

  countries: Country[] = [];

  ngOnInit(): void {

    this.http.get<any>('https://restcountries.com/v3.1/all').subscribe(data => {
      data.forEach((i: any) =>

        this.countries.push({
          name: i.name.common,
          flagPhoto: i.flags.png
        })

      )
        console.log(this.countries)

    })
  }
}