import { Component, OnInit } from '@angular/core';
import { Virtual_users } from '../../types/user';
import { UsersService } from '../../services/users.service';
import { UserAvatarComponent } from '../user-avatar/user-avatar.component';
import { Router } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { SliderComponent } from '../slider/slider.component';
import { ModalConfirmationComponent } from '../modal-confirmation/modal-confirmation.component';
import { WebserviceService } from '../../services/webservice.service';
import { TokenService } from '../../services/token.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-virutal-users-selection',
  standalone: true,
  imports: [UserAvatarComponent, ModalComponent, SliderComponent, ModalConfirmationComponent],
  templateUrl: './virutal-users-selection.component.html',
  styleUrl: './virutal-users-selection.component.css',
})
export class VirutalUsersSelectionComponent implements OnInit {
  virtual_users: Virtual_users | undefined | null;
  virtual_user_on_delete : any

  constructor(private user_service: UsersService,
     private router : Router,
      private web_service : WebserviceService,
       private token_service : TokenService,
        private toast_service : ToastrService) {}

  ngOnInit(): void {
    this.user_service.checkSession()
    this.user_service.newLocalStorageDataIsSet().subscribe((data : any) => {
      this.virtual_users = this.user_service.getVirtualUserData();
    })
  }
  logOut(){
    this.user_service.logOut()
    this.router.navigate(['/'])
  }

  showModal(virtual_user : any){
    this.virtual_user_on_delete = virtual_user
  }

  deleteVirtualUser(virtual_user_id : string) {
    this.sendData(virtual_user_id);
  }

  sendData(virtual_user_id: string) {
    const user_id = this.user_service.getUserData()?.ID;
    const data = { virtual_user_id: virtual_user_id };
    // this.isLoading = true;

    return new Promise(async (resolve, reject) => {
      this.web_service.delete(
        '/register/virtual',
        [user_id, virtual_user_id],
        (response: any) => {
          resolve(response);
          if (response.success) {
            this.toast_service.success('User deletion successfully')
            this.token_service.saveToken(response.token);
            this.user_service.setUser(
              response.user,
              response.virtual_users,
              response.avg_data
            );
            // this.isLoading = false;
            this.router.navigate(['/user-avatar']);
          }else{
            this.toast_service.info('User deltion unsuccessfully')
          }
        },

        (error: any) => {
          reject(error);
          // this.isLoading = false;
          this.toast_service.error('Something went wrong')
        }
      );
    });
  }

}
