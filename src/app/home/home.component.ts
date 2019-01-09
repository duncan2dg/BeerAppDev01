import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppGlobals } from '../shared/app.global';
import { beers } from '../beers';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private _global: AppGlobals, private title: Title){}
  
  outputBeers: beers[];
  companies: beers[];
    
  getBeersConfig(){
    return this.http.get<beers[]>(this._global._apiUrl);
  }


  @ViewChild('select') loadbeercompanies: ElementRef 
      
  ngAfterViewInit(){
    //this.loadBeerCompanies();
  }

  getBeerData(){
      return this.getBeersConfig()
      .subscribe(data => {
        this.outputBeers = data;
      })
    }
      

  ngOnInit() {
    this.getBeerData();
    console.log(this.title);
  }

}
