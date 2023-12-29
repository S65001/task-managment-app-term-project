import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { TaskComponent } from './components/task/task.component';
import { TeamComponent } from './components/team/team.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { TeamsComponent } from './components/teams/teams.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'add-task/:id', component: AddTaskComponent },
  { path: 'add-team', component: AddTeamComponent },
  { path: 'tasks-list', component: TasksListComponent },
  { path: 'task/:id', component: TaskComponent },
  { path: 'team/:id', component: TeamComponent },
  {path: 'teams', component: TeamsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
