import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  teams: any = [];
  tasks: any = [];
  constructor(private task: TaskService, private auth: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.task.getFeeds(this.auth.getUserId()).subscribe((res: any) => {
      this.tasks = res.tasks;
      this.teams = res.teams;
      console.log(this.tasks);
      console.log(this.teams);

    });
  }

  openTask(id: any) {
    this.route.navigate(['/task/' + id]);
  }
  openTeam(id: any) {
    this.route.navigate(['/team/' + id]);
  }

}
