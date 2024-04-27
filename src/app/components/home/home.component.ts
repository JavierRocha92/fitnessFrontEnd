import { Component } from '@angular/core';
import { SpiralChartComponent } from '../spiral-chart/spiral-chart.component';
import { LoginFormComponent } from '../login-form/login-form.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SpiralChartComponent, LoginFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(){}

}
