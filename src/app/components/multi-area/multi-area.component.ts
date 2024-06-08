import {
  Component,
  ViewChild,
  Input,
  OnInit,
  AfterViewInit,
} from '@angular/core';
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
import { ModalComponent } from '../modal/modal.component';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-multi-area',
  standalone: true,
  imports: [NgApexchartsModule, ModalComponent],
  templateUrl: './multi-area.component.html',
  styleUrl: './multi-area.component.css',
})
export class MultiAreaComponent implements OnInit, AfterViewInit {
  user_on_demand: any;
  series: any[] = [];
  @Input() name!: string;
  @Input() initial_series!: any;
  @ViewChild('chart') chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;

  constructor(
    private chart_service: ChartSeriesServiceService,
    private user_service: UsersService
  ) {
    this.chartOptions = {
      series: [],
      chart: {
        // width: '800px',
        type: 'area',
      },
      legend: {
        position: 'bottom',  // Posición de la leyenda (top, bottom, left, right)
        fontSize: '16px',
        fontFamily: 'Helvetica, Arial',
        labels: {
            colors: ['white', 'white','white'],  // Cambiar el color de la leyenda
            useSeriesColors: false  // Usar colores de la serie para la leyenda
        },
        itemMargin: {
          horizontal: 10,  // Margen horizontal entre las etiquetas de la leyenda
          vertical: 20  // Margen vertical entre las etiquetas de la leyenda
      },
      offsetY: 20  // Desplazamiento vertical de la leyenda
    },
      dataLabels: {
        style: {
          colors: ['green'], // Color de las etiquetas de datos
        },
      },
      stroke: {
        curve: 'smooth',
      },

      xaxis: {
        type: 'datetime',
        categories: [],
        labels: {
          style: {
            colors: 'white',
            fontSize: '14px',
            fontWeight: 400,
          },
        },
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    };
  }

 ngAfterViewInit(): void {
    // this.chartOptions.chart.width = '800px'
 }

  ngOnInit(): void {
    this.user_on_demand = this.user_service.getVirtualUserOnOFocus();

    this.chart_service.getSeries().subscribe((data: any) => {
      this.series = data.filter((item: any) => item.name === this.name);
      this.chartOptions.series = this.setSeriesData();
      this.chartOptions.xaxis.categories = this.setDatesData();
    });
  }

  

  public setSeriesData() {
    return this.series.map((serie: any) => {
      return { name: serie.type, data: serie.series };
    });
  }

  public setDatesData() {
    if (this.series.length) return this.series[0].dates;
  }
}
