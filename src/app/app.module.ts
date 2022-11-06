import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddCampaignComponent } from './add-campaign/add-campaign.component';
import {
  DxRadioGroupModule,
  DxTextBoxModule,
  DxSelectBoxModule,
  DxButtonModule,
  DxDataGridModule,
  DxToastModule,
  DxChartModule,
  DxLoadIndicatorModule,
  DxPopupModule,
  DxSwitchModule,
  DxNumberBoxModule,
  DxAccordionModule,
} from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { RouterModule } from '@angular/router';
import { ShowFilesComponent } from './show-files/show-files.component';
import { LoginComponent } from './login/login.component';
import { TagsComponent } from './tags/tags.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SmsReportComponent } from './sms-report/sms-report.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { SettingsComponent } from './settings/settings.component';
import { QaComponent } from './qa/qa.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCampaignComponent,
    CampaignsComponent,
    ShowFilesComponent,
    HomeComponent,
    LoginComponent,
    TagsComponent,
    NavbarComponent,
    SmsReportComponent,
    UnsubscribeComponent,
    SettingsComponent,
    QaComponent,
  ],
  imports: [
    BrowserModule,
    DxAccordionModule,
    DxRadioGroupModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxLoadIndicatorModule,
    DxButtonModule,
    HttpClientModule,
    DxChartModule,
    DxDataGridModule,
    DxToastModule,
    DxPopupModule,
    DxSwitchModule,
    DxNumberBoxModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          redirectTo: 'templates',
          pathMatch: 'full',
        },
        {
          path: 'templates',
          component: HomeComponent,
        },
        {
          path: 'files',
          component: ShowFilesComponent,
        },
        {
          path: 'tags',
          component: TagsComponent,
        },
        {
          path: 'login',
          component: LoginComponent,
        },
        {
          path: 'smsReports',
          component: SmsReportComponent,
        },
        {
          path: 'unsubscribe',
          component: UnsubscribeComponent,
        },
        {
          path: 'settings',
          component: SettingsComponent,
        },
        {
          path: 'QA',
          component: QaComponent,
        },
      ],
      {
        useHash: true,
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
