import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms"
import { RouterModule } from '@angular/router';
import {MainRoutes} from '../Routing/CustomerApp.MainRouting';
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';
import { HomeComponent } from './CustomerApp.HomeComponent';

@NgModule({
  declarations: [
    MasterPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
