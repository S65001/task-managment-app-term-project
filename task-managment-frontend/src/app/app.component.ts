import { Component, Inject, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLargeScreen: Observable<boolean> | any;
  isAuth: boolean = true;

  @ViewChild('sidenav') sidenav: MatSidenav | any;

  constructor(private breakpointObserver: BreakpointObserver, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.isLargeScreen = this.breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Large])
      .pipe(map((result) => result.matches));
  }

  ngAfterViewInit() {
    this.isLargeScreen.subscribe((isLargeScreen: any) => {
      if (!isLargeScreen) {
        this.sidenav.close();
        this.cdr.detectChanges();
      } else {
        this.sidenav.open();
        this.cdr.detectChanges();
      }
    });
  }

}
