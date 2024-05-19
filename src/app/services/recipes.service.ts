import { Injectable } from '@angular/core';
import { api_keys } from '../../config/data_config';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormData } from '../types/form';
import { Recipes } from '../types/recipes';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  api_key = `&app_key=${api_keys.search_recipes.app_key}`
  app_id = `&app_id=${api_keys.search_recipes.app_id}`
  // url_api_base = 'https://api.edamam.com/api/rtype=public&q=chicken&'
  url_api_base = 'https://api.edamam.com/api/recipes/v2?type=public&q=chicken&'

  recipes : any
  recipes_subject : BehaviorSubject<any> = new BehaviorSubject<any>(null)


  constructor(private http: HttpClient) { }

  fetchRecipe(search_args: FormData | null, url_param : string = '') {
    let url = ''

    if(search_args){
      const search_params = this.getSearchParams(search_args)
      url =  this.url_api_base + search_params + this.api_key + this.app_id
    }else{
      url = url_param
    }
    return this.http.get(url)
  }
  
  saveRecipes(recipes_to_save : any){
    this.recipes = recipes_to_save
    this.updateRecipes()
  }
  getRecipes(){
    return this.recipes_subject.asObservable()
  }


  updateRecipes() : void{
    this.recipes_subject.next(this.recipes)
    this.getRecipes()
  }
  
  getSearchParams(search_args: FormData): string {

    let response = Object.entries(search_args).map((param : any) => {
      let new_data = param[1]
      if(param[0] == 'q')
        new_data = param[1].replace(/[^a-zA-Z0-9\s]/g, '')
      return `&${param[0]}=${new_data}`
    })

    return response.join('')
     
  }



}
