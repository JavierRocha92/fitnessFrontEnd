import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { WebserviceService } from '../../services/webservice.service';
import { TokenService } from '../../services/token.service';
import { UsersService } from '../../services/users.service';
import { ToastrService } from 'ngx-toastr';
interface LoginData {
  email: string;
  pass: string;
}
interface RegisterData {
  email: string;
  pass: string;
}
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent implements OnInit {
  @Output() OnChangeFormLogin = new EventEmitter<any>();

  form!: FormGroup;
  
  emailControl!: FormControl;
  passControl!: FormControl;

  isLoading: boolean = false;
  register: boolean = false;
  error_login : boolean = false
  server_login : boolean = false
  pass_match_error : boolean = false

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private web_service: WebserviceService,
    private token_service: TokenService,
    private user_service: UsersService,
    private toast_service : ToastrService
  ) {}

  ngOnInit(): void {
    this.emailControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  
    this.passControl = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
    ]);
    

    this.form = this.builder.group({
      email: this.emailControl,
      pass: this.passControl,
    });
  }

  checkForm(): void {
    
      this.pass_match_error = false
      if (this.form.valid) {
          const form_data = {
            email: this.emailControl.value,
            pass: this.passControl.value,
            // registerPass: this.passControl.value,
          };

          this.sendData(form_data as RegisterData);
        }
      }


  sendData(form_data: RegisterData) {
    this.isLoading = true;
    const post_route = 'login/';
    return new Promise(async (resolve, reject) => {
      this.web_service.post(
        post_route,
        form_data,
        (response: any) => {
          resolve(response);
          this.server_login = false
          if (response.success) {
            /* Borramos con el logout todo lo que hubiera guardado en el local stroage para evitrar errores */
            this.user_service.logOut()
            this.token_service.saveToken(response.token);
            this.user_service.setUser(response.user, response.virtual_users, response.avg_data);
            this.isLoading = false;
            this.error_login = false
            this.router.navigate(['/user-avatar']);
            
          }
          else{
            this.isLoading = false
            if(response.code == 6000){
              if(this.register)
              this.toast_service.info('User unregistered, email already exists')
            }
            if(response.code == 2000){
              if(!this.register){
                this.error_login = true
                this.toast_service.info('User unlogged')
              }
            }
          }
        },

        (error: any) => {
          reject(error);
          
          this.isLoading = false;
          this.server_login = true
          
        }
      );
    });
  }

  changeForm(): void {
    this.form.reset();
    this.register = !this.register;
    this.error_login = false
  }

 

 togglePass(event : any){
  const target_tagName = event.target.tagName
  let target
  if(target_tagName == 'path')
    target = event.target.parentElement
  if(target_tagName == 'svg')
    target = event.target

  const input_type = target.previousElementSibling.type 
  if(input_type == 'text')
    target.previousElementSibling.setAttribute('type','password')
  if(input_type == 'password')
    target.previousElementSibling.setAttribute('type','text')

 }

 onClick(){
  this.OnChangeFormLogin.emit(true)
 }

  
}
