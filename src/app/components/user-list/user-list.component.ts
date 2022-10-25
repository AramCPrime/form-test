import { GetUserListService } from './../../services/get-user-list.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor(
    public getUserListService: GetUserListService,
    public router: Router) {
   }

  ngOnInit(): void {     
  }
  nagivateToUserDetails(id?: number) {
    const query = id ? `?id=${id}` : '';
    this.router.navigateByUrl(`/user${query}`)
  }
}
