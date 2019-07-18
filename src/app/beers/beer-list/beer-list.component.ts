import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { DrinksState } from '../store';
import { Observable } from 'rxjs/index';
import { getBeersSelector } from '../store/beers.selectors';
import { fetchBeersListRequest } from '../store/beers.actions';

import { Router } from '@angular/router';



@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  public beers$: Observable<any>;

  beers = [1, 2, 4, 5, 6, 7, 8, 9]

  constructor(private store: Store<DrinksState>, private router: Router) { }

  ngOnInit() {
    this.store.dispatch(fetchBeersListRequest());
    this.beers$ = this.store.pipe(select(getBeersSelector));
  }

  goToBeer(beer) {
    this.router.navigate(['/beers/', beer.id]);
  }

}
