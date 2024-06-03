import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { GraphComponent } from './components/graph/graph.component';
import { AreaComponent } from './components/area/area.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersService } from './services/users.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgApexchartsModule, GraphComponent, AreaComponent, NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'frontEnd';

  constructor(private user_service : UsersService){}

  ngOnInit(): void {
      this.user_service.checkSession()
  }
}


