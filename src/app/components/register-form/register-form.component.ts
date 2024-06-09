import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl } from '@angular/forms';
import { Pipe } from '@angular/core';
import { switchMap } from 'rxjs';
import { of } from 'rxjs';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { WebserviceService } from '../../services/webservice.service';
import { TokenService } from '../../services/token.service';
import { UsersService } from '../../services/users.service';
import { MeasuresService } from '../../services/measures.service';
import { ToastrService } from 'ngx-toastr';

interface RegisterVirtualData {
  physical_user_id: string;
  name: string;
  goal: boolean;
  daily_calories: number;
  target_weight: number;
  target_hip_circumference: number;
  target_waist_circumference: number;
  target_bmi: number;
  target_body_fat: number;
  age: string;
  end_date: string;
  activity_level: string;
  weight: number;
  hip_circumference: number;
  waist_circumference: number;
  bmi: number;
  body_fat: number;
  height: number;
  gender: string;
}

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent implements OnInit {
 
  @Output() onReponseSuccess = new EventEmitter<any>();

  user_to_insert: any;

  form!: FormGroup;

  nameControl!: FormControl;
  goalControl!: FormControl;
  target_weightControl!: FormControl;
  target_hip_circumferenceControl!: FormControl;
  target_waist_circumferenceControl!: FormControl;
  ageControl!: FormControl;
  activity_levelControl!: FormControl;
  weightControl!: FormControl;
  hip_circumferenceControl!: FormControl;
  waist_circumferenceControl!: FormControl;
  heightControl!: FormControl;
  genderControl!: FormControl;

  isLoading: boolean = false;

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private web_service: WebserviceService,
    private token_service: TokenService,
    private user_service: UsersService,
    private measure_service: MeasuresService,
    private toast_service: ToastrService
  ) {}

  ngOnInit(): void {
    this.nameControl = new FormControl('', Validators.required);
    this.goalControl = new FormControl('', Validators.required);
    this.target_weightControl = new FormControl('', [
      Validators.required,
      Validators.min(40),
      Validators.max(200),
    ]);
    this.target_hip_circumferenceControl = new FormControl('', [
      Validators.required,
      Validators.min(40),
      Validators.max(200),
    ]);
    this.target_waist_circumferenceControl = new FormControl('', [
      Validators.required,
      Validators.min(40),
      Validators.max(200),
    ]);

    this.activity_levelControl = new FormControl('', Validators.required);
    this.weightControl = new FormControl('', [
      Validators.required,
      Validators.min(40),
      Validators.max(200),
    ]);
    this.hip_circumferenceControl = new FormControl('', [
      Validators.required,
      Validators.min(40),
      Validators.max(200),
    ]);
    this.waist_circumferenceControl = new FormControl('', [
      Validators.required,
      Validators.min(40),
      Validators.max(200),
    ]);

    this.heightControl = new FormControl('', [
      Validators.required,
      Validators.min(120),
      Validators.max(230),
    ]);
    this.genderControl = new FormControl('', [
      Validators.required,
      Validators.min(120),
      Validators.max(230),
    ]);
    this.ageControl = new FormControl('', [
      Validators.required,
      Validators.min(18),
      Validators.max(100),
    ]);

    this.form = this.builder.group({
      name: this.nameControl,
      goal: this.goalControl,
      height: this.heightControl,
      gender: this.genderControl,
      activity_level: this.activity_levelControl,
      weight: this.weightControl,
      target_weight: this.target_weightControl,
      target_hip_circumference: this.target_hip_circumferenceControl,
      target_waist_circumference: this.target_waist_circumferenceControl,
      hip_circumference: this.hip_circumferenceControl,
      waist_circumference: this.waist_circumferenceControl,
      age: this.ageControl,
    });
  }

  checkForm(): void {
    /* Condicional para cuando el forumlario no tiene nignun error de validacion */
    if (this.form.valid) {
      this.user_to_insert = {
        physical_user_id: this.user_service.getUserData()?.ID,
        name: this.nameControl.value,
        goal: this.goalControl.value,
        target_weight: this.target_weightControl.value,
        target_hip_circumference:
          this.target_hip_circumferenceControl.value,
        target_waist_circumference:
          this.target_waist_circumferenceControl.value,
        age: this.ageControl.value,
        exercise: this.activity_levelControl.value,
        weight: this.weightControl.value,
        hip_circumference: this.hip_circumferenceControl.value,
        waist_circumference: this.waist_circumferenceControl.value,
        height: this.heightControl.value,
        gender: this.genderControl.value,

      };

      this.setValuesToUserToInsert();

      this.sendData();
    }
  }

  sendData() {
    this.isLoading = true;

    return new Promise(async (resolve, reject) => {
      this.web_service.post(
        `register/virtual`,
        this.user_to_insert,
        (response: any) => {
          resolve(response);
          if (response.success) {
            this.emitEvent();
            this.form.reset()
            this.token_service.saveToken(response.token);
            
            this.user_service.setUser(
              response.user,
              response.virtual_users,
              response.avg_data
            );
            this.isLoading = false;

            // window.location.reload()
            this.toast_service.success('User registered successfully');
          } else {
            if (response.code == 1000) {
              this.toast_service.info('User unregistered');
              this.isLoading = false;
            }
          }
        },

        (error: any) => {
          reject(error);
          this.isLoading = false;
          this.toast_service.error('Something went wrong');
        }
      );
    });
  }


  setValuesToUserToInsert() {
    const calculate_data_user = this.getCalculatedData('user');
    this.setDataToUser(calculate_data_user, 'user');
    
    const calculate_data_target = this.getCalculatedData('target');
    this.setDataToUser(calculate_data_target, 'target');
    
    /* calculara a mano el imc y la grasa de las medidas originales */
    this.processUserValues();


  }

  getCalculatedData(type: string) {
    if (type == 'user') {
      const bmi = this.getBMI(
        this.user_to_insert.weight,
        this.user_to_insert.height
      );
      const body_fat = this.getBodyFatPercentage(
        this.user_to_insert.weight,
        this.user_to_insert.height,
        this.user_to_insert.waist_circumference,
        this.user_to_insert.hip_circumference,
        this.user_to_insert.age,
        this.user_to_insert.gender
      );
      const daily_calories = this.getDailyCalories(
        this.user_to_insert.weight,
        this.user_to_insert.height,
        this.user_to_insert.age,
        this.user_to_insert.gender,
        this.user_to_insert.activity_level
      );
      return {
        bmi: bmi,
        body_fat: body_fat,
        daily_calories: daily_calories,
      };
    }
    if (type == 'target') {
      const bmi = this.getBMI(
        this.user_to_insert.target_weight,
        this.user_to_insert.height
      );
      const body_fat = this.getBodyFatPercentage(
        this.user_to_insert.target_weight,
        this.user_to_insert.height,
        this.user_to_insert.target_waist_circumference,
        this.user_to_insert.target_hip_circumference,
        this.user_to_insert.age,
        this.user_to_insert.gender
      );

      return {
        bmi: bmi,
        body_fat: body_fat,
      };
    } else return null;
  }

  getBMI(weight: number, height: number): number {
    height = height / 100;
    const bmi = weight / (height * height);

    return bmi;
    // return weight / (height * height);
  }
  getBodyFatPercentage(
    weight: number,
    height: number,
    waistCircumference: number,
    hipCircumference: number,
    age: number,
    gender: 'male' | 'female'
  ): number {
    
    const bmi = this.getBMI(weight, height);

    // Calcular el porcentaje de grasa corporal
    let bodyFatPercentage: number;

    
    if (gender === 'male') {
      bodyFatPercentage = 1.082 * bmi + 94.42 - (age * 0.02);
  } else if (gender === 'female') {
      bodyFatPercentage = 1.082 * bmi + 88.36 - (age * 0.02);
  }else{
    bodyFatPercentage = 0
  }

  // Calculamos el porcentaje de grasa corporal
  let bodyFatPercentageProcessed = (waistCircumference * 0.74) - (hipCircumference * 0.74) + (bodyFatPercentage * 0.2);


    // Incorporar la age en el cálculo
    if (age <= 29) {
      bodyFatPercentageProcessed += 1; // Añadir 1 al porcentaje de grasa corporal si la age es menor o igual a 29
    } else if (age >= 30 && age <= 39) {
      bodyFatPercentageProcessed += 2; // Añadir 2 al porcentaje de grasa corporal si la age está entre 30 y 39
    } else if (age >= 40 && age <= 49) {
      bodyFatPercentageProcessed += 3; // Añadir 3 al porcentaje de grasa corporal si la age está entre 40 y 49
    } else {
      bodyFatPercentageProcessed += 4; // Añadir 4 al porcentaje de grasa corporal si la age es mayor o igual a 50
    }


    

    return bodyFatPercentageProcessed;
  }

  getDailyCalories(
    weight: number,
    height: number,
    age: number,
    gender: 'male' | 'female',
    activityLevel: string
  ): number {
    const activity_level_as_number = this.getActivityLevel(activityLevel);
    let bmr: number;
    if (gender === 'male') {
      bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else {
      bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    }

    // Multiply BMR by activity level
    const dailyCalories = bmr * activity_level_as_number;

    return dailyCalories;
  }

  getActivityLevel(type: string): number {
    let activity_level_as_number;
    switch (type) {
      case 'Low':
        activity_level_as_number = 1.2;
        break;
      case 'High':
        activity_level_as_number = 1.8;
        break;
      case 'Moderate':
        activity_level_as_number = 1.55;
        break;
      default:
        activity_level_as_number = 1.55;
    }

    return activity_level_as_number;
  }

  processUserValues() {
    this.user_to_insert = {
      physical_user_id: this.user_to_insert.physical_user_id,
      name: this.user_to_insert.name,
      goal: this.user_to_insert.goal,
      target_weight: this.user_to_insert.target_weight,
      target_hip_circumference: this.user_to_insert.target_hip_circumference,
      target_waist_circumference:
        this.user_to_insert.target_waist_circumference,
      age: this.user_to_insert.age,
      activity_level: this.user_to_insert.exercise,
      weight: this.user_to_insert.weight,
      hip_circumference: this.user_to_insert.hip_circumference,
      waist_circumference: this.user_to_insert.waist_circumference,
      height: this.user_to_insert.height,
      gender: this.user_to_insert.gender,
      bmi: this.user_to_insert.bmi,
      body_fat: this.user_to_insert.body_fat,
      daily_calories: this.user_to_insert.daily_calories,
      metabolic_rate: this.user_to_insert.metabolic_rate,
      leanBodyMass: this.user_to_insert.leanBodyMass,
      idealBodyWeight: this.user_to_insert.idealBodyWeight,
      end_date: this.user_to_insert.end_date,
      start_date: this.user_to_insert.start_date,
      target_bmi: this.user_to_insert.target_bmi,
      target_body_fat: this.user_to_insert.target_body_fat,
    };
  }


  getProcessedData(data: any, type: string) {
    if (type == 'user')
      return {
        goal: this.user_to_insert.goal,
        goalWeight: this.user_to_insert.goalWeight,
        age: this.user_to_insert.age,
        exercise: this.user_to_insert.exercise,
        weight: this.user_to_insert.weight,
        hip: this.user_to_insert.hip,
        waist: this.user_to_insert.waist,
        height: this.user_to_insert.height,
        gender: this.user_to_insert.gender,
      };

    return {
      weight: this.user_to_insert.goalWeight,
      age: this.user_to_insert.age,
      height: this.user_to_insert.height,
      gender: this.user_to_insert.gender,
    };
  }

  getProcessedDate(days_value: number | null) {
    let date = new Date();
    if (days_value) {
      date.setDate(date.getDate() + days_value);
    }
    return date.toLocaleDateString('en-CA');
  }

  setDataToUser(data: any, type: string) {
    const types: any = {
      user: {
        bmi: data.bmi,
        body_fat: data.body_fat,
        daily_calories: data.daily_calories,
        end_date: this.getProcessedDate(null),
        start_date: this.getProcessedDate(null),
      },
      target: {
        target_bmi: data.bmi,
        target_body_fat: data.body_fat,
      },
    };
    this.user_to_insert = { ...this.user_to_insert, ...types[type] };
  }

  emitEvent() {
    this.onReponseSuccess.emit();
  }
}
