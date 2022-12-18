import { Router } from '@angular/router';
import { User } from './user.model';
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { Subject, throwError } from "rxjs";
import { environment } from 'src/environments/environment';
export interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered: boolean;
}


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user = new Subject<User>();
    private tokenExpirationTimer: any;


    constructor(private http: HttpClient,
        private router: Router) { }

    registrar(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            // 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBT4Vyth8xh2LNSS1NSTCAwrFLjNiIIuJc',
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseAPIKey,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }

        ).pipe(
            catchError(this.handleError),
            tap(resData => {
                this.handleAuthentication(
                    resData.email,
                    resData.localId,
                    resData.idToken,
                    +resData.expiresIn);
            })
        );
    }

    iniciarSesion(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            // 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBT4Vyth8xh2LNSS1NSTCAwrFLjNiIIuJc',
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIKey,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(
            catchError(this.handleError),
            tap(resData => {
                this.handleAuthentication(
                    resData.email,
                    resData.localId,
                    resData.idToken,
                    +resData.expiresIn);
            }));;
    }

    cerrarSesion() {
        this.user.next(null);
        this.router.navigate(['/sesion'])
        localStorage.removeItem('userData');
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        } this.tokenExpirationTimer = null;
    }
    autoCerrarSesion(expirationDuration: number) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.cerrarSesion();
        }, expirationDuration)
    }

    private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
        const expirationDate = new Date(
            new Date().getTime() + expiresIn * 1000
        );
        const user = new User(email, userId, token, expirationDate);
        this.user.next(user);
        this.autoCerrarSesion(expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(user));
    }

    autoInicioSesion() {
        const userData: {
            email: string;
            id: string;
            _token: string;
            _tokenExpirationDate: string;
        } = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            return;
        }
        const loadedUser = new User(
            userData.email,
            userData.id,
            userData._token,
            new Date(userData._tokenExpirationDate)
        );
        if (loadedUser.token) {
            this.user.next(loadedUser);
            const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
            this.autoCerrarSesion(expirationDuration);
        }
    }

    //!Control de errores!
    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An unknow error occurred!';
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'El email ingresado ya existe actualmente.';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'El email ingresado no existe.';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'La contraseña ingresada es incorrecta.';
                break;

        }
        return throwError(errorMessage);
    }
}