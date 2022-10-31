import { GetUserListService } from './../../services/get-user-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  constructor(public route: ActivatedRoute,
    public router: Router,
    public getUserListService: GetUserListService) { }
    
  userForm = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl('', [
      Validators.required
    ]),
    lastName: new FormControl('', [
      Validators.required
    ]),
    age: new FormControl('', [
      Validators.required,
      Validators.min(18)
    ]),
    birthDate: new FormControl('', [
      Validators.required
    ]),
    salary: new FormControl('', [
      Validators.required,
      Validators.min(500)
    ]),
  });

ngOnInit(): void {
  const userId = +this.route.snapshot.queryParams.id;
  if (userId) {
  const user = this.getUserListService.userList.find(({ id }) => id === userId) ?? {}
  this.userForm.setValue(user)
  }
}
saveUser(): void {
  this.getUserListService.addOrEdit(this.userForm.value)
  this.router.navigateByUrl('')
}    
}
