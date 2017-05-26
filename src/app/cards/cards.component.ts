import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  type = '';
  key1 = '';
  key2 = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.type = this.route.snapshot.params['type'];
    this.route.params.subscribe(params => {
      this.type = params['type'];
    });

    this.route.queryParams.subscribe(params => {
      this.key1 = params['key1'];
      this.key2 = params['key2'];
    });

  }

  goCards(num: number) {
    const id = parseInt(this.type, 10) + num;
    this.router.navigateByUrl('/cards/' + id);
  }

}
