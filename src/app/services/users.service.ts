import { Injectable, OnInit } from '@angular/core';
import { User, Virtual_users, Virtual_user } from '../types/user';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  user: User | undefined;
  virtual_users: Virtual_users | undefined;
  constructor() {}


  setUser(user: User, virtual_users: Virtual_users) {
    console.log('los tipos de datos cuando me llegan al servicio')
    console.log(typeof user)
    console.log(typeof virtual_users)
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('virtual_users', JSON.stringify(virtual_users))
    this.user = user;
    this.virtual_users = virtual_users
  }

  getUserData(): User | null | undefined {
    const user = localStorage.getItem('user')
    if(user){
      this.user = JSON.parse(user)
      return this.user;
    }else{
      return null
    }
  }

  getVirtualUserData(): Virtual_users | undefined | null {
    const virtual_users = localStorage.getItem('virtual_users')
    if(virtual_users){
      this.virtual_users = JSON.parse(virtual_users)
      return this.virtual_users;
    }else{
      return null
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
}
