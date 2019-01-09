import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { beers } from '../beers';
import { HttpClient } from '@angular/common/http';
import { AppGlobals } from '../shared/app.global';

import { FormGroup, FormControl } from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-edit-beer',
  templateUrl: './edit-beer.component.html',
  styleUrls: ['./edit-beer.component.scss']
})
export class EditBeerComponent implements OnInit {
  editBeerForm: any;
  individualBeerEntry: any;
  constructor(private http: HttpClient, private _global: AppGlobals){}
  
  outputBeers: beers[];
  companies: beers[];
  queriedBeerData: beers[];
    
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
  }

  editBeer(beerId){
    console.log(beerId);
    this.loadSingleBeer(beerId);
  }

  updateBeer(){
    //TODO:Use EventEmitter with form value
    console.warn(this.editBeerForm.value);

    /* GRAB FORM DATA AND Http.put to UPDATE THE JSON DATA*/
  }

  //present selected beer into the form for manupulation
  loadSingleBeer(value:number){
    //grab id of beer selected from and display in editable '#selectBeer' form
    //let beerId = (<HTMLSelectElement>document.getElementById('selectBeer')).value;
    console.log(value);

    
    if(value !=null){
     var result = this.getBeerDataQuery(value);
     console.log(result);
    }
  }
  //query from json data to get selected beer
  getBeerDataQuery(selectedId:number){
        return this.getBeersConfig()
        .subscribe(data => {
          this.queriedBeerData = data.filter((e) => e.id === selectedId);
        })
      } 

    
}
