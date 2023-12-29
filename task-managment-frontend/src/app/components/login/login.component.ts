import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  totalCols: number = 12;
  cols: number = 12;
  lang: String = 'en';

  authMessage: string = '';

  constructor(
    private auth: AuthService,
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.grid();
  }

  onSubmit(f: NgForm) {
    this.auth.login(f.value.email, f.value.password).subscribe((res: any) => {
      this.auth.saveToken(res.token);
      this.auth.saveRole(res.role);
      this.auth.saveUserId(res.id);
      window.location.href = '/home';
    })
    // if (this.auth.login(f.value.email, f.value.password)) {
    //   window.location.href = '/home';
    // }
  }


  grid() {
    this.breakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
    ]).subscribe((result: any) => {
      if (result.breakpoints[Breakpoints.Small]) {
        this.totalCols = 12;
        this.cols = 12;
      }
      else if (result.breakpoints[Breakpoints.Medium]) {
        this.totalCols = 12;
        this.cols = 6;
      }
      else if (result.breakpoints[Breakpoints.Large]) {
        this.totalCols = 9;
        this.cols = 3;
      }
    });
  }


}
