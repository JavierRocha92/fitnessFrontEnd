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
  data = {
    age: 30,
    basalMetabolicRate: {
      hb: {
        calories: {
          unit: ['Kcal', 'kilocalories'],
          value: 2023.8,
        },
        formulaName: 'Harris-Benedict',
        joules: {
          unit: ['Kj', 'kilojoules'],
          value: 8467.6,
        },
      },
      msj: {
        calories: {
          unit: ['Kcal', 'kilocalories'],
          value: 1923,
        },
        formulaName: 'Harris-Benedict revised by Mifflin-St Jeor',
        joules: {
          unit: ['Kj', 'kilojoules'],
          value: 8045.8,
        },
      },
      rs: {
        calories: {
          unit: ['Kcal', 'kilocalories'],
          value: 2008.8,
        },
        formulaName: 'Harris-Benedict revised by Roza-Shizgal',
        joules: {
          unit: ['Kcal', 'kilocalories'],
          value: 8404.8,
        },
      },
    },
    bodyFatPercentage: {
      bmi: {
        conclusion: 'Acceptable',
        formulaName: 'From BMI',
        unit: ['%', 'percents'],
        value: 20,
      },
      dod: {
        conclusion: 'Fitness (in shape)',
        formulaName: 'Department of Defense',
        unit: ['%', 'percents'],
        value: 14.5,
      },
      ymca: {
        conclusion: 'Fitness (in shape)',
        formulaName: 'YMCA',
        unit: ['%', 'percents'],
        value: 15.2,
      },
    },
    bodyMassIndex: {
      conclusion: 'Normal',
      unit: 'Kg/m²',
      value: 24.4,
    },
    deficit: -500,
    exercise: 'little',
    goalWeight: 85,
    height: 190,
    hip: 100,
    idealBodyWeight: {
      devine: {
        formulaName: 'Devine',
        imperial: {
          unit: ['lbs', 'pounds'],
          value: 185.3,
        },
        metric: {
          unit: ['Kg', 'kilograms'],
          value: 84,
        },
      },
      hamwi: {
        formulaName: 'Hamwi',
        imperial: {
          unit: ['lbs', 'pounds'],
          value: 193.9,
        },
        metric: {
          unit: ['Kg', 'kilograms'],
          value: 88,
        },
      },
      lorentz: {
        formulaName: 'Lorentz',
        imperial: {
          unit: ['lbs', 'pounds'],
          value: 176.4,
        },
        metric: {
          unit: ['Kg', 'kilograms'],
          value: 80,
        },
      },
      miller: {
        formulaName: 'Miller',
        imperial: {
          unit: ['lbs', 'pounds'],
          value: 169.9,
        },
        metric: {
          unit: ['Kg', 'kilograms'],
          value: 77.1,
        },
      },
      peterson: {
        formulaName: 'Peterson et al.',
        imperial: {
          unit: ['lbs', 'pounds'],
          value: 193.7,
        },
        metric: {
          unit: ['Kg', 'kilograms'],
          value: 87.8,
        },
      },
      robinson: {
        formulaName: 'Robinson',
        imperial: {
          unit: ['lbs', 'pounds'],
          value: 176.6,
        },
        metric: {
          unit: ['Kg', 'kilograms'],
          value: 80.1,
        },
      },
    },
    leanBodyMass: {
      bmi: {
        formulaName: 'From BMI',
        unit: ['Kg', 'kilograms'],
        value: 70.4,
      },
      dod: {
        formulaName: 'From Department of Defense',
        unit: ['%', 'percents'],
        value: 75.2,
      },
      ymca: {
        formulaName: 'From YMCA',
        unit: ['%', 'percents'],
        value: 74.6,
      },
    },
    neck: 41,
    restingDailyEnergyExpenditure: {
      bmi: {
        calories: {
          unit: ['Kcal', 'kilocalories'],
          value: 1890.6,
        },
        formulaName: 'Katch-McArdle',
        joules: {
          unit: ['Kj', 'kilojoules'],
          value: 7910.3,
        },
      },
      dod: {
        calories: {
          unit: ['Kcal', 'kilocalories'],
          value: 1994.3,
        },
        formulaName: 'Katch-McArdle',
        joules: {
          unit: ['Kj', 'kilojoules'],
          value: 8344.2,
        },
      },
      ymca: {
        calories: {
          unit: ['Kcal', 'kilocalories'],
          value: 1981.4,
        },
        formulaName: 'Katch-McArdle',
        joules: {
          unit: ['Kj', 'kilojoules'],
          value: 8290.2,
        },
      },
    },
    timeBeforeGoalWeight: {
      unit: ['d', 'days'],
      value: 46,
    },
    totalDailyEnergyExpenditure: {
      bmi: {
        calories: {
          unit: ['Kcal', 'kilocalories'],
          value: 2269,
        },
        formulaName: 'From RDEE and BMI.',
        joules: {
          unit: ['Kj', 'kilojoules'],
          value: 9493.5,
        },
      },
      dod: {
        calories: {
          unit: ['Kcal', 'kilocalories'],
          value: 2393,
        },
        formulaName: 'From RDEE and Department of Defense',
        joules: {
          unit: ['Kj', 'kilojoules'],
          value: 10012.3,
        },
      },
      hb: {
        calories: {
          unit: ['Kcal', 'kilocalories'],
          value: 2429,
        },
        formulaName: 'From BMR and Harris-Benedict',
        joules: {
          unit: ['Kj', 'kilojoules'],
          value: 10162.9,
        },
      },
      msj: {
        calories: {
          unit: ['Kcal', 'kilocalories'],
          value: 2308,
        },
        formulaName: 'From BMR and Mifflin-St. Jeor',
        joules: {
          unit: ['Kj', 'kilojoules'],
          value: 9656.7,
        },
      },
      rs: {
        calories: {
          unit: ['Kcal', 'kilocalories'],
          value: 2411,
        },
        formulaName: 'From BMR and Roza-Shizgal',
        joules: {
          unit: ['Kj', 'kilojoules'],
          value: 10087.6,
        },
      },
      ymca: {
        calories: {
          unit: ['Kcal', 'kilocalories'],
          value: 2378,
        },
        formulaName: 'From RDEE and Department of Defense',
        joules: {
          unit: ['Kj', 'kilojoules'],
          value: 9949.6,
        },
      },
    },
    waist: 88,
    waistToHipRatio: {
      conclusion: 'Low health risk',
      value: 0.88,
    },
    weight: 88,
  };

  @Output() onReponseSuccess = new EventEmitter<any>()

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
    private measure_service: MeasuresService
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
        goalWeight: this.target_weightControl.value.toString(),
        target_hip_circumference:
          this.target_hip_circumferenceControl.value.toString(),
        target_waist_circumference:
          this.target_waist_circumferenceControl.value.toString(),
        age: this.ageControl.value.toString(),
        exercise: this.activity_levelControl.value,
        weight: this.weightControl.value.toString(),
        hip: this.hip_circumferenceControl.value.toString(),
        waist: this.waist_circumferenceControl.value.toString(),
        height: this.heightControl.value.toString(),
        gender: this.genderControl.value,

        // deficit: this.deficitControl.value.toString(),
      };

      this.setValuesToUserToInsert();

      this.sendData()
    }
  }

  sendData() {
    this.isLoading = true;
    console.log(`estoy cargando ${this.isLoading}`);

    return new Promise(async (resolve, reject) => {
      this.web_service.post(
        `register/virtual`,
        this.user_to_insert,
        (response: any) => {
          console.log('esta es la response');
          console.log(response);
          resolve(response);
          if (response.success) {
            this.emitEvent()
            this.token_service.saveToken(response.token);
            this.user_service.setUser(
              response.user,
              response.virtual_users,
              response.avg_data
            );
            this.isLoading = false;

            this.router.navigate(['/user-avatar']);
          }
        },

        (error: any) => {
          reject(error);
          console.log('respuesta de error en el server');
          this.isLoading = false;
        }
      );
    });
  }

  setValuesToUserToInsert() {
    /*1. Tenemos que hacer peticion a la api y traernos los datos de calculadora */
    const data = this.data;
    this.setDataToUser(data, 'user');
    this.setDataToUser(data, 'target');
    this.processUserValues();
  }

  processUserValues() {
    this.user_to_insert = {
      physical_user_id: this.user_to_insert.physical_user_id,
      name: this.user_to_insert.name,
      goal: this.user_to_insert.goal,
      target_weight: this.user_to_insert.goalWeight,
      target_hip_circumference: this.user_to_insert.target_hip_circumference,
      target_waist_circumference:
        this.user_to_insert.target_waist_circumference,
      age: this.user_to_insert.age,
      activity_level: this.user_to_insert.exercise,
      weight: this.user_to_insert.weight,
      hip_circumference: this.user_to_insert.hip,
      waist_circumference: this.user_to_insert.waist,
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

  /*  setValuesToUserToInsert() {
    // Hacer la primera petición para obtener los datos del usuario
    this.measure_service.fetchMeasures(
      this.getProcessedData(this.user_to_insert, 'user')
    );
  
    // Obtener los datos del usuario
    this.measure_service.getData().subscribe((userData: any) => {
      // Establecer los datos del usuario
      this.setDataToUser(userData, 'user');
  
      // Hacer la segunda petición para obtener los datos del objetivo
      this.measure_service.fetchMeasures(
        this.getProcessedData(this.user_to_insert, 'target')
      );
  
      // Obtener los datos del objetivo
      this.measure_service.getData().subscribe((targetData: any) => {
        // Establecer los datos del objetivo
        this.setDataToUser(targetData, 'target');
  
        // Realizar cualquier acción necesaria con los datos del usuario y del objetivo
        console.log(this.user_to_insert);
      });
    });
  } */

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
        bmi: data.bodyMassIndex?.value,
        body_fat: data.bodyFatPercentage?.bmi.value,
        daily_calories: data.totalDailyEnergyExpenditure?.bmi?.calories?.value,
        metabolic_rate: data.basalMetabolicRate?.hb?.calories?.value,
        leanBodyMass: data.leanBodyMass?.bmi?.value,
        idealBodyWeight: data.idealBodyWeight?.devine?.metric?.value,
        end_date: this.getProcessedDate(data.timeBeforeGoalWeight?.value),
        start_date: this.getProcessedDate(null),
      },
      target: {
        target_bmi: data.bodyMassIndex?.value,
        target_body_fat: data.bodyFatPercentage?.bmi?.value,
      },
    };
    this.user_to_insert = { ...this.user_to_insert, ...types[type] };
  }

  emitEvent(){
    this.onReponseSuccess.emit()
  }
}
