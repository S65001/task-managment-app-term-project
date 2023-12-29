import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  teamData: any;
  show: boolean = false;
  constructor(private route: ActivatedRoute, private task: TaskService,private router:Router) { }

  ngOnInit(): void {
    this.task.getTeamData(this.route.snapshot.paramMap.get('id')).subscribe((res: any) => {
      this.teamData = res;
      console.log(this.teamData);
    });
  }
  toggleShow() {
    this.show = !this.show;    
  }

  openTask(id: any) {
    this.router.navigate(['/task/' + id]);
  }
  openAddTask()
  {
    this.router.navigate(['/add-task/' + this.teamData.teamId]);

  }

}
