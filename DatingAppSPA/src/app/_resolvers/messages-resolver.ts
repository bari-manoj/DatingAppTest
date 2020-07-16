import { AuthService } from './../_services/auth.service';
import { Message } from './../_models/message';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AlertifyService } from '../_services/alertify.service';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { Injectable } from '@angular/core';

@Injectable()
export class MessagesResolver implements Resolve<Message[]>{
    pageNumber = 1;
    pageSize = 5;
    messageContainer = 'Unread';

    constructor(private userService: UserService, private authService: AuthService,
        private router: Router, private alertyfy: AlertifyService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Message[]> {
        return this.userService.getMessages( this.authService.decodedToken.nameid, 
            this.pageNumber, this.pageSize, this.messageContainer).pipe(
            catchError(error => {
                this.alertyfy.error('Problem retriving messages');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}