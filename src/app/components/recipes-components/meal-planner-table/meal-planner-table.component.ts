import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../../services/recipes.service';
import { CommonModule } from '@angular/common';
import { TableRecipeComponent } from '../table-recipe/table-recipe.component';
import { UsersService } from '../../../services/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-meal-planner-table',
  standalone: true,
  imports: [CommonModule, TableRecipeComponent],
  templateUrl: './meal-planner-table.component.html',
  styleUrl: './meal-planner-table.component.css',
})
export class MealPlannerTableComponent implements OnInit {
  recipe_id: string = '';
  meal_planner: any;
  user_on_demand: any;
  constructor(
    private recipes_service: RecipesService,
    private user_service: UsersService,
    private toast_service: ToastrService
  ) {}

  ngOnInit(): void {
    this.user_on_demand = this.user_service.getVirtualUserOnOFocus();
    /* Llamar a una funcion para que obtenga el meal planner */
    this.recipes_service
      .getMealPlannerFromDatabase(this.user_on_demand['ID'])
      .then((response: any) => {
        if (response) {
          if (response.success) {
            this.meal_planner = JSON.parse(response.data[0].planning);
            this.recipes_service.setRecipesPlannerToLocalStorage(
              this.meal_planner
            );
          }
          if (response.code === 1000) {
            //Conexion fallida
            this.toast_service.error('Maintenance application server');
          }
          if (response.code === 2000) {
            //No se encontraron datos
            this.recipes_service.setRecipesPlannerToLocalStorage(false);
          }
        }
        
      })
      .catch((error: any) => {
        console.log(error);
      });

    /* Subscripcion al servicio para traernos la infomracion del meal planner */
    this.recipes_service.newRecipeOnLocalStorage().subscribe((data: any) => {
      this.meal_planner = data;
    });
    this.recipes_service.getRecipeOnChange().subscribe((recipe_id: string) => {
      this.recipe_id = recipe_id;
    });
  }

  addDietToPlanner(meal_type: string, day: string) {
    this.recipes_service.addRecipeToPlanner(this.recipe_id, day, meal_type);
  }
  removeFromPlanner(meal_type: string, day: string) {
    this.recipes_service.removeRecipeFromPlanner(day, meal_type);
  }

  

  isEmpty(object: any) {
    return Object.keys(object).length === 0;
  }
}
