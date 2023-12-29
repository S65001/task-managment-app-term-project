import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskTable } from 'src/app/Model/TableData';
import { CreateTask } from 'src/app/context/DTO';
import { TaskCreateRequest } from 'src/app/interfaces/task-create-request';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) {


  }
  getAllTasks() {
    return this.http.get(environment.baseApi + '/all-tasks')
  }

  createTask(model: any) {

    return this.http.post(environment.baseApi + '/add-tasks ', model)

  }
  createUser(model: any) {
    return this.http.post(environment.baseApi + '/add-user ', model)

  }

  getAllAssignees() {
    return this.http.get(environment.baseApi + '/get-assignees')
  }

  getFeeds(userId: any) {
    return this.http.get(environment.tasksBaseAPI + 'user/' + userId)
  }

  getTaskData(taskId:any){
    return this.http.get(environment.tasksBaseAPI + 'task/' + taskId)
  }

  getTeamData(teamId:any){
    return this.http.get(environment.tasksBaseAPI + 'team/' + teamId)
  }

  addTask(teamId:string, taskCreateRequest:TaskCreateRequest)
  {
   return this.http.post(environment.tasksBaseAPI+'task/'+teamId,taskCreateRequest);
  }

  addComment(taskId:string,comment:any)
  {
    return this.http.post(environment.tasksBaseAPI+"task/"+taskId+"/comment",comment);
  }

}
