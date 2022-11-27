import { CampaignService } from './../services/campaign.service';
import { FilesService } from './../services/files.service';
import { JobService } from './../services/job.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as bytes from 'bytes';
import {
  DxButtonModule,
  DxDataGridModule,
  DxLoadIndicatorModule,
  DxNumberBoxModule,
  DxPopupModule,
  DxRadioGroupModule,
  DxSelectBoxModule,
  DxTextBoxModule,
  DxToastModule,
} from 'devextreme-angular';
import { FileName } from './../models/Files.model';
import { Traces } from './../models/Search.model';
@Component({
  selector: 'app-show-files',
  templateUrl: './show-files.component.html',
  styleUrls: ['./show-files.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    DxDataGridModule,
    DxButtonModule,
    DxToastModule,
    DxPopupModule,
    DxRadioGroupModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxNumberBoxModule,
    DxLoadIndicatorModule,
  ],
})
export class ShowFilesComponent implements OnInit {
  files: FileName[] = [];
  jobList!: Traces[];
  message: string = '';
  isVisible: boolean = false;
  isDeleteVisible: boolean = false;
  currentUser!: string;
  popupVisible: boolean = false;
  splitVisible: boolean = false;
  emailButtonOptions: any;
  splitButtonOptions: any;
  moreButtonOptions: any;
  typesOfSend = ['אימייל', 'סמס'];
  selectedType: string = '';
  emails: { email: string }[] = [
    {
      email: '',
    },
  ];
  sending: boolean = false;
  currentFile!: string;
  sendTime = [
    {
      name: '5 דקות',
      id: 0,
      value: '5',
    },
    { name: '10 דקות', id: 1, value: '10' },
    { name: 'רבע שעה', id: 2, value: '15' },
    { name: '20 דקות', id: 3, value: '20' },
    { name: 'חצי שעה', id: 4, value: '30' },
    { name: 'שעה', id: 5, value: '60' },
  ];
  selectedTime = '';
  selectedStart = 15;
  selectedEnd = 15;
  splitFile = 0;
  selectedFile = '';
  constructor(
    private _jobService: JobService,
    private _filesService: FilesService,
    private _campaignService: CampaignService
  ) {
    const that = this;
    this.emailButtonOptions = {
      icon: 'email',
      text: 'לשלוח טסט',
      onClick(e: any) {
        if (confirm('יש לאשר כדי לשלוח טסט')) {
          that.sendTest();
        }
      },
    };
    this.splitButtonOptions = {
      icon: '',
      text: 'שלח לפיצול',
      onClick: (e: any) => {
        this._jobService
          .changeEnv(
            this.selectedStart,
            this.selectedEnd,
            this.sendTime[Number(this.selectedTime)].value
          )
          .subscribe(() => {
            this.splitVisible = false;
            alert('אל תשכח/י להפעיל בהגדרות את התהליך הרצוי');
            this._filesService
              .splitFile(
                this.sendTime[Number(this.selectedTime)].value,
                this.splitFile,
                this.selectedFile
              )
              .subscribe(() => {
                this.getFiles();
              });
          });
      },
    };
    this.moreButtonOptions = {
      icon: 'plus',
      text: 'הוספת אימייל למשלוח',
      onClick(e: any) {
        that.emails.push({
          email: '',
        });
      },
    };
  }
  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      this.currentUser = localStorage.getItem('currentUser')!;
      this.getFiles();
      this.getSearch();
    }
  }
  calculateCellValue(data: any) {
    return bytes(data.size);
  }
  sendFile(fileName: string) {
    if (confirm('יש לאשר כדי לשלוח קובץ זה')) {
      this._filesService
        .sendFile(fileName, this.currentUser)
        .subscribe((res) => {
          this.isVisible = true;
          this.files = res.files;
        });
    }
  }
  deleteFile(fileName: string) {
    if (confirm('יש לאשר כדי למחוק קובץ זה')) {
      this._filesService
        .deleteFile(fileName, this.currentUser)
        .subscribe((res) => {
          this.isDeleteVisible = true;
          this.getFiles();
        });
    }
  }
  getFiles() {
    this._filesService.getFiles(this.currentUser).subscribe((res) => {
      this.files = res.files;
    });
  }
  getSearch() {
    this._jobService.jobList().subscribe((res) => {
      this.jobList = res.traces
        .filter(
          (trace) =>
            trace.customJobId != '' ||
            trace.workflowReference.id ==
              'TWVpLUF2aXZpbS9NQSBJbnZvaWNlIFB1c2ggTkVX'
        )
        .map((trace) => {
          if (trace.customJobId == '') {
            trace.customJobId = trace.workflowReference.name;
          }
          return trace;
        });
    });
  }
  sendTestPopup(data: FileName) {
    this.currentFile = data.name;
    this.popupVisible = true;
  }
  sendExample(data: FileName) {
    if (confirm('הדוגמאות ישלחו בדקות הקרובות למייל שלך')) {
      this._campaignService
        .sendExample({
          user: this.currentUser,
          fileName: data.name,
        })
        .subscribe(() => {});
    }
  }
  fixDate(data: Traces): Date {
    return new Date(data.started.dateTime);
  }
  sendTest() {
    let date = new Date();
    let fileName = this.currentFile;
    let request = {
      fileName,
      newFileName:
        fileName.split('.7z')[0] +
        '_test' +
        date.getHours() +
        date.getMinutes() +
        date.getSeconds() +
        '.7z',
      user: this.currentUser,
      emails: this.emails,
    };
    this.sending = true;
    this._campaignService
      .sendTest(request, this.selectedType == 'אימייל' ? '1' : '2')
      .subscribe((res) => {
        this.isVisible = true;
        this.popupVisible = false;
        this.sending = false;
        this.emails = [
          {
            email: '',
          },
        ];
        this.selectedType = '';
      });
  }
  isValidForm() {
    return this.emails.filter((e) => e.email != '').length > 0;
  }
  openLink(data: Traces) {
    window.open('https://ol-bk-app1:30600/#/jobDetail/' + data.id, '_blank');
  }
  onRowPrepared(e: any) {
    if (e.rowType === 'data') {
      switch (e.data.status) {
        case 'Failed':
          e.rowElement.style.backgroundColor = '#e34243';
          e.rowElement.style.color = '#fff';
          e.rowElement.className = e.rowElement.className.replace(
            'dx-row-alt',
            ''
          );
          break;
        case 'Completed':
          e.rowElement.style.backgroundColor = '#9AD232';
          e.rowElement.className = e.rowElement.className.replace(
            'dx-row-alt',
            ''
          );
          break;
      }
    }
  }
  showSplitPopup(fileName: string) {
    this.selectedFile = fileName;
    this.splitVisible = true;
  }
}
