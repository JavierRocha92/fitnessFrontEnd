import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
} from 'ng-apexcharts';
import { UsersService } from '../../services/users.service';
import { ModalComponent } from '../modal/modal.component';

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
  imports: [NgApexchartsModule, ModalComponent],
  templateUrl: './avg-area.component.html',
  styleUrl: './avg-area.component.css',
})
export class AvgAreaComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;
  user_xaxis_value : any
  user_yaxis_value : any
  avg_data : any
  user_on_demand : any
  avg_weight : number = 0;
  constructor(private user_service: UsersService) {
    this.chartOptions = {
      series: [],
      chart: {
        height: 280,
        type: 'area',
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        categories : [],
        show: false 
      },
      yaxis: {
        show: false 
      },
      
      
      annotations: {
        points: [
          {
            x: '',
            y: '',
            marker: {
              size: 6,
              borderColor: '#FF4560',
              colors : '#FF4560'
            },
            labels : {
              text : 'you'
            }
            
          },
        ],
      },
     
    };
  }

  ngOnInit(): void {

    this.user_on_demand = this.user_service.getVirtualUserOnOFocus()

    this.avg_data = this.user_service.getAvgData();

    const avg_sorted_data = this.avg_data
      .flatMap((data: any) => data.weight)
      .sort((a: any, b: any) => a + b);

    const sum_weight = avg_sorted_data.reduce((acc : number, weight : number) => acc += weight, 0) 

    
    this.avg_weight = sum_weight / avg_sorted_data.length
      
    const processed_data = this.getProcessedData(avg_sorted_data) 
   
    this.setUserOnDemandChartData(processed_data)

    this.chartOptions.series = [
      {
        name: 'Avg Weight',
        data: processed_data.series_data,
      },
    ];

    this.chartOptions.xaxis.categories = processed_data.labels;

    
  }

  setUserOnDemandChartData(processed_data : any){
    const user_on_demand = this.user_service.getVirtualUserOnOFocus()
    const user_weight = Math.floor(user_on_demand!.historical_measurements[user_on_demand!.historical_measurements.length - 1 ].Weight)
   
    const index_group = processed_data.labels.findIndex((label : string) => this.isInRange(label, user_weight))

    this.user_yaxis_value = processed_data.series_data[index_group]
    this.user_xaxis_value = processed_data.labels[index_group]

    this.chartOptions.annotations.points[0].x = this.user_xaxis_value
    this.chartOptions.annotations.points[0].y = this.user_yaxis_value
    
  }

  

  isInRange(label : string, user_xaxis_value : number){
    const min = parseInt(label.slice(0, label.indexOf('-')))
    const max = parseInt(label.slice(label.indexOf('-') + 1))

    return min < user_xaxis_value && user_xaxis_value < max
  }

  getProcessedData(avg_sorted_data : any){
    const weightGroups: any = {};

    avg_sorted_data.forEach((weight: number) => {
      const weightGroup = Math.floor(weight / 10) * 10;

      weightGroups[weightGroup] = (weightGroups[weightGroup] || 0) + 1;
    });

    const series_data = Object.values(weightGroups);

    const labels = Object.keys(weightGroups).map(
      (group) => `${group}-${parseInt(group) + 9}`
    );

    return {series_data : series_data, labels : labels}

  }
}
