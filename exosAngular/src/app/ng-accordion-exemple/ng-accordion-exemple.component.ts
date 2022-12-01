import { Component, OnInit } from '@angular/core';
import {NgbAccordionModule} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-ng-accordion-exemple',
  templateUrl: './ng-accordion-exemple.component.html',
  styleUrls: ['./ng-accordion-exemple.component.css'],
  standalone: true,
  imports: [NgbAccordionModule],
})
export class NgAccordionExempleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
