import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import { AlertSuccessComponent } from './alert-success/alert-success.component';
import { AlertDangerComponent } from './alert-danger/alert-danger.component';
import { ProgressComponent } from './progress/progress.component';
import {ProgressService} from "./progress.service";
import {MaterialModule} from "./material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import { SnackBarExempleComponent } from './snack-bar-exemple/snack-bar-exemple.component';
import { SnackBarContentExempleComponent } from './snack-bar-content-exemple/snack-bar-content-exemple.component';
import {NgbModule, NgbProgressbarConfig, NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';
import { NgProgressExempleComponent } from './ng-progress-exemple/ng-progress-exemple.component';
import { NgTimePickerExempleComponent } from './ng-time-picker-exemple/ng-time-picker-exemple.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertSuccessComponent,
    AlertDangerComponent,
    ProgressComponent,
    SnackBarExempleComponent,
    SnackBarContentExempleComponent,
    NgProgressExempleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MaterialModule,
    ReactiveFormsModule,
    NgbModule,
    NgbProgressbarModule,
    NgTimePickerExempleComponent
  ],
  providers: [
    ProgressService,
    NgbProgressbarConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
