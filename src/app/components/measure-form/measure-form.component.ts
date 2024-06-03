import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
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
@Component({
  selector: 'app-measure-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './measure-form.component.html',
  styleUrl: './measure-form.component.css',
})
export class MeasureFormComponent {
  @Output() onReponseSuccess = new EventEmitter<any>();

  user_to_insert: any;
  user_on_demand: any;

  form!: FormGroup;

  weightControl!: FormControl;
  hip_circumferenceControl!: FormControl;
  waist_circumferenceControl!: FormControl;

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
    this.user_on_demand = this.user_service.getVirtualUserOnOFocus();

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
    this.weightControl = new FormControl('', [
      Validators.required,
      Validators.min(40),
      Validators.max(200),
    ]);

    this.form = this.builder.group({
      weight: this.weightControl,
      hip_circumference: this.hip_circumferenceControl,
      waist_circumference: this.waist_circumferenceControl,
    });
  }

  checkForm(): void {
    /* Condicional para cuando el forumlario no tiene nignun error de validacion */
    if (this.form.valid) {
      this.user_to_insert = {
        weight: this.weightControl.value,
        hip_circumference: this.hip_circumferenceControl.value,
        waist_circumference : this.waist_circumferenceControl.value,
        height: this.user_on_demand.height,
        age: this.user_on_demand.age,
        id : this.user_on_demand.ID,
        gender : this.user_on_demand.gender
      };
      
      this.setValuesToUserToInsert();
      
      this.sendData();
    }
  }

  sendData() {
    this.isLoading = true;

    return new Promise(async (resolve, reject) => {
      this.web_service.post(
        `register/virtual/measures` /* acambiar la ruta del endpoint */,
        this.user_to_insert,
        (response: any) => {
          resolve(response);
          if (response.success) {
            this.user_service.updateVirtualUserData(response.virtual_user);
            this.form.reset();
            this.emitEvent();
            this.isLoading = false;
            this.toast_service.success('Measures saved successfully');
            window.location.reload();
          } else {
            if (response.code == 1000) {
              this.toast_service.info('Masures unsaved');
              this.isLoading = false;
            }
            this.emitEvent();
          }
        },

        (error: any) => {
          reject(error);
          this.toast_service.error('Something went wrong');
          console.log('respuesta de error en el server');
          this.isLoading = false;
          this.emitEvent()
        }
      );
    });
  }

  setValuesToUserToInsert() {
    const calculate_data_user = this.getCalculatedData();

    this.setDataToUser(calculate_data_user);

    this.processUserValues();
   
  }
  getCalculatedData() {
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
    

    return {
      bmi: bmi,
      body_fat: body_fat,
    };
  }

  getBMI(weight: number, height: number): number {
    height = height / 100;
    
    return weight / (height * height);
  }

  getBodyFatPercentage(
    weight: number,
    height: number,
    waistCircumference: number,
    hipCircumference: number,
    age: number,
    gender: 'male' | 'female'
  ): number {
    console.log('weight')
    console.log(weight)
    console.log('height')
    console.log(height)
    console.log('waistCircumference')
    console.log(waistCircumference)
    console.log('hipCircumference')
    console.log(hipCircumference)
    console.log('age')
    console.log(age)
    console.log('gender')
    console.log(gender)
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

    console.log('este es el porcentaje de graasa')
    console.log(bodyFatPercentageProcessed)

    

    return bodyFatPercentageProcessed;
  }

  processUserValues() {
    this.user_to_insert = {
      id: this.user_to_insert.id,
      weight: this.user_to_insert.weight,
      hip_circumference: this.user_to_insert.hip_circumference,
      waist_circumference: this.user_to_insert.waist_circumference,
      bmi: this.user_to_insert.bmi,
      body_fat: this.user_to_insert.body_fat,
      date_time: this.user_to_insert.date_time,
    };
  }

  getProcessedData(data: any) {
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
  }

  getProcessedDate(days_value: number | null) {
    let date = new Date();
    if (days_value) {
      date.setDate(date.getDate() + days_value);
    }
    return date.toLocaleDateString('en-CA');
  }

  setDataToUser(data: any) {
    const user_on_demand = this.user_service.getVirtualUserOnOFocus();

      const measures ={
        bmi: data.bmi,
        body_fat: data.body_fat,
        date_time: this.getProcessedDate(null),
      }
    

    this.user_to_insert = { ...this.user_to_insert, ...measures };
  }

  emitEvent() {
    this.onReponseSuccess.emit();
  }
}
