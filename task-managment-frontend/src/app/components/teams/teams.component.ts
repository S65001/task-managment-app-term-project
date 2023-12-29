import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamServiceService } from '../services/team-service.service';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  
   teams:any[] = [];
  

  constructor(private router:Router, private teamService:TeamServiceService) { }

  ngOnInit(): void 
  {
    this.teamService.getTeams().subscribe((response:any)=>{
      this.teams=response.content;
      console.log(this.teams);
    });
    
  }
  openTeam(id: any) {
    this.router.navigate(['/team/' + id]);
  }

}
