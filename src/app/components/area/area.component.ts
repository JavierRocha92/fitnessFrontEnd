import { Component, ViewChild, Input, OnInit } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  NgApexchartsModule,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-area',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './area.component.html',
  styleUrl: './area.component.css',
})
export class AreaComponent implements OnInit {
  @Input() uds! : string
  @Input() measureType! : string
  @Input() bg_color! : string
  measures: any = [
    {
      ID: 1261,
      Virtual_User_ID: 1,
      Date_time: 1654560000000,
      Height: 217.19,
      Weight: 148.96,
      Waist_circumference: 143.42,
      Hip_circumference: 999.99,
    },
    {
      ID: 7008,
      Virtual_User_ID: 1,
      Date_time: 1662681600000,
      Height: 208.36,
      Weight: 64.1,
      Waist_circumference: 165.92,
      Hip_circumference: 851.88,
    },
    {
      ID: 891,
      Virtual_User_ID: 1,
      Date_time: 1670544000000,
      Height: 269.63,
      Weight: 122.94,
      Waist_circumference: 66.8,
      Hip_circumference: 836.8,
    },
    {
      ID: 7001,
      Virtual_User_ID: 1,
      Date_time: 1684627200000,
      Height: 180.99,
      Weight: 89.5,
      Waist_circumference: 293.13,
      Hip_circumference: 537.59,
    },
    {
      ID: 1034,
      Virtual_User_ID: 1,
      Date_time: 1692403200000,
      Height: 203.9,
      Weight: 45.38,
      Waist_circumference: 39.21,
      Hip_circumference: 999.99,
    },
    {
      ID: 6740,
      Virtual_User_ID: 1,
      Date_time: 1717804800000,
      Height: 192.45,
      Weight: 163.3,
      Waist_circumference: 162.06,
      Hip_circumference: 999.99,
    },
    {
      ID: 9807,
      Virtual_User_ID: 1,
      Date_time: 1723075200000,
      Height: 157.8,
      Weight: 181.37,
      Waist_circumference: 187.92,
      Hip_circumference: 168.73,
    },
    {
      ID: 2412,
      Virtual_User_ID: 1,
      Date_time: 1723507200000,
      Height: 164.0,
      Weight: 122.58,
      Waist_circumference: 155.54,
      Hip_circumference: 394.38,
    },
  ];
  @ViewChild('chart') chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;
  
  constructor() {
    
  }
  ngOnInit(): void {
      this.chartOptions = {
        series: [
          {
            name: this.measureType,
            data: this.setSeriesData(this.measures, this.measureType),
          },
        ],
        chart: {
          height: 250,
          type: 'area',
        },
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          type: 'datetime',
          categories: this.getDates(this.measures),
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm',
          },
        },
        title: {
          text: this.measureType,
          align: 'left'
        },
        colors: [this.bg_color],
      };
  }

  

  public setSeriesData(user_data: any, target_data: string): any[] {
    let i = 0;
    let series: any = [];

    /* Realizar un bucle for para recorrer todos los datos del usuario */
    user_data.forEach((data: any) => {
      let data_to_show = data[target_data];
      series.push(data_to_show);
    });

    return series;
  }

  public getDates(user_data: any): any {
    let dates: any = [];
    user_data.forEach((date: any) => {
      
      let date_time = new Date(date.Date_time);
  
      let formated_date = date_time.toISOString();
     
      dates.push(formated_date + ' ' + this.uds);
    });
    return dates;
  }
  
}



