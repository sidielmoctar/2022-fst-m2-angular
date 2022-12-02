import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {UtilService} from "./util.service";

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient, private utilService: UtilService) {
  }

  getUsers() {
    const url = "https://hacen.pythonanywhere.com/manageusers/customized/listusers";
    return this.httpClient.get<IUtilisateur[]>(url, {
      headers: this.utilService.getHeadersWithToken()
    });
  }
}

export interface IUtilisateur {
  id: number;
  username: string;
  password: string;
  email: string;
  first_name: string;
  last_name: string;
  is_admin: boolean ;
  is_simpleUser: boolean;
  phone: string;
  blood_type: string;
  weight: number;
  height: number;
  birth: string;
  gender: string
}
