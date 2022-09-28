import { Workflow } from './models/Workflow.model';
import { Unsubscribe } from './models/Unsubscribe.model';
import { Search } from './models/Search.model';
import { Report } from './models/Report.model';
import { environment } from './../environments/environment';
import { Files } from './models/Files.model';
import { Campaign } from './models/Campaign.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tag } from './models/Tags.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
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
  getFiles(user: string) {
    return this._http.get<Files>(this.url + '/listOfFiles?user=' + user);
  }
  sendFile(fileName: string, user: string) {
    return this._http.get<Files>(
      this.url + '/sendFile?fileName=' + fileName + '&user=' + user
    );
  }
  deleteFile(fileName: string, user: string) {
    return this._http.get<Files>(
      this.url + '/sendFile?fileName=' + fileName + '&delete=true&user=' + user
    );
  }
  getTags(apiKey: string) {
    return this._http.get<Tag[]>(
      this.url + '/getTags',
      this.getHeaders(apiKey)
    );
  }
  getDetails(apiKey: string, tag: string) {
    return this._http.get<any[]>(
      this.url + '/getDetailsTag?tag=' + tag,
      this.getHeaders(apiKey)
    );
  }
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
  sendTest(request: any, type: string) {
    return this._http.post(
      this.url + '/sendTest?type=' + type,
      JSON.stringify(request)
    );
  }
  sendTestCampaign(request: any, type: number) {
    return this._http.post(
      `${this.url}/sendTestInwise?type=${type}`,
      JSON.stringify(request)
    );
  }
  sendExample(request: any) {
    return this._http.post(
      `${this.url}/sendTestExample`,
      JSON.stringify(request)
    );
  }
  refreshTag(tag: string, apiKey: string) {
    return this._http.get(
      this.url + '/RefreshTag?tag=' + tag,
      this.getHeaders(apiKey)
    );
  }
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
  splitFile(sendEvery: string,split: number, fileName: string) {
    return this._http.get(`${this.url}/SplitFile?sendEvery=${sendEvery}&split=${split}&fileName=${fileName}`,{
      headers: {
        user: localStorage.getItem('currentUser')!
      }
    })
  }
  changeEnv(start:number,end:number,num:string) {
    return this._http.get(`${this.url}/changeEnv?start=${start}&end=${end}&num=${num}`)
  }
  listUnsubscribe(apiKey: string) {
    return this._http.get<Unsubscribe[]>(
      `${this.url}/listUnsubscribe`,this.getHeaders(apiKey)
    );
  }
  resubscribe(email: string,apiKey:string) {
    return this._http.get(`${this.url}/resubscribe?email=${email}`,this.getHeaders(apiKey))
  }
  getHeaders(api: string) {
    return {
      headers: {
        api,
      },
    };
  }
  getKeys() {
    return [
      {
        Key: '673fa1397619414a8ba89c3e588738e9',
        Value: 'אורדע פרינט -מנורה',
      },
      {
        Key: 'd7accaaeebd649c291563c302d562990',
        Value: 'אורדע - מנורה מתגלגלים',
      },
      {
        Key: '6e8f7cf6dc55453dabdad81d9bd04d42',
        Value: 'אורדע - אלטשולר מסרונים',
      },
      {
        Key: 'ae66793411b74393bd333b2aff7b327a',
        Value: 'אורדע - עיריית תל אביב',
      },
      {
        Key: 'ee23814f990f44c7a4a232be0b73b806',
        Value: 'אורדע - כללית',
      },
      {
        Key: 'ac0ac9a648504369b7f2b0c689900d92',
        Value: 'אורדע - חבר',
      },
      {
        Key: '6319d078139c46168266ab15e9e2ad14',
        Value: 'אורדע - כללי',
      },
      {
        Key: 'e6a5a5511e0f4d95be8526d53f52a9aa',
        Value: 'אורדע - לאומי קופות גמל',
      },
      {
        Key: 'ba2258faa7c2406e9e9e09b06b55dc78',
        Value: 'אורדע - שוק ההון',
      },
      {
        Key:'1491cb42e98f474eaf55a1ba7ce3760c',
        Value: 'אורדע - מי אביבים'
      },
      {
        Key: 'd20521df60b240f8a6990411055ea1dd',
        Value: 'אורדע עיריית חיפה - ארנונה'
      },
      {
        Key: '4786d475c9264adcb2e289656b459b0d',
        Value: 'אורדע - מי כרמל'
      },
      {
        Key: '7868dc7cae81402dbb83a31ef74bbca7',
        Value: 'אורדע - מניב ראשון'
      },
      {
        Key: '67baa730335441ba995ed703cc6efb73',
        Value: 'אורדע - מנורה מתגלגלים (ביטוח)'
      },
      {
        Key: '70dd9d618c7c419bb1d82adce979ba6e',
        Value: 'אורדע – מיתב'
      }
    ].sort((a, b) => a.Value.localeCompare(b.Value));
  }
}
