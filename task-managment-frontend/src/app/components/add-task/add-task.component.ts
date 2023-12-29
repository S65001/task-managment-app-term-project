import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateTask } from 'src/app/context/DTO';
import { TaskService } from '../services/task.service';
import { ActivatedRoute,Router } from '@angular/router';
import { TeamServiceService } from '../services/team-service.service';
import { Member } from 'src/app/interfaces/member';
import { TaskCreateRequest } from 'src/app/interfaces/task-create-request';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  constructor(private datePipe:DatePipe,private route: ActivatedRoute,private fb: FormBuilder, private service: TaskService,private teamService:TeamServiceService,private router:Router) { }
  newTaskForm!: FormGroup
  assignees: Array<Member> = [];
  teamLeader:Member = {email:'',firstname:'',lastname:'', role:'',memberId:''};

  teamId:string = '';

  ngOnInit(): void {
    this.teamId = this.route.snapshot.paramMap.get('id')||'';
    this.createform();
    this.teamService.getTeamData(this.teamId).subscribe((res: any) => {
      this.assignees = res.members;
      this.teamLeader = res.teamLeader;
      
    })
  }


  createform() {
    this.newTaskForm = this.fb.group({
      title: ['', Validators.required],
      status: ['', Validators.required],
      assignee: ['', Validators.required],
      priority: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      description: ['', Validators.required]
    })


  }

  createTask() {

    let model = this.prepereFormData();
    this.service.addTask(this.teamId,model).subscribe(res => {

      this.router.navigate(['team/' + this.teamId])

    })

  }

  prepereFormData() {
    let assignee:Member = this.assignees[this.newTaskForm.get('assignee')?.value];

    let taskCreateRequest:TaskCreateRequest = {title:this.newTaskForm.get('title')?.value,
                                               description:this.newTaskForm.get('description')?.value,
                                               status:this.newTaskForm.get('status')?.value,
                                               priority:this.newTaskForm.get('priority')?.value,
                                               startDate:this.datePipe.transform(this.newTaskForm.get('startDate')?.value,'yyyy-MM-ddTHH:mm:ss')||"",
                                               endDate:this.datePipe.transform(this.newTaskForm.get('endDate')?.value,'yyyy-MM-ddTHH:mm:ss')||"" ,
                                               creator:this.teamLeader,
                                               assignee:assignee
                                            }

    





                                            console.log(taskCreateRequest);



    return taskCreateRequest;
  }

}
