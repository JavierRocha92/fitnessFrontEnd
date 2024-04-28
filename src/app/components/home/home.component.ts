import { Component, OnInit } from '@angular/core';
import { SpiralChartComponent } from '../spiral-chart/spiral-chart.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SpiralChartComponent, LoginFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  register : boolean = false

  constructor(private route : ActivatedRoute){
    this.route.params.subscribe(params => {
      if(params['register']){
        this.register = params['register']
      }
    });
  }

  ngOnInit(): void {
    
  }

}
