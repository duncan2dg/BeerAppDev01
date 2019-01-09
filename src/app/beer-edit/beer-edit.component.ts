import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, 
  FormGroupDirective, 
  FormBuilder, 
  FormGroup, 
  NgForm, 
  Validators } from '@angular/forms';
@Component({
  selector: 'app-beer-edit',
  templateUrl: './beer-edit.component.html',
  styleUrls: ['./beer-edit.component.scss']
})
export class BeerEditComponent implements OnInit {
  beerForm: FormGroup;
  //required fields
  id: number =null;
  company:string= '';
  description:string= '';
  strength: number= null;
  countryOfOrigin:string= '';
  ingredients:string = '';
  colourOfBottle:string= '';
  size: number= null;
  bestBeforeDate:string = '';
  style: string = '';
  rating: string = '';
  isLoadingResults = false;

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private api: ApiService, 
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.getBeer(this.route.snapshot.params['id']);
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

  getBeer(id) {
    this.api.getBeer(id).subscribe(data => {
      this.id = data.id;
      this.beerForm.setValue({
        company: data.company,
        description: data.description,
        strength: data.strength,
        countryOfOrigin: data.countryOfOrigin,
        style: data.style,
        ingredients: data.ingredients,
        bestBeforeDate: data.bestBeforeDate,
        size: data.size, 
        colourOfBottle:data.colourOfBottle,
        rating:data.rating
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.updateBeer(this.id, form)
      .subscribe(res => {
          let id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/beer-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }  

  productDetails() {
    this.router.navigate(['/beer-details', this.id]);
  }

}
