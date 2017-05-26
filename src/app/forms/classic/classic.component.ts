import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
