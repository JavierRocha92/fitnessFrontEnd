import { Component, OnInit } from '@angular/core';
import { AreaComponent } from '../area/area.component';
import { GraphComponent } from '../graph/graph.component';
import { UsersService } from '../../services/users.service';
import { User, Virtual_user, Virtual_users } from '../../types/user';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [AreaComponent, GraphComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{

  user_data : User | undefined | null
  virtual_users_data : Virtual_users | undefined | null
  virtual_user_id: number | null = null;
  user_on_demand : Virtual_user |undefined | null

  constructor(private user_service : UsersService, private route: ActivatedRoute){}

  ngOnInit(): void {
      this.user_data = this.user_service.getUserData()
      this.virtual_users_data = this.user_service.getVirtualUserData()

    this.route.params.subscribe(params => {
      this.virtual_user_id = params['id'];
      this.user_on_demand = this.virtual_users_data?.find((virtual_user : Virtual_user) => virtual_user.ID == this.virtual_user_id)
    });
     
  }


}

