import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AlertifyService } from '../_services/alertify.service';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user';
import { Injectable } from '@angular/core';

@Injectable()
export class MemberListResolver implements Resolve<User[]>{

    constructor(private userService: UserService,
        private router: Router, private alertyfy: AlertifyService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
        return this.userService.getUsers().pipe(
            catchError(error => {
                this.alertyfy.error('Problem retriving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}