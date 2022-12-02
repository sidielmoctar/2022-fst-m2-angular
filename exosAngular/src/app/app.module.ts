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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SnackBarExempleComponent } from './snack-bar-exemple/snack-bar-exemple.component';
import { SnackBarContentExempleComponent } from './snack-bar-content-exemple/snack-bar-content-exemple.component';
import {NgbModule, NgbProgressbarConfig, NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';
import { NgProgressExempleComponent } from './ng-progress-exemple/ng-progress-exemple.component';
import { NgTimePickerExempleComponent } from './ng-time-picker-exemple/ng-time-picker-exemple.component';
import { NgAccordionExempleComponent } from './ng-accordion-exemple/ng-accordion-exemple.component';
import { NgPaginationExempleComponent } from './ng-pagination-exemple/ng-pagination-exemple.component';
import { FormTemplateDrivenExempleComponent } from './form-template-driven-exemple/form-template-driven-exemple.component';
import { ReactiveFormExempleComponent } from './reactive-form-exemple/reactive-form-exemple.component';
import { UserListComponent } from './user-list/user-list.component';
import {UserService} from "./user.service";
import {HttpClientModule} from "@angular/common/http";
import { HighlightDirective } from './highlight.directive';
import { UserPipe } from './user.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AlertSuccessComponent,
    AlertDangerComponent,
    ProgressComponent,
    SnackBarExempleComponent,
    SnackBarContentExempleComponent,
    NgProgressExempleComponent,
    FormTemplateDrivenExempleComponent,
    ReactiveFormExempleComponent,
    UserListComponent,
    HighlightDirective,
    UserPipe
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
    NgTimePickerExempleComponent,
    NgAccordionExempleComponent,
    NgPaginationExempleComponent,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProgressService,
    NgbProgressbarConfig,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
