import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatNativeDateModule
  ],
  exports: [
    MatCardModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatFormFieldModule,
  ]
})
export class MaterialModule { }
