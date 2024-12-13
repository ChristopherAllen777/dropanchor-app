import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  showFloatingButton = true;

  constructor() {}

  ngOnInit() {
    this.checkFirstLoad();
  }

  checkFirstLoad() {
    const isFirstLoad = !localStorage.getItem('hasVisited');
    if (isFirstLoad) {
      this.showFloatingButton = true;

      // Mark as visited
      localStorage.setItem('hasVisited', 'true');

      // Optionally, hide the button after a delay
      setTimeout(() => {
        this.showFloatingButton = false;
      }, 5000); // 5 seconds
    }
  }

}
