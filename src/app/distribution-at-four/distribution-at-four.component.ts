import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { FileName } from '../models/Files.model';

@Component({
  selector: 'app-distribution-at-four',
  templateUrl: './distribution-at-four.component.html',
  styleUrls: ['./distribution-at-four.component.scss']
})
export class DistributionAtFourComponent implements OnInit {
  da4: FileName[] = [];
  constructor(private _appService: AppService) { }

  ngOnInit() {
    this._appService.getFiles(localStorage.getItem('currentUser')!).subscribe(files => {
      this.da4 = files.da4;
    })
  }

}
