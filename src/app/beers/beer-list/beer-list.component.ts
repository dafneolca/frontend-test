import { Component, OnInit, ViewChildren } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { DrinksState } from '../store';
import { Observable } from 'rxjs/index';
import { getBeersSelector } from '../store/beers.selectors';
import { fetchBeersListRequest } from '../store/beers.actions';

import { Router } from '@angular/router';
import { BeersEffects } from '../store/beers.effects';

// import { InfiniteScroll } from 'ngx-infinite-scroll';

// import { BehaviourSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss'],
  // directives: [InfiniteScroll],
})
export class BeerListComponent implements OnInit {

  @ViewChildren('beerFilterResult') createdItems;

  public beers$: Observable<any>;

  userSearch: string;

  itemsPage: number = 3;
  onPage: number = 1;

  // beer-not-found

  constructor(private store: Store<DrinksState>, private router: Router) { }

  ngOnInit() {
    this.store.dispatch(fetchBeersListRequest());
    this.beers$ = this.store.pipe(select(getBeersSelector));
    console.log(this.beers$);
  }

  goToBeer(beer) {
    this.router.navigate(['/beers/', beer.id]);
  }

  pageChanged($event) {
    this.onPage = $event;
    console.log(this.itemsPage)
    console.log(this.createdItems)
  }

  clearFilter() {
    this.userSearch = "";
  }

  onScrollDown() {
    console.log('scrolled down!!');
  }

  onScrollUp() {
    console.log('scrolled up!!');
  }

}
