import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  makeLink() {
    const urls = [];
    urls.push('page2');
    urls.push('sub1');
    urls.push('sub2');
    return urls;
  }
}
