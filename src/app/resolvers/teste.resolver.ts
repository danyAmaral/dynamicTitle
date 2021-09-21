import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TesteResolver implements Resolve<string> {
  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<string> | Promise<string> | string {
    const params = [];
    for (let i = 0; i < route.url.length; i++) {
      const key = route.url[i].path;
      const value = route.url[i + 1].path;

      params.push({ key, value });
      i++;
    }

    console.log(params);

    return 'teste';
  }
}
