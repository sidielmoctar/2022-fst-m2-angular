import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  getHeadersWithToken() {
    const headerSettingsLogin: { [name: string]: string | string[] } = {};
    headerSettingsLogin["Authorization"] = "token b04dab1601829c090f9ffb012d936624bbf451e1";
    return new HttpHeaders(headerSettingsLogin);
  }
}
