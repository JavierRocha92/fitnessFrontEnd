import { Component, OnInit } from '@angular/core';
import { MeasureFormComponent } from '../measure-form/measure-form.component';
import { MeasuresService } from '../../../services/measures.service';

@Component({
  selector: 'app-measures',
  standalone: true,
  imports: [MeasureFormComponent],
  templateUrl: './measures.component.html',
  styleUrl: './measures.component.css'
})
export class MeasuresComponent implements OnInit {

  constructor(private measures: MeasuresService) { }

  ngOnInit(): void {
    this.measures.getData().subscribe((data: any) => {
      
    })
  }
}
