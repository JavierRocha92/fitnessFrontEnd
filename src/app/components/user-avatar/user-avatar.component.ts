import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { UsersService } from '../../services/users.service';
import { WebserviceService } from '../../services/webservice.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { ModalConfirmationComponent } from '../modal-confirmation/modal-confirmation.component';

@Component({
  selector: 'app-user-avatar',
  standalone: true,
  imports: [CommonModule, ModalConfirmationComponent],
  templateUrl: './user-avatar.component.html',
  styleUrl: './user-avatar.component.css',
})
export class UserAvatarComponent implements OnInit{
  @Output() onOpenModal = new EventEmitter()
  @Input() virtual_user : any
  isLoading: boolean = false;
  virtual_user_id: string | null | undefined;
  @Input() isButton !: boolean 
  weight : number = 0
  goal : number = 0
  bmi : number = 0
  body_fat : number = 0
  name : string = ''
  showModal : boolean = false

  constructor(
    private router: Router,
    private token_service: TokenService,
    private user_service: UsersService,
    private web_service: WebserviceService,
    private toast_service : ToastrService
  ) {}

 ngOnInit(): void {

     this.name = this.virtual_user.Name
     this.goal = this.virtual_user.Goal
     this.weight = this.virtual_user.historical_measurements[this.virtual_user.historical_measurements.length - 1].Weight
     this.bmi = this.virtual_user.historical_bio_data[this.virtual_user.historical_bio_data.length - 1].BMI
     this.body_fat = this.virtual_user.historical_bio_data[this.virtual_user.historical_bio_data.length - 1].Body_fat
 }

  goToProfile() {
    this.user_service.setVirtualUserOnOFocus(this.virtual_user)
    this.router.navigate([`/layout/${this.virtual_user.ID}`]);
  }

  // deleteVirtualUser() {
  //   this.sendData(this.virtual_user.ID);
  // }

  // sendData(virtual_virtual_user_id: string) {
  //   this.virtual_user_id = this.user_service.getUserData()?.ID;
  //   const data = { virtual_virtual_user_id: virtual_virtual_user_id };
  //   this.isLoading = true;

  //   return new Promise(async (resolve, reject) => {
  //     this.web_service.delete(
  //       '/register/virtual',
  //       [this.virtual_user_id, virtual_virtual_user_id],
  //       (response: any) => {
  //         resolve(response);
  //         if (response.success) {
  //           this.toast_service.success('User deletion successfully')
  //           this.token_service.saveToken(response.token);
  //           this.user_service.setUser(
  //             response.user,
  //             response.virtual_users,
  //             response.avg_data
  //           );
  //           this.isLoading = false;
  //           this.router.navigate(['/user-avatar']);
  //         }else{
  //           this.toast_service.info('User deltion unsuccessfully')
  //         }
  //       },

  //       (error: any) => {
  //         reject(error);
  //         this.isLoading = false;
  //         this.toast_service.error('Something went wrong')
  //       }
  //     );
  //   });
  // }

  onClickButton(){
    this.onOpenModal.emit(this.virtual_user)
  }


}
