import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  private router: Router;
  title = 'Home';
  constructor(router: Router) {
    this.router = router;
  }

  generateTitle(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('entrei na Home');
      }, 3000);
    });
  }

  ngOnInit(): void {
    this.generateTitle().then((title) => {
      this.title = title;
    });
  }

  about(): void {
    this.router.navigate(['/about']);
  }

  contact(): void {
    this.router.navigate(['/contact']);
  }
  home(): void {
    this.router.navigate(['/']);
  }
}
