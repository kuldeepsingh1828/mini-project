import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  drawerOpen = false;
  size: 100;
  currentWidth = 98;
  show = false;
  title = 'mini-project';
  constructor(private router: Router) {

  }
  setCurrentWidth() {
    if (this.currentWidth == 98)
      this.currentWidth = 76;
    else
      this.currentWidth = 98;
  }
  toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }

  ngOnInit(): void {
    let url = window.location.href;
    if (url.match(/register/) || url.match(/login/) || url.match(/forgot-password/) || url.match(/testing/)) this.show = false;
    else {
      this.show = true;
    }
  }
}
