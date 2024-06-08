import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  isUserActive: boolean = false;
  virtual_user_on_demand_id: string | undefined;
  user_on_demand : any

  constructor(private user_service: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.user_service.virtualUserLoggedStatus().subscribe((data: any) => {
      const user_on_demand = this.user_service.getVirtualUserOnOFocus();
      this.virtual_user_on_demand_id = user_on_demand ? user_on_demand.ID : undefined;
     
    });

    this.user_service.userLoggedStatus().subscribe((data : any) => {
      this.isUserActive = data
    })

  }

  logOut() {
    this.user_service.logOut();
    this.router.navigate(['/']);
  }
}
