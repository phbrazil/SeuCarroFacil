import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../_models/user';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  user: User;
  token: string;

  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //SETUP INICIAL NO PRIMEIRO ACESSO
    if (this.user?.initialSetup && this.user?.admin) {
      this.router.navigate(['/setup']);
    }

    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
    });

    return next.handle(req).pipe(
      catchError((err) => {
        if (
          err.status === 401 &&
          err.error.error == 'Unauthorized' &&
          err.error.path != '/account/api/auth/signin'
        ) {
          //todo 
        }
        return throwError(err);
      })
    );
  }
}
