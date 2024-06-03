import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { UsersService } from '../../services/users.service';
import { WebserviceService } from '../../services/webservice.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-avatar.component.html',
  styleUrl: './user-avatar.component.css',
})
export class UserAvatarComponent{
  @Input() id!: string;
  @Input() name!: string;
  isLoading: boolean = false;
  user_id: string | null | undefined;
  @Input() isButton !: boolean 

  constructor(
    private router: Router,
    private token_service: TokenService,
    private user_service: UsersService,
    private web_service: WebserviceService,
    private toast_service : ToastrService
  ) {}

 

  goToProfile() {
    this.router.navigate([`/layout/${this.id}`]);
  }

  deleteVirtualUser() {
    this.sendData(this.id);
  }

  sendData(virtual_user_id: string) {
    this.user_id = this.user_service.getUserData()?.ID;
    const data = { virtual_user_id: virtual_user_id };
    this.isLoading = true;
    console.log(`estoy cargando ${this.isLoading}`);

    return new Promise(async (resolve, reject) => {
      this.web_service.delete(
        '/register/virtual',
        [this.user_id, virtual_user_id],
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
            this.isLoading = false;
            this.router.navigate(['/user-avatar']);
          }else{
            this.toast_service.info('User deltion unsuccessfully')
          }
        },

        (error: any) => {
          reject(error);
          console.log('respuesta de error en el server');
          this.isLoading = false;
          this.toast_service.error('Something went wrong')
        }
      );
    });
  }
}
