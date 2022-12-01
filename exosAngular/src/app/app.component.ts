import {Component, OnInit} from '@angular/core';
import {ProgressService} from "./progress.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'exosAngular';
  msgSuccess = "Opération Ok";
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor(public progressService: ProgressService) {
  }

  async ngOnInit() {
    this.progressService.checkPercentage()
  }
}
