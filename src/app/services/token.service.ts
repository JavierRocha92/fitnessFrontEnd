import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  saveToken(json_token : string ) {
    localStorage.setItem('user_token', json_token);
  }

  getToken(): string | null {
    const token = localStorage.getItem('user_token');

    if (token) {
      return token;
    } else {
      return null;
    }
  }
}
