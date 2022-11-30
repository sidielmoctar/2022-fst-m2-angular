import { Injectable } from '@angular/core';
import {UtilService} from "./util.service";

@Injectable()
export class ProgressService {
  private _curPercentage = 0;
  constructor(private utilService: UtilService) { }

  async checkPercentage() {
    while (this._curPercentage < 100) {
      await this.utilService.sleep(1000);
      this._curPercentage = this._curPercentage + 10;
    }
  }

  get curPercentage(): number {
    return this._curPercentage;
  }

  set curPercentage(value: number) {
    this._curPercentage = value;
  }
}
