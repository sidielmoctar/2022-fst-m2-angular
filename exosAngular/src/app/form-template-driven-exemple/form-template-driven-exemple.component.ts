import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-template-driven-exemple',
  templateUrl: './form-template-driven-exemple.component.html',
  styleUrls: ['./form-template-driven-exemple.component.css']
})
export class FormTemplateDrivenExempleComponent implements OnInit {
  user: IUser = <IUser>{};
  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log(this.user)
  }
}

export interface IUser {
  login: string;
  nom: string;
  email: string;
  password: string;
}
