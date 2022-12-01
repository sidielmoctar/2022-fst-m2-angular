import { Component, OnInit } from '@angular/core';
import {SnackBarContentExempleComponent} from "../snack-bar-content-exemple/snack-bar-content-exemple.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-snack-bar-exemple',
  templateUrl: './snack-bar-exemple.component.html',
  styleUrls: ['./snack-bar-exemple.component.css']
})
export class SnackBarExempleComponent {

  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarContentExempleComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

}
