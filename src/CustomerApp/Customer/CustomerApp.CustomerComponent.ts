import { Component, Injector } from '@angular/core';
import {Customer} from "./CustomerApp.model"
import {BaseLogger, DbLogger} from "../Utility/CustomerApp.Logger"
import { Type } from '@angular/core';


@Component({
  templateUrl: 'CustomerApp.CustomerView.html'
})
export class CustomerComponent {
  title = 'CustomerApplication';
  CustomerModel : Customer = new Customer()
  CustomerModels : Array<Customer> = new Array<Customer>()
  Logobj: BaseLogger
  constructor(_injector: Injector) {
    this.Logobj = _injector.get("1")
  }

  Add() {
    this.CustomerModels.push(this.CustomerModel)
    this.CustomerModel = new Customer()
  }

  hasError(typeofvalidator:string,controlname:string):boolean {
    return this.CustomerModel.formCustomerGroup.controls[controlname].hasError(typeofvalidator)
  }
}