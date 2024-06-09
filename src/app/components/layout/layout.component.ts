import { Component, OnInit } from '@angular/core';
import { AreaComponent } from '../area/area.component';
import { UsersService } from '../../services/users.service';
import { User, Virtual_user, Virtual_users } from '../../types/user';
import { ActivatedRoute, Router } from '@angular/router';
import { MultiAreaComponent } from '../multi-area/multi-area.component';
import { UserAvatarComponent } from '../user-avatar/user-avatar.component';
import { RadarComponent } from '../radar/radar.component';
import { AvgAreaComponent } from '../avg-area/avg-area.component';
import { ModalComponent } from '../modal/modal.component';
import { RecipesService } from '../../services/recipes.service';
import { ChartSeriesServiceService } from '../../services/chart-series-service.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    AreaComponent,
    MultiAreaComponent,
    UserAvatarComponent,
    RadarComponent,
    AvgAreaComponent,
    ModalComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements OnInit {
  new_data_reaction: any;
  user_data: User | undefined | null;
  virtual_users_data: Virtual_users | undefined | null;
  virtual_user_id: string | null = null;
  user_on_demand: Virtual_user | undefined | null;

  constructor(
    private user_service: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private recipe_service : RecipesService,
    private chart_service : ChartSeriesServiceService
  ) {}

  ngOnInit(): void {
    this.user_service.checkSession()
    this.route.params.subscribe((params) => {
      this.virtual_user_id = params['id'];
      
      this.setVirtulUserData();
    });
    this.user_service.newLocalStorageDataIsSet().subscribe((data: any) => {
      this.new_data_reaction = data;
      this.setVirtulUserData();
    });
  }

  setVirtulUserData() {
    this.user_data = this.user_service.getUserData();
    this.virtual_users_data = this.user_service.getVirtualUserData();
    this.user_on_demand = this.virtual_users_data?.find(
      (virtual_user: Virtual_user) => virtual_user.ID == this.virtual_user_id
    );
    this.user_service.setVirtualUserOnOFocus(this.user_on_demand);
  }

  changeVirtualUser() {
    this.user_service.deleteVirtualUserOnOFocus();
    this.recipe_service.deleteMealPlannerFromLocalstorage()
    this.chart_service.setDefaultValues()
    this.router.navigate(['/user-avatar']);
    
  }
}
