import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Beer } from '../beer';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent implements OnInit {

  beer: Beer = { 
        id: null,
        company: '',
        description: '',
        strength: null,
        countryOfOrigin: '',
        ingredients: '',
        colourOfBottle: '',
        size: null,
        bestBeforeDate: '',
        style: '',
        rating: '',
        price: ''
        };
  isLoadingResults = true;


  constructor(
    private route:ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) { }


  getBeerDetails(id) {
    this.api.getBeer(id)
      .subscribe(data => {
        this.beer = data;
        console.log(this.beer);
        this.isLoadingResults = false;
      });
  }
  deleteBeer(id) {
    this.isLoadingResults = true;
    this.api.deleteBeer(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/beers']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  ngOnInit() {
    //call getBeerDetails when the component is initialised
    this.getBeerDetails(this.route.snapshot.params['id']);
  }

}
