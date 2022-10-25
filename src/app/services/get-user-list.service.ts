import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUserListService {
  constructor() { }

  public userList = [
      {
        id: 1,
        age: 41,
        birthDate: "1981-02-27",
        firstName: "Britney",
        lastName: "Franklin",
        salary: 682
      },
      {
        id: 2,
        age: 22,
        birthDate: "2000-06-21",
        firstName: "Jennifer",
        lastName: "Mathews",
        salary: 557
      },
      {
        id: 3,
        age: 35,
        birthDate: "1987-01-01",
        firstName: "Joshua",
        lastName: "Johanson",
        salary: 748
      },
      {
        id: 4,
        age: 25,
        birthDate: "1997-05-13",
        firstName: "Alex",
        lastName: "Miller",
        salary: 999
      }
    ]

    public addOrEdit(id?: number) {
      if (id) {

      } else {
        
      }
    }
    public deleteUser(id: number) {
    }
}
