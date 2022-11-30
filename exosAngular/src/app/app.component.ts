import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'exosAngular';
  msgSuccess = "Opération Ok";

  curPercentage = 0;
  sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  async ngOnInit() {
    while (this.curPercentage < 100) {
      await this.sleep(1000);
      this.curPercentage = this.curPercentage + 10;
    }
  }
}
