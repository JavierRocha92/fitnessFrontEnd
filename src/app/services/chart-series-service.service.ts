import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChartSeriesServiceService {
  series_subject : BehaviorSubject<any []> = new BehaviorSubject<any []>([]) 
  series : any = []
  constructor() { }

  getSeries(){
    return this.series_subject.asObservable()
  }

  addNewSeries(serie_to_add : any) : void{
    const index_of_data = this.series.findIndex((item : any) => item.name === serie_to_add.name && item.type === serie_to_add.type)
    if(index_of_data === -1) 
      this.series.push(serie_to_add)
    else
    this.series.splice(index_of_data, 1)
  this.updateSeries()
  }

  updateSeries(){
    this.series_subject.next(this.series)
  }
}
