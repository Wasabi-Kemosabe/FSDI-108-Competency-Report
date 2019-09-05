import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userList: User[] = [];

  constructor() {
    // default user
    var user = new User();
    user.email = 'admin@gmail.com';
    user.password = 'qwerty';
    user.firstName = 'Admin';
    user.lastName = 'User';

    this.userList.push(user);
  }

  public sayHello() {
    console.log('Hello from service ts');
  }

  public addUser(userVal: User) {
    this.userList.push(userVal);
  }

  public getAllUsers() {
    return this.userList;
  }
}
