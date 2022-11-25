import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class NavbarComponent implements OnInit {
  constructor(private _router: Router) {}
  ngOnInit(): void {}
  isLogged() {
    return !!localStorage.getItem('currentUser');
  }
  isAdmin() {
    return localStorage.getItem('currentUser') == 'eva';
  }
  Logout() {
    localStorage.clear();
    this._router.navigateByUrl('login');
  }
}
