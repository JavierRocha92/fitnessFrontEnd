import { Component, Input } from '@angular/core';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { MeasureFormComponent } from '../measure-form/measure-form.component';
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [RegisterFormComponent, MeasureFormComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() button_text !: string
  @Input() form_to_show !: string
  @Input() title !: string

  constructor(){}

  closeModal(){
    const close_button = document.getElementById('close_button')
    close_button?.click()
  }
}
