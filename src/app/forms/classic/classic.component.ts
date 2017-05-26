import {Http} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {

  model: any = {
    product_name: 'BMW',
    price: 1022338
  };

  constructor(private http: Http) { }

  ngOnInit() {
  }

  doSubmit(form: NgForm) {
    console.log(form.value);
  }
}
