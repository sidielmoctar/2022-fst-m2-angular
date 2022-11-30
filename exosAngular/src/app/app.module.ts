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

@NgModule({
  declarations: [
    AppComponent,
    AlertSuccessComponent,
    AlertDangerComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [
    ProgressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
