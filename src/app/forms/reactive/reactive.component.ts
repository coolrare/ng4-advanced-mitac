import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      'title': ['My Title', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)
        ]
      ],

      'metadata': this.fb.group({

        'desc': 'Sample Description'

      }),

      'items': this.fb.array([
        this.fb.control('Test 1'),
        this.fb.control('Test 2')
      ])
    });
  }

  addNewItem() {
    let arr = this.form.controls['items'] as FormArray;
    arr.push(this.fb.control('New ' + (arr.length+1)));
  }

}
