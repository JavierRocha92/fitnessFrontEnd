import { Component, OnInit } from '@angular/core';
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
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent implements OnInit {
  form!: FormGroup;
  emailControl!: FormControl;
  passControl!: FormControl;
  isLoading: boolean = false;

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private web_service: WebserviceService,
    private token_service : TokenService,
    private user_service : UsersService
  ) {}

  ngOnInit(): void {
    this.emailControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.passControl = new FormControl('', Validators.required);

    this.form = this.builder.group({
      email: this.emailControl,
      pass: this.passControl,
    });
  }

  checkForm(): void {
    /* Condicional para cuando el forumlario no tiene nignun error de validacion */
    if (this.form.valid) {
      const form_data = {
        email: this.emailControl.value,
        pass: this.passControl.value,
      };

      this.sendData(form_data);
    }
  }

  sendData(form_data: LoginData) {
    this.isLoading = true
    return new Promise(async (resolve, reject) => {
      this.web_service.post('login/',form_data,
        (response: any) => {
          resolve(response);
          if (response.success) {
            this.token_service.saveToken((response.token))
            this.user_service.setUser(response.user, response.virtual_users)
            this.isLoading = false
            this.router.navigate(['/user-avatar']);
          }
        },
        
        (error: any) => {
          reject(error);
          console.log('el login no ha ido bien');
          this.isLoading = false
        }
      );
    });
  }
}
