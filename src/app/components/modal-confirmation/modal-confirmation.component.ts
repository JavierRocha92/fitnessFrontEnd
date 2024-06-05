import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-modal-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './modal-confirmation.component.html',
  styleUrl: './modal-confirmation.component.css'
})
export class ModalConfirmationComponent {
  @Input() virtual_user_id : string | null | undefined
  @Input() virtual_user_name !: string
  @Output() onDeleteConfirmation = new EventEmitter<string>();

  
  constructor(){}
  
  enviarMensaje() {
    if(this.virtual_user_id)
      this.onDeleteConfirmation.emit(this.virtual_user_id);
  }

}
