import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  show = false;
  title = 'mini-project';
  constructor(private router: Router) {

  }
  ngOnInit(): void {
    let url = window.location.href;
    if (url.match(/register/) || url.match(/login/) || url.match(/forgot-password/)) this.show = false;
    else {
      this.show = true;
    }
  }
}
