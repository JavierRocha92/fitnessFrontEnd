import { Injectable } from '@angular/core';
import { api_keys } from '../../config/data_config';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormData } from '../../app/types/form';
import { Recipes } from '../../app/types/recipes';
import { WebserviceService } from './webservice.service';
@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes_planner: any = [
    {
      day: 'Monday',
      meals: { breakfast: {}, lunch: {}, dinner: {}, snack: {}, tea_time: {} },
      calories: 0,
    },
    {
      day: 'Tuesday',
      meals: { breakfast: {}, lunch: {}, dinner: {}, snack: {}, tea_time: {} },
      calories: 0,
    },
    {
      day: 'Wednesday',
      meals: { breakfast: {}, lunch: {}, dinner: {}, snack: {}, tea_time: {} },
      calories: 0,
    },
    {
      day: 'Thursday',
      meals: { breakfast: {}, lunch: {}, dinner: {}, snack: {}, tea_time: {} },
      calories: 0,
    },
    {
      day: 'Friday',
      meals: { breakfast: {}, lunch: {}, dinner: {}, snack: {}, tea_time: {} },
      calories: 0,
    },
    {
      day: 'Saturday',
      meals: { breakfast: {}, lunch: {}, dinner: {}, snack: {}, tea_time: {} },
      calories: 0,
    },
    {
      day: 'Sunday',
      meals: { breakfast: {}, lunch: {}, dinner: {}, snack: {}, tea_time: {} },
      calories: 0,
    },
  ];
  subject_recipes_planner: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  recipe_on_change: any = {};
  recipe_on_change_subject: BehaviorSubject<any> = new BehaviorSubject<any>('');

  api_key = `&app_key=${api_keys.search_recipes.app_key}`;
  app_id = `&app_id=${api_keys.search_recipes.app_id}`;
  // url_api_base = 'https://api.edamam.com/api/rtype=public&q=chicken&'
  url_api_base = 'https://api.edamam.com/api/recipes/v2?type=public&q=chicken&';

  meal_planer_url : string = '/recipes'

  recipes: any;
  recipes_subject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient, private web_service : WebserviceService) {
    const meal_planner_on_local_storage = localStorage.getItem('meal_planner')
    if(meal_planner_on_local_storage)
      this.recipes_planner = JSON.parse(meal_planner_on_local_storage)

  }

  fetchRecipe(search_args: FormData | null, url_param: string = '') {
    let url = '';

    if (search_args) {
      const search_params = this.getSearchParams(search_args);
      url = this.url_api_base + search_params + this.api_key + this.app_id;
    } else {
      url = url_param;
    }
    console.log(url);
    return this.http.get(url);
  }

  getMealPlannerFromDatabase(virtual_user_id : string){

    return new Promise(async (resolve, reject) => {
      this.web_service.get(
        this.meal_planer_url,
        [virtual_user_id],
        (response: any) => {
          resolve(response);
          if (response.success) {
            console.log('esta es la respuesta afirmativa')
            console.log(response)
          }
        },

        (error: any) => {
          reject(error);
          console.log('respuesta de error en el server');
          
        }
      );
    });
    // this.http.get(url).subscribe((data : any) => {
    //   if(data.success){
    //     const planning = data.data[0].planning
    //     localStorage.setItem('meal_planner', planning)
    //   }
    // })
  }
  

  saveRecipes(recipes_to_save: any) {
    this.recipes = recipes_to_save;
    this.updateRecipes();
  }
  getRecipes() {
    return this.recipes_subject.asObservable();
  }

  updateRecipes(): void {
    this.recipes_subject.next(this.recipes);
    this.getRecipes();
  }

  getSearchParams(search_args: FormData): string {
    let response = Object.entries(search_args).map((param: any) => {
      let new_data = param[1];
      if (param[0] == 'q') new_data = param[1].replace(/[^a-zA-Z0-9\s]/g, '');
      return `&${param[0]}=${new_data}`;
    });

    return response.join('');
  }

  addRecipeToPlanner(recipe: any, week_day: string, meal_type: string) {
    const day_index = this.recipes_planner.findIndex(
      (day: any) => day.day === week_day
    );
    if (day_index !== -1)
      this.recipes_planner[day_index].meals[meal_type] = recipe;
    
    this.setRecipesPlannerToLocalStorage(this.recipes_planner);
  }

  setRecipesPlannerToLocalStorage(meal_planner: any) {
    /* Primero tengo que mirar si quieren machacarlo */
    if (meal_planner) {
      console.log('entro aqui para machacar lo que tengo con esto')
      console.log(meal_planner)
      localStorage.setItem('meal_planner', JSON.stringify(this.setTotalCalories(meal_planner)));
    } else {
      /* hay que mirar antes si tenemos algo en el ls para si tenemos algo directamente mandarlo sin guardar nada mas */
      let meal_planner_from_local_storage = localStorage.getItem('meal_planner')
      if(meal_planner_from_local_storage){
        this.updateRecipesPlanner(JSON.parse(meal_planner_from_local_storage))
        return
      }

      localStorage.setItem(
        'meal_planner',
        JSON.stringify(this.recipes_planner)
      );
    }

    this.updateRecipesPlanner(false);
  }

  setTotalCalories(meal_planner : any) {
    meal_planner.forEach((day: any, index: number) => {
      let totalCalories = 0;
      Object.values(day.meals).forEach((meal: any) => {
        totalCalories += parseInt(meal.calories) | 0;
      });
      this.recipes_planner[index].calories = totalCalories;
    });
    return meal_planner
  }

  newRecipeOnLocalStorage() {
    return this.subject_recipes_planner.asObservable();
  }

  getMealPlannerFromLocalStorage(){
    let new_meal_planner = localStorage.getItem('meal_planner')
    if(new_meal_planner){
      console.log('entro en el get porque tengo cosas en ls')
      new_meal_planner = JSON.parse(new_meal_planner)
      return new_meal_planner
    }
    return null
      
  }

  updateRecipesPlanner(meal_planner : any) {
    if(meal_planner){
      this.subject_recipes_planner.next(meal_planner)
      this.newRecipeOnLocalStorage()
      return
    }
    
    let new_meal_planner = this.getMealPlannerFromLocalStorage()
    if(new_meal_planner)
      this.recipes_planner = new_meal_planner
    this.subject_recipes_planner.next(this.recipes_planner)
    this.newRecipeOnLocalStorage()
  }

  removeRecipeFromPlanner(week_day: string, meal_type: string) {
    const day_index = this.recipes_planner.findIndex(
      (day: any) => day.day === week_day
    );
    
    if (day_index !== -1) this.recipes_planner[day_index].meals[meal_type] = {};


    this.setRecipesPlannerToLocalStorage(this.recipes_planner);
  }

  getRecipeOnChange() {
    return this.recipe_on_change_subject.asObservable();
  }

  setRecipeOnChange(recipe_on_change: any) {
    this.setRecipeOnChangeAsJson(recipe_on_change);
    this.updateRecipeOnChange();
  }

  updateRecipeOnChange() {
    this.recipe_on_change_subject.next(this.recipe_on_change);
  }

  setRecipeOnChangeAsJson(recipe_on_change: any) {
    this.recipe_on_change = {
      name: recipe_on_change.label,
      image: recipe_on_change.image,
      calories: (recipe_on_change.calories / recipe_on_change.yield).toFixed(),
    };
  }
}
