import { Component, OnInit } from '@angular/core';
import { initDashboard } from 'app/shared/init';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    $(initDashboard);

  }

  goCards(type) {
    this.router.navigateByUrl('/cards/' + type);
  }

}
