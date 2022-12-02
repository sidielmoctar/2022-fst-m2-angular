import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUtilisateur, UserService} from "../user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: IUtilisateur[] = <IUtilisateur[]>{}
  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getUsers().subscribe(data => this.users = data);

  }

}
