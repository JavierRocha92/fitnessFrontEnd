
import { RouterLink, Router } from '@angular/router';
//Estos archivos se importan solo para el control del formulario
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecipesService } from '../../../services/recipes.service';
import { FormData } from '../../../types/form';
@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css'
})



export class RecipeFormComponent implements OnInit {

  formulario!: FormGroup;
  foodControl!: FormControl;
  dietControl!: FormControl;
  mealControl!: FormControl;
  caloriesControl!: FormControl;

 
  default_data : any = {
    q: 'chicken',
    diet: 'balanced',
    mealType: 'Dinner',
    calories: '400',
    imageSize: 'THUMBNAIL'
  };

  
  @Input() food_index_input!: string
  @Output() errorSearch: EventEmitter<any> = new EventEmitter<any>()
  weight_data: number[] = []


  constructor(private formBuilder: FormBuilder, private router: Router, private recipe_service: RecipesService) { }

  searchRecipe(form_data: FormData): void {
    this.recipe_service.fetchRecipe(form_data).subscribe(
      (data: any) => {
      const recipes = {
        'recipes': data.hits,
        'next': data._links.next || false,
        'previous': data._links.previous || false

      }

      this.recipe_service.saveRecipes(recipes)
      // this.formulario.reset()
    },
    (error) => {
      this.emitEvent()
      console.log('request error')
      console.error(error)
    }
  )
  }


  ngOnInit(): void {

    this.foodControl = new FormControl('', Validators.required);
    this.dietControl = new FormControl('', Validators.required);
    this.mealControl = new FormControl('', Validators.required);
    this.caloriesControl = new FormControl('', Validators.required);
    this.formulario = this.formBuilder.group({
      nombre: this.foodControl,
      diet: this.dietControl,
      meal: this.mealControl,
      calories: this.caloriesControl

    });

    this.searchRecipe(this.default_data)
  }

  sendData(): void {
    /* Verificamos mediante la propiedad valid si esta a true para verificar que el fomrulario
     no tiene errores en la parte de front */
    if (this.formulario.valid) {
      /* Guardamos los datos de los inputs en un objeto para enviarlo al servidor para ver si los datos son correctos */
      const datosFormulario = {
        q: this.foodControl.value,
        diet: this.dietControl.value,
        mealType: this.mealControl.value,
        calories: this.caloriesControl.value.toString(),
        imageSize: 'THUMBNAIL'
      };

      this.searchRecipe(datosFormulario)
      
    }
  }
  emitEvent() {
    this.errorSearch.emit()
  }

}


