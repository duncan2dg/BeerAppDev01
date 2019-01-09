import { Component, ViewChild, ElementRef, Input, HostListener, OnInit } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { beers } from '../beers';
import { BeerGridComponent } from '../beer-grid/beer-grid.component';

//import { UserService } from '';
import { AppGlobals } from '../shared/app.global';

@Component({
  selector: 'app-beer-option-ddl',
  templateUrl: './beer-option-ddl.component.html',
  styleUrls: ['./beer-option-ddl.component.scss']
  //, providers: [AppGlobals]
})
export class BeerOptionDdlComponent implements OnInit {
  
  isGridVisible:boolean = false;


  queriedBeerData: beers[];
  

  constructor(private http: HttpClient, private _global: AppGlobals, private _ddlSelect: AppGlobals){}
  
  //private _apiUrl= 'http://localhost:3000/beers';
  
  getBeersConfig(){
      //return this.http.get<beers[]>(this._apiUrl);
      return this.http.get<beers[]>(this._global._apiUrl)
  }

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
  //@ViewChild('select') loadbeercompanies: ElementRef
  //grab reference from DataGrid DDL Version in beer-grid-component file 
  //[style.visibility]="setGridDDLVisibility ? 'visible' : 'hidden'"
  //@ViewChild('div') setGridDDLVisibility: ElementRef

  //setGridDDLVisibility: Boolean = true;
  /*********************************
  Listener and actions for dropdownlist
  *******************************
  @Input() beerGrid: BeerGridComponent;
  @HostListener('click') 
  click(){
    this.beerGrid.toggle();
    console.log("DropdownList Selected!");
  }  */
  



  


  ngAfterViewInit(){
    this.loadBeerCompanies();
    //this.setGridDDLVisibility;
  }
  //setGridDDLVisibility: boolean= false;
  //setGridDDLVisibility: boolean = true;
  /**************************
   * GET BEER COMPANY FROM DDLIST
   *************************/
  
  
  
  getResults(){
    let value = (<HTMLSelectElement>document.getElementById('beerCompanies')).value;
    this.getBeerDataQuery(value);
    this.isGridVisible = true;
  }
  getBeerDataQuery(selectedCompany:string){
    return this.getBeersConfig()
    .subscribe(data => {
      this.queriedBeerData = data.filter((e) => e.company === selectedCompany);
    })
  }  


clearSearch(){
  this.loadBeerCompanies();
  this.clearGrid();
  return true;
}
 
clearGrid(){
  this.isGridVisible = false;
  let value = null;
  this.getBeerDataQuery(value);
  return true;
}
    
    ngOnInit(){}

}
