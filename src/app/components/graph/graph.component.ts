import { Component, Input, OnInit } from '@angular/core';
import { BioDatas, Measures } from '../../types/measures';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip,
  ApexStroke,
  NgApexchartsModule,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: any; //ApexChart;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  title: ApexTitleSubtitle;
  fill: ApexFill;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  grid: any; //ApexGrid;
  colors: any;
  toolbar: any;
};

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css',
})
export class GraphComponent implements OnInit{
  @Input() measures!: Measures | BioDatas;
  @Input() type!: string;

  public chartoptions: Partial<ChartOptions> | any;
  public commonOptions: Partial<ChartOptions> | any = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    toolbar: {
      tools: {
        selection: false,
      },
    },
    markers: {
      size: 6,
      hover: {
        size: 10,
      },
    },
    tooltip: {
      followCursor: false,
      theme: 'dark',
      x: {
        show: false,
      },
      marker: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return '';
          },
        },
      },
    },
    grid: {
      clipMarkers: false,
    },
    xaxis: {
      type: 'datetime',
    },
  };

  constructor() {
    
  }

  ngOnInit(): void {
    
    this.initCharts();
  }

  public initCharts(): void {
    this.chartoptions = {
      series: [
        {
          name: this.type,
          data: this.setSeriesData(),
        },
      ],
      chart: {
        id: 'fb',
        group: 'social',
        type: 'line',
        height: 160,
      },
      colors: ['#008FFB'],
      yaxis: {
        tickAmount: 2,
        labels: {
          minWidth: 40,
        },
      },
    };

   
  }

  public setSeriesData(): any [] {
    
    let i = 0;
    let series: any = [];
   
    /* Realizar un bucle for para recorrer todos los datos del usuario */
    this.measures.forEach((data: any) => {
      let current_date = data.Date_time;
      let data_to_show = data[this.type];
      series.push([current_date, data_to_show]);
    });
   

    return series;
  }
}


