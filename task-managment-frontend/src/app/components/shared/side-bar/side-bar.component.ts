import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  ROLE: string = ''

  constructor(private user: AuthService) { }

  ngOnInit(): void {
    this.ROLE = this.user.getRole();
  }

}
