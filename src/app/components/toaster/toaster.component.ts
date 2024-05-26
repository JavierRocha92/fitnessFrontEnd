import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [],
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.css'
})
export class ToasterComponent {

  constructor(private toastr : ToastrService){}

  showSuccess(){
    this.toastr.success('element insertion went good', 'Success')
  }
  showError(){
    this.toastr.error('element insertion went good', 'Success')
  }
  showInfo(){
    this.toastr.info('element insertion went good', 'Success')
  }
  showWarning(){
    this.toastr.warning('element insertion went good', 'Success')
  }

}
