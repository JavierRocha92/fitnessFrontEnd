import { AfterViewInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-float-component',
  standalone: true,
  imports: [],
  templateUrl: './float-component.component.html',
  styleUrl: './float-component.component.css'
})
export class FloatComponentComponent implements OnChanges {
  @Input() items : any
  items_array : any
  constructor(){}

  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['items'])
      this.items_array = Object.entries(this.items)
  }

}
