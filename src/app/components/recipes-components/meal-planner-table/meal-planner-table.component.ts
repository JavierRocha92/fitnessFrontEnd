import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../../services/recipes.service';
import { CommonModule } from '@angular/common';
import { TableRecipeComponent } from '../table-recipe/table-recipe.component';

@Component({
  selector: 'app-meal-planner-table',
  standalone: true,
  imports: [CommonModule, TableRecipeComponent],
  templateUrl: './meal-planner-table.component.html',
  styleUrl: './meal-planner-table.component.css'
})
export class MealPlannerTableComponent implements OnInit {
  recipe_id: string = ''
  meal_planner: any
  constructor(private recipes_service: RecipesService) { }

  ngOnInit(): void {
    /* Llamamos al servicio para cargar los datos de inicio en el local storage */
    this.recipes_service.setRecipesPlannerToLocalStorage(false)
    /* Subscripcion al servicio para traernos la infomracion del meal planner */
    this.recipes_service.newRecipeOnLocalStorage().subscribe((data: any) => {
      console.log('cojo el neuvo planner')
      console.log(typeof data)
      console.log(data)
      this.meal_planner = data
      
    })
    this.recipes_service.getRecipeOnChange().subscribe((recipe_id: string) => {
      this.recipe_id = recipe_id
    })
  }

  addDietToPlanner(meal_type: string, day: string) {
    console.log('añadiendo receta')
    this.recipes_service.addRecipeToPlanner(this.recipe_id, day, meal_type)
    this.recipeSaveSuccess()
  }
  removeFromPlanner(meal_type: string, day: string,) {
    this.recipes_service.removeRecipeFromPlanner(day, meal_type)
  }

 

  recipeSaveSuccess() {
    /* crear notificaicon de guardado con existo */
  }

  isEmpty(object : any) {
    return Object.keys(object).length === 0
  }

}
