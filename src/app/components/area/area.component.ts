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
  @Input() type: string | undefined;
  series: any;
  dates: any;
  constructor(private chart_service: ChartSeriesServiceService) {}
  ngOnInit(): void {
    this.series = this.setSeriesData();
    this.dates = this.setDatesData();
    this.setInitialData()
    this.chartOptions = {
      series: [
        {
          name: this.type,
          data: this.series,
        },
      ],
      chart: {
        width: '100%',
        padding: {
          left: 0, // Sin padding a la izquierda
          right: 0, // Sin padding a la derecha
          top: 0, // Sin padding arriba
          bottom: 0, // Sin padding abajo
        },
        zoom: {
          enabled: false, // Desactiva la funcionalidad de zoom
        },
        type: 'area',
        toolbar: {
          show: false,
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        xaxis: {
          lines: {
            show: false,
          },
        },
        offsetX: 0, // Desplazamiento horizontal del gráfico
        offsetY: 0, // Desplazamiento vertical del gráfico
      },
      plotOptions: {
        bar: {
          horizontal: false, // Puedes establecer esto en true si deseas barras horizontales
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        with: 2,
      },
      xaxis: {
        type: 'datetime',
        categories: this.dates,
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
        enabled: false,
      },
      title: {
        text: this.type,
        align: 'left',
      },
      grid: {
        show: true,
        borderColor: '#90A4AE',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        row: {
          colors: undefined,
          opacity: 0.5,
        },
        column: {
          colors: undefined,
          opacity: 0.5,
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
    };
  }

  public setSeriesData(): any[] {
    let series: any = [];

    /* Realizar un bucle for para recorrer todos los datos del usuario */
    this.measures.forEach((data: any) => {
      let data_to_show = data[this.type || ''];
      series.push(data_to_show);
    });

    return series;
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
