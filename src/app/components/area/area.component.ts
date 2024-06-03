import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { Measures, BioDatas } from '../../types/measures';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { ChartSeriesServiceService } from '../../services/chart-series-service.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
};

@Component({
  selector: 'app-area',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './area.component.html',
  styleUrl: './area.component.css',
})
export class AreaComponent implements OnInit {
  @Input() uds!: string;
  @Input() set_initial_data : boolean | undefined;
  @Input() bg_color!: string;
  @Input() name!: string;
  @ViewChild('chart') chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;
  @Input() measures!: Measures | BioDatas;
  @Input() type!: string;
  series: any;
  dates: any;
  image_path = "../../../assets/images/"
  last_value : string | undefined
  @Input() image_name !: string
  constructor(private chart_service: ChartSeriesServiceService) {}
  ngOnInit(): void {
    // this.image_path = this.image_path
    this.image_path = this.image_path + this.image_name 
    this.series = this.setSeriesData();
    this.dates = this.setDatesData();
    this.setInitialData()
    this.chartOptions = {
      series: [
        {
          name: this.type,
          data: this.series,
          markers: {
            size: 0 // Desactiva los marcadores
          },
         
        },
        
        
      ],
      chart: {
        width: '100%',
        
        zoom: {
          enabled: false, 
        },
        type: 'area',
        toolbar: {
          show: false,
        },
      
      },

      plotOptions: {
        
        area: {
          stroke: {
            width: 3,
            curve: 'smooth'
          }
        }
      },
      
      dataLabels: {
        enabled: false,
        show : false
      },
    
     
      fill: {
        type: "gradient",
        gradient: {
          type: "vertical",
          opacityFrom: 1,
          opacityTo: 0.8,
          stops: [0, 10],
          colorStops: [
            /* ESTE ES EL COLOR DEL AREA */
            {
              offset: 0,
              opacity: 0.2,
              color: this.bg_color,
            },
            {
              offset: 100,
              opacity: 0,
              color: this.bg_color,
            },
          ],
        },
      },
    
      grid: {
        borderColor: "rgba(0, 0, 0, 0)",
        padding: {
          top: -30,
          right: 0,
          bottom: -8,
          left: 12,
        },
      },
      stroke : {
        colors : [this.bg_color]
      },
    
      yaxis: {
        show: false,
      },
      xaxis: {
        show: false,
      },
    
   
  }
  }

  public setSeriesData(): any[] {
    let series: any = [];

    /* Realizar un bucle for para recorrer todos los datos del usuario */
    this.measures.forEach((data: any) => {
      let data_to_show = data[this.type || ''];
      series.push(data_to_show);
    });

    this.setLastValue(series)

    return series;
  }

  setLastValue(series : any){
    this.last_value = series[series.length -1] + ' ' + this.uds
  }

  public setDatesData(): any {
    let dates: any = [];
    this.measures.forEach((date: any) => {
      let date_time = new Date(date.Date_time);

      let formated_date = date_time.toISOString();

      dates.push(formated_date);
    });
    return dates;
  }

  public handleChartClick(event: MouseEvent): void {
    this.chart_service.addNewSeries(this.asJson());
  }
  
  public setInitialData(){
    if(this.set_initial_data)
      this.chart_service.addNewSeries(this.asJson());

  }

  private asJson() {
    return {
      name: this.name,
      type: this.type,
      series: this.series,
      dates : this.dates
    };
  }


}
