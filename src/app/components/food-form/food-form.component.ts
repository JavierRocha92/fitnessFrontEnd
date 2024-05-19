

import { RouterLink, Router } from '@angular/router';
//Estos archivos se importan solo para el control del formulario
import { Component, OnInit,  Input, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FoodsService } from '../../services/foods.service';
import { FoodInfoComponent } from '../food-info/food-info.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-food-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, FoodInfoComponent, CommonModule],
  templateUrl: './food-form.component.html',
  styleUrl: './food-form.component.css'
})

export class FoodFormComponent implements OnInit {
  formulario!: FormGroup;
  foodControl!: FormControl;
  measureControl!: FormControl;
  food_data: any
  show_data: boolean = false
  @Input() food_index_input! : number  
  @Output() removeFoodFromArray : EventEmitter<any> = new EventEmitter<any>()
  weight_data : number [] = []


  constructor(private formBuilder: FormBuilder, private router: Router, private food_service: FoodsService) { }

  searchIngredient(food_name: string, measure : number): void {
    

    this.food_service.fetchIngredient(food_name).subscribe((data: any) => {
      const food_id = data.hints[0].food.foodId

      this.food_service.fetchIngredientInfo(food_id).subscribe((data: any) => {
        this.food_data = data.hints[0]
        
        this.food_service.saveFoodData(this.food_data, measure)
        this.show_data = true
      })
    })
  }


  ngOnInit(): void {

    this.foodControl = new FormControl('', Validators.required);
    this.measureControl = new FormControl('', Validators.required);
    this.formulario = this.formBuilder.group({
      nombre: this.foodControl,
      medidas : this.measureControl
    });
  }

  enviarFormulario(): void {
    /* Verificamos mediante la propiedad valid si esta a true para verificar que el fomrulario
     no tiene errores en la parte de front */
    if (this.formulario.valid) {
      /* Guardamos los datos de los inputs en un objeto para enviarlo al servidor para ver si los datos son correctos */
      const datosFormulario = {
        food_name: this.foodControl.value,
        measure: this.measureControl.value,
      };

      this.searchIngredient(datosFormulario.food_name, datosFormulario.measure)
    }
  }

  emitEvent(){
    this.removeFoodFromArray.emit()
  }

}



