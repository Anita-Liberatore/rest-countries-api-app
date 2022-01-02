import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardCountryDetailComponent } from './components/card-country-detail/card-country-detail.component';
import { CardComponent } from './components/card/card.component';

const routes: Routes = [
  { path: "", component: CardComponent },
  { path: "country", component: CardCountryDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
