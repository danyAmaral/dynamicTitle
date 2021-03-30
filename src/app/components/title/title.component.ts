import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.sass'],
})
export class TitleComponent implements OnInit, OnChanges {
  @Input() newTitle = 'texto padrão';

  constructor(private titleService: Title, private metaService: Meta) {}
  ngOnChanges(): void {
    this.titleService.setTitle(this.newTitle);
  }

  ngOnInit(): void {
    this.metaService.addTag({
      description: 'dani 2',
    });

    this.metaService.updateTag({
      description: 'dani',
    });
    this.titleService.setTitle(this.newTitle);
  }
}
