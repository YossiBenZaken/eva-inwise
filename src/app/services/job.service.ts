import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Search } from '../models/Search.model';
import { Workflow } from '../models/Workflow.model';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  url = environment.serverUrl;
  constructor(private _http: HttpClient) {}
  jobDetails(jobId: string) {
    return this._http.get(`${this.url}/jobDetails?jobid=${jobId}`);
  }
  jobList() {
    return this._http.get<Search>(`${this.url}/runningJobs`);
  }
  deploymentList() {
    return this._http.get<Workflow[]>(`${this.url}/getDeployment`);
  }
  updateDeployment(action: string,job:string){
    return this._http.get<Workflow[]>(`${this.url}/getDeployment?action=${action}&job=${job}`);
  }
  changeEnv(start:number,end:number,num:string) {
    return this._http.get(`${this.url}/changeEnv?start=${start}&end=${end}&num=${num}`)
  }
}
