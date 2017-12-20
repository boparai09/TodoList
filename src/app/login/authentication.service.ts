import { Injectable } from '@angular/core';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthenticationService {
    //constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        //TODO: call backend for actual JWT token
        const user = { usename: username, name: username };
        localStorage.setItem('currentUser', JSON.stringify(user));
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        return of(user).delay(1200);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}