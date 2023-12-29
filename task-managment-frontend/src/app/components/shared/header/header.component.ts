import { Component, ElementRef, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  @ViewChild('log') varName: ElementRef | any;
  isAuth: boolean = false;
  lang: string = 'en';

  constructor(private user: AuthService) { }

  ngOnInit(): void {

    if (this.user.isAuthentication()) {
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }
    
  }

  toggleSidenar() {
    this.sidenavToggle.emit();
  }

  loginClick() {
    this.varName.nativeElement.click();
  }

  logoutClick() {
    this.user.logOut();
    window.location.href = '/';
  }


}
