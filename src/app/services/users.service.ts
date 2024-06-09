import { Injectable, OnInit } from '@angular/core';
import { User, Virtual_users, Virtual_user } from '../types/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  new_data : boolean = false
  subject_new_data : BehaviorSubject<any> = new BehaviorSubject<any>(false)
  user: User | undefined;
  virtual_users: Virtual_users | undefined;
  avg_data: any;
  new_virtual_user_logged_status : BehaviorSubject<boolean> = new BehaviorSubject<any>(false)
  new_user_logged_status : BehaviorSubject<boolean> = new BehaviorSubject<any>(false)
  constructor(private router : Router) {}

  setUser(user: User, virtual_users: Virtual_users, avg_data: any): void{
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('virtual_users', JSON.stringify(virtual_users));
    localStorage.setItem('avg_data', JSON.stringify(avg_data));
   
    this.updateUserLoggedStatus(true)
    this.user = user;
    this.virtual_users = virtual_users;
    this.avg_data = avg_data;
    this.updateLocalStorageData()
  }

  virtualUserLoggedStatus(){
    return this.new_virtual_user_logged_status.asObservable()
  }
  userLoggedStatus(){
    return this.new_user_logged_status.asObservable()
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
    this.updateVirtualUserLoggedStatus(true)
  }
  updateVirtualUserLoggedStatus(value : boolean){
    this.new_virtual_user_logged_status.next(value)
    this.virtualUserLoggedStatus()

  }
  updateUserLoggedStatus(value : boolean){
    this.new_user_logged_status.next(value)
    this.userLoggedStatus()

  }
  getVirtualUserOnOFocus(): Virtual_user | null {
    const virtual_user_on_focus = localStorage.getItem('virtual_user_on_focus');


    if (virtual_user_on_focus || virtual_user_on_focus != 'undefined'){
      return JSON.parse(virtual_user_on_focus as any);
    }
    return null;
  }

  getAvgData() {
    const avg_data = localStorage.getItem('avg_data');
    if (avg_data) return JSON.parse(avg_data);
    return null;
  }

  deleteVirtualUserOnOFocus(){
    localStorage.removeItem('virtual_user_on_focus')
    this.updateVirtualUserLoggedStatus(false)
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
    localStorage.removeItem('meal_planner')
    this.removeSeries()
    this.updateVirtualUserLoggedStatus(false)
    this.updateUserLoggedStatus(false)
    this.router.navigate(['/'])
    
  }

  updateLocalStorageData(){
    this.new_data = !this.new_data
    this.subject_new_data.next(this.new_data)
    this.newLocalStorageDataIsSet()
  }

  checkSession(){
    if (localStorage.getItem('user'))
      return 
    else 
    this.router.navigate(['/'])
  }
  checkVirtualUserActive(){
    console.log('entro en el chekc de civirtual')
    console.log(this.getVirtualUserOnOFocus())
    if (!this.getVirtualUserOnOFocus()){
      console.log('entro en el codncional de redicreccion')
      this.router.navigate(['/user-avatar'])
      }
  }
  removeSeries(){
    const prefijos = ['measures', 'calories']
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      // Verifica si alguna clave comienza con alguno de los prefijos
      for (var j = 0; j < prefijos.length; j++) {
          if (key && key.startsWith(prefijos[j])) {
              localStorage.removeItem(key);
              // Si se elimina un elemento, decrementa el índice para evitar saltarse claves
              i--;
              break; // Salir del bucle interno ya que ya hemos encontrado un prefijo coincidente
          }
      }
  }


  }
}
