import { Component, OnInit } from '@angular/core';
import {NgbPaginationConfig, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-ng-pagination-exemple',
  templateUrl: './ng-pagination-exemple.component.html',
  styleUrls: ['./ng-pagination-exemple.component.css'],
  standalone: true,
  imports: [NgbPaginationModule],
  providers: [NgbPaginationConfig],
})
export class NgPaginationExempleComponent {

  page = 4;

  constructor(config: NgbPaginationConfig) {
    // customize default values of paginations used by this component tree
    config.size = 'sm';
    config.boundaryLinks = true;
  }

}
