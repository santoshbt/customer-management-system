import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { SupplerComponent } from '../Supplier/CustomerApp.SupplierComponent';
import { RouterModule } from '@angular/router';
import { SupplierRoutes } from '../Routing/CustomerApp.SupplierRouting';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SupplerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(SupplierRoutes)
  ],
  providers: [],
  bootstrap: [SupplerComponent]
})
export class SupplierModule { }
