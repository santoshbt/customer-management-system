import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import { CustomerComponent } from '../Customer/CustomerApp.CustomerComponent';
import { RouterModule } from '@angular/router';
import {CustomerRoutes} from '../Routing/CustomerApp.CustomerRouting';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(CustomerRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
