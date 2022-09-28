import { Unsubscribe } from './../models/Unsubscribe.model';
import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.scss']
})
export class UnsubscribeComponent implements OnInit {
  list!: Unsubscribe[];
  keys: { Key: string; Value: string }[] = [];
  loadingList: boolean = true;
  constructor(private _appService: AppService) { }

  ngOnInit(): void {
    this.keys = this._appService.getKeys()
  }
  getList(e: any) {
    this.list = [];
    this.loadingList = true
    this._appService.listUnsubscribe(e.value).subscribe(res => {
      this.list = res;
      this.loadingList = false;
    })
  }
  Release(data: Unsubscribe,apiKey: string) {
    this.list.splice(this.list.indexOf(data),1);
    this._appService.resubscribe(data.target,apiKey).subscribe(() => {})
  }
}
