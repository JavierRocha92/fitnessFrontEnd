import { Component, OnInit } from '@angular/core';
import { Virtual_users } from '../../types/user';
import { UsersService } from '../../services/users.service';
import { UserAvatarComponent } from '../user-avatar/user-avatar.component';
import { Router } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-virutal-users-selection',
  standalone: true,
  imports: [UserAvatarComponent, ModalComponent],
  templateUrl: './virutal-users-selection.component.html',
  styleUrl: './virutal-users-selection.component.css',
})
export class VirutalUsersSelectionComponent implements OnInit {
  virtual_users: Virtual_users | undefined | null;

  constructor(private user_service: UsersService, private router : Router) {}

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

}
