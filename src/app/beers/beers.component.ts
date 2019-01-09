import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Beer } from '../Beer';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {
  displayedColumns: string[] = [
        //'id',
        'company',
        //'description',
        'countryOfOrigin',
        //'ingredients',
        //'colourOfBottle',
        //'size',
        //'bestBeforeDate',
        //'style',
        'rating',
        'strength'
        //'price'
  ];
  data: Beer[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }
  //GET LIST OF BEERS IMMEDIATELY
  ngOnInit() {
    this.api.getBeers()
    .subscribe(res => {
      this.data = res;
      console.log("DAS BIER: " + this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log("CAN'T GET LIST OF BEERS! " + err);
      this.isLoadingResults = false;
    });    
  }

}
