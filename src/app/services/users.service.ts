import { Injectable, OnInit } from '@angular/core';
import { User, Virtual_users, Virtual_user } from '../types/user';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  user: User | undefined;
  virtual_users: Virtual_users | undefined;
  avg_data: any;
  constructor() {}

  setUser(user: User, virtual_users: Virtual_users, avg_data: any) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('virtual_users', JSON.stringify(virtual_users));
    localStorage.setItem('avg_data', JSON.stringify(avg_data));
    this.user = user;
    this.virtual_users = virtual_users;
    this.avg_data = avg_data;
  }

  getUserData(): User | null | undefined {
    const user = localStorage.getItem('user');
    if (user) {
      this.user = JSON.parse(user);
      return this.user;
    } else {
      return null;
    }
  }

  getVirtualUserData(): Virtual_users | undefined | null {
    const virtual_users = localStorage.getItem('virtual_users');
    if (virtual_users) {
      this.virtual_users = JSON.parse(virtual_users);
      return this.virtual_users;
    } else {
      return null;
    }
  }

  parseVirtualUserData(data: any): Virtual_users {
    const parsed_data = data?.map((virtual_user: Virtual_user) => {
      const historical_measurements = JSON.parse(
        virtual_user.historical_measurements as any
      );
      const historical_bio_data = JSON.parse(
        virtual_user.historical_bio_data as any
      );
      return { ...virtual_user, historical_bio_data, historical_measurements };
    });
    return parsed_data;
  }

  setVirtualUserOnOFocus(virtual_user: Virtual_user | undefined) {
    localStorage.setItem('virtual_user_on_focus', JSON.stringify(virtual_user));
  }
  getVirtualUserOnOFocus(): Virtual_user | null {
    const virtual_user_on_focus = localStorage.getItem('virtual_user_on_focus');

    if (virtual_user_on_focus) return JSON.parse(virtual_user_on_focus);
    else return null;
  }

  getAvgData() {
    const avg_data = localStorage.getItem('avg_data');
    if (avg_data) return JSON.parse(avg_data);
    return null;
  }

  logOut(){
    localStorage.removeItem('user')
    localStorage.removeItem('virtual_users')
    localStorage.removeItem('avg_data')
    localStorage.removeItem('virtual_user_on_focus')
    localStorage.removeItem('user_token')
  }
  
}
