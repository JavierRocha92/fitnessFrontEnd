import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ApexFill,
  ApexDataLabels,
  ChartComponent,
  ApexStroke,
  ApexPlotOptions,
  ApexYAxis,
  ApexMarkers,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { UsersService } from '../../services/users.service';
import { Virtual_user } from '../../types/user';
import { BioDatas, Measures } from '../../types/measures';
import { ModalComponent } from '../modal/modal.component';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  tooltip: any;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  colors: string[];
  yaxis: ApexYAxis;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
};
type TypeName =
  | 'Target_weight'
  | 'Target_hip_circumference'
  | 'Target_waist_circumference'
  | 'Target_BMI'
  | 'Target_Body_fat';
@Component({
  selector: 'app-radar',
  standalone: true,
  imports: [NgApexchartsModule, ModalComponent],
  templateUrl: './radar.component.html',
  styleUrl: './radar.component.css',
})
export class RadarComponent implements AfterViewInit {
  @ViewChild('chart') chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;
  series: any[] = [];
  datalabel_values: any[] = [];
  user_on_demand : any
  constructor(private user_service: UsersService) {
    this.chartOptions = {
      series: [],
     
      chart: {
        height: 350,
        type: 'radar',
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        radar: {
          size: 100,
          polygons: {
            strokeColor: '#e9e9e9',
            fill: {
              colors: ['#f8f8f8', '#fff'],
            },
            labels: {
              show: false
            }
          },
        },
      },
     
      colors: ['#FF4560'],
      markers: {
        size: 4,
        colors: ['#fff'],
        strokeColors: ['#FF4560'],
        strokeWidth: 2,
      },
      
      xaxis: {
        categories: [],
        // categories: ['Weight', 'Hip', 'Waist', 'Weight', 'BMI', 'Fat'],
        labels: {
          style: {
              colors: ['white', 'white', 'white', 'white', 'white', 'white'],
              fontSize: '14px',
              fontFamily: 'Helvetica, Arial, sans-serif',
          }
      }
      },
      yaxis: {
        tickAmount: 6,
        labels: {
          formatter: function (val: any, i: any) {
            if (i % 2 === 0) {
              return val;
            } else {
              return '';
            }
          },
        },
      },
     
    };
  }

  ngAfterViewInit(): void {}
  ngOnInit(): void {
    this.user_on_demand = this.user_service.getVirtualUserOnOFocus();

    if (this.user_on_demand) this.setSeriesData(this.user_on_demand);
    this.setCategories(this.user_on_demand)
    
  }

  setCategories(virtual_user : any){
    const type_names = ['Weight', 'Hip_circumference', 'Waist_circumference', 'Weight', 'BMI', 'Body_fat']

    this.chartOptions.xaxis.categories = type_names.map((type : string) => {
      const prop_name = `Target_${type.toLowerCase()}`
      return type.slice(0, type.indexOf('_')) + ' ' + virtual_user[prop_name]
    })

  }

  setSeriesData(virtual_user: Virtual_user): any {
    const measures_data_type = [
      'Weight',
      'Hip_circumference',
      'Waist_circumference',
    ];
    const bio_data_data_type = ['Weight', 'BMI', 'Body_fat'];

    const filtered_measures = this.getFilteredData(
      virtual_user,
      virtual_user.historical_measurements,
      measures_data_type
    );
    const filtered_bio_data = this.getFilteredData(
      virtual_user,
      virtual_user.historical_bio_data,
      bio_data_data_type
    );

    

    const percentajeValues = this.getPercentajeValues(
      filtered_measures,
      filtered_bio_data,
      virtual_user.Goal
    );

    this.chartOptions.series = [
      {
        name: 'Targets',
        data: percentajeValues,
      },
    ];

    this.processDataLabelValues()

    // Dentro del constructor o cualquier otro método de la clase
    this.chartOptions.dataLabels = {
      enabled: true,
      formatter: (val: any, opts: any) => {
        return this.datalabel_values[opts.dataPointIndex]
      },
    };
  }

  getTypeName(typeName: string): TypeName {
    return ('Target_' + typeName.toLowerCase()) as TypeName;
  }

  processDataLabelValues(){
    const measures_data = [this.datalabel_values[0].Weight, this.datalabel_values[0].Hip_circumference, this.datalabel_values[0].Waist_circumference, ]
    const bio_data_data = [this.datalabel_values[1].Weight, this.datalabel_values[1].BMI, this.datalabel_values[1].Body_fat, ]

    this.datalabel_values = measures_data.concat(bio_data_data).flat()
  }

  getFilteredData(
    virtual_user: Virtual_user,
    array_data: BioDatas | Measures,
    type_names: string[]
  ): any {
    const measure_data = [array_data[0], array_data[array_data.length - 1]];
    this.datalabel_values.push(array_data[array_data.length - 1]);

    const filtered_data: any = [];

    type_names.forEach((type_name: string) => {
      const processed_data: any = [];
      measure_data.map((measure: any) => {
        processed_data.push(measure[type_name]);
      });
      const target = this.getTypeName(type_name);

      processed_data.push(virtual_user[target]);
      filtered_data.push({
        name: type_name,
        data: processed_data,
      });
    });

    return filtered_data;
  }

  getPercentajeValues(
    filtered_measures: any,
    filtered_bio_data: any,
    goal: number
  ) {
    
    const all_data = filtered_measures.concat(filtered_bio_data).flat();
    return all_data.map((data: any) => {
      const percentage = this.getPercentaje(data, goal);
      if (percentage < 0) return 0;
      if (percentage > 100) return 100;
      return percentage;
    });
  }

  getPercentaje(data: any, goal: number) {
    
    const values = data.data;
    if (goal == 1)
      return Math.round(
        ((values[1] - values[0]) / (values[2] - values[0])) * 100
      );
    if (goal == 0)
      return Math.round(
        ((values[0] - values[1]) / (values[0] - values[2])) * 100
      );
    return 0;
  }
  asJson(array_data: any, type: string) {
    const first = 'first_' + type;
    const last = 'last_' + type;
    const target = 'target_' + type;
    return [
      { [first]: array_data[0] },
      { [last]: array_data[1] },
      { [target]: array_data[2] },
    ];
  }
}
