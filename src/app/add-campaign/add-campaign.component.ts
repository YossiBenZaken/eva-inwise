import { CampaignService } from './../services/campaign.service';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  DxButtonModule,
  DxRadioGroupModule,
  DxSelectBoxModule,
  DxTextBoxModule,
  DxToastModule,
} from 'devextreme-angular';
import { AppService } from '../services/app.service';
import { Campaign } from './../models/Campaign.model';

@Component({
  selector: 'app-add-campaign',
  templateUrl: './add-campaign.component.html',
  styleUrls: ['./add-campaign.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    DxRadioGroupModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxButtonModule,
    DxToastModule,
  ],
})
export class AddCampaignComponent {
  @Input('canAdded') canAdded: boolean = false;
  @Input('keys') keys: any[] = [];
  type: String[] = ['סמס', 'אימייל'];
  campaign: Campaign = {
    oldCode: '',
    newCode: '',
    apiKey: '',
    sender: '',
    subject: '',
    email: '',
    reply_to: '',
    letterName: '',
  };
  isVisible: boolean = false;
  typeAlert: string = 'info';
  message: string = '';

  fields = [
    {
      Key: '#field1#',
      Value: 'שם פרטי',
    },
    {
      Key: '#field2#',
      Value: 'שם משפחה',
    },
    {
      Key: '#field3#',
      Value: 'Not1',
    },
    {
      Key: '#field4#',
      Value: 'Not2',
    },
    {
      Key: '#field5#',
      Value: 'Not3',
    },
    {
      Key: '#field6#',
      Value: 'Not4',
    },
    {
      Key: '#field7#',
      Value: 'Not5',
    },
    {
      Key: '#field8#',
      Value: 'Not6',
    },
    {
      Key: '#field9#',
      Value: 'Not7',
    },
    {
      Key: '#field10#',
      Value: 'Not8',
    },
    {
      Key: '#field11#',
      Value: 'Not9',
    },
    {
      Key: '#field12#',
      Value: 'Not10',
    },
    {
      Key: '#field13#',
      Value: 'Not11',
    },
    {
      Key: '#field14#',
      Value: 'Not12',
    },
    {
      Key: '#field15#',
      Value: 'Not13',
    },
    {
      Key: '#field16#',
      Value: 'Not14',
    },
    {
      Key: '#field17#',
      Value: 'Not15',
    },
  ];
  constructor(private _campaignService: CampaignService) {}

  valueChange(e: any) {
    this.campaign.subject += e.value;
  }
  click() {
    this._campaignService.addCampaign(this.campaign).subscribe({
      next: () => {
        this.message = 'נוסף בהצלחה';
        this.typeAlert = 'success';
        this.isVisible = true;
        this.campaign = {
          oldCode: '',
          newCode: '',
          apiKey: '',
          sender: '',
          subject: '',
          email: '',
          reply_to: '',
          letterName: '',
        };
      },
      error: () => {
        this.message = 'היה בעיה בהוספת תבנית';
        this.typeAlert = 'error';
        this.isVisible = true;
      },
    });
  }
}
