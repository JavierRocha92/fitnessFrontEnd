import { Component, OnInit } from '@angular/core';
import { SpiralChartComponent } from '../spiral-chart/spiral-chart.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { ActivatedRoute } from '@angular/router';
import { HomeCardComponent } from '../home-card/home-card.component';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SpiralChartComponent, LoginFormComponent, HomeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  register : boolean = false
  user_active : boolean = false

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

}
