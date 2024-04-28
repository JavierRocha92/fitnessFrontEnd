import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { VirutalUsersSelectionComponent } from './components/virutal-users-selection/virutal-users-selection.component';

export const routes: Routes = [
    {
        path : '',
        component : HomeComponent
    },
    {
        path : 'layout/:id',
        component : LayoutComponent
    },
    {
        path : 'user-avatar',
        component : VirutalUsersSelectionComponent
    }
];
