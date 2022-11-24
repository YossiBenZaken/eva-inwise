import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  DxButtonModule,
  DxChartModule,
  DxDataGridModule,
  DxLoadIndicatorModule,
  DxSelectBoxModule,
} from 'devextreme-angular';
import { AppService } from './../app.service';
import { Tag } from './../models/Tags.model';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    DxSelectBoxModule,
    DxDataGridModule,
    DxButtonModule,
    DxLoadIndicatorModule,
    DxChartModule,
  ],
})
export class TagsComponent {
  keys: { Key: string; Value: string }[] = [];
  tags: Tag[] = [];
  titleOfTag!: string;
  loadingTags: boolean = true;
  loading: boolean = false;
  currentTag!: { key: string; value: string }[];
  moreDetails!: any[];
  state: any[] = [
    { key: 'sent', value: 'Sent' },
    { key: 'bounced', value: 'Bounced' },
    { key: 'rejected', value: 'Rejected' },
    { key: 'queued', value: 'Queued' },
    { key: 'cancelled', value: 'Cancelled' },
  ];
  constructor(private _appService: AppService) {
    this.keys = this._appService.getKeys();
  }
  getTags(e: any) {
    this.tags = [];
    this.loadingTags = true;
    this._appService.getTags(e.value).subscribe((res) => {
      this.tags = res.reverse();
      this.loadingTags = false;
    });
  }
  refreshTag(tag: string, apiKey: any) {
    this._appService.refreshTag(tag, apiKey).subscribe((res: any) => {
      let arr = [];
      for (const key of Object.keys(res)) {
        if (key != 'tag' && key != 'stats') {
          arr.push({
            key,
            value: res[key],
          });
        }
      }
      this.currentTag = arr;
      console.log(arr);
    });
  }
  onFocusedRowChanged(e: any) {
    const rowData = e.row && e.row.data;
    this.moreDetails = [];
    if (rowData) {
      let arr = [];
      for (const key of Object.keys(rowData)) {
        if (key != 'tag' && key != 'apiKey') {
          arr.push({
            key,
            value: rowData[key],
          });
        }
      }
      this.titleOfTag = rowData.tag;
      this.currentTag = arr;
    }
  }
  showDetails(data: Tag) {
    this.loading = true;
    this._appService.getDetails(data.apiKey, data.tag).subscribe((res) => {
      this.moreDetails = res;
      this.loading = false;
    });
  }
  getReport(data: Tag) {
    alert('בדקות הקרובות ישלח הדוח לייצור');
    this._appService.getEmailReport(data.tag).subscribe(() => {});
  }
  getDetails(data: Tag) {
    this._appService.jobDetails(data.tag).subscribe((res: any) => {
      if (res.err) {
        alert('אין מידע');
      } else {
        let response: any = {
          Completed: 'הושלם',
          Processing: 'בתהליך',
          Failed: 'נכשל',
        };
        alert(response[res.jobDetail.status]);
      }
    });
  }
  customizeText(args: any) {
    let value = args.valueText;
    switch (value) {
      case 'sent':
        return 'נשלח';
      case 'opens':
        return 'פתיחות';
      case 'clicks':
        return 'הקלקות';
      default:
        return value;
    }
  }
}
