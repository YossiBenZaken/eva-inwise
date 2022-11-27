import { CampaignService } from './../services/campaign.service';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  DxButtonModule,
  DxDataGridModule,
  DxLoadIndicatorModule,
  DxPopupModule,
  DxTextBoxModule,
} from 'devextreme-angular';
import { Campaign } from './../models/Campaign.model';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    DxDataGridModule,
    DxButtonModule,
    DxPopupModule,
    DxLoadIndicatorModule,
    DxTextBoxModule,
  ],
})
export class CampaignsComponent implements OnInit {
  @Input('canEdit') canEdit: boolean = false;
  @Input('canDelete') canDelete: boolean = false;
  @Input('keys') keys: any[] = [];
  campaigns: Campaign[] = [];
  emailPopupVisible: boolean = false;
  phonePopupVisible: boolean = false;
  emailButtonOptions: any;
  phoneButtonOptions: any;
  email: string = '';
  phone: string = '';
  sending: boolean = false;
  currentCampaign!: Campaign;
  constructor(private _campaignService: CampaignService) {
    const that = this;
    this.emailButtonOptions = {
      icon: 'email',
      text: 'לשלוח טסט',
      onClick(e: any) {
        if (confirm('יש לאשר כדי לשלוח טסט')) {
          that.sendTest(1);
        }
      },
    };
    this.phoneButtonOptions = {
      icon: 'email',
      text: 'לשלוח טסט',
      onClick(e: any) {
        if (confirm('יש לאשר כדי לשלוח טסט')) {
          that.sendTest(2);
        }
      },
    };
  }

  ngOnInit() {
    this._campaignService.getCampaigns().subscribe((res) => {
      this.campaigns = res;
    });
  }
  onRowRemoved(e: any) {
    this._campaignService.deleteCampaign(e.key).subscribe((res) => {
      this.campaigns = res;
    });
  }
  onSaved(e: any) {
    console.log(e);
    if (e.changes[0]) {
      let data = e.changes[0].data;
      this._campaignService.updateCampaign(data).subscribe(() => {
        alert('עודכן');
      });
    }
  }
  sendTestPopup(data: Campaign) {
    this.currentCampaign = data;
    this.emailPopupVisible = data.email != 'null' && data.email != '';
    this.phonePopupVisible = !this.emailPopupVisible;
  }
  sendTest(type: number) {
    let body;
    let current = this.currentCampaign;
    if (type == 1) {
      body = {
        code: current.newCode,
        subject: current.subject,
        from_email: current.email,
        reply_to: current.reply_to,
        from_name: current.sender,
        send_to: [
          {
            email: this.email,
            name: 'טסט טסט',
          },
        ],
        apiKey: current.apiKey,
      };
    } else {
      body = {
        code: current.newCode,
        apiKey: current.apiKey,
        mobile_number: this.phone,
      };
    }
    this._campaignService.sendTestCampaign(body, type).subscribe((res) => {
      this.emailPopupVisible = false;
      this.phonePopupVisible = false;
    });
  }
  isValidForm() {
    return this.email != '' || this.phone != '';
  }
}
