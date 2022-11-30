import {Component, OnInit} from '@angular/core';
import {ProgressService} from "./progress.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'exosAngular';
  msgSuccess = "Opération Ok";


  constructor(public progressService: ProgressService) {
  }

  async ngOnInit() {
    this.progressService.checkPercentage()
  }
}
