import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: 'beerFilter' })

export class beerFilterPipe implements PipeTransform {
  transform(beers, userSearch, err) {
    if (!beers || !userSearch) {
      return beers;
    }
    // if (userSearch && !beers) {
    //   return errorMessage;
    // }
    return beers.filter(beers => beers.name.toLowerCase().indexOf(userSearch.toLowerCase()) !== -1)
  }
}