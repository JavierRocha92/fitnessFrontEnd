import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormExerciseComponent } from '../exercise-form/exercise-form.component';
import { CalculatorService } from '../../../services/calculator.service';
import { ExerciseComponent } from '../exercise/exercise.component';
import { UsersService } from '../../../services/users.service';
import { LoaderComponent } from '../../loader/loader.component';

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [FormExerciseComponent, ExerciseComponent, LoaderComponent],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.css',
})
export class ExercisesComponent implements OnInit{
  exercises: any;
  isLoading : boolean = false



  constructor(
    private calculator: CalculatorService,
    private user_service: UsersService
  ) {}

  ngOnInit(): void {
    this.user_service.checkSession();
    this.isLoading = true
    // this.setDefaultData();
    this.calculator.getData().subscribe((data: any) => {
      this.exercises = data
      this.isLoading= false
    });
  }

 

  
}
