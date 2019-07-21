import {
  Component, OnInit, ChangeDetectorRef
} from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { BeersService } from '../../beers.service'

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent implements OnInit {

  beerId: Number;

  viewGravity: boolean = false;

  beer: {};

  diffAbvIbu: number;

  constructor(
    private route: ActivatedRoute,
    private beersService: BeersService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.beerId = Number(params['id']));
    this.getData();
  }

  getData() {
    this.beersService.getBeerDetail(this.beerId).subscribe(
      data => {
        this.beer = data[0];
      },
      err => console.log(err)
    );
  }

  goBack() {
    this.router.navigate(['/beers/']);
  }

  toggleGravityView() {
    this.viewGravity = !this.viewGravity;
  }

}
