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
  first_name: string;
  last_name: string;
  email: string;
  pass: string;
  rep_pass : string
}
@Component({
  selector: 'app-register-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-user-form.component.html',
  styleUrl: './register-user-form.component.css',
})
export class RegisterUserFormComponent implements OnInit {

  @Output() onChangeFormRegister = new EventEmitter()
  form!: FormGroup;

  first_nameControl!: FormControl;
  last_nameControl!: FormControl;
  emailControl!: FormControl;
  passControl!: FormControl;
  rep_passControl!: FormControl;

  isLoading: boolean = false;
  register: boolean = false;
  error_register : boolean = false
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
    this.first_nameControl = new FormControl('', Validators.required);
    this.last_nameControl = new FormControl('', Validators.required);
    this.emailControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  
    this.passControl = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
      this.passwordValidator()
    ]);
    this.rep_passControl = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
    ]);

    this.form = this.builder.group({
      first_name: this.first_nameControl,
      last_name: this.last_nameControl,
      email: this.emailControl,
      rep_pass: this.rep_passControl,
      pass: this.passControl,
    });
  }

  checkForm(): void {
    
      this.pass_match_error = false
      if (this.form.valid) {
        
          if(this.isPassMatches()){
          const form_data = {
            first_name: this.first_nameControl.value,
            last_name: this.last_nameControl.value,
            email: this.emailControl.value,
            pass: this.passControl.value,
          };
          this.sendData(form_data as RegisterData);
        }else{
          this.pass_match_error = true
        }
      }
    }


  isPassMatches(){
    return this.passControl.value == this.rep_passControl.value

  }


  sendData(form_data: RegisterData) {
    this.isLoading = true;
    const post_route = 'register/';
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
            this.router.navigate(['/user-avatar']);
            this.toast_service.success('User registered successfully')
          }
          else{
            this.isLoading = false
            if(response.code == 6000){
              this.error_register = true
              this.toast_service.info('User unregistered, email already exists')
            }
            else if(response.code == 2000){
                this.toast_service.info('User unlogged')
              
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
    this.error_register = false
  }

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
      const valid = regex.test(control.value);
      return valid ? null : { invalidPassword: true };
    };
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
  console.log('hago el click')
  this.onChangeFormRegister.emit(false)
 }

  
}
