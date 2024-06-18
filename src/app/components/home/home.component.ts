import { Component, OnInit } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { ActivatedRoute } from '@angular/router';
import { HomeCardComponent } from '../home-card/home-card.component';
import { UsersService } from '../../services/users.service';
import { RegisterUserFormComponent } from '../register-user-form/register-user-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginFormComponent, HomeCardComponent, RegisterUserFormComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  register : boolean = false
  user_active : boolean = false

  show_register_form : boolean = false

  constructor(private route : ActivatedRoute, private user_service : UsersService){
    this.route.params.subscribe(params => {
      if(params['register']){
        this.register = params['register']
      }
    });
  }

  ngOnInit(): void {
    if(this.user_service.getUserData())
      this.user_active = true

    this.user_service.userLoggedStatus().subscribe((data : boolean) =>{
      this.user_active = data
    } )
  }

  // onShowRegisterFrom(value : boolean){
  //   this.show_register_form = value
  // }
  toggleForm(value : any){
    this.show_register_form = value
  }

}
