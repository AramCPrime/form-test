import { GetUserListService } from './../../services/get-user-list.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  constructor(public route: ActivatedRoute,
    public getUserListService: GetUserListService) { }
    
  userForm = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
    birthDate: new FormControl(''),
    salary: new FormControl(''),
  });

ngOnInit(): void {
  const userId = +this.route.snapshot.queryParams.id;
  if (userId) {
  const user = this.getUserListService.userList.find(({ id }) => id === userId) ?? {}
  this.userForm.setValue(user)
  }
}    
}
