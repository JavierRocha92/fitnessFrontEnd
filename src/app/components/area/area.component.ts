import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { Measures, BioDatas } from '../../types/measures';
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
  @Input() bg_color! : string
  
  @ViewChild('chart') chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;
  @Input() measures!: Measures | BioDatas;
  @Input() type: string |undefined;
  constructor() {
    
  }
  ngOnInit(): void {
      this.chartOptions = {
        series: [
          {
            name: this.type,
            data: this.setSeriesData(),
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
          text: this.type,
          align: 'left'
        },
        colors: [this.bg_color],
      };
  }

  

  public setSeriesData(): any[] {
    let i = 0;
    let series: any = [];

    /* Realizar un bucle for para recorrer todos los datos del usuario */
    this.measures.forEach((data: any) => {
      let data_to_show = data[this.type || ''];
      series.push(data_to_show);
    });

    return series;
  }

  public getDates(user_data: any): any {
    let dates: any = [];
    this.measures.forEach((date: any) => {
      
      let date_time = new Date(date.Date_time);
  
      let formated_date = date_time.toISOString();
     
      dates.push(formated_date + ' ' + this.uds);
    });
    return dates;
  }
  
}



