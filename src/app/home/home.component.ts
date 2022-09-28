import { AppService } from './../app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  params = {
    canDelete: false,
    canEdit: false,
    canAdd: false,
  };
  showCampaigns = true;
  showFiles = false;
  keys: { Key: string; Value: string }[] = [];
  constructor(private _appService: AppService) {
    let user = localStorage.getItem('currentUser');
    let admin = user == 'eva';
    this.params.canDelete = admin;
    this.params.canEdit = admin || user != null;
    this.params.canAdd = admin || user != null;
    this.keys = this._appService.getKeys();
  }
}
