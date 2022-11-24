import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  DxButtonModule,
  DxDataGridModule,
  DxSelectBoxModule,
} from 'devextreme-angular';
import { AppService } from '../app.service';
import { Report } from './../models/Report.model';

@Component({
  selector: 'app-sms-report',
  templateUrl: './sms-report.component.html',
  styleUrls: ['./sms-report.component.scss'],
  standalone: true,
  imports: [CommonModule, DxDataGridModule, DxButtonModule, DxSelectBoxModule],
})
export class SmsReportComponent {
  keys: { Key: string; Value: string }[] = [];
  dataSource: Report[] = [];
  constructor(private _appService: AppService) {
    this.keys = this._appService.getKeys();
  }
  getTags(e: any) {
    this._appService.getListReports(e.value).subscribe((res) => {
      let result = res.map(
        (e: any) => (e = { ...e, date: new Date(Number(e.date)) })
      );
      this.dataSource = result.filter((report) => report.groupId != 'null');
    });
  }
  fixedDate(e: Report) {
    return new Date(Number(e.date)).toLocaleString('fr');
  }
  getReport(data: Report) {
    alert('בדקות הקרובות ישלח הדוח לייצור');
    this._appService.getSmsReport(data.fileName).subscribe(() => {});
  }
}
