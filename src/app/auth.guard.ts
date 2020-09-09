import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './login/auth.service';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _authService: AuthService, private _router: Router) {}

    canActivate(): boolean {
        if(this._authService.isLoggedIn()) {
            return true
        } else {
            this._router.navigate(['/login'])
            return false
        }
    }
}