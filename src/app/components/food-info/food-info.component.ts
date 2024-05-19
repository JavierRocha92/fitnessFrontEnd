import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FoodsService } from '../../services/foods.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-info.component.html',
  styleUrl: './food-info.component.css',
})
export class FoodInfoComponent implements OnInit {
  @Input() food_data: any;
  nutrients: any = {};
  show_data: boolean = false;
  @Input() food_index_input!: number;
  ingredient: any;
  weight_from_from: number = 0;

  constructor(private food_service: FoodsService) {}

  ngOnInit(): void {
    this.food_service.getFoodData().subscribe((data: any) => {
      /* Verificacion de si el objeto ya ha sido procesado */
      if (Object.keys(this.nutrients).length > 0) return;

      if (!data) {
        this.show_data = false;
        return;
      }


      this.ingredient = data.food_data[this.food_index_input];
      this.weight_from_from = data.weigth_data[this.food_index_input];

      if (this.ingredient) {
        this.food_data = this.ingredient.food;

        if (!this.nutrients.length) this.loadIngredients();

        this.show_data = true;;

        this.food_service.saveRealFoodData(this.nutrients);
      }
    });
  }

  loadIngredients() {
    for (let key in this.food_data.nutrients) {
      if (this.food_data.nutrients.hasOwnProperty(key)) {
        const processedValue = (
          (this.food_data.nutrients[key] / 100) *
          this.weight_from_from
        ).toFixed(2);
        this.nutrients[key] = parseInt(processedValue);
      }
    }
  }
}
