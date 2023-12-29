import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private http: HttpClient) {

  }

  getUserInfo(email:String)
  {
    return this.http.get(environment.tasksBaseAPI + 'userInfo/'+email)
  }
}
