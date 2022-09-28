import { FileName } from './../models/Files.model';
import { Workflow } from './../models/Workflow.model';
import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  dataSource: Workflow[] = [];
  every5: FileName[] = [];
  every10: FileName[] = [];
  every15: FileName[] = [];
  every30: FileName[] = [];
  constructor(private _appService: AppService) { }
  ngOnInit() {
    this._appService.deploymentList().subscribe((value) => {
      this.dataSource = value;
    });
    this._appService.getFiles(localStorage.getItem('currentUser')!).subscribe(files => {
      this.every5 = files.every5;
      this.every10 = files.every10;
      this.every15 = files.every15;
      this.every30 = files.every30;
    })
  }
  onValueChange(e: Workflow) {
    this._appService.updateDeployment(e.status == 'DEPLOYED' ? 'undeploy' : 'deploy',e.name).subscribe(value => {
      this.dataSource = value
    })
  }

}
