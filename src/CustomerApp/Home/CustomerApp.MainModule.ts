import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms"
import { RouterModule } from '@angular/router';
import {MainRoutes} from '../Routing/CustomerApp.MainRouting';
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';
import { HomeComponent } from './CustomerApp.HomeComponent';
import { BaseLogger, ConsoleLogger, DbLogger } from '../Utility/CustomerApp.Logger';

var providerscoll:any = [];
providerscoll.push({provide: "1", useClass: DbLogger})
providerscoll.push({provide: "2", useClass: ConsoleLogger})
providerscoll.push({provide: BaseLogger, useClass: ConsoleLogger})

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
  providers: [providerscoll],

  bootstrap: [MasterPageComponent]
})
export class MainModule { }
