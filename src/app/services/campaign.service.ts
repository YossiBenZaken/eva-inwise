import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Campaign } from '../models/Campaign.model';

@Injectable({
  providedIn: 'root',
})
export class CampaignService {
  url = environment.serverUrl;
  constructor(private _http: HttpClient) {}
  addCampaign(campaign: Campaign) {
    return this._http.post('/api/TemplateCodes', campaign);
  }
  updateCampaign(campaign: Campaign) {
    return this._http.post(
      '/api/TemplateCodes?code=' + campaign.oldCode,
      campaign
    );
  }
  getCampaigns() {
    return this._http.get<Campaign[]>(this.url + '/getTemplates');
  }
  deleteCampaign(code: string) {
    return this._http.get<Campaign[]>(this.url + '/deleteTemplate?key=' + code);
  }
  sendTestCampaign(request: any, type: number) {
    return this._http.post(
      `${this.url}/sendTestInwise?type=${type}`,
      JSON.stringify(request)
    );
  }
  sendTest(request: any, type: string) {
    return this._http.post(
      this.url + '/sendTest?type=' + type,
      JSON.stringify(request)
    );
  }

  sendExample(request: any) {
    return this._http.post(
      `${this.url}/sendTestExample`,
      JSON.stringify(request)
    );
  }
}
