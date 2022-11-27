import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Unsubscribe } from '../models/Unsubscribe.model';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  url = environment.serverUrl;
  constructor(private _http: HttpClient) {}
  listUnsubscribe(apiKey: string) {
    return this._http.get<Unsubscribe[]>(
      `${this.url}/listUnsubscribe`,
      this.getHeaders(apiKey)
    );
  }
  resubscribe(email: string, apiKey: string) {
    return this._http.get(
      `${this.url}/resubscribe?email=${email}`,
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
