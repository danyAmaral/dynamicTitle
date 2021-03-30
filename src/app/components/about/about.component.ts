import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
})
export class AboutComponent implements OnInit {
  private router: Router;
  title = 'about';
  constructor(router: Router) {
    this.router = router;
  }

  generateTitle(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('entrei no about');
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
