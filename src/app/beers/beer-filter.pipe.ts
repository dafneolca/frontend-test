import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: 'beerFilter' })

export class beerFilterPipe implements PipeTransform {
  transform(beers, userSearch) {
    if (!beers || !userSearch) {
      return beers;
    }
    return beers.filter(beers => beers.name.toLowerCase().indexOf(userSearch.toLowerCase()) !== -1)
  }
}