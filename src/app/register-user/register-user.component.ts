import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  model: User = new User();
  passRetype: string = '';
  passDontMatch: boolean = false;
  errorOnEmail: boolean = false;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  isValidEmail(email: string): boolean {
    if (!email) {
      return false; // It's empty
    }
    if (email.includes('@') && email.includes('.')) {
      return true;
    }
    return false;
  }

  saveUser() {
    // Todo: Compare both password
    if (this.model.password != this.passRetype) {
      // Passwords don't match
      this.passDontMatch = true;
    }
    else if (!this.isValidEmail(this.model.email)) {
      this.errorOnEmail = true;
    }
    else {
      this.passDontMatch = false;
      this.errorOnEmail = false;

      // Save the model
      this.data.addUser(this.model);
      console.log(this.data.getAllUsers());

      // Clear the form
      this.model = new User();
      this.passRetype = '';
    }
  }

}
