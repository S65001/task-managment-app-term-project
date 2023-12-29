import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../services/task.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  taskData: any;
  newComment:String = '';

  constructor(private route: ActivatedRoute, private taskService: TaskService,private authServuice:AuthService) { }

  ngOnInit(): void {
    this.taskService.getTaskData(this.route.snapshot.paramMap.get('id')).subscribe((res: any) => {
      this.taskData = res;      
    });

  }

  addComment()
  {
    let comment:any = {content:this.newComment,ownerId:this.authServuice.getUserId()}
    this.taskService.addComment(this.taskData.taskId,comment).subscribe((response:any)=>{location.reload()});

  }

}
