import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {


  constructor(private fb: FormBuilder, private service: TaskService) { }

  newTaskForm!: FormGroup
  UserName: any = [
    { name: "Moahmed", id: 1 },
    { name: "Ali", id: 2 },
    { name: "Ahmed", id: 3 },
    { name: "Zain", id: 4 },
  ]
  ngOnInit(): void {
    this.userform();
  }

  userform() {
    this.newTaskForm = this.fb.group({
      UserName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      Email: ['', Validators.required],
      Role: ['', Validators.required],
      Team: ['', Validators.required]
    })


  }
  createUser() {
    let model = this.prepereFormData()
    this.service.createUser(model).subscribe(res => {

    })
  }
  prepereFormData() {
    let formData = new FormData()
    Object.entries(this.newTaskForm.value).forEach(([key, value]: any) => {

      formData.append(key, value)

    })
    return formData
  }


}
