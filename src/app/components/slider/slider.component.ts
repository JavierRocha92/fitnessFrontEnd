import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit {
  @Input() root_path : string = '../../assets/images/'
  @Input() images : any = []
  @Input() path_images : any = []

  constructor(){}

  ngOnInit(): void {
      this.path_images = this.images.map((image : string) => this.root_path + image)
      console.log(this.path_images)
      
  }
}
