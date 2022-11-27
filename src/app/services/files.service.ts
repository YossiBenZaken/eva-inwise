import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Files } from '../models/Files.model';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  url = environment.serverUrl;
  constructor(private _http: HttpClient) {}
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
  splitFile(sendEvery: string,split: number, fileName: string) {
    return this._http.get(`${this.url}/SplitFile?sendEvery=${sendEvery}&split=${split}&fileName=${fileName}`,{
      headers: {
        user: localStorage.getItem('currentUser')!
      }
    })
  }
}
