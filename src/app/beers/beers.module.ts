import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerListComponent } from './beer-list/beer-list.component';
import { RouterModule } from '@angular/router';
import { BeersRouting } from './beers.routing';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { beersReducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { BeersEffects } from './store/beers.effects';
import { BeersService } from './beers.service';
import { BeerDetailComponent } from './beer-list/beer-detail/beer-detail.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { beerFilterPipe } from './beer-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(BeersRouting),
    StoreModule.forFeature('drinks', beersReducers),
    EffectsModule.forFeature([BeersEffects]),
    NgxPaginationModule,
    FormsModule
  ],
  declarations: [
    BeerListComponent,
    BeerDetailComponent,
    beerFilterPipe
  ],
  providers: [
    BeersService
  ]
})
export class BeersModule { }
