import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, 
  FormGroupDirective, 
  FormBuilder, 
  FormGroup, 
  NgForm, 
  Validators } from '@angular/forms';

@Component({
  selector: 'app-beer-add',
  templateUrl: './beer-add.component.html',
  styleUrls: ['./beer-add.component.scss']
})
export class BeerAddComponent implements OnInit {

  beerForm: FormGroup;
  //required fields
  //id: null;
  company: string = '';
  description: string = '';
  strength: number = null;
  countryOfOrigin: string = '';
  ingredients: string = '';
  colourOfBottle: string = '';
  size: number = null;
  bestBeforeDate: string = '';
  style: string = '';
  rating: string ='';

  isLoadingResults = false;

  constructor(
    private router: Router, 
    private api: ApiService, 
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    //add validation for each field
    this.beerForm = this.formBuilder.group({
      'company': [null, Validators.required],
      'description': [null, Validators.required],
      'strength': [null, Validators.required],
      'countryOfOrigin': [null, Validators.required],
      'ingredients': [null, Validators.required],
      'colourOfBottle': [null, Validators.required],
      'size': [null, Validators.required],
      'bestBeforeDate': [null, Validators.required],
      'style': [null, Validators.required],
      'rating': [null, Validators.required]      
    })
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.addBeer(form)
      .subscribe(res => {
          let id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/beer-detail', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
