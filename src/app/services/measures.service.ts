import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
interface Measure {
  name: string
  value: string
}

@Injectable({
  providedIn: 'root'
})

export class MeasuresService {

  api_url = 'https://fitness-api.p.rapidapi.com/fitness?'
  content_type = 'application/x-www-form-urlencoded'
  apy_key = '687e744412msh04f7d5474627d1ep16e165jsn20324776b515'
  api_host = 'fitness-api.p.rapidapi.com'
  data: any
  subject_data: BehaviorSubject<any> = new BehaviorSubject<any>([])

  constructor(private http: HttpClient) { }

  fetchMeasures(request_params: any) {
    const headers = this.getHeaders()
    const body = this.getParams(request_params)
    const url = this.api_url

    this.http.post(url, body.toString(), { headers }).subscribe((data : any) => {
      this.saveData(data)
    })
  }

  getData(): Observable<any> {
    return this.subject_data.asObservable()
  }

  saveData(data: any) {
    this.data = data
    this.updateData()
  }

  updateData() {
    this.subject_data.next(this.data)
    this.getData()
  }

  getHeaders() {
    return new HttpHeaders({
      'content-type': this.content_type,
      'X-RapidAPI-Key': this.apy_key,
      'X-RapidAPI-Host': this.api_host
    })
  }

  getParams(request_params: Measure) {
    const params: any = {}
    for (const [key, value] of Object.entries(request_params)) {
      params[key] = value
    }
    return new URLSearchParams(params)
    // return  new URLSearchParams({
    //   height: '190',
    //   weight: '80',
    //   age: '30',
    //   gender: 'male',
    //   exercise: 'little',
    //   neck: '41',
    //   hip: '100',
    //   waist: '88',
    //   goal: 'maintenance',
    //   deficit: '500',
    //   goalWeight: '85'
    // });



  }
}

