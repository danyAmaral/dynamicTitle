import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
})
export class ContactComponent implements OnInit {
  private router: Router;
  title = 'entrei no contact';
  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {}

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
