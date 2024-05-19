import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FoodsService {
  url_base : string = 'https://api.edamam.com/api/food-database/v2/parser?'
  app_key : string = 'app_key=85aec811a04657ea2f5de091307a05dd'
  app_id : string = 'app_id=09de661e'
  food_data : any = []
  subject_food_data : BehaviorSubject<any> = new BehaviorSubject<any>(false)
  real_food_data : any = []
  subject_real_food_data : BehaviorSubject<any> = new BehaviorSubject<any>(false)
  weight_data : number [] = []
  
  constructor(private http :HttpClient){}

  fetchIngredient(ingr : string) : Observable<any>{
    const search_url = `ingr=${ingr}`
    const url = this.url_base +  this.app_key + '&' + this.app_id + '&' + search_url
    return this.http.get<any>(url)
  }
  
  fetchIngredientInfo(id : number){
    const search_url = `ingr=${id}`
    const url = this.url_base +  this.app_key + '&' + this.app_id + '&' + search_url
    return this.http.get<any>(url)
  }

  saveFoodData(food_data : any, measure : number){
    this.weight_data.push(measure)
    this.food_data.push(food_data)
    this.updateFoodData()
  }

  removeFromFoodData(index : number) : void{
    this.weight_data.splice(index, 1)
    this.food_data.splice(index, 1)
    this.updateFoodData()
  }

  getFoodData(){
    return this.subject_food_data.asObservable()
  }

  updateFoodData(){
    this.subject_food_data.next({food_data : this.food_data, weigth_data : this.weight_data})
    this.getFoodData()
  }

  saveRealFoodData(ingrendient : any){
    this.real_food_data.push(ingrendient)
    this.updateRealFoodData()
  }

  getRealFoodData(){
    return this.subject_real_food_data.asObservable()
  }

  updateRealFoodData(){
    this.subject_real_food_data.next(this.real_food_data)
  }

  removeFromRealFoodData(index : number): void{
    this.real_food_data.splice(index, 1)
    this.updateRealFoodData()
  }


}
