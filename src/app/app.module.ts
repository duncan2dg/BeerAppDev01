import { BrowserModule } from '@angular/platform-browser';
//import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BeerGridComponent } from './beer-grid/beer-grid.component';
import { BeerOptionDdlComponent } from './beer-option-ddl/beer-option-ddl.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { EditBeerComponent } from './edit-beer/edit-beer.component';
import { SearchBeerComponent } from './search-beer/search-beer.component';
import { AddBeerComponent } from './add-beer/add-beer.component';
import { BeersComponent } from './beers/beers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule 
,MatSidenavModule
,MatToolbarModule
,MatListModule
} from "@angular/material";

import { FlexLayoutModule } from '@angular/flex-layout';

import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { BeerAddComponent } from './beer-add/beer-add.component';
import { BeerEditComponent } from './beer-edit/beer-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerGridComponent,
    BeerOptionDdlComponent,
    HomeComponent,
    EditBeerComponent,
    SearchBeerComponent,
    AddBeerComponent,
    BeersComponent,
    BeerDetailComponent,
    BeerAddComponent,
    BeerEditComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    AppRoutingModule, 
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule   
    ,MatSidenavModule
    ,MatToolbarModule
    ,MatListModule  
    ,FlexLayoutModule  
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]/*,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]*/
})
export class AppModule { }
