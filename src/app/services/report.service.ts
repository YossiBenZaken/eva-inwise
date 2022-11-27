import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Report } from '../models/Report.model';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  url = environment.serverUrl;
  constructor(private _http: HttpClient) {}
  getEmailReport(tag: string) {
    return this._http.get(this.url + `/getReport?fileName=${tag}&type=1`);
  }
  getSmsReport(fileName: string) {
    return this._http.get(this.url + `/getReport?fileName=${fileName}&type=2`);
  }
  getListReports(apiKey: string) {
    return this._http.get<Report[]>(
      this.url + '/getDetailReports',
      this.getHeaders(apiKey)
    );
  }
  getHeaders(api: string) {
    return {
      headers: {
        api,
      },
    };
  }
}
