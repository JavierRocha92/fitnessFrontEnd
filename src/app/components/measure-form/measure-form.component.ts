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
@Component({
  selector: 'app-measure-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './measure-form.component.html',
  styleUrl: './measure-form.component.css',
})
export class MeasureFormComponent {
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

  @Output() onReponseSuccess = new EventEmitter<any>();

  user_to_insert: any;

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
    private measure_service: MeasuresService
  ) {}

  ngOnInit(): void {
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
        weight: this.weightControl.value.toString(),
        hip: this.hip_circumferenceControl.value.toString(),
        waist: this.waist_circumferenceControl.value.toString(),

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
        `register/virtual/measures` /* acambiar la ruta del endpoint */,
        this.user_to_insert,
        (response: any) => {
          resolve(response);
          if (response.success) {
            this.user_service.updateVirtualUserData(response.virtual_user)
            this.form.reset()
            this.emitEvent();
            this.isLoading = false;
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
    const data = this.data;
    this.setDataToUser(data, 'user');
    this.processUserValues();
  }

  processUserValues() {
    this.user_to_insert = {
      id: this.user_to_insert.id,
      weight: this.user_to_insert.weight,
      hip_circumference: this.user_to_insert.hip,
      waist_circumference: this.user_to_insert.waist,
      bmi: this.user_to_insert.bmi,
      body_fat: this.user_to_insert.body_fat,
      daily_calories: this.user_to_insert.daily_calories,
      metabolic_rate: this.user_to_insert.metabolic_rate,
      leanBodyMass: this.user_to_insert.leanBodyMass,
      date_time: this.getProcessedDate(null),
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
    const user_on_demand = this.user_service.getVirtualUserOnOFocus();

    const types: any = {
      user: {
        id: user_on_demand?.ID,
        bmi: data.bodyMassIndex?.value,
        body_fat: data.bodyFatPercentage?.bmi.value,
        daily_calories: data.totalDailyEnergyExpenditure?.bmi?.calories?.value,
        metabolic_rate: data.basalMetabolicRate?.hb?.calories?.value,
        leanBodyMass: data.leanBodyMass?.bmi?.value,
        idealBodyWeight: data.idealBodyWeight?.devine?.metric?.value,
        start_date: this.getProcessedDate(null),
      },
    };
    this.user_to_insert = { ...this.user_to_insert, ...types[type] };
  }

  emitEvent() {
    this.onReponseSuccess.emit();
  }
}
