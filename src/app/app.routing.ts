import { Routes } from '@angular/router';
import { BeerDetailComponent } from './beers/beer-list/beer-detail/beer-detail.component'

export const AppRoutes: Routes = [
  { path: '', redirectTo: '/beers', pathMatch: 'full' },
  // { path: '**', redirectTo: '/beers', pathMatch: 'full' },
  { path: 'beers/:id', component: BeerDetailComponent }
];
