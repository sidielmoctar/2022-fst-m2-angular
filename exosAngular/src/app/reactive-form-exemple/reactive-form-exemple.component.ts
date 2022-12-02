import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form-exemple',
  templateUrl: './reactive-form-exemple.component.html',
  styleUrls: ['./reactive-form-exemple.component.css']
})
export class ReactiveFormExempleComponent implements OnInit {
  frmUser: FormGroup = <FormGroup>{};

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.frmUser = this.formBuilder.group({
      login: ['', Validators.required],
      nom: ['', Validators.required],
      email: [''],
      password: ['', Validators.required]
    })
  }

  save() {
    console.log(this.frmUser.value)
  }

}
