import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exercise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.css'
})
export class ExerciseComponent {
  toggle : boolean = false

  @Input() exercise : any
  constructor(){}

  toggleIngredientsInfo(){
    this.toggle = !this.toggle
  }

  onBlur(){
    this.toggle = false
  }

}
