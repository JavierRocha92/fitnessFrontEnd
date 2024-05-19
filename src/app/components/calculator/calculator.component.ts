
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FoodFormComponent } from '../food-form/food-form.component';
import { FoodInfoComponent } from '../food-info/food-info.component';
import { FoodsService } from '../../services/foods.service';
import { CommonModule } from '@angular/common';
import { Food, FoodMeasures } from '../../types/food';
import { FloatComponentComponent } from '../float-component/float-component.component';
@Component({
  selector: 'app-calculator',
  standalone : true,
  imports: [FoodFormComponent, FoodInfoComponent, CommonModule, FloatComponentComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent implements OnInit {
  foods: any = [{name : '', qty : 0}]
  food_data: any = [{food_data : []}, {weight_data : []}]
  totals : any = {};
  isDisabled = false

  constructor(private food_service: FoodsService) { }

  processTotal() {
      if (this.food_data) {
        this.totals = this.food_data.reduce((total: any, food: any) => {
          for (const measure in food) {
            total[measure] = (total[measure] || 0) + food[measure];
          }
          return total;
        }, {});

      }
    
  }

  ngOnInit(): void {
    this.food_service.getRealFoodData().subscribe((data : any) => {
      this.food_data = data
      this.processTotal()
      this.toggleDisabled()
    })
  }

  addFood() {
    const food : Food = {
      name : '', qty : 0
    }
    this.foods.push(food)
    this.toggleDisabled()
  }

  removeFood(food_index: number) {
    this.foods.splice(food_index, 1)
    this.food_service.removeFromFoodData(food_index)
    this.food_service.removeFromRealFoodData(food_index)
  }
  toggleDisabled(){
    this.isDisabled = !this.isDisabled
  }

}

