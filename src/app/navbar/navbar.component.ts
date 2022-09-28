import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private _router: Router) { }
  isLogged() {
    return !!localStorage.getItem('currentUser')
  }
  Logout() {
    localStorage.clear();
    this._router.navigateByUrl('login')
  }
}
