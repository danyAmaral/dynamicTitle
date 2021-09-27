import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export interface URLConfig {
  key: string;
  value: string;
  order: number;
}

@Injectable({ providedIn: 'root' })
export class TesteResolver implements Resolve<string> {
  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<string> | Promise<string> | string {
    const params: URLConfig[] = [];
    for (let i = 0; i < route.url.length; i++) {
      const key = route.url[i]?.path;
      const value = route.url[i + 1]?.path;
      const order = this.getOrderParamByKey(key);
      const urlConfig: URLConfig = { key, value, order };

      params.push(urlConfig);
      i++;
    }

    console.log(params);

    const paramsOrdered = params.sort((a, b) => {
      return a.order - b.order;
    });
    console.log(paramsOrdered);

    return 'teste';
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
