import { Component, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-modal-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './modal-confirmation.component.html',
  styleUrl: './modal-confirmation.component.css'
})
export class ModalConfirmationComponent implements OnChanges {
  @Input() virtual_user_on_delete : any
  @Output() onDeleteConfirmation = new EventEmitter<string>();


  
  constructor(){}

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['virtual_user_on_delete']){
        this.virtual_user_on_delete = this.virtual_user_on_delete
      }
  }
  
  onConfirm() {
    if(this.virtual_user_on_delete)
      this.onDeleteConfirmation.emit(this.virtual_user_on_delete.ID);
    document.getElementById('close-button')?.click()
  }

  
 

}
