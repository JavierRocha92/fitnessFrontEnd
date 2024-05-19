import { Injectable, OnInit } from '@angular/core';
import { User, Virtual_users, Virtual_user } from '../types/user';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  new_data : boolean = false
  subject_new_data : BehaviorSubject<any> = new BehaviorSubject<any>(false)
  user: User | undefined;
  virtual_users: Virtual_users | undefined;
  avg_data: any;
  observable_response = false
  constructor() {}

  setUser(user: User, virtual_users: Virtual_users, avg_data: any): void{
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('virtual_users', JSON.stringify(virtual_users));
    localStorage.setItem('avg_data', JSON.stringify(avg_data));
    this.user = user;
    this.virtual_users = virtual_users;
    this.avg_data = avg_data;
    this.updateLocalStorageData()
  }
  
  newLocalStorageDataIsSet() : Observable<boolean>{
    return this.subject_new_data.asObservable()
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

  updateVirtualUserData(virtual_user : Virtual_user){
    let virtual_users = this.getVirtualUserData()
    if(virtual_users){
      virtual_users = virtual_users.filter((virtual_user_old : Virtual_user) => virtual_user_old.ID !== virtual_user.ID)
      virtual_users.push(virtual_user)
      localStorage.setItem('virtual_users', JSON.stringify(virtual_users))
      this.updateLocalStorageData()
    }
  }

  logOut(){
    localStorage.removeItem('user')
    localStorage.removeItem('virtual_users')
    localStorage.removeItem('avg_data')
    localStorage.removeItem('virtual_user_on_focus')
    localStorage.removeItem('user_token')
  }

  updateLocalStorageData(){
    this.new_data = !this.new_data
    this.subject_new_data.next(this.new_data)
    this.newLocalStorageDataIsSet()
  }
  
}
