import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PreviousRouteService } from './previous-route.service';



@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private location: Location,
        private previousRoutePath: PreviousRouteService

    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        return true;

    }
}
