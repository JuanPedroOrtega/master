import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { StorageService } from './storage.service';

interface AuthState {
  isLogged: boolean;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private readonly STORAGE_KEY = 'auth_state';
  private readonly VALID_EMAIL = 'master@lemoncode.net';
  private readonly VALID_PASSWORD = '12345678';
  private readonly LOGIN_DELAY = 1000;
  private readonly SESSION_DURATION = 300000;

  private authStateSubject = new BehaviorSubject<AuthState>({
    isLogged: false,
    username: ''
  });

  private usernameSubject = new BehaviorSubject<string>('');
  private sessionTimeoutId?: number;

  public isLogged$: Observable<AuthState> = this.authStateSubject.asObservable();
  public username$: Observable<string> = this.usernameSubject.asObservable();

  constructor(private storageService: StorageService) {
    this.loadFromStorage();
  }

  login(credentials: { username: string; password: string }): Observable<boolean> {
    const isValid = credentials.username === this.VALID_EMAIL && credentials.password === this.VALID_PASSWORD;
    
    return of(isValid).pipe(
      delay(this.LOGIN_DELAY),
      tap(valid => {
        if (valid) {
          const username = credentials.username.split('@')[0];
          const newState: AuthState = {
            isLogged: true,
            username
          };
          
          this.authStateSubject.next(newState);
          this.usernameSubject.next(username);
          this.saveToStorage();
          this.startSessionTimeout();
        }
      })
    );
  }

  logout(): void {
    const newState: AuthState = {
      isLogged: false,
      username: ''
    };
    
    this.authStateSubject.next(newState);
    this.usernameSubject.next('');
    this.storageService.remove(this.STORAGE_KEY);
    this.clearSessionTimeout();
  }

  isLogged(): boolean {
    return this.authStateSubject.value.isLogged;
  }

  getUsername(): string {
    return this.authStateSubject.value.username;
  }

  updateUsername(newUsername: string): void {
    const currentState = this.authStateSubject.value;
    if (currentState.isLogged) {
      const newState: AuthState = {
        ...currentState,
        username: newUsername
      };
      this.authStateSubject.next(newState);
      this.usernameSubject.next(newUsername);
      this.saveToStorage();
    }
  }

  refreshSession(): void {
    if (this.isLogged()) {
      this.clearSessionTimeout();
      this.startSessionTimeout();
    }
  }

  private startSessionTimeout(): void {
    this.clearSessionTimeout();
    this.sessionTimeoutId = window.setTimeout(() => {
      this.logout();
    }, this.SESSION_DURATION);
  }

  private clearSessionTimeout(): void {
    if (this.sessionTimeoutId) {
      clearTimeout(this.sessionTimeoutId);
      this.sessionTimeoutId = undefined;
    }
  }

  private saveToStorage(): void {
    const state = this.authStateSubject.value;
    this.storageService.save(this.STORAGE_KEY, state);
  }

  private loadFromStorage(): void {
    const state = this.storageService.load<AuthState>(this.STORAGE_KEY);
    if (state) {
      this.authStateSubject.next(state);
      this.usernameSubject.next(state.username);
      
      if (state.isLogged) {
        this.startSessionTimeout();
      }
    }
  }
}
