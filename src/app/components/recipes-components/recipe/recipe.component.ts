import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { daily } from '../../../types/recipes';
import { MealPlannerTableComponent } from '../meal-planner-table/meal-planner-table.component';
import { RecipesService } from '../../../services/recipes.service';
@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule, MealPlannerTableComponent],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent implements OnInit {
  digest_names: string[] = ['Fat', 'Carbs', 'Protein', 'Cholesterol', 'Vitamin A', 'Vitamin C', 'Vitamin B12', 'Vitamin D', 'Energy']
  @Input() recipe_data: any
  recipe: any
  links: any
  id!: string
  processed_digests : any = []
  toggle : boolean = false
  toggle_planner : boolean = false

  constructor(private recipes_service : RecipesService) { }

  ngOnInit(): void {
    this.recipe = this.recipe_data.recipe
    this.links = this.recipe_data.links
    this.id = this.recipe.uri.slice(this.recipe.uri.indexOf('#') + 1)
    this.processed_digests = this.getProcessedDigests()
    
  }


  getProcessedDigests() {
    const servings = this.recipe.yield
    const total_daily = this.arrayFrom(this.recipe.totalDaily)
    const digests = this.recipe.digest
    const array_result = []
    for (let i = 0; i < total_daily.length; i++) {
      if (this.digest_names.includes(digests[i].label)) {
        const digest = {
          label: digests[i].label,
          total: (digests[i].total / servings).toFixed(2) + digests[i].unit,
          daily: (total_daily[i].quantity / servings).toFixed(2) + total_daily[i].unit
        }
        array_result.push(digest)
      }
    }

    return array_result
  }


  arrayFrom(data: daily[]) {
    return Object.values(data as daily[])
  }

  toggleIngredientsInfo(){
    this.toggle = !this.toggle
  }
  
  onBlur(){
    this.toggle = false
  }
  
  setRecipeOnChange(){
    this.recipes_service.setRecipeOnChange(this.recipe)
  }

  


}
