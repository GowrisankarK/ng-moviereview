import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.css']
})
export class LogoutPageComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    window.localStorage.clear();
    this.router.navigate(['../login'],{relativeTo: this.route});
  }

  onSubmit() {
    window.localStorage.clear();
    this.router.navigate(['../login'],{relativeTo: this.route});
  }
}
