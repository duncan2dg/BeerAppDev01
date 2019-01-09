import { Component, ViewChild, ElementRef, HostBinding, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { beers } from '../beers';
import { AppGlobals } from '../shared/app.global';
//import { BeerOptionComponent } from './beer-option-ddl/beer-option.component';



@Component({
  selector: 'app-beer-grid',
  templateUrl: './beer-grid.component.html',
  styleUrls: ['./beer-grid.component.scss']
})
export class BeerGridComponent implements OnInit {

  constructor(private http: HttpClient, private _global: AppGlobals){}

  //private _apiUrl= 'http://localhost:3000/beers';
  
  getBeersConfig(){
      //return this.http.get<beers[]>(this._apiUrl);
      return this.http.get<beers[]>(this._global._apiUrl);
  }
  outputBeers: beers[];
  companies: beers[];
  /******************
   * POPULATE DDLIST
   *****************/
  loadBeerCompanies(){
    return this.getBeersConfig()
    .subscribe(data => {
      console.log(data);
      this.companies = data;
    })
  }
  @ViewChild('select') loadbeercompanies: ElementRef 
      
  ngAfterViewInit(){
    this.loadBeerCompanies();
  }

/*

  @HostBinding('class.is-open')
  isOpen= false;

  toggle(){
      this.isOpen = !this.isOpen;
      console.log("Toggle settings: " + this.isOpen);
  }

  setGridDDLVisibility: boolean = false;
*/

  /**************************
   * GET BEER COMPANY FROM DDLIST
   *************************
  selectCompany(value: any){
         console.log("You selected this beer: " + value);
        //return this.getBeersConfig()
        //.subscribe(value => {
          //this.outputBeers = value;
          //console.log(value);
        //})
        this.setGridDDLVisibility=true;
          console.log("Visibility status: " + this.setGridDDLVisibility);
      }*/


      getBeerData(){
          return this.getBeersConfig()
          .subscribe(data => {
            this.outputBeers = data;
          })
        }
      
      editBeerSelection(selectedItem: any){
          //var beerNo: number;
          //beerNo = this.outputBeers[0].id;
          return console.log("Edit Button clicked" + selectedItem.id);
      }  

  ngOnInit() {
  }

}
