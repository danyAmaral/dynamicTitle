import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { URLConfig } from 'src/app/resolvers/teste.resolver';

@Component({
  selector: 'app-celulares',
  templateUrl: './celulares.component.html',
  styleUrls: ['./celulares.component.sass'],
})
export class CelularesComponent implements OnInit {
  marcasSelecionadas = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.activatedRoute);
  }

  getUrl(keyParam: string): string {
    const urlParams = this.activatedRoute.snapshot.children[0].url;
    let url = '';
    const params: URLConfig[] = [];
    for (let i = 0; i < urlParams.length; i++) {
      const key = urlParams[i]?.path;
      const value = urlParams[i + 1]?.path;
      const order = this.getOrderParamByKey(key);
      const urlConfig: URLConfig = { key, value, order };

      params.push(urlConfig);
      i++;
    }

    const paramsOrdered = params.sort((a, b) => {
      return a.order - b.order;
    });
    for (const param of paramsOrdered) {
      url += `/${param.key}/${param.value}`;
    }

    console.log(url);
    return url;
  }

  getOrderParamByKey(key: string): number {
    if (key === 'marca') {
      return 0;
    }

    if (key === '') {
      return 1;
    }

    if (key === 'pagina') {
      return 2;
    }

    if (key === 'plano') {
      return 3;
    }

    if (key === 'preco') {
      return 4;
    }
    if (key === 'preco-ate') {
      return 5;
    }

    return 0;
  }
}
