import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddCampaignComponent } from '../add-campaign/add-campaign.component';
import { CampaignsComponent } from '../campaigns/campaigns.component';
import { ShowFilesComponent } from '../show-files/show-files.component';
import { AppService } from './../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    AddCampaignComponent,
    CampaignsComponent,
    ShowFilesComponent,
  ],
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
