import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpUrlEncodingCodec } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('padrão');
  }
}
