import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-avatar',
  standalone: true,
  imports: [],
  templateUrl: './user-avatar.component.html',
  styleUrl: './user-avatar.component.css'
})
export class UserAvatarComponent {
  @Input() id!: number

  constructor(private router : Router){}

  goToProfile(){
    this.router.navigate([`/layout/${this.id}`]);
    
  }
}
