import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    //change every request content-type to application/json 

    const newHeaders = new HttpHeaders({
      "Content-Type":"application/json"
       });
    let clone = request.clone( { headers: newHeaders } );
    return next.handle(clone);

  }
}
