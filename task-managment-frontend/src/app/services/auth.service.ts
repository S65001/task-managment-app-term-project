import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  USER_ID: string = 'USER_ID';
  ROLE: string = 'user-role';
  TOKEN: string = 'auth-token';
  users = [
    {
      userName: 'admin',
      password: '123456',
      firstName: 'admin',
      lastName: '0',
      role: 'admin',
      team: 'team0',
      id: '0',
    },
    {
      userName: 'team leader',
      password: '123456',
      firstName: 'team',
      lastName: 'leader',
      role: 'teamLeader',
      team: 'team1',
      id: '1',
    },
    {
      userName: 'member1',
      password: '123456',
      firstName: 'user',
      lastName: ' 2',
      role: 'user',
      team: 'team2',
      id: '2',
    },
    {
      userName: 'member2',
      password: '123456',
      firstName: 'user',
      lastName: ' 3',
      role: 'user',
      team: 'team3',
      id: '3',
    },
    {
      userName: 'member3',
      password: '123456',
      firstName: 'user',
      lastName: ' 3',
      role: 'user',
      team: 'team3',
      id: '4',
    },
  ]

  public isAuth = new BehaviorSubject<boolean>(false);


  constructor(private http: HttpClient) {

    if (localStorage.getItem(this.TOKEN)) {
      this.isAuth.next(true);
    } else {
      this.isAuth.next(false);
    }

  }

  login(email: string, password: string) {

    return this.http.post(environment.usersBaseApi+'login', {
      email,
      password
    });

  }

  isAuthentication() {
    return this.isAuth.value;
  }

  logOut(): void {

    localStorage.clear();

    localStorage.removeItem(this.USER_ID);

    localStorage.removeItem(this.ROLE);

    this.isAuth.next(false);

  }

  public saveUserId(userId: string): void {

    localStorage.removeItem(this.USER_ID);

    localStorage.setItem(this.USER_ID, userId);

    this.isAuth.next(true);

  }

  public saveToken(token: string): void {

    localStorage.removeItem(this.TOKEN);

    localStorage.setItem(this.TOKEN, token);

    this.isAuth.next(true);

  }

  public saveRole(role: string): void {

    localStorage.removeItem(this.ROLE);

    localStorage.setItem(this.ROLE, role);

  }

  public getUserId(): string | any {

    return localStorage.getItem(this.USER_ID);

  }

  public getRole(): string | any {

    return localStorage.getItem(this.ROLE);

  }

  public getToken(): string | any {

    return localStorage.getItem(this.TOKEN);

  }

  public autoLogOut(time: any) {

    const t = timer(time);

    t.subscribe((d) => {
      this.logOut();
    });

  }

  // login(userName: any, password: any) {

  //   for (let i = 0; i < this.users.length; i++) {
  //     if (this.users[i].userName == userName && this.users[i].password == password) {

  //       localStorage.removeItem(this.USER_ID);
  //       localStorage.setItem(this.USER_ID, this.users[i].id);

  //       localStorage.removeItem(this.ROLE);
  //       localStorage.setItem(this.ROLE, this.users[i].role);

  //       this.isAuth.next(true);

  //       return true;
  //     }
  //   }

  //   return false;
  // }


}
