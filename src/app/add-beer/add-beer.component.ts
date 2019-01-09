import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppGlobals } from '../shared/app.global';
import { beers } from '../beers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.component.html',
  styleUrls: ['./add-beer.component.scss']
})
export class AddBeerComponent implements OnInit {

  constructor(private http: HttpClient, private _global: AppGlobals){}
  
  getBeersConfig(){
    return this.http.get<beers[]>(this._global._apiUrl);
  }

  ngOnInit() {
  }

  //complete new beer and update json file
  /*
  addNewBeer(beer: Beer): Observable<number>{
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.post(this.articleUrl, article, options)
        .map(success => success.status)
        .catch(this.handleError);
  }*/
}
