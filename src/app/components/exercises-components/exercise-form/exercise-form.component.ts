import { CalculatorService } from '../../../services/calculator.service';
import { Exercise } from '../../../types/exercise';
import { Router } from '@angular/router';
//Estos archivos se importan solo para el control del formulario
import { Component, Input, EventEmitter, Output } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercise-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './exercise-form.component.html',
  styleUrl: './exercise-form.component.css',
})
export class FormExerciseComponent {
  formulario!: FormGroup;
  body_partControl!: FormControl;
  food_data: any;
  show_data: boolean = false;
  @Input() food_index_input!: string;
  @Output() removeFoodFromArray: EventEmitter<any> = new EventEmitter<any>();
  weight_data: number[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private calculator: CalculatorService
  ) {
    
  }

  ngOnInit(): void {
    this.body_partControl = new FormControl('', Validators.required);

    this.formulario = this.formBuilder.group({
      name: this.body_partControl,
    });

    // this.sendData({name : 'cardio'})
  }

  handlerForm() {
    if (this.formulario.valid) {
      const exercise = {
        name: this.body_partControl.value,
      };
      this.sendData(exercise);
    }
  }

  sendData(exercise: any ) {
    this.calculator.getCaloriesBurned(exercise).subscribe((data: any) => {
      this.calculator.saveData(data);
    });
  }
}
