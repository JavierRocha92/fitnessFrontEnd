import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { GraphComponent } from './components/graph/graph.component';
import { AreaComponent } from './components/area/area.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgApexchartsModule, GraphComponent, AreaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontEnd';
}


