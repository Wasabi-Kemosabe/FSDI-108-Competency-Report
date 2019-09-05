import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private shared: SharedService) {
  }

  ngOnInit() {
  }

  test() {
    console.log('Button pressed!');
  }

  getLoggedState() {
    return this.shared.isLogged();
  }

}
