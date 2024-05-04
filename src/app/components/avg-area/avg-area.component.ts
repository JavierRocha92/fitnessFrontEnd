import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { NgApexchartsModule } from 'ng-apexcharts';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";
import { UsersService } from "../../services/users.service";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-avg-area',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './avg-area.component.html',
  styleUrl: './avg-area.component.css'
})
export class AvgAreaComponent implements AfterViewInit {

  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;

  constructor(private user_service : UsersService) {
    this.chartOptions = {
      // series: [
      //   {
      //     name: "series1",
      //     data: [31, 40, 28, 51, 42, 109, 100]
      //   },
      //   {
      //     name: "series2",
      //     data: [11, 32, 45, 32, 34, 52, 41]
      //   }
      // ],
      series: [],
      chart: {
        height: 350,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: []
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
  }
  ngAfterViewInit(): void {
      
  }
  ngOnInit(): void {
      const avg_data = this.user_service.getAvgData()

      const avg_sorted_data = avg_data.flatMap((data : any) => data.weight).sort((a : any,b : any) => a + b)
      
      const series =  {
        name : 'Avg Weight',
        data : avg_sorted_data
      }
      this.chartOptions.series = [series]
  }
}

