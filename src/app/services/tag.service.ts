import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Tag } from '../models/Tags.model';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  url = environment.serverUrl;
  constructor(private _http: HttpClient) {}
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
  refreshTag(tag: string, apiKey: string) {
    return this._http.get(
      this.url + '/RefreshTag?tag=' + tag,
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
