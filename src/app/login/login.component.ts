import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private _router: Router) { }

  ngOnInit() {
  }
  onClick(user: string) {
    localStorage.setItem('currentUser',user);
    this._router.navigateByUrl('/')
  }

}
