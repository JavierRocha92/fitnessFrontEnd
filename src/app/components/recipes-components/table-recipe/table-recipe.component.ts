import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from '../../../services/recipes.service';

@Component({
  selector: 'app-table-recipe',
  standalone: true,
  imports: [],
  templateUrl: './table-recipe.component.html',
  styleUrl: './table-recipe.component.css'
})
export class TableRecipeComponent implements OnInit {
@Input() recipe : any
@Input() recipe_type !: string
@Input() meal_planner_day : any

constructor(private recipe_service : RecipesService){}
ngOnInit(): void {

}
removeItem(){
  this.recipe_service.removeRecipeFromPlanner(this.meal_planner_day, this.recipe_type)
}

}
