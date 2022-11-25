import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'templates',
    pathMatch: 'full',
  },
  {
    path: 'templates',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'files',
    loadComponent: () =>
      import('./show-files/show-files.component').then(
        (m) => m.ShowFilesComponent
      ),
  },
  {
    path: 'tags',
    loadComponent: () =>
      import('./tags/tags.component').then((m) => m.TagsComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'smsReports',
    loadComponent: () =>
      import('./sms-report/sms-report.component').then(
        (m) => m.SmsReportComponent
      ),
  },
  {
    path: 'unsubscribe',
    loadComponent: () =>
      import('./unsubscribe/unsubscribe.component').then(
        (m) => m.UnsubscribeComponent
      ),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./settings/settings.component').then((m) => m.SettingsComponent),
  },
  {
    path: 'QA',
    loadComponent: () => import('./qa/qa.component').then((m) => m.QaComponent),
  },
  {
    path: 'DA4',
    loadComponent: () =>
      import('./distribution-at-four/distribution-at-four.component').then(
        (m) => m.DistributionAtFourComponent
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
