import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TeamCreateRequest } from 'src/app/interfaces/team-create-request';

import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {

  constructor(private http: HttpClient) {}

  addTeam(teamCreateRequest:TeamCreateRequest)
  {
    return this.http.post(environment.tasksBaseAPI+"team", teamCreateRequest)

  }

  getTeams()
  {
    return this.http.get(environment.tasksBaseAPI+"team");
  }
  getTeamData(id:string)
  {
    return this.http.get(environment.tasksBaseAPI+"team/"+id);


  }
}
