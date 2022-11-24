import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DxButtonModule, DxSelectBoxModule } from 'devextreme-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, DxSelectBoxModule, DxButtonModule],
})
export class LoginComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}
  onClick(user: string) {
    localStorage.setItem('currentUser', user);
    this._router.navigateByUrl('/');
  }
}
