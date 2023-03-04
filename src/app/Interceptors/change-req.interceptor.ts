import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs'
@Injectable()
export class ChangeReqInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map(resp => {
       if (resp instanceof HttpResponse) {
          resp.clone().body.map((val: any) => {
            if (val.title == 'delectus aut autem') {
              val.title = val.title.toUpperCase();
              return val;
            }
         });
        }
        return resp;
      })
    )
  }
}
