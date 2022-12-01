import {Component, inject, OnInit} from '@angular/core';
import {MatSnackBarRef} from "@angular/material/snack-bar";

@Component({
  selector: 'app-snack-bar-content-exemple',
  templateUrl: './snack-bar-content-exemple.component.html',
  styleUrls: ['./snack-bar-content-exemple.component.css']
})
export class SnackBarContentExempleComponent implements OnInit {
  snackBarRef = inject(MatSnackBarRef);
  constructor() { }

  ngOnInit(): void {
  }

}
