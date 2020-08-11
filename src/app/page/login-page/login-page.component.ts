import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  userName: string;
  password: string;
  error: boolean = false;
  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit() {

    if(isNullOrUndefined(this.userName) || isNullOrUndefined(this.password)) {
      this.error = true;
    } 
    if(this.userName === 'admin' && this.password === 'admin') {
     this.error = false;
     window.localStorage.setItem('user', this.userName);
     this.router.navigate(['../list'],{relativeTo: this.route}); 
    } 
    if(this.userName !== 'admin'){
      this.error = false;
      window.localStorage.setItem('user', this.userName);
      this.router.navigate(['../list'],{relativeTo: this.route}); 
    } else {
      this.error = true;
    }
  }
}
