import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';

import { HomeComponent } from './home/home.component';
import { EditBeerComponent } from './edit-beer/edit-beer.component';
import { SearchBeerComponent } from './search-beer/search-beer.component';
import { AddBeerComponent } from './add-beer/add-beer.component';
import { BeersComponent } from './beers/beers.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { BeerAddComponent } from './beer-add/beer-add.component';
import { BeerEditComponent } from './beer-edit/beer-edit.component';

const routes: Routes = [
  /*FIRST INITIAL ROUTING PLAN FOR BESPOKE APP
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, data: { title: 'Complete Beer Selection'} },
  { path: 'add', component: AddBeerComponent, data: { title: 'Add New Beer'} },
  { path: 'edit', component: EditBeerComponent, data: { title: 'Edit Beer description'}  },
  { path: 'search', component: SearchBeerComponent, data: { title: 'Search for that Beer'}  },
*/
  //FOLLOWING A TUTORIAL: https://www.djamware.com/post/5bca67d780aca7466989441f/angular-7-tutorial-building-crud-web-application
  { path: 'beers', component: BeersComponent, data: { title: 'List of Beers'} },
  { path: 'beer-detail/:id', component: BeerDetailComponent, data: { title: 'Beer Details'} },
  { path: 'beer-add', component: BeerAddComponent, data: { title: 'Add a Beer'} },
  { path: 'beer-edit/:id', component: BeerEditComponent, data: { title: 'Edit a Beer'} },
  { path: 'beers', component: BeersComponent, data: { title: 'List of Beers'} },
  { path: '', redirectTo: '/beers', pathMatch:'full'}
  
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
