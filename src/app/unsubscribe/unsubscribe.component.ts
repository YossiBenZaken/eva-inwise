import { SubscriptionService } from './../services/subscription.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  DxButtonModule,
  DxDataGridModule,
  DxSelectBoxModule,
} from 'devextreme-angular';
import { AppService } from '../services/app.service';
import { Unsubscribe } from './../models/Unsubscribe.model';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.scss'],
  standalone: true,
  imports: [CommonModule, DxSelectBoxModule, DxDataGridModule, DxButtonModule],
})
export class UnsubscribeComponent implements OnInit {
  list!: Unsubscribe[];
  keys: { Key: string; Value: string }[] = [];
  loadingList: boolean = true;
  constructor(private _appService: AppService, private _subscriptionService: SubscriptionService) {}

  ngOnInit(): void {
    this.keys = this._appService.getKeys();
  }
  getList(e: any) {
    this.list = [];
    this.loadingList = true;
    this._subscriptionService.listUnsubscribe(e.value).subscribe((res) => {
      this.list = res;
      this.loadingList = false;
    });
  }
  Release(data: Unsubscribe, apiKey: string) {
    this.list.splice(this.list.indexOf(data), 1);
    this._subscriptionService.resubscribe(data.target, apiKey).subscribe(() => {});
  }
}
