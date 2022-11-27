import { FilesService } from './../services/files.service';
import { JobService } from './../services/job.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DxDataGridModule, DxSwitchModule } from 'devextreme-angular';
import { FileName } from './../models/Files.model';
import { Workflow } from './../models/Workflow.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  standalone: true,
  imports: [CommonModule, DxDataGridModule, DxSwitchModule],
})
export class SettingsComponent implements OnInit {
  dataSource: Workflow[] = [];
  every5: FileName[] = [];
  every10: FileName[] = [];
  every15: FileName[] = [];
  every20: FileName[] = [];
  every30: FileName[] = [];
  everyHour: FileName[] = [];
  constructor(private _jobService: JobService, private _filesService: FilesService) {}
  ngOnInit() {
    this._jobService.deploymentList().subscribe((value) => {
      this.dataSource = value;
    });
    this._filesService
      .getFiles(localStorage.getItem('currentUser')!)
      .subscribe((files) => {
        this.every5 = files.every5;
        this.every10 = files.every10;
        this.every15 = files.every15;
        this.every20 = files.every20;
        this.every30 = files.every30;
        this.everyHour = files.everyHour;
      });
  }
  onValueChange(e: Workflow) {
    this._jobService
      .updateDeployment(e.status == 'DEPLOYED' ? 'undeploy' : 'deploy', e.name)
      .subscribe((value) => {
        this.dataSource = value;
      });
  }
}
