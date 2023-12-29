import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { TaskService } from '../services/task.service';

export interface PeriodicElement {
  title: string;
  user: string;
  startDate: string;
  status: string;
  endDate:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {status:'Complete' , title: 'Hydrogen', user: "1.0079", startDate:"10-11-2022", endDate:"10-11-2022"},
  {status:'In-Prossing' , title: 'Helium', user: "4.0026", startDate:"10-11-2022",endDate:"10-11-2022" },
  {status:'Complete' , title: 'Lithium', user: "6.941", startDate:"10-11-2022",endDate:"10-11-2022" },
  {status:'Complete' , title: 'Beryllium', user: "9.0122", startDate:"10-11-2022",endDate:"10-11-2022" },
  {status:'Complete' , title: 'Boron', user: "10.811", startDate:"10-11-2022",endDate:"10-11-2022" },
  {status:'Complete' , title: 'Carbon', user: "12.010", startDate:"10-11-2022",endDate:"10-11-2022" },
  {status:'Complete' , title: 'Nitrogen', user: "14.006", startDate:"10-11-2022",endDate:"10-11-2022" },
  {status:'Complete' , title: 'Oxygen', user: "15.999", startDate:"10-11-2022" ,endDate:"10-11-2022"},
  {status:'Complete' , title: 'Fluorine', user: "18.998", startDate:"10-11-2022",endDate:"10-11-2022" },
  { status:'Complete' , title: 'Neon', user: "20.179", startDate:"10-11-2022",endDate:"10-11-2022"},
];


@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})


export class TasksListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'title', 'user' ,'startDate','endDate','status', 'actions'];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  tasksFilter!:FormGroup
  users:any = [
    {name:"Moahmed" , id:1},
    {name:"Ali" , id:2},
    {name:"Ahmed" , id:3},
    {name:"Zain" , id:4},
  ]

  status:any = [
    {name:"Complete" , id:1},
    {name:"In-Prossing" , id:2},
  ]
  
  constructor(private service:TaskService,private fb:FormBuilder) { }

  ngOnInit(): void {
    /*
    this.getAllTasks()
    */
  }

  mappingTasks(data:any[]){
      let newTasks = data.map(item =>{
        return {
          title:item.title,
          startDate:item.startDate,
          endDate:item.endDate,
          status:item.status,
        }
      })
      return newTasks
   }

  

  getAllTasks() {
        /*

    this.service.getAllTasks().subscribe((res:any)=>{
       this.dataSource =this.mappingTasks(res.tasks)
    })
        */

  }
  
}