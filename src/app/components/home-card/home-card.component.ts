import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.css'
})
export class HomeCardComponent implements OnInit {
  @Input() title !: string
  @Input() content !: string
  @Input() image_name !: string
  root_path :string = '../../../assets/images/'
  image_path : string = ''

  constructor(){}

  ngOnInit(): void {
      this.image_path = this.root_path + this.image_name
  }

}
