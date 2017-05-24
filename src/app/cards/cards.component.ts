import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  type = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.type = this.route.snapshot.params['type'];
    this.route.params.subscribe(params => {
      this.type = params['type'];
    });
  }

  goCards(num: number) {
    const id = parseInt(this.type, 10) + num;
    this.router.navigateByUrl('/cards/' + id);
  }

}
