import { Component, OnInit } from '@angular/core';
import {NgbTimepickerModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-ng-time-picker-exemple',
  templateUrl: './ng-time-picker-exemple.component.html',
  styleUrls: ['./ng-time-picker-exemple.component.css'],
  standalone: true,
  imports: [NgbTimepickerModule, FormsModule, JsonPipe]
})
export class NgTimePickerExempleComponent implements OnInit {
  time = { hour: 13, minute: 30 };
  constructor() { }

  ngOnInit(): void {
  }

}
