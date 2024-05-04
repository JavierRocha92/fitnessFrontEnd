import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
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
interface LoginData {
  email: string;
  pass: string;
}
interface RegisterData {
  first_name: string;
  last_name: string;
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
  form!: FormGroup;
  first_nameControl!: FormControl;
  last_nameControl!: FormControl;
  emailControl!: FormControl;
  passControl!: FormControl;
  isLoading: boolean = false;
  register: boolean = false;

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private web_service: WebserviceService,
    private token_service: TokenService,
    private user_service: UsersService
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
    ]);

    this.form = this.builder.group({
      first_name: this.emailControl,
      last_name: this.passControl,
      email: this.emailControl,
      pass: this.passControl,
    });
  }

  checkForm(): void {
    /* Condicional para cuando el forumlario no tiene nignun error de validacion */
    if (this.form.valid) {
      const form_data = {
        first_name: this.first_nameControl.value,
        last_name: this.last_nameControl.value,
        email: this.emailControl.value,
        pass: this.passControl.value,
      };
      console.log('form_data')
      console.log(form_data)


      this.sendData(form_data);
    }
  }

  sendData(form_data: RegisterData) {
    this.isLoading = true;
    console.log(`estoy cargando ${this.isLoading}`)
    const post_route = this.register ? 'register/' : 'login/';
    return new Promise(async (resolve, reject) => {
      this.web_service.post(
        post_route,
        form_data,
        (response: any) => {
          resolve(response);
          if (response.success) {
            this.token_service.saveToken(response.token);
            this.user_service.setUser(response.user, response.virtual_users, response.avg_data);
            this.isLoading = false;
            this.router.navigate(['/user-avatar']);
          }
        },

        (error: any) => {
          reject(error);
          console.log('el login no ha ido bien');
          this.isLoading = false;
        }
      );
    });
  }

  changeForm(): void {
    this.form.reset();
    this.register = !this.register;
  }
}
