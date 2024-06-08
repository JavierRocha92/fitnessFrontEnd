import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ChartSeriesServiceService {
  series_subject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  series: any = [];
  constructor() {}

  getSeries() {
    return this.series_subject.asObservable();
  }

  addNewSeries(serie_to_add: any): void {
    
    // if (this.series.length > 1) {
    const index_of_data = this.series.findIndex(
      (item: any) =>
        item.name === serie_to_add.name && item.type === serie_to_add.type
    );
    if (index_of_data === -1) this.series.push(serie_to_add);
    else if (this.series[index_of_data].type != 'Weight') {
      this.series.splice(index_of_data, 1);
    }
    
    this.updateSeries();
    // }
  }
  isOnlyOneOnScreen(){
    const measures = this.series.filter((item : any) => item.name == 'measures')
    const calories = this.series.filter((item : any) => item.name == 'calories')

    return calories.length == 1 && measures.length == 1
  }
  updateSeries() {
    this.series_subject.next(this.series);
    this.getSeries();
  }
}
