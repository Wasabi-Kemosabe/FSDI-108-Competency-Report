import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  correctCreds: boolean = false;
  noMatchFound: boolean = false;

  constructor(
    private data: DataService,
    private shared: SharedService,
    private router: Router
  ) { }

  ngOnInit() {
    // When all the components/page finishes loading, run this function
    // Make sure to remove the implements OnInit if you remove this function
  }

  // Validate email and password among the users on the data service
  validateCreds() {
    var allUsers = this.data.getAllUsers();
    // let correctCreds = false;
    // Compare all email and email and password with all the users on the array
    // If they match on any, then allow the user to log in
    for (let i = 0; i < allUsers.length; i++) {
      const user = allUsers[i];
      if (user.email == this.email && user.password == this.password) {
        console.log('User logged in');
        this.correctCreds = true;
        this.noMatchFound = false;

        // Set data on shared service
        this.shared.setLoggedIn(true);
        this.shared.setLoggedUser(user);

        // Show another page
        this.router.navigate(['user/register']);
      }
    }
    // Only after comparing all the users and you don't find the current one, then show the error like below
    if (!this.correctCreds) {
      this.noMatchFound = true;
    }
  }

}
