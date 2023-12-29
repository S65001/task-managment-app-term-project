import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CreateTask } from 'src/app/context/DTO';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SideBarComponent } from './components/shared/side-bar/side-bar.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { RouterModule } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HomeComponent } from './components/home/home.component';
import { TaskComponent } from './components/task/task.component';
import { TeamComponent } from './components/team/team.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { TeamsComponent } from './components/teams/teams.component';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    AddUserComponent,
    AddTaskComponent,
    TasksListComponent,
    LoginComponent,
    HomeComponent,
    TaskComponent,
    TeamComponent,
    AddTeamComponent,
    TeamsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    DatePipe
    
  ],
  providers: [DatePipe],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
