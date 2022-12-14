import { FilesService } from './../services/files.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import { FileName } from '../models/Files.model';

@Component({
  selector: 'app-distribution-at-four',
  templateUrl: './distribution-at-four.component.html',
  styleUrls: ['./distribution-at-four.component.scss'],
  standalone: true,
  imports: [CommonModule, DxDataGridModule],
})
export class DistributionAtFourComponent implements OnInit {
  da4: FileName[] = [];
  constructor(private _filesService: FilesService) {}

  ngOnInit() {
    this._filesService
      .getFiles(localStorage.getItem('currentUser')!)
      .subscribe((files) => {
        this.da4 = files.da4;
      });
  }
}
