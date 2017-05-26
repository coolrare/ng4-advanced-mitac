import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logininfo: any = {};

  constructor(private router: Router) { }

  ngOnInit() {
  }

  doLogin() {
    if(this.logininfo.username == 'will' && this.logininfo.password == '123') {
      localStorage['user'] = this.logininfo.username;
      this.router.navigate(['/cards', '100'])

    }
  }

}
