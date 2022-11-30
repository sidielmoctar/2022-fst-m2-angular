import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
}
