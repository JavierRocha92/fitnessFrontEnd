import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexLegend,
  ApexResponsive,
  ChartComponent,
  NgApexchartsModule,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive | ApexResponsive[];
};
@Component({
  selector: 'app-spiral-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './spiral-chart.component.html',
  styleUrl: './spiral-chart.component.css',
})
export class SpiralChartComponent implements OnInit {
  measures: any = {
    ID: 2412,
    Virtual_User_ID: 1,
    Date_time: 1723507200000,
    Age : 33,
    Gender : 'Masculine',
    Height: 164.0,
    Weight: 122.58,
    BMI: 43.54,
    Body_Fat: 34.38,
    Activity_level : 'Moderate'
  };
  target: any = {
    ID: 2412,
    Virtual_User_ID: 1,
    Date_time: 1723507200000,
    Age : 33,
    Gender : 'Masculine',
    Height: 164.0,
    Weight: 99.58,
    BMI: 28.54,
    Body_Fat: 21.38,
    Activity_level : 'Moderate'
  };

  @ViewChild('chart') chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;
  constructor() {}

  ngOnInit() {
    this.chartOptions = {
      series: this.getDataSeries(),
      chart: {
        height: 390,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: '30%',
            background: 'transparent',
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
        },
      },
      colors: ['rgb(247, 20, 20)', 'rgb(2, 146, 2)', 'rgb(255, 255, 0)', '#0077B5'],
      labels: ['Heigth', 'Weight', 'BMI', 'Body Fat'],
      legend: {
        show: true,
        floating: true,
        fontSize: '16px',
        position: 'left',
        offsetX: 40,
        offsetY: 10,
        labels: {
          useSeriesColors: true,
        },
        formatter: function (seriesName: any, opts: any) {
          return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
          horizontal: 3,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    };
  }
  getDataSeries(){
    return [this.measures.Height, this.measures.Weight, this.measures.BMI, this.measures.Body_Fat]
  }
}
