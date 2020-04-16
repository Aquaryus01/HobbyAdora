import {EventEmitter, Injectable} from '@angular/core';
import {LocalStorage} from '@ngx-pwa/local-storage';

import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AppPaths } from '../commons/app-path';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private helper: JwtHelperService;
    private _authState: EventEmitter<boolean> = new EventEmitter();

    constructor(private router: Router,
                private storage: LocalStorage,
                private http: HttpClient) {
        this.helper =  new JwtHelperService();
        this.loadSession();
    }

    public login(credentials: { email: string, password: string }) {
        const url = `${environment.apiUrl}api/signin`;
        return this.http.post(url, JSON.stringify(credentials));
    }

    public register(credentials: { email: string, firstName: string, lastName: string, password: string }) {
        const url = `${environment.apiUrl}api/signup`;
        return this.http.post(url, JSON.stringify(credentials));
    }

    public async logout(): Promise<void> {
        this.saveSession('');
        this.router.navigate([AppPaths.HOMEPAGE]);
    }

    public getToken() {
        return localStorage.getItem('token');
    }

    public async saveSession(token?: string) {
        localStorage.setItem('token', token);
        this.loadSession();
    }

    public authStateChanged(): EventEmitter<boolean> {
        return this._authState;
    }

    public authState(): boolean {
        return !this.helper.isTokenExpired(this.getToken());
    }

    private loadSession() {
        this._authState.emit(!!this.getToken());
    }
}
