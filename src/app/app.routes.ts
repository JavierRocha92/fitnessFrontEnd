import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { VirutalUsersSelectionComponent } from './components/virutal-users-selection/virutal-users-selection.component';
import { CalculatorComponent } from './components/calculator-components/calculator/calculator.component';
import { ExercisesComponent } from './components/exercises-components/exercises/exercises.component';
import { RecipesComponent } from './components/recipes-components/recipes/recipes.component';
import { ToasterComponent } from './components/toaster/toaster.component';

export const routes: Routes = [
    {
        path : '',
        component : HomeComponent
    },
    {
        path : 'calculator',
        component : CalculatorComponent
    },
    {
        path : 'layout/:id',
        component : LayoutComponent
    },
    {
        path : 'user-avatar',
        component : VirutalUsersSelectionComponent
    },
    {
        path : 'exercises',
        component : ExercisesComponent
    },
    {
        path : 'recipes',
        component : RecipesComponent
    },
   
    {
        path : '44',
        component : ToasterComponent
    }
];
