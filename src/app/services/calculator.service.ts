import { Injectable } from '@angular/core';
import { Exercise } from '../types/exercise';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  app_id = '8f669ee7'
  api_key = '687e744412msh04f7d5474627d1ep16e165jsn20324776b515'
  api_key_bis = 'dee617ad37f80d95ab45b892667a1bb2'
  pass = 'riberadeltajo0A!'
  username = 'javierriberadeltajo'
  url_request = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/'
  api_host = 'exercisedb.p.rapidapi.com'

  data : any
  subject_data : BehaviorSubject<any> = new BehaviorSubject<any>([])

  constructor(private http: HttpClient) { }

  getCaloriesBurned(exercise: Exercise): Observable<any> {
    const headers = this.getHeader()
    const url = this.url_request + exercise.name
    return this.http.get(url, { headers });
  }

  getHeader(): HttpHeaders {

    return new HttpHeaders({
      'X-RapidAPI-Key': this.api_key,
      'X-RapidAPI-Host': this.api_host
    })

  }

  getData() : Observable<any>{
    return this.subject_data.asObservable()
  }

  updateData(){
    this.subject_data.next(this.data)
    this.getData()
  }


  saveData(data : any){
    this.data = data
    this.updateData()
  }


}
