import { Component, OnInit } from '@angular/core';
import { Virtual_users } from '../../types/user';
import { UsersService } from '../../services/users.service';
import { UserAvatarComponent } from '../user-avatar/user-avatar.component';

@Component({
  selector: 'app-virutal-users-selection',
  standalone: true,
  imports: [UserAvatarComponent],
  templateUrl: './virutal-users-selection.component.html',
  styleUrl: './virutal-users-selection.component.css',
})
export class VirutalUsersSelectionComponent implements OnInit {
  virtual_users: Virtual_users | undefined | null;

  constructor(private user_service: UsersService) {}
  ngOnInit(): void {
    this.virtual_users = this.user_service.getVirtualUserData();
  }
}
