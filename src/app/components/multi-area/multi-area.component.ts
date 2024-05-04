import { Component, ViewChild, Input, OnInit, AfterViewInit } from '@angular/core';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

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
import { ChartSeriesServiceService } from '../../services/chart-series-service.service';

@Component({
  selector: 'app-multi-area',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './multi-area.component.html',
  styleUrl: './multi-area.component.css',
})
export class MultiAreaComponent implements OnInit, AfterViewInit {
  series: any[] = [];
  @Input() name!: string;
  @Input() initial_series!: any;
  @ViewChild('chart') chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;

  constructor(private chart_service: ChartSeriesServiceService) {
    this.chartOptions = {

      series: [],
      chart: {
        // height: 350,
        width: '100%',
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    };

  }
  
 ngAfterViewInit(): void {
     
 }
  
  ngOnInit(): void {
    this.chart_service.getSeries().subscribe((data: any) => {
      this.series = data.filter((item: any) => item.name === this.name);
      this.chartOptions.series = this.setSeriesData()
      this.chartOptions.xaxis.categories = this.setDatesData();
    });
  }

  public setSeriesData() {
    return this.series.map((serie: any) => {
      return { name: serie.type, data: serie.series };
    });
  }

  public setDatesData(){
    if(this.series.length)
      return this.series[0].dates
  }
}
