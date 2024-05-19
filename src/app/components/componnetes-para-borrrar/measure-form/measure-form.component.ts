import { Component } from '@angular/core';
import { MeasuresService } from '../../../services/measures.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-measure-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './measure-form.component.html',
  styleUrl: './measure-form.component.css'
})
export class MeasureFormComponent {

  formulario!: FormGroup;

  heightControl !: FormControl
  weightControl !: FormControl
  ageControl !: FormControl
  genderControl !: FormControl
  exerciseControl !: FormControl
  neckControl !: FormControl
  hipControl !: FormControl
  waistControl !: FormControl
  goalControl !: FormControl
  deficitControl !: FormControl
  goalWeightControl !: FormControl

  food_data: any
  show_data: boolean = false

  constructor(private measures: MeasuresService, private formBuilder: FormBuilder) { }

  fetchData() {
    /* LOS PARAMETEROS SE LOS TENEMOS QUE PASAR CADA VEZ QUE EL USUARIO SE REGISTRE EN FUNCION DE LOS PARAMETEOS DEL USUARIO
    INTRODUZCA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
    this.measures.fetchMeasures('esto son los parametros')
    
  }

  ngOnInit(): void {

    this.heightControl = new FormControl('', Validators.required)
    this.weightControl = new FormControl('', Validators.required)
    this.ageControl = new FormControl('', Validators.required)
    this.genderControl = new FormControl('', Validators.required)
    this.exerciseControl = new FormControl('', Validators.required)
    this.neckControl = new FormControl('', Validators.required)
    this.hipControl = new FormControl('', Validators.required)
    this.waistControl = new FormControl('', Validators.required)
    this.goalControl = new FormControl('', Validators.required)
    this.deficitControl = new FormControl('', Validators.required)
    this.goalWeightControl = new FormControl('', Validators.required)

    this.formulario = this.formBuilder.group({
      height: this.heightControl,
      weight: this.weightControl,
      age: this.ageControl,
      gender: this.genderControl,
      heiexerciseControlght: this.exerciseControl,
      neck: this.neckControl,
      hip: this.hipControl,
      waist: this.waistControl,
      goal: this.goalControl,
      deficit: this.deficitControl,
      goalWeight: this.goalWeightControl,
    });
  }

  sendData(): void {
    if (this.formulario.valid) {
      const datosFormulario = {
        height: this.heightControl.value.toString(),
        weight: this.weightControl.value.toString(),
        age: this.ageControl.value.toString(),
        gender: this.genderControl.value,
        exercise: this.exerciseControl.value,
        neck: this.neckControl.value.toString(),
        hip: this.hipControl.value.toString(),
        waist: this.waistControl.value.toString(),
        goal: this.goalControl.value,
        deficit: this.deficitControl.value.toString(),
        goalWeight: this.goalWeightControl.value.toString(),
      };

      this.measures.fetchMeasures(datosFormulario)
    }

  }

}
