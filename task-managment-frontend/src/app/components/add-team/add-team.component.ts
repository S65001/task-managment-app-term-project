import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';
import { TeamServiceService } from '../services/team-service.service';
import { TeamCreateRequest } from 'src/app/interfaces/team-create-request';
import { UserInfoService } from '../services/user-info.service';
import { Member } from 'src/app/interfaces/member';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {

  constructor(private fb: FormBuilder, private teamService: TeamServiceService, private userInfoService:UserInfoService, private router: Router) { }
  newTeamForm!: FormGroup
  memberToAdd:string = 'memoooo';


  ngOnInit() : void 
  {
    this.createform();
  }



  createform() {
    this.newTeamForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required,],
      teamLeader: ['', [Validators.required,Validators.email]],
      members: this.fb.array([]),
      newMember:['',[Validators.email]]
    })

  
  }
  addMember()
  {

    const newMemberValue = this.newTeamForm.get("newMember")?.value;
    

     this.userInfoService.getUserInfo(newMemberValue).subscribe((response:any) => {
       
      let member:Member = this.mapToMember(response);
      let membersAraay = this.newTeamForm.get("members") as FormArray;
      membersAraay.push(this.fb.control<any>(member));
      this.newTeamForm.get("newMember")?.reset();
    });


    
  }
  createTeam()
    {
      let teamLeaderInfo: Member;

      this.userInfoService.getUserInfo(this.newTeamForm.get('teamLeader')?.value).subscribe((response:any) => {
         
        teamLeaderInfo= this.mapToMember(response);
        let teamCreateRequest = this.prepereTeamCreateRequest(teamLeaderInfo);
      this.teamService.addTeam(teamCreateRequest).subscribe((response:any)=>{
        this.router.navigate(['/home'])
      })
  
    })
      
      
    }

    
  prepereTeamCreateRequest(teamLeaderInfo:Member) 
  {

    

    this.userInfoService.getUserInfo(this.newTeamForm.get('teamLeader')?.value).subscribe((response:any) => {
       
      teamLeaderInfo= this.mapToMember(response);

  })
  let request : TeamCreateRequest = {name:this.newTeamForm.get("name")?.value,description:this.newTeamForm.get('description')?.value,teamLeader:teamLeaderInfo,members:this.newTeamForm.get("members")?.value};
  console.log(request)


return request;
}
  

  

  mapToMember(userInfo:any) : Member
  {
    let member:Member = {memberId:userInfo.userId,firstname:userInfo.firstname,lastname:userInfo.lastname,email:userInfo.email,role:userInfo.role};

    return member;


  }


}
