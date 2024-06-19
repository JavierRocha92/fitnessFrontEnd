import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { RecipeFormComponent } from '../recipe-form/recipe-form.component';
import { RecipesService } from '../../../services/recipes.service';
import { Recipes } from '../../../types/recipes';
import { RecipeComponent } from '../recipe/recipe.component';
import { CommonModule } from '@angular/common';
import { MealPlannerTableComponent } from '../meal-planner-table/meal-planner-table.component';
import { ToastrService } from 'ngx-toastr';
import { WebserviceService } from '../../../services/webservice.service';
import { UsersService } from '../../../services/users.service';
import { LoaderComponent } from '../../loader/loader.component';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [
    RecipeFormComponent,
    RecipeComponent,
    CommonModule,
    MealPlannerTableComponent,
    LoaderComponent
  ],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent implements OnInit {
  

  @ViewChildren(RecipeComponent) recipes_children!: QueryList<RecipeComponent>;
  current_recipes: any;
  next: { href: string; title: string } | undefined;
  previous: { href: string; title: string } | undefined;
  error: boolean = false;
  initial_counter = 0;
  isLoading: boolean = false;
  data_to_save : any
  virtual_user_on_demand : any

  initial_data = {
    "recipes": [
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_26bcc68b31b340e196869554446fee32",
                "label": "Indian Chicken Pilaf or Pulao",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/1a4/1a453308650fe93efefa524b72a37bcd.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1a54ff1595b6f8ca403e31a147f11b963721461113b895358754222bfa0e4f4b",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/1a4/1a453308650fe93efefa524b72a37bcd-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=53f624bbb7450480fdd2a4104cc4e36b924f12706e7dc71bd62c4e62be667011",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/1a4/1a453308650fe93efefa524b72a37bcd-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0f4b0c537ae45413c3de3c53190b2f6df01466d6785e4da697b531d1e10b6602",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/1a4/1a453308650fe93efefa524b72a37bcd.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1a54ff1595b6f8ca403e31a147f11b963721461113b895358754222bfa0e4f4b",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/1a4/1a453308650fe93efefa524b72a37bcd-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3b67b729bcb9c4b9cf4ba15b0d7830ec45cf94e74ddb8038f4622f2a6a1fc814",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Honest Cooking",
                "url": "https://honestcooking.com/indian-chicken-pilaf-pulao/",
                "shareAs": "http://www.edamam.com/recipe/indian-chicken-pilaf-or-pulao-26bcc68b31b340e196869554446fee32/chicken/balanced/400-cal",
                "yield": 10,
                "dietLabels": [
                    "Balanced",
                    "Low-Sodium"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Low Potassium",
                    "Kidney-Friendly",
                    "Mediterranean",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "No oil added",
                    "Sulfite-Free",
                    "FODMAP-Free",
                    "Kosher"
                ],
                "cautions": [],
                "ingredientLines": [
                    "Chicken with bone : 500 gm",
                    "Basmati rice : 2 cups"
                ],
                "ingredients": [
                    {
                        "text": "Chicken with bone : 500 gm",
                        "quantity": 500,
                        "measure": "gram",
                        "food": "Chicken",
                        "weight": 500,
                        "foodCategory": "Poultry",
                        "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
                        "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
                    },
                    {
                        "text": "Basmati rice : 2 cups",
                        "quantity": 2,
                        "measure": "cup",
                        "food": "Basmati rice",
                        "weight": 370,
                        "foodCategory": "grains",
                        "foodId": "food_a3g7g0kb4xvknbbdl91t8a19a6ci",
                        "image": "https://www.edamam.com/food-img/e35/e35ea1529983a3db51a32a1afa7b3837.jpg"
                    }
                ],
                "calories": 2425.5,
                "totalCO2Emissions": 5454.6354,
                "co2EmissionsClass": "D",
                "totalWeight": 870,
                "totalTime": 0,
                "cuisineType": [
                    "mediterranean",
                    "indian"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2425.5,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 77.94200000000001,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 22.215999999999994,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.485,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 31.962200000000003,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 16.8049,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 296,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 291.19,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 4.8100000000000005,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 0.444,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 119.381,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 375,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 368.5,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 158.60000000000002,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 192.5,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1370.5,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 20.446999999999996,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 10.583000000000002,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1160.5,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 205,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 8,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 2.4311999999999996,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.7813000000000001,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 49.503,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 2.3568,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 1461.9,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 59.6,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 825.1,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1.55,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 1,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 1.907,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 7.87,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 372.92,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 121.275,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 119.91076923076925,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 111.07999999999997,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 98.66666666666667,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 19.240000000000002,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 238.762,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 125,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 15.354166666666666,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 15.860000000000001,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 45.833333333333336,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 29.159574468085108,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 113.59444444444442,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 96.20909090909093,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 165.78571428571428,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 22.77777777777778,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 8.88888888888889,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 202.59999999999997,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 60.10000000000001,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 309.39375,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 181.29230769230767,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 365.475,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 64.58333333333334,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 6.666666666666667,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 12.713333333333333,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 6.558333333333334,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 77.94200000000001,
                        "hasRDI": true,
                        "daily": 119.91076923076925,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 22.215999999999994,
                                "hasRDI": true,
                                "daily": 111.07999999999997,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.485,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 31.962200000000003,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 16.8049,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 296,
                        "hasRDI": true,
                        "daily": 98.66666666666667,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 291.19,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 4.8100000000000005,
                                "hasRDI": true,
                                "daily": 19.240000000000002,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 0.444,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 119.381,
                        "hasRDI": true,
                        "daily": 238.762,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 375,
                        "hasRDI": true,
                        "daily": 125,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 368.5,
                        "hasRDI": true,
                        "daily": 15.354166666666666,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 158.60000000000002,
                        "hasRDI": true,
                        "daily": 15.860000000000001,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 192.5,
                        "hasRDI": true,
                        "daily": 45.833333333333336,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1370.5,
                        "hasRDI": true,
                        "daily": 29.159574468085108,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 20.446999999999996,
                        "hasRDI": true,
                        "daily": 113.59444444444442,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 10.583000000000002,
                        "hasRDI": true,
                        "daily": 96.20909090909093,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1160.5,
                        "hasRDI": true,
                        "daily": 165.78571428571428,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 205,
                        "hasRDI": true,
                        "daily": 22.77777777777778,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 8,
                        "hasRDI": true,
                        "daily": 8.88888888888889,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 2.4311999999999996,
                        "hasRDI": true,
                        "daily": 202.59999999999997,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.7813000000000001,
                        "hasRDI": true,
                        "daily": 60.10000000000001,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 49.503,
                        "hasRDI": true,
                        "daily": 309.39375,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 2.3568,
                        "hasRDI": true,
                        "daily": 181.29230769230767,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 1461.9,
                        "hasRDI": true,
                        "daily": 365.475,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 59.6,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 825.1,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 1.55,
                        "hasRDI": true,
                        "daily": 64.58333333333334,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 1,
                        "hasRDI": true,
                        "daily": 6.666666666666667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 1.907,
                        "hasRDI": true,
                        "daily": 12.713333333333333,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 7.87,
                        "hasRDI": true,
                        "daily": 6.558333333333334,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 372.92,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/26bcc68b31b340e196869554446fee32?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_ff10f88b030bd512def63561d8197fef",
                "label": "Chicken Pesto Wraps",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/969/96986ba91a8198c239f58c1c9a50d723.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=aeca9425a59258a5a8e90c6ed4bc767131772468c09b1bc2e27b1c7613696de6",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/969/96986ba91a8198c239f58c1c9a50d723-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2b2dead65a96eee65b9e4d1a4fca2b5dfab24f21134e0aa61e2aeb0aa37e2ece",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/969/96986ba91a8198c239f58c1c9a50d723-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9f97a2d4589c942233a75b49a0f26debd005c3f212a56a881c14bebe6f85ec00",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/969/96986ba91a8198c239f58c1c9a50d723.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=aeca9425a59258a5a8e90c6ed4bc767131772468c09b1bc2e27b1c7613696de6",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/969/96986ba91a8198c239f58c1c9a50d723-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e3483dab03b6c1ea26b81768c8996c6a49d8d61d4d4811d3df19df760982de46",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Epicurious",
                "url": "https://www.epicurious.com/recipes/food/views/chicken-pesto-wraps-56389477",
                "shareAs": "http://www.edamam.com/recipe/chicken-pesto-wraps-ff10f88b030bd512def63561d8197fef/chicken/balanced/400-cal",
                "yield": 4,
                "dietLabels": [
                    "Balanced"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Mediterranean",
                    "Egg-Free",
                    "Peanut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free"
                ],
                "cautions": [
                    "Sulfites",
                    "FODMAP"
                ],
                "ingredientLines": [
                    "1 cup cooked and cubed chicken",
                    "4 tablespoons pesto",
                    "4 whole wheat tortilla wraps",
                    "1 cup fresh baby spinach leaves",
                    "1 red bell pepper, sliced into thin sticks",
                    "1 medium carrot, sliced into thin sticks"
                ],
                "ingredients": [
                    {
                        "text": "1 cup cooked and cubed chicken",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "chicken",
                        "weight": 140,
                        "foodCategory": "Poultry",
                        "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
                        "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
                    },
                    {
                        "text": "4 tablespoons pesto",
                        "quantity": 4,
                        "measure": "tablespoon",
                        "food": "pesto",
                        "weight": 67.9999999988504,
                        "foodCategory": "condiments and sauces",
                        "foodId": "food_amlzb2yam5vuysaaikhe3a68ojnn",
                        "image": "https://www.edamam.com/food-img/6e3/6e3933ee3f66304462b42f766329633c.jpg"
                    },
                    {
                        "text": "4 whole wheat tortilla wraps",
                        "quantity": 4,
                        "measure": "wrap",
                        "food": "whole wheat tortilla",
                        "weight": 196,
                        "foodCategory": "bread, rolls and tortillas",
                        "foodId": "food_btm0q4fagybgadbdm8wnwa0o2ytg",
                        "image": "https://www.edamam.com/food-img/14d/14d5bc9ea70954d9ce2da19df7004507.jpg"
                    },
                    {
                        "text": "1 cup fresh baby spinach leaves",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "spinach",
                        "weight": 9.99999999999999,
                        "foodCategory": "vegetables",
                        "foodId": "food_aoceuc6bshdej1bbsdammbnj6l6o",
                        "image": "https://www.edamam.com/food-img/e6e/e6e4be375c4554ce01c8ea75232efaa6.jpg"
                    },
                    {
                        "text": "1 red bell pepper, sliced into thin sticks",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "red bell pepper",
                        "weight": 119,
                        "foodCategory": "vegetables",
                        "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
                        "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
                    },
                    {
                        "text": "1 medium carrot, sliced into thin sticks",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "carrot",
                        "weight": 61,
                        "foodCategory": "vegetables",
                        "foodId": "food_ai215e5b85pdh5ajd4aafa3w2zm8",
                        "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
                    }
                ],
                "calories": 1167.5273033669632,
                "totalCO2Emissions": 2005.7999999993908,
                "co2EmissionsClass": "D",
                "totalWeight": 593.9999999988504,
                "totalTime": 5,
                "cuisineType": [
                    "mediterranean"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "condiments and sauces"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1167.5273033669632,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 57.93245842660462,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 11.386398539277403,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.16324,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 16.200650000000003,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 9.00036,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 115.35881460665115,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 105.08174719094019,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 10.277067415710961,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 13.145,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 47.170999999942524,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 110.34831460665117,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 2287.069999988504,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 486.70067415538523,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 98.66,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1027.37,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 10.45200112356644,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 3.4480999999999997,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 680.4699999999999,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 800.4799999999999,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 160.969,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.1508399999999999,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.5664699999999999,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 19.56944,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.99485,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 462.60999999999996,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 131.36999999999998,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 196,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.43400000000000005,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.28,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 4.591399999999999,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 72.51499999999996,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 328.625,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 58.37636516834816,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 89.12685911785326,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 56.93199269638701,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 38.452938202217055,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 41.10826966284385,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 94.34199999988505,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 36.78277153555039,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 95.29458333285434,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 48.67006741553852,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 23.49047619047619,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 21.85893617021276,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 58.066672908702444,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 31.34636363636363,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 97.20999999999998,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 88.9422222222222,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 178.85444444444445,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 95.90333333333332,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 43.57461538461538,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 122.309,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 76.52692307692307,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 115.65249999999997,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 18.083333333333336,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 1.866666666666667,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 30.60933333333333,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 60.42916666666663,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 57.93245842660462,
                        "hasRDI": true,
                        "daily": 89.12685911785326,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 11.386398539277403,
                                "hasRDI": true,
                                "daily": 56.93199269638701,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.16324,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 16.200650000000003,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 9.00036,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 115.35881460665115,
                        "hasRDI": true,
                        "daily": 38.452938202217055,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 105.08174719094019,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 10.277067415710961,
                                "hasRDI": true,
                                "daily": 41.10826966284385,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 13.145,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 47.170999999942524,
                        "hasRDI": true,
                        "daily": 94.34199999988505,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 110.34831460665117,
                        "hasRDI": true,
                        "daily": 36.78277153555039,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 2287.069999988504,
                        "hasRDI": true,
                        "daily": 95.29458333285434,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 486.70067415538523,
                        "hasRDI": true,
                        "daily": 48.67006741553852,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 98.66,
                        "hasRDI": true,
                        "daily": 23.49047619047619,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1027.37,
                        "hasRDI": true,
                        "daily": 21.85893617021276,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 10.45200112356644,
                        "hasRDI": true,
                        "daily": 58.066672908702444,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 3.4480999999999997,
                        "hasRDI": true,
                        "daily": 31.34636363636363,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 680.4699999999999,
                        "hasRDI": true,
                        "daily": 97.20999999999998,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 800.4799999999999,
                        "hasRDI": true,
                        "daily": 88.9422222222222,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 160.969,
                        "hasRDI": true,
                        "daily": 178.85444444444445,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.1508399999999999,
                        "hasRDI": true,
                        "daily": 95.90333333333332,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.5664699999999999,
                        "hasRDI": true,
                        "daily": 43.57461538461538,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 19.56944,
                        "hasRDI": true,
                        "daily": 122.309,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.99485,
                        "hasRDI": true,
                        "daily": 76.52692307692307,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 462.60999999999996,
                        "hasRDI": true,
                        "daily": 115.65249999999997,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 131.36999999999998,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 196,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.43400000000000005,
                        "hasRDI": true,
                        "daily": 18.083333333333336,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.28,
                        "hasRDI": true,
                        "daily": 1.866666666666667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 4.591399999999999,
                        "hasRDI": true,
                        "daily": 30.60933333333333,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 72.51499999999996,
                        "hasRDI": true,
                        "daily": 60.42916666666663,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 328.625,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/ff10f88b030bd512def63561d8197fef?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_e3b0861fc3002e06b5f66bf520d5a01e",
                "label": "Quick Crispy Chicken",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/8b1/8b13c7ec48144e3e9920ede80a17f901?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=79c6cac2ba05fee439def68dcf05c928f104768779b73302e8b74303029ce6ce",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8b1/8b13c7ec48144e3e9920ede80a17f901-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3cbd0aa4a9b4162b99136c7bb457b8b709fae9c6394d4392997b779437a79de9",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8b1/8b13c7ec48144e3e9920ede80a17f901-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f6db7ecbbe1721f7d114f47adf43ebcc38d983f4ef6d794775b682a825bced93",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8b1/8b13c7ec48144e3e9920ede80a17f901?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=79c6cac2ba05fee439def68dcf05c928f104768779b73302e8b74303029ce6ce",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Martha Stewart",
                "url": "https://www.marthastewart.com/1154553/quick-crispy-chicken",
                "shareAs": "http://www.edamam.com/recipe/quick-crispy-chicken-e3b0861fc3002e06b5f66bf520d5a01e/chicken/balanced/400-cal",
                "yield": 4,
                "dietLabels": [
                    "Balanced"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Low Potassium",
                    "Kidney-Friendly",
                    "Dairy-Free",
                    "Wheat-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "4 cups cornflakes, crushed",
                    "1 tablespoon vegetable oil",
                    "1/2 teaspoon coarse salt",
                    "1/4 teaspoon ground pepper",
                    "1 teaspoon crumbled dried rosemary or thyme",
                    "Bone-in chicken pieces",
                    "1 large egg",
                    "1 tablespoon water"
                ],
                "ingredients": [
                    {
                        "text": "4 cups cornflakes, crushed",
                        "quantity": 4,
                        "measure": "cup",
                        "food": "cornflakes",
                        "weight": 112,
                        "foodCategory": "ready-to-eat cereals",
                        "foodId": "food_aj8qyl6ap2bot8b2tomgkbsf8c60",
                        "image": "https://www.edamam.com/food-img/41d/41d5be2eed127f64f9b2c3e74cf6b12b.jpg"
                    },
                    {
                        "text": "1 tablespoon vegetable oil",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "vegetable oil",
                        "weight": 14,
                        "foodCategory": "Oils",
                        "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
                        "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
                    },
                    {
                        "text": "1/2 teaspoon coarse salt",
                        "quantity": 0.5,
                        "measure": "teaspoon",
                        "food": "coarse salt",
                        "weight": 2.4270833334564377,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "1/4 teaspoon ground pepper",
                        "quantity": 0.25,
                        "measure": "teaspoon",
                        "food": "ground pepper",
                        "weight": 0.725,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "1 teaspoon crumbled dried rosemary or thyme",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "dried rosemary",
                        "weight": 1.2,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a0mmczzafwhi1dao3qg7aamaqdmw",
                        "image": "https://www.edamam.com/food-img/a36/a36eea912c621522f8cd795316c883a5.jpg"
                    },
                    {
                        "text": "Bone-in chicken pieces",
                        "quantity": 1,
                        "measure": "piece",
                        "food": "chicken",
                        "weight": 89.4,
                        "foodCategory": "Poultry",
                        "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
                        "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
                    },
                    {
                        "text": "1 large egg",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "egg",
                        "weight": 50,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "1 tablespoon water",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "water",
                        "weight": 14.786764781,
                        "foodCategory": "water",
                        "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                        "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
                    }
                ],
                "calories": 793.10175,
                "totalCO2Emissions": 1205.1967014686106,
                "co2EmissionsClass": "D",
                "totalWeight": 282.111764781,
                "totalTime": 0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "condiments and sauces"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 793.10175,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 32.908435000000004,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 6.5579775,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.21309800000000004,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 17.605077750000003,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 6.491455500000002,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 95.7852,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 91.394575,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 4.390625,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 10.829640000000001,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 31.462360000000004,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 253.05,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 951.3964705912401,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 62.44935294343,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 71.58761764781,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 447.22850000000005,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 34.4683975,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 2.9850061764781004,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 346.6435,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 667.52175,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 25.684800000000003,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.581391,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 2.0446210000000002,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 26.184965000000005,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 2.42568975,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 685.63125,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 70.75125,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 361.76000000000005,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 6.322140000000001,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 5.210800000000001,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 3.9871400000000006,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 2.68,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 116.28952301621902,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 39.6550875,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 50.62836153846155,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 32.7898875,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 31.9284,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 17.5625,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 62.92472000000001,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 84.35,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 39.641519607968334,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 6.2449352943430005,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 17.04467086852619,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 9.515500000000001,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 191.49109722222224,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 27.13641978616455,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 49.5205,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 74.16908333333333,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 28.53866666666667,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 131.78258333333332,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 157.27853846153846,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 163.65603125000004,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 186.59151923076925,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 171.4078125,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 263.4225,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 34.73866666666667,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 26.580933333333338,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 2.2333333333333334,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 32.908435000000004,
                        "hasRDI": true,
                        "daily": 50.62836153846155,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 6.5579775,
                                "hasRDI": true,
                                "daily": 32.7898875,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.21309800000000004,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 17.605077750000003,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 6.491455500000002,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 95.7852,
                        "hasRDI": true,
                        "daily": 31.9284,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 91.394575,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 4.390625,
                                "hasRDI": true,
                                "daily": 17.5625,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 10.829640000000001,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 31.462360000000004,
                        "hasRDI": true,
                        "daily": 62.92472000000001,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 253.05,
                        "hasRDI": true,
                        "daily": 84.35,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 951.3964705912401,
                        "hasRDI": true,
                        "daily": 39.641519607968334,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 62.44935294343,
                        "hasRDI": true,
                        "daily": 6.2449352943430005,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 71.58761764781,
                        "hasRDI": true,
                        "daily": 17.04467086852619,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 447.22850000000005,
                        "hasRDI": true,
                        "daily": 9.515500000000001,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 34.4683975,
                        "hasRDI": true,
                        "daily": 191.49109722222224,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 2.9850061764781004,
                        "hasRDI": true,
                        "daily": 27.13641978616455,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 346.6435,
                        "hasRDI": true,
                        "daily": 49.5205,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 667.52175,
                        "hasRDI": true,
                        "daily": 74.16908333333333,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 25.684800000000003,
                        "hasRDI": true,
                        "daily": 28.53866666666667,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.581391,
                        "hasRDI": true,
                        "daily": 131.78258333333332,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 2.0446210000000002,
                        "hasRDI": true,
                        "daily": 157.27853846153846,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 26.184965000000005,
                        "hasRDI": true,
                        "daily": 163.65603125000004,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 2.42568975,
                        "hasRDI": true,
                        "daily": 186.59151923076925,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 685.63125,
                        "hasRDI": true,
                        "daily": 171.4078125,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 70.75125,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 361.76000000000005,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 6.322140000000001,
                        "hasRDI": true,
                        "daily": 263.4225,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 5.210800000000001,
                        "hasRDI": true,
                        "daily": 34.73866666666667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 3.9871400000000006,
                        "hasRDI": true,
                        "daily": 26.580933333333338,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 2.68,
                        "hasRDI": true,
                        "daily": 2.2333333333333334,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 116.28952301621902,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/e3b0861fc3002e06b5f66bf520d5a01e?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_104ed0c73d63bf4eab0f811ea3da38ba",
                "label": "Chipotle Chicken Polenta Cakes",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/76d/76d8ff98dd582a3c8af2c00a535b7bf6.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=953f409739ad583758ebf99140e92c61397cf0979368a7f8a0721295b6af72b5",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/76d/76d8ff98dd582a3c8af2c00a535b7bf6-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=871066284a6311e26d952916ce2b5dbd1894396341f133ea605a24965c5711da",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/76d/76d8ff98dd582a3c8af2c00a535b7bf6-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1329d0923849ef6bcd33f92aa8bf44d2c8e47aed3502967c1d1c9f7ce2a4ccc7",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/76d/76d8ff98dd582a3c8af2c00a535b7bf6.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=953f409739ad583758ebf99140e92c61397cf0979368a7f8a0721295b6af72b5",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/76d/76d8ff98dd582a3c8af2c00a535b7bf6-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b761975bf9381acb383695315870dcff5da6cef6b0fbff3bc2f8a80cac5e3ef3",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Food52",
                "url": "https://food52.com/recipes/17066-chipotle-chicken-polenta-cakes",
                "shareAs": "http://www.edamam.com/recipe/chipotle-chicken-polenta-cakes-104ed0c73d63bf4eab0f811ea3da38ba/chicken/balanced/400-cal",
                "yield": 6,
                "dietLabels": [
                    "Balanced"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free"
                ],
                "cautions": [],
                "ingredientLines": [
                    "6 cups water",
                    "1.5 teaspoons salt",
                    "2 cups polenta",
                    "2 cups chopped chicken (from your weekend roast)",
                    "4 chipotles in adobo sauce, chopped",
                    "2 teaspoons epazote",
                    "2 tablespoons butter (unsalted)",
                    "bacon fat!"
                ],
                "ingredients": [
                    {
                        "text": "6 cups water",
                        "quantity": 6,
                        "measure": "cup",
                        "food": "water",
                        "weight": 1419.529419,
                        "foodCategory": "water",
                        "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                        "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
                    },
                    {
                        "text": "1.5 teaspoons salt",
                        "quantity": 1.5,
                        "measure": "teaspoon",
                        "food": "salt",
                        "weight": 9,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "2 cups polenta",
                        "quantity": 2,
                        "measure": "cup",
                        "food": "polenta",
                        "weight": 314,
                        "foodCategory": "grains",
                        "foodId": "food_b05sp8gagykqhgb4uo2jhbsbfftc",
                        "image": null
                    },
                    {
                        "text": "2 cups chopped chicken (from your weekend roast)",
                        "quantity": 2,
                        "measure": "cup",
                        "food": "chicken",
                        "weight": 280,
                        "foodCategory": "Poultry",
                        "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
                        "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
                    },
                    {
                        "text": "4 chipotles in adobo sauce, chopped",
                        "quantity": 4,
                        "measure": "<unit>",
                        "food": "chipotles in adobo",
                        "weight": 292,
                        "foodCategory": "canned vegetables",
                        "foodId": "food_bumzpysb5k05cibmscqp2a0fwgpa",
                        "image": "https://www.edamam.com/food-img/c34/c343c40fbfe50bd72bbb3890c83a4315.jpeg"
                    },
                    {
                        "text": "2 teaspoons epazote",
                        "quantity": 2,
                        "measure": "teaspoon",
                        "food": "epazote",
                        "weight": 0.5333333333694016,
                        "foodCategory": "vegetables",
                        "foodId": "food_byprvzka485mvyb7etqnqa8vhgg3",
                        "image": "https://www.edamam.com/food-img/353/3539d32f897d660bc7bee452c207c4a4.jpg"
                    },
                    {
                        "text": "2 tablespoons butter (unsalted)",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "butter",
                        "weight": 28.4,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "bacon fat!",
                        "quantity": 0,
                        "measure": null,
                        "food": "bacon fat",
                        "weight": 31.871093431733822,
                        "foodCategory": "Oils",
                        "foodId": "food_aqz5b6uacuigy2abnwfxdaaixa29",
                        "image": "https://www.edamam.com/food-img/0c8/0c8bb3745771a7dec087d3f3b6fb6b7d.jpg"
                    }
                ],
                "calories": 2314.8023747493307,
                "totalCO2Emissions": 4509.043251811328,
                "co2EmissionsClass": "E",
                "totalWeight": 2370.8713222635797,
                "totalTime": 0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2314.8023747493307,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 102.81391129790867,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 39.55972643837619,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.2716,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 39.66984095084848,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 16.197051370922456,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 264.26472000000274,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 248.2024533333347,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 16.062266666668037,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 14.766839999999998,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 77.27656000000013,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 301.33753876014714,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 5502.862031649833,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 112.61754359640022,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 212.81400228836176,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1531.6749981201065,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 7.464680339112318,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 6.449775287840447,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 779.3746666666977,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 2081.0120000000006,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 203.05920000000128,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.6675693333333435,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.6505120000001255,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 24.53133600000023,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.9999026666667217,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 142.1986666667442,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 142.1986666667442,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.91628,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 1.3567773357933457,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 4.081706560590403,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 31.591999999999995,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 1913.2634978673623,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 115.74011873746653,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 158.17524815062873,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 197.79863219188093,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 88.08824000000091,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 64.24906666667215,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 154.55312000000026,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 100.44584625338238,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 229.28591798540972,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 11.261754359640022,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 50.670000544848044,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 32.58882974723631,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 41.47044632840177,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 58.63432079854952,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 111.33923809524254,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 231.22355555555563,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 225.62133333333477,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 55.630777777778626,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 50.039384615394276,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 153.32085000000143,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 153.8386666666709,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 35.54966666668605,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 38.178333333333335,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 9.045182238622305,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 27.211377070602687,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 26.32666666666666,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 102.81391129790867,
                        "hasRDI": true,
                        "daily": 158.17524815062873,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 39.55972643837619,
                                "hasRDI": true,
                                "daily": 197.79863219188093,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.2716,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 39.66984095084848,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 16.197051370922456,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 264.26472000000274,
                        "hasRDI": true,
                        "daily": 88.08824000000091,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 248.2024533333347,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 16.062266666668037,
                                "hasRDI": true,
                                "daily": 64.24906666667215,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 14.766839999999998,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 77.27656000000013,
                        "hasRDI": true,
                        "daily": 154.55312000000026,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 301.33753876014714,
                        "hasRDI": true,
                        "daily": 100.44584625338238,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 5502.862031649833,
                        "hasRDI": true,
                        "daily": 229.28591798540972,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 112.61754359640022,
                        "hasRDI": true,
                        "daily": 11.261754359640022,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 212.81400228836176,
                        "hasRDI": true,
                        "daily": 50.670000544848044,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1531.6749981201065,
                        "hasRDI": true,
                        "daily": 32.58882974723631,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 7.464680339112318,
                        "hasRDI": true,
                        "daily": 41.47044632840177,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 6.449775287840447,
                        "hasRDI": true,
                        "daily": 58.63432079854952,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 779.3746666666977,
                        "hasRDI": true,
                        "daily": 111.33923809524254,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 2081.0120000000006,
                        "hasRDI": true,
                        "daily": 231.22355555555563,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 203.05920000000128,
                        "hasRDI": true,
                        "daily": 225.62133333333477,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.6675693333333435,
                        "hasRDI": true,
                        "daily": 55.630777777778626,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.6505120000001255,
                        "hasRDI": true,
                        "daily": 50.039384615394276,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 24.53133600000023,
                        "hasRDI": true,
                        "daily": 153.32085000000143,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.9999026666667217,
                        "hasRDI": true,
                        "daily": 153.8386666666709,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 142.1986666667442,
                        "hasRDI": true,
                        "daily": 35.54966666668605,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 142.1986666667442,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.91628,
                        "hasRDI": true,
                        "daily": 38.178333333333335,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 1.3567773357933457,
                        "hasRDI": true,
                        "daily": 9.045182238622305,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 4.081706560590403,
                        "hasRDI": true,
                        "daily": 27.211377070602687,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 31.591999999999995,
                        "hasRDI": true,
                        "daily": 26.32666666666666,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1913.2634978673623,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/104ed0c73d63bf4eab0f811ea3da38ba?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_db13a7cab2464779909fc9e00ccadfd1",
                "label": "Recipe: Honey-Garlic Chicken Stir-Fry",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/ad4/ad405a47a567bb2397c8752c14206528?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=271cc87601642dd700e5b591a3fc1bca685f4a4a2704dd44e6c6180808a5c642",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ad4/ad405a47a567bb2397c8752c14206528-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=10747b29063e661cfb0be6ce7e33aa4a9e7141cdb8f74f925404be8ebcd29e09",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ad4/ad405a47a567bb2397c8752c14206528-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=996a7830c42266c5d7e582c417ac84b0b5b355f07ab14fae79a7983a27efa88d",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ad4/ad405a47a567bb2397c8752c14206528?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=271cc87601642dd700e5b591a3fc1bca685f4a4a2704dd44e6c6180808a5c642",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ad4/ad405a47a567bb2397c8752c14206528-l?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=169d46c2440da3c00a7a43f59b828ebff313c50a3befb4682e0ea17d67c11adf",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "The Kitchn",
                "url": "https://www.thekitchn.com/recipe-honey-garlic-chicken-stir-fry-248130",
                "shareAs": "http://www.edamam.com/recipe/recipe-honey-garlic-chicken-stir-fry-db13a7cab2464779909fc9e00ccadfd1/chicken/balanced/400-cal",
                "yield": 6,
                "dietLabels": [
                    "Balanced"
                ],
                "healthLabels": [
                    "Low Potassium",
                    "Kidney-Friendly",
                    "Keto-Friendly",
                    "Dairy-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Gluten",
                    "Wheat",
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1/4 cup low-sodium chicken broth or water",
                    "2 tablespoons tamari or soy sauce",
                    "1 tablespoon honey",
                    "3 cloves garlic, minced",
                    "1 teaspoon Asian sesame oil",
                    "1 teaspoon cornstarch"
                ],
                "ingredients": [
                    {
                        "text": "1/4 cup low-sodium chicken broth or water",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "low-sodium chicken broth",
                        "weight": 60,
                        "foodCategory": "canned soup",
                        "foodId": "food_axg87lea13vni7a0lc9adauqgcs9",
                        "image": "https://www.edamam.com/food-img/2eb/2eb3c708f58f5fa1543022650ff0ae8d.png"
                    },
                    {
                        "text": "2 tablespoons tamari or soy sauce",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "soy sauce",
                        "weight": 32,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
                        "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
                    },
                    {
                        "text": "1 tablespoon honey",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "honey",
                        "weight": 21,
                        "foodCategory": "sugar syrups",
                        "foodId": "food_b1cj2pmac27zngan87974b0a40hk",
                        "image": "https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg"
                    },
                    {
                        "text": "3 cloves garlic, minced",
                        "quantity": 3,
                        "measure": "clove",
                        "food": "garlic",
                        "weight": 9,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "1 teaspoon Asian sesame oil",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "sesame oil",
                        "weight": 4.5,
                        "foodCategory": "Oils",
                        "foodId": "food_b2id9opa0l5afvbw2do5xa1fnz4q",
                        "image": "https://www.edamam.com/food-img/b87/b874ddcfb6770adc7a155355a902ffb8.jpg"
                    },
                    {
                        "text": "1 teaspoon cornstarch",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "cornstarch",
                        "weight": 2.66666666680192,
                        "foodCategory": "grains",
                        "foodId": "food_a6r17hrba37cqeabesko5a2gk233",
                        "image": "https://www.edamam.com/food-img/f9b/f9b74d9495b40c0aea955c37a1fc39dc.jpg"
                    }
                ],
                "calories": 153.7500000005153,
                "totalCO2Emissions": 786.081666666879,
                "co2EmissionsClass": "B",
                "totalWeight": 129.16666666680192,
                "totalTime": 0,
                "cuisineType": [
                    "chinese"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 153.7500000005153,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 5.0887333333334,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 0.778010000000012,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 1.9804766666666882,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 2.0593366666667006,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 25.015266666790154,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 24.504266666788936,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0.5110000000012173,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 17.537,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 17.241,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 4.447133333333686,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 1777.4100000000121,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 30.56333333333604,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 27.03000000000406,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 237.89000000000405,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 0.8437333333339689,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 0.4906000000000811,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 86.07666666668425,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 2.913,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.028559999999999995,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.08868000000000001,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 1.6144100000000001,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.16999999999999998,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 5.17,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 5.17,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.06,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 0.0702,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 0.765,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 89.47086666667792,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 7.687500000025766,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 7.828820512820616,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 3.89005000000006,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 8.338422222263384,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 2.044000000004869,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 8.894266666667372,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 74.05875000000052,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 3.0563333333336042,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 6.435714285715251,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 5.061489361702214,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 4.687407407410939,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 4.460000000000737,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 12.296666666669179,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 0,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 3.2366666666666664,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 2.3799999999999994,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 6.821538461538462,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 10.0900625,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 13.076923076923077,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 1.2925,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 2.5,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 0.46799999999999997,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 0.6375,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 5.0887333333334,
                        "hasRDI": true,
                        "daily": 7.828820512820616,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 0.778010000000012,
                                "hasRDI": true,
                                "daily": 3.89005000000006,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 1.9804766666666882,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 2.0593366666667006,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 25.015266666790154,
                        "hasRDI": true,
                        "daily": 8.338422222263384,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 24.504266666788936,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 0.5110000000012173,
                                "hasRDI": true,
                                "daily": 2.044000000004869,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 17.537,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 17.241,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 4.447133333333686,
                        "hasRDI": true,
                        "daily": 8.894266666667372,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1777.4100000000121,
                        "hasRDI": true,
                        "daily": 74.05875000000052,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 30.56333333333604,
                        "hasRDI": true,
                        "daily": 3.0563333333336042,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 27.03000000000406,
                        "hasRDI": true,
                        "daily": 6.435714285715251,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 237.89000000000405,
                        "hasRDI": true,
                        "daily": 5.061489361702214,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 0.8437333333339689,
                        "hasRDI": true,
                        "daily": 4.687407407410939,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 0.4906000000000811,
                        "hasRDI": true,
                        "daily": 4.460000000000737,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 86.07666666668425,
                        "hasRDI": true,
                        "daily": 12.296666666669179,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 2.913,
                        "hasRDI": true,
                        "daily": 3.2366666666666664,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.028559999999999995,
                        "hasRDI": true,
                        "daily": 2.3799999999999994,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.08868000000000001,
                        "hasRDI": true,
                        "daily": 6.821538461538462,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 1.6144100000000001,
                        "hasRDI": true,
                        "daily": 10.0900625,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.16999999999999998,
                        "hasRDI": true,
                        "daily": 13.076923076923077,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 5.17,
                        "hasRDI": true,
                        "daily": 1.2925,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 5.17,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.06,
                        "hasRDI": true,
                        "daily": 2.5,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 0.0702,
                        "hasRDI": true,
                        "daily": 0.46799999999999997,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 0.765,
                        "hasRDI": true,
                        "daily": 0.6375,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 89.47086666667792,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/db13a7cab2464779909fc9e00ccadfd1?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_2defd5ee139437e0314804a1b8586ef7",
                "label": "Sunday Supper: Pancetta-Wrapped Chicken Breast with Leeks and Thyme Recipe",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/e1a/e1a2908a2524f2d3c61c3bae9b95661a.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ef7a2916772d81d27a46871f8b3b9dd09096e017b6aafa6d8837b602f3daf69e",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e1a/e1a2908a2524f2d3c61c3bae9b95661a-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2c046aaeb8ae70054ef34d58c7db47c503a2968d7f6a06a8e91c7a066c304836",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e1a/e1a2908a2524f2d3c61c3bae9b95661a-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e4d601c1fae1b15adc221955ee8e1f2d0d1b3a7ec7f59a6dbe4a07b14ce81922",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e1a/e1a2908a2524f2d3c61c3bae9b95661a.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ef7a2916772d81d27a46871f8b3b9dd09096e017b6aafa6d8837b602f3daf69e",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Serious Eats",
                "url": "http://www.seriouseats.com/recipes/2008/04/pancetta-wrapped-chicken-breast-with-leeks-and-thyme.html",
                "shareAs": "http://www.edamam.com/recipe/sunday-supper-pancetta-wrapped-chicken-breast-with-leeks-and-thyme-recipe-2defd5ee139437e0314804a1b8586ef7/chicken/balanced/400-cal",
                "yield": 8,
                "dietLabels": [
                    "Balanced"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Keto-Friendly",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 chicken breast, skin removed",
                    "1 large leek",
                    "A few sprigs fresh thyme",
                    "A pour of olive oil",
                    "1 tablespoon butter",
                    "Pinch of sea salt",
                    "Black pepper, freshly ground",
                    "A swig of white wine",
                    "7 slices pancetta"
                ],
                "ingredients": [
                    {
                        "text": "1 chicken breast, skin removed",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "chicken breast",
                        "weight": 272,
                        "foodCategory": "Poultry",
                        "foodId": "food_bdrxu94aj3x2djbpur8dhagfhkcn",
                        "image": "https://www.edamam.com/food-img/da5/da510379d3650787338ca16fb69f4c94.jpg"
                    },
                    {
                        "text": "1 large leek",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "leek",
                        "weight": 111.25,
                        "foodCategory": "vegetables",
                        "foodId": "food_a27jevnb06c1m9ax7k41xbbcwcuo",
                        "image": "https://www.edamam.com/food-img/4ae/4ae9e09d029a28e0e2c64bdfdbf3f6ae.jpg"
                    },
                    {
                        "text": "A few sprigs fresh thyme",
                        "quantity": 1,
                        "measure": "sprig",
                        "food": "fresh thyme",
                        "weight": 3,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b3o3cj7a5gskecb0ufphtadnbfqb",
                        "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
                    },
                    {
                        "text": "A pour of olive oil",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "olive",
                        "weight": 3.2,
                        "foodCategory": "canned fruit",
                        "foodId": "food_bt7u5w5a064gusa46msxfb38ag06",
                        "image": "https://www.edamam.com/food-img/822/8221f2141e8dafd469414b20777735ca.jpg"
                    },
                    {
                        "text": "1 tablespoon butter",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "butter",
                        "weight": 14.2,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "Pinch of sea salt",
                        "quantity": 1,
                        "measure": "pinch",
                        "food": "sea salt",
                        "weight": 0.30338541705136723,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Black pepper, freshly ground",
                        "quantity": 0,
                        "measure": null,
                        "food": "Black pepper",
                        "weight": 4.070860156251154,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "A swig of white wine",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "white wine",
                        "weight": 750,
                        "foodCategory": "wines",
                        "foodId": "food_bn44h7baron9ufaoxinmya8l0yye",
                        "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
                    },
                    {
                        "text": "7 slices pancetta",
                        "quantity": 7,
                        "measure": "slice",
                        "food": "pancetta",
                        "weight": 203,
                        "foodCategory": "cured meats",
                        "foodId": "food_aan01koavbb7p5a81qsnfa763n8v",
                        "image": "https://www.edamam.com/food-img/d42/d426884a125fa39a70d5a5d7217864ec.jpg"
                    }
                ],
                "calories": 1925.8263589921903,
                "totalCO2Emissions": 6962.48878023158,
                "co2EmissionsClass": "E",
                "totalWeight": 1361.0242455733026,
                "totalTime": 0,
                "cuisineType": [
                    "italian"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1925.8263589921903,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 94.82126004109381,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 34.46841495617189,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.31745,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 37.7556436565547,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 13.534890184359389,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 38.836650500000744,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 35.3330228804692,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 3.5036276195315423,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 12.283823505000006,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 91.94249945625013,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 363.07000000000005,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 1850.559713847181,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 195.39822299228496,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 220.87620472136,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 2125.3607109115046,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 7.261131693048256,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 5.3201666212764405,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1103.3934590468768,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 245.05863224218783,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 18.178800000000003,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.9268525289687513,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.8180305482812522,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 35.635755805781265,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 3.403112703054691,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 105.6480462265627,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 105.6480462265627,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1.6103400000000003,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.8120000000000002,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 3.8441769456250126,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 63.0025106562519,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 1047.2193642903655,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 96.2913179496095,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 145.8788616016828,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 172.34207478085946,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 12.945550166666914,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 14.01451047812617,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 183.88499891250027,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 121.02333333333335,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 77.10665474363255,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 19.539822299228497,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 52.589572552704766,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 45.22044065769159,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 40.33962051693475,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 48.365151102513096,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 157.6276370066967,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 27.228736915798645,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 20.19866666666667,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 77.23771074739594,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 62.92542679086556,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 222.7234737861329,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 261.77790023497624,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 26.412011556640675,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 67.09750000000001,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 5.413333333333335,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 25.62784630416675,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 52.50209221354325,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 94.82126004109381,
                        "hasRDI": true,
                        "daily": 145.8788616016828,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 34.46841495617189,
                                "hasRDI": true,
                                "daily": 172.34207478085946,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.31745,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 37.7556436565547,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 13.534890184359389,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 38.836650500000744,
                        "hasRDI": true,
                        "daily": 12.945550166666914,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 35.3330228804692,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 3.5036276195315423,
                                "hasRDI": true,
                                "daily": 14.01451047812617,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 12.283823505000006,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 91.94249945625013,
                        "hasRDI": true,
                        "daily": 183.88499891250027,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 363.07000000000005,
                        "hasRDI": true,
                        "daily": 121.02333333333335,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1850.559713847181,
                        "hasRDI": true,
                        "daily": 77.10665474363255,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 195.39822299228496,
                        "hasRDI": true,
                        "daily": 19.539822299228497,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 220.87620472136,
                        "hasRDI": true,
                        "daily": 52.589572552704766,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 2125.3607109115046,
                        "hasRDI": true,
                        "daily": 45.22044065769159,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 7.261131693048256,
                        "hasRDI": true,
                        "daily": 40.33962051693475,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 5.3201666212764405,
                        "hasRDI": true,
                        "daily": 48.365151102513096,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1103.3934590468768,
                        "hasRDI": true,
                        "daily": 157.6276370066967,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 245.05863224218783,
                        "hasRDI": true,
                        "daily": 27.228736915798645,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 18.178800000000003,
                        "hasRDI": true,
                        "daily": 20.19866666666667,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.9268525289687513,
                        "hasRDI": true,
                        "daily": 77.23771074739594,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.8180305482812522,
                        "hasRDI": true,
                        "daily": 62.92542679086556,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 35.635755805781265,
                        "hasRDI": true,
                        "daily": 222.7234737861329,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 3.403112703054691,
                        "hasRDI": true,
                        "daily": 261.77790023497624,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 105.6480462265627,
                        "hasRDI": true,
                        "daily": 26.412011556640675,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 105.6480462265627,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 1.6103400000000003,
                        "hasRDI": true,
                        "daily": 67.09750000000001,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.8120000000000002,
                        "hasRDI": true,
                        "daily": 5.413333333333335,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 3.8441769456250126,
                        "hasRDI": true,
                        "daily": 25.62784630416675,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 63.0025106562519,
                        "hasRDI": true,
                        "daily": 52.50209221354325,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1047.2193642903655,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ],
                "tags": [
                    "chicken",
                    "leeks",
                    "chicken breasts",
                    "pancetta",
                    "Sunday Suppers"
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/2defd5ee139437e0314804a1b8586ef7?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_86463dffac4c43b6d1efe74d12cff997",
                "label": "Coca-Cola–Glazed Chicken Wings",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/b87/b879d16aa42cee3b6b5df49d853c57c0.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=42b4a135cfca6830dbad743e81e95d1d240dfa05c99fb23968f745b9994bd9b0",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b87/b879d16aa42cee3b6b5df49d853c57c0-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ee2015bb98ab19a501ec1b090599ea9bc878ffdc8797906b66589e235216d113",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b87/b879d16aa42cee3b6b5df49d853c57c0-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=675b46d7ebce3e860ecaae6d053a9ca11d2bde40b345ca8a0e9646966c161001",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b87/b879d16aa42cee3b6b5df49d853c57c0.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=42b4a135cfca6830dbad743e81e95d1d240dfa05c99fb23968f745b9994bd9b0",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b87/b879d16aa42cee3b6b5df49d853c57c0-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6c4a71d518bb113f66686a8c39c6f39d766c62b8c191e80120c348d8850751f2",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Imbibe",
                "url": "http://imbibemagazine.com/Coca-Cola%E2%80%93Glazed-Chicken-Wings-Recipe",
                "shareAs": "http://www.edamam.com/recipe/coca-cola-glazed-chicken-wings-86463dffac4c43b6d1efe74d12cff997/chicken/balanced/400-cal",
                "yield": 10,
                "dietLabels": [
                    "Balanced"
                ],
                "healthLabels": [
                    "Kidney-Friendly",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "No oil added",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 cup Coca-Cola Classic",
                    "Juice of 2 limes",
                    "1 1/2 cups firmly packed light brown sugar",
                    "3 jalapeño chiles, finely chopped, plus 2 jalapeño chiles, sliced, for garnish",
                    "3 lbs. chicken wings (12–14 whole wings)",
                    "Coarse salt and freshly ground black pepper"
                ],
                "ingredients": [
                    {
                        "text": "1 cup Coca-Cola Classic",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "Coca-Cola",
                        "weight": 154.886432162,
                        "foodCategory": "sweetened beverages",
                        "foodId": "food_akkrnydbe7qcavbbelv3jbsb0o7p",
                        "image": "https://www.edamam.com/food-img/e86/e8658e93517d224d01b8e42b4f568a06.jpg"
                    },
                    {
                        "text": "Juice of 2 limes",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "limes",
                        "weight": 134,
                        "foodCategory": "fruit",
                        "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
                        "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
                    },
                    {
                        "text": "1 1/2 cups firmly packed light brown sugar",
                        "quantity": 1.5,
                        "measure": "cup",
                        "food": "light brown sugar",
                        "weight": 330,
                        "foodCategory": "sugars",
                        "foodId": "food_aodgtqwbmeu5f6bxeffn0art3bga",
                        "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
                    },
                    {
                        "text": "3 jalapeño chiles, finely chopped, plus 2 jalapeño chiles, sliced, for garnish",
                        "quantity": 3,
                        "measure": "<unit>",
                        "food": "jalapeño chiles",
                        "weight": 42,
                        "foodCategory": "vegetables",
                        "foodId": "food_b7txsnbadj6plsbq27zvwah80r6y",
                        "image": "https://www.edamam.com/food-img/0df/0df9aa459870a6d477b0925c1fdb6d4c.jpg"
                    },
                    {
                        "text": "3 jalapeño chiles, finely chopped, plus 2 jalapeño chiles, sliced, for garnish",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "jalapeño chiles",
                        "weight": 28,
                        "foodCategory": "vegetables",
                        "foodId": "food_b7txsnbadj6plsbq27zvwah80r6y",
                        "image": "https://www.edamam.com/food-img/0df/0df9aa459870a6d477b0925c1fdb6d4c.jpg"
                    },
                    {
                        "text": "3 lbs. chicken wings (12–14 whole wings)",
                        "quantity": 13,
                        "measure": "wing",
                        "food": "chicken wings",
                        "weight": 637,
                        "foodCategory": "Poultry",
                        "foodId": "food_aftnyj9ap60fc6av2a9nfbju90c1",
                        "image": "https://www.edamam.com/food-img/f92/f928682fc890edded472c5d8baeffed5.jpg"
                    },
                    {
                        "text": "Coarse salt and freshly ground black pepper",
                        "quantity": 0,
                        "measure": null,
                        "food": "Coarse salt",
                        "weight": 7.955318592972,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Coarse salt and freshly ground black pepper",
                        "quantity": 0,
                        "measure": null,
                        "food": "black pepper",
                        "weight": 3.977659296486,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    }
                ],
                "calories": 2598.46190473412,
                "totalCO2Emissions": 8057.813454469574,
                "co2EmissionsClass": "E",
                "totalWeight": 1336.1870846498755,
                "totalTime": 0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2598.46190473412,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 82.22364897949785,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 22.698969464221154,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.38856999999999997,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 34.60055490220103,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 16.11679703977893,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 359.7028448644383,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 352.98449706242735,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 6.718347802010958,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 339.16736998442894,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 320.1,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 113.96809706934795,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 707.07,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 3092.57234740488,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 418.8262776926065,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 157.02502732890494,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1996.8764367418153,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 6.829671670598575,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 8.136734425251973,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 860.8033449046478,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 98.88396801005122,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 122.29400000000001,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.41647587204020486,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.7390697867336747,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 37.88134531597995,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 3.861154988552774,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 78.18620208040262,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 78.18620208040262,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1.5925,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.637,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 6.9189676566834555,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 20.277361246237042,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 768.1103016407296,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 129.923095236706,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 126.49792150691977,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 113.49484732110577,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 119.9009482881461,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 26.87339120804383,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 227.9361941386959,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 235.69,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 128.85718114187,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 41.882627769260644,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 37.38691126878689,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 42.48673269663437,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 37.94262039221431,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 73.97031295683611,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 122.97190641494969,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 10.987107556672356,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 135.88222222222223,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 34.70632267001707,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 56.851522056436515,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 236.75840822487467,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 297.0119221963672,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 19.546550520100656,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 66.35416666666667,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 4.246666666666667,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 46.12645104455637,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 16.89780103853087,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 82.22364897949785,
                        "hasRDI": true,
                        "daily": 126.49792150691977,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 22.698969464221154,
                                "hasRDI": true,
                                "daily": 113.49484732110577,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.38856999999999997,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 34.60055490220103,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 16.11679703977893,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 359.7028448644383,
                        "hasRDI": true,
                        "daily": 119.9009482881461,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 352.98449706242735,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 6.718347802010958,
                                "hasRDI": true,
                                "daily": 26.87339120804383,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 339.16736998442894,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 320.1,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 113.96809706934795,
                        "hasRDI": true,
                        "daily": 227.9361941386959,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 707.07,
                        "hasRDI": true,
                        "daily": 235.69,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 3092.57234740488,
                        "hasRDI": true,
                        "daily": 128.85718114187,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 418.8262776926065,
                        "hasRDI": true,
                        "daily": 41.882627769260644,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 157.02502732890494,
                        "hasRDI": true,
                        "daily": 37.38691126878689,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1996.8764367418153,
                        "hasRDI": true,
                        "daily": 42.48673269663437,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 6.829671670598575,
                        "hasRDI": true,
                        "daily": 37.94262039221431,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 8.136734425251973,
                        "hasRDI": true,
                        "daily": 73.97031295683611,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 860.8033449046478,
                        "hasRDI": true,
                        "daily": 122.97190641494969,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 98.88396801005122,
                        "hasRDI": true,
                        "daily": 10.987107556672356,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 122.29400000000001,
                        "hasRDI": true,
                        "daily": 135.88222222222223,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.41647587204020486,
                        "hasRDI": true,
                        "daily": 34.70632267001707,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.7390697867336747,
                        "hasRDI": true,
                        "daily": 56.851522056436515,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 37.88134531597995,
                        "hasRDI": true,
                        "daily": 236.75840822487467,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 3.861154988552774,
                        "hasRDI": true,
                        "daily": 297.0119221963672,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 78.18620208040262,
                        "hasRDI": true,
                        "daily": 19.546550520100656,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 78.18620208040262,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 1.5925,
                        "hasRDI": true,
                        "daily": 66.35416666666667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.637,
                        "hasRDI": true,
                        "daily": 4.246666666666667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 6.9189676566834555,
                        "hasRDI": true,
                        "daily": 46.12645104455637,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 20.277361246237042,
                        "hasRDI": true,
                        "daily": 16.89780103853087,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 768.1103016407296,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/86463dffac4c43b6d1efe74d12cff997?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_d58e2e264e0fc827215f1eac048dd739",
                "label": "Vietnamese chicken salad",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/eed/eed758c76533eb8c76df1b4f9a7cb906.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e2a100505388b23d37845ae707adffcf0d6359a971a806a205fcfb22223d1cd1",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/eed/eed758c76533eb8c76df1b4f9a7cb906-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a48667411a9fb8f189e96e925d64ea1a457da33e8ccbe620e2db8eabe94b9f45",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/eed/eed758c76533eb8c76df1b4f9a7cb906-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f28644414051c401bcc5b631bb5fe6ebe406f452f3975b9f2b04d66108018765",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/eed/eed758c76533eb8c76df1b4f9a7cb906.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e2a100505388b23d37845ae707adffcf0d6359a971a806a205fcfb22223d1cd1",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "BBC Good Food",
                "url": "http://www.bbcgoodfood.com/recipes/2411641/vietnamese-chicken-salad",
                "shareAs": "http://www.edamam.com/recipe/vietnamese-chicken-salad-d58e2e264e0fc827215f1eac048dd739/chicken/balanced/400-cal",
                "yield": 3,
                "dietLabels": [
                    "Balanced"
                ],
                "healthLabels": [
                    "Dairy-Free",
                    "Egg-Free",
                    "Tree-Nut-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Lupine-Free",
                    "Alcohol-Free",
                    "Sulfite-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Shellfish",
                    "Sulfites",
                    "FODMAP"
                ],
                "ingredientLines": [
                    "140g Thai rice noodle",
                    "1 carrot",
                    "½ cucumber",
                    "2 cooked chicken breast, shredded",
                    "50g radish, thinly sliced",
                    "½ red onion, finely sliced",
                    "small bunch mint, leaves picked",
                    "25g natural roasted peanut, roughly chopped",
                    "1 small red chilli, deseeded and finely chopped",
                    "zest and juice 1 lime",
                    "1½ tbsp each fish sauce, low-sodium soy sauce and sesame oil"
                ],
                "ingredients": [
                    {
                        "text": "140g Thai rice noodle",
                        "quantity": 140,
                        "measure": "gram",
                        "food": "rice noodle",
                        "weight": 140,
                        "foodCategory": "grains",
                        "foodId": "food_bkwbi4gbu7k75ha7ad8eralgwvlk",
                        "image": "https://www.edamam.com/food-img/a83/a831dd1f26c9e2d0bf9e01bf7d5c0f0e.jpg"
                    },
                    {
                        "text": "1 carrot",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "carrot",
                        "weight": 61,
                        "foodCategory": "vegetables",
                        "foodId": "food_ai215e5b85pdh5ajd4aafa3w2zm8",
                        "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
                    },
                    {
                        "text": "½ cucumber",
                        "quantity": 0.5,
                        "measure": "<unit>",
                        "food": "cucumber",
                        "weight": 150.5,
                        "foodCategory": "vegetables",
                        "foodId": "food_bv7aggjag9rxsaatklqzobca5fzn",
                        "image": "https://www.edamam.com/food-img/501/5015da0e5fc2b384696b3d949aefef86.jpg"
                    },
                    {
                        "text": "2 cooked chicken breast, shredded",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "cooked chicken breast",
                        "weight": 104,
                        "foodCategory": "Poultry",
                        "foodId": "food_bncmum7a55r0byaf6mm9xbnk39my",
                        "image": "https://www.edamam.com/food-img/44c/44c95571e5b3071f266e0e742e670585.jpg"
                    },
                    {
                        "text": "50g radish, thinly sliced",
                        "quantity": 50,
                        "measure": "gram",
                        "food": "radish",
                        "weight": 50,
                        "foodCategory": "vegetables",
                        "foodId": "food_bs6xkukbtd85e7b2lh5zfazpe45y",
                        "image": "https://www.edamam.com/food-img/ad7/ad78f4315cdba1dc26ccef0d7dba464b.jpg"
                    },
                    {
                        "text": "½ red onion, finely sliced",
                        "quantity": 0.5,
                        "measure": "<unit>",
                        "food": "red onion",
                        "weight": 62.5,
                        "foodCategory": "vegetables",
                        "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                        "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                    },
                    {
                        "text": "small bunch mint, leaves picked",
                        "quantity": 1,
                        "measure": "bunch",
                        "food": "mint",
                        "weight": 22.5,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bxl4xoga4owdkeay51sy8anesxj5",
                        "image": "https://www.edamam.com/food-img/7f0/7f01cc4f71c5c6ad31051ed74b9c058b.jpg"
                    },
                    {
                        "text": "25g natural roasted peanut, roughly chopped",
                        "quantity": 25,
                        "measure": "gram",
                        "food": "peanut",
                        "weight": 25,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_aft8y4gab0fvs5bcgjac6boztho3",
                        "image": "https://www.edamam.com/food-img/6f4/6f41e31c53bb58cc1b7331d0764963f7.jpg"
                    },
                    {
                        "text": "1 small red chilli, deseeded and finely chopped",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "red chilli",
                        "weight": 33.75,
                        "foodCategory": "vegetables",
                        "foodId": "food_a6g98mqatzj7vca6ms3bnbzqxf3s",
                        "image": "https://www.edamam.com/food-img/469/469213672957a242638e20c27e3e8acd.jpeg"
                    },
                    {
                        "text": "zest and juice 1 lime",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "lime",
                        "weight": 67,
                        "foodCategory": "fruit",
                        "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
                        "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
                    },
                    {
                        "text": "1½ tbsp each fish sauce, low-sodium soy sauce and sesame oil",
                        "quantity": 1.5,
                        "measure": "tablespoon",
                        "food": "fish sauce",
                        "weight": 27,
                        "foodCategory": "canned soup",
                        "foodId": "food_ahlu6u3ab8bu1wap7cbqua3s1quk",
                        "image": "https://www.edamam.com/food-img/7b5/7b58b769d8bf7b79acf12a76b79ea9bc.jpg"
                    },
                    {
                        "text": "1½ tbsp each fish sauce, low-sodium soy sauce and sesame oil",
                        "quantity": 1.5,
                        "measure": "tablespoon",
                        "food": "low-sodium soy sauce",
                        "weight": 21.299999999999997,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_af8xwhdbq4vg0tbqfqjysafu339b",
                        "image": "https://www.edamam.com/food-img/4bc/4bccc4c294a8dddb62020c62935e6fd8.jpg"
                    },
                    {
                        "text": "1½ tbsp each fish sauce, low-sodium soy sauce and sesame oil",
                        "quantity": 1.5,
                        "measure": "tablespoon",
                        "food": "sesame oil",
                        "weight": 20.4,
                        "foodCategory": "Oils",
                        "foodId": "food_b2id9opa0l5afvbw2do5xa1fnz4q",
                        "image": "https://www.edamam.com/food-img/b87/b874ddcfb6770adc7a155355a902ffb8.jpg"
                    }
                ],
                "calories": 1148.962,
                "totalCO2Emissions": 2430.1643,
                "co2EmissionsClass": "E",
                "totalWeight": 784.9499999999999,
                "totalTime": 20,
                "cuisineType": [
                    "south east asian"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "salad"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1148.962,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 38.1346,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 5.92901,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 15.800811,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 13.7989715,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 149.22354500000003,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 136.47419500000004,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 12.74935,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 14.343100000000003,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 54.727275000000006,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 88.4,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 3300.7875000000004,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 224.495,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 214.9995,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1541.4759999999997,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 8.037525,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 4.21612,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 708.2354999999999,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 587.4100000000001,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 91.0625,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.46555500000000005,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.44584,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 20.16134,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.3630149999999999,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 174.7495,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 174.7495,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.48319999999999996,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.10400000000000001,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 3.7307550000000003,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 41.84739999999999,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 529.9878,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 57.4481,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 58.668615384615386,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 29.645049999999998,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 49.74118166666668,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 50.9974,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 109.45455000000001,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 29.466666666666665,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 137.53281250000003,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 22.4495,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 51.190357142857145,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 32.79736170212765,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 44.65291666666667,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 38.32836363636364,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 101.17649999999999,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 65.26777777777778,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 101.18055555555556,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 38.79625,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 34.29538461538462,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 126.008375,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 104.84730769230767,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 43.687375,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 20.133333333333333,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.6933333333333334,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 24.8717,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 34.87283333333333,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 38.1346,
                        "hasRDI": true,
                        "daily": 58.668615384615386,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 5.92901,
                                "hasRDI": true,
                                "daily": 29.645049999999998,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 15.800811,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 13.7989715,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 149.22354500000003,
                        "hasRDI": true,
                        "daily": 49.74118166666668,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 136.47419500000004,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 12.74935,
                                "hasRDI": true,
                                "daily": 50.9974,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 14.343100000000003,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 54.727275000000006,
                        "hasRDI": true,
                        "daily": 109.45455000000001,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 88.4,
                        "hasRDI": true,
                        "daily": 29.466666666666665,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 3300.7875000000004,
                        "hasRDI": true,
                        "daily": 137.53281250000003,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 224.495,
                        "hasRDI": true,
                        "daily": 22.4495,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 214.9995,
                        "hasRDI": true,
                        "daily": 51.190357142857145,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1541.4759999999997,
                        "hasRDI": true,
                        "daily": 32.79736170212765,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 8.037525,
                        "hasRDI": true,
                        "daily": 44.65291666666667,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 4.21612,
                        "hasRDI": true,
                        "daily": 38.32836363636364,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 708.2354999999999,
                        "hasRDI": true,
                        "daily": 101.17649999999999,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 587.4100000000001,
                        "hasRDI": true,
                        "daily": 65.26777777777778,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 91.0625,
                        "hasRDI": true,
                        "daily": 101.18055555555556,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.46555500000000005,
                        "hasRDI": true,
                        "daily": 38.79625,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.44584,
                        "hasRDI": true,
                        "daily": 34.29538461538462,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 20.16134,
                        "hasRDI": true,
                        "daily": 126.008375,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.3630149999999999,
                        "hasRDI": true,
                        "daily": 104.84730769230767,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 174.7495,
                        "hasRDI": true,
                        "daily": 43.687375,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 174.7495,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.48319999999999996,
                        "hasRDI": true,
                        "daily": 20.133333333333333,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.10400000000000001,
                        "hasRDI": true,
                        "daily": 0.6933333333333334,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 3.7307550000000003,
                        "hasRDI": true,
                        "daily": 24.8717,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 41.84739999999999,
                        "hasRDI": true,
                        "daily": 34.87283333333333,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 529.9878,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/d58e2e264e0fc827215f1eac048dd739?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_f67946dfd9f84682a58a55bb6fc46e80",
                "label": "Chicken-Liver Ravioli",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/643/6433b2c7ba7139cfb932e419d9c8954e.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e3cbb7a064a1209876906bb1db85f00d57ae3936cc7ff053fe9352cbb3798488",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/643/6433b2c7ba7139cfb932e419d9c8954e-s.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a4463594c0967b4a7e2e247b2ca09aad2ceb111625ef38813245e997582336eb",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/643/6433b2c7ba7139cfb932e419d9c8954e-m.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f0de0a6aca54f7a9d91c4269ea349fb564755eb1a01af96640957ec699bc9849",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/643/6433b2c7ba7139cfb932e419d9c8954e.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e3cbb7a064a1209876906bb1db85f00d57ae3936cc7ff053fe9352cbb3798488",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/643/6433b2c7ba7139cfb932e419d9c8954e-l.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ab580453c2494c1137c1dd6f1c2d9080a53073658e0beb9e5c5096bb5d12a09a",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Food & Wine",
                "url": "https://www.foodandwine.com/recipes/chicken-liver-ravioli",
                "shareAs": "http://www.edamam.com/recipe/chicken-liver-ravioli-f67946dfd9f84682a58a55bb6fc46e80/chicken/balanced/400-cal",
                "yield": 8,
                "dietLabels": [
                    "Balanced"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Kidney-Friendly",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1/2 pound chicken livers, trimmed",
                    "1 shallot, thinly sliced",
                    "1 large garlic clove, thinly sliced",
                    "1 teaspoon chopped sage, plus 10 whole leaves",
                    "1/2 teaspoon chopped thyme",
                    "5 tablespoons balsamic vinegar",
                    "7 tablespoons unsalted butter",
                    "Salt and freshly ground pepper",
                    "1 package wonton wrappers (48)",
                    "All-purpose flour, for dusting",
                    "1/2 cup chicken stock or broth"
                ],
                "ingredients": [
                    {
                        "text": "1/2 pound chicken livers, trimmed",
                        "quantity": 0.5,
                        "measure": "pound",
                        "food": "chicken livers",
                        "weight": 226.796185,
                        "foodCategory": "Poultry",
                        "foodId": "food_a9xs7abb632dn3aozv3w4a9351fh",
                        "image": "https://www.edamam.com/food-img/9aa/9aa4760ac12b682555a37a1cdc91150b.jpg"
                    },
                    {
                        "text": "1 shallot, thinly sliced",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "shallot",
                        "weight": 59.111111111111114,
                        "foodCategory": "vegetables",
                        "foodId": "food_bu2ver7a5f52dfap8q9f0bn085qb",
                        "image": "https://www.edamam.com/food-img/d23/d23e3be21df05e9e16c05eadb12341e7.jpeg"
                    },
                    {
                        "text": "1 large garlic clove, thinly sliced",
                        "quantity": 1,
                        "measure": "clove",
                        "food": "garlic",
                        "weight": 5,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "1 teaspoon chopped sage, plus 10 whole leaves",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "sage",
                        "weight": 2.666666666847008,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b00mwy0bne9gs4au15ja8ab10h0e",
                        "image": "https://www.edamam.com/food-img/509/50984580e9aad4b4ddd5b7ed45a64bf4.jpg"
                    },
                    {
                        "text": "1 teaspoon chopped sage, plus 10 whole leaves",
                        "quantity": 10,
                        "measure": "leaf",
                        "food": "sage",
                        "weight": 10,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b00mwy0bne9gs4au15ja8ab10h0e",
                        "image": "https://www.edamam.com/food-img/509/50984580e9aad4b4ddd5b7ed45a64bf4.jpg"
                    },
                    {
                        "text": "1/2 teaspoon chopped thyme",
                        "quantity": 0.5,
                        "measure": "teaspoon",
                        "food": "thyme",
                        "weight": 0.4,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b3o3cj7a5gskecb0ufphtadnbfqb",
                        "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
                    },
                    {
                        "text": "5 tablespoons balsamic vinegar",
                        "quantity": 5,
                        "measure": "tablespoon",
                        "food": "balsamic vinegar",
                        "weight": 80,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b1ic8tzapja8jubas1f8lbhpbn6x",
                        "image": "https://www.edamam.com/food-img/90a/90a1f211768e166ecfff19e8b4747498.jpg"
                    },
                    {
                        "text": "7 tablespoons unsalted butter",
                        "quantity": 7,
                        "measure": "tablespoon",
                        "food": "unsalted butter",
                        "weight": 99.39999999999999,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "Salt and freshly ground pepper",
                        "quantity": 0,
                        "measure": null,
                        "food": "Salt",
                        "weight": 6.308243776667748,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Salt and freshly ground pepper",
                        "quantity": 0,
                        "measure": null,
                        "food": "pepper",
                        "weight": 3.154121888333874,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "1 package wonton wrappers (48)",
                        "quantity": 1,
                        "measure": "package",
                        "food": "wonton wrappers",
                        "weight": 448,
                        "foodCategory": "quick breads and pastries",
                        "foodId": "food_aciwn4ebx5qeeobklsjebb6s408x",
                        "image": "https://www.edamam.com/food-img/64e/64e52edbb86d08069012c6a331738ace.jpg"
                    },
                    {
                        "text": "All-purpose flour, for dusting",
                        "quantity": 0,
                        "measure": null,
                        "food": "All-purpose flour",
                        "weight": 9.462365665001622,
                        "foodCategory": "grains",
                        "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
                        "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
                    },
                    {
                        "text": "1/2 cup chicken stock or broth",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "chicken stock",
                        "weight": 120,
                        "foodCategory": "canned soup",
                        "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
                        "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
                    }
                ],
                "calories": 2532.5393171108917,
                "totalCO2Emissions": 6707.136208623119,
                "co2EmissionsClass": "E",
                "totalWeight": 1063.9904503312937,
                "totalTime": 180,
                "cuisineType": [
                    "italian"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2532.5393171108917,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 101.63537573704421,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 56.26380300259682,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.14741752025000002,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 27.944109753608927,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 9.282492396811868,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 307.5536084948727,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 291.2789095618743,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 16.274698932998415,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 18.920019211828375,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 90.95679204934547,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 1040.0768382499998,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 2934.712029707654,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 534.6929207291561,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 225.07121069278983,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1535.9722223227666,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 41.458242700430645,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 10.558506527412439,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1178.190870285267,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 8222.46038457705,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 51.86940600394733,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 3.2826697196943564,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 5.980395821006938,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 49.76588891982797,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 2.7665540603091703,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 2026.0696970511103,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 1477.1182990088062,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 323.6920431241025,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 37.90674671,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 4.959330714792776,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 229.5570358858353,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 543.2755016085247,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 126.62696585554458,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 156.36211651852955,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 281.3190150129841,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 102.5178694982909,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 65.09879573199366,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 181.9135840986909,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 346.6922794166666,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 122.27966790448559,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 53.46929207291561,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 53.58838349828329,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 32.68026004942057,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 230.32357055794805,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 95.98642297647672,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 168.31298146932386,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 913.6067093974501,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 57.63267333771926,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 273.5558099745297,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 460.03044776976446,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 311.03680574892485,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 212.81185079301312,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 506.5174242627776,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1579.4477795833334,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 33.062204765285166,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 191.29752990486273,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 101.63537573704421,
                        "hasRDI": true,
                        "daily": 156.36211651852955,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 56.26380300259682,
                                "hasRDI": true,
                                "daily": 281.3190150129841,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.14741752025000002,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 27.944109753608927,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 9.282492396811868,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 307.5536084948727,
                        "hasRDI": true,
                        "daily": 102.5178694982909,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 291.2789095618743,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 16.274698932998415,
                                "hasRDI": true,
                                "daily": 65.09879573199366,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 18.920019211828375,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 90.95679204934547,
                        "hasRDI": true,
                        "daily": 181.9135840986909,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 1040.0768382499998,
                        "hasRDI": true,
                        "daily": 346.6922794166666,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 2934.712029707654,
                        "hasRDI": true,
                        "daily": 122.27966790448559,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 534.6929207291561,
                        "hasRDI": true,
                        "daily": 53.46929207291561,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 225.07121069278983,
                        "hasRDI": true,
                        "daily": 53.58838349828329,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1535.9722223227666,
                        "hasRDI": true,
                        "daily": 32.68026004942057,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 41.458242700430645,
                        "hasRDI": true,
                        "daily": 230.32357055794805,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 10.558506527412439,
                        "hasRDI": true,
                        "daily": 95.98642297647672,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1178.190870285267,
                        "hasRDI": true,
                        "daily": 168.31298146932386,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 8222.46038457705,
                        "hasRDI": true,
                        "daily": 913.6067093974501,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 51.86940600394733,
                        "hasRDI": true,
                        "daily": 57.63267333771926,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 3.2826697196943564,
                        "hasRDI": true,
                        "daily": 273.5558099745297,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 5.980395821006938,
                        "hasRDI": true,
                        "daily": 460.03044776976446,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 49.76588891982797,
                        "hasRDI": true,
                        "daily": 311.03680574892485,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 2.7665540603091703,
                        "hasRDI": true,
                        "daily": 212.81185079301312,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 2026.0696970511103,
                        "hasRDI": true,
                        "daily": 506.5174242627776,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 1477.1182990088062,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 323.6920431241025,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 37.90674671,
                        "hasRDI": true,
                        "daily": 1579.4477795833334,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 4.959330714792776,
                        "hasRDI": true,
                        "daily": 33.062204765285166,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 229.5570358858353,
                        "hasRDI": true,
                        "daily": 191.29752990486273,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 543.2755016085247,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/f67946dfd9f84682a58a55bb6fc46e80?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_5d46c5bfccc0d5c7007e3f54c264bdf8",
                "label": "Autumn Chicken Stew",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/260/26061b5f063ff3d0e9cfb6f43c62bd85?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a7bec8eee3316289194343c3ee07e8e0a14a8732c6468b6b66f68bb857511428",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/260/26061b5f063ff3d0e9cfb6f43c62bd85-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c8538ee934051c6985c1150d66cd19d0df04eb47e102fe94fd9476c9de4ba86c",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/260/26061b5f063ff3d0e9cfb6f43c62bd85-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4274ef98cf7e9ae8363e2e3c01a5ef36fa7b131a477b6d36c3cf23feb6461a3a",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/260/26061b5f063ff3d0e9cfb6f43c62bd85?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a7bec8eee3316289194343c3ee07e8e0a14a8732c6468b6b66f68bb857511428",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/260/26061b5f063ff3d0e9cfb6f43c62bd85-l?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b50746150560a8da28495cdfadb18a2c08b2d52619a2d4017efc5b3ff7824159",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "EatingWell",
                "url": "http://www.eatingwell.com/recipe/252657/autumn-chicken-stew/",
                "shareAs": "http://www.edamam.com/recipe/autumn-chicken-stew-5d46c5bfccc0d5c7007e3f54c264bdf8/chicken/balanced/400-cal",
                "yield": 6,
                "dietLabels": [
                    "Balanced",
                    "High-Fiber"
                ],
                "healthLabels": [
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free"
                ],
                "cautions": [
                    "Gluten",
                    "Wheat",
                    "Sulfites",
                    "FODMAP"
                ],
                "ingredientLines": [
                    "5 teaspoons extra-virgin olive oil, divided",
                    "1 pound chicken tenders, cut into bite-size pieces",
                    "1 large onion, chopped",
                    "4 medium parsnips, peeled and chopped",
                    "2 medium carrots, peeled and chopped",
                    "2 teaspoons chopped fresh rosemary or 1/2 teaspoon dried",
                    "½ teaspoon salt",
                    "¼ teaspoon freshly ground pepper",
                    "4 cups reduced-sodium chicken broth",
                    "2 Granny Smith apples, peeled and chopped",
                    "2 teaspoons cider vinegar"
                ],
                "ingredients": [
                    {
                        "text": "5 teaspoons extra-virgin olive oil, divided",
                        "quantity": 5,
                        "measure": "teaspoon",
                        "food": "extra-virgin olive oil",
                        "weight": 22.5,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                    },
                    {
                        "text": "1 pound chicken tenders, cut into bite-size pieces",
                        "quantity": 1,
                        "measure": "pound",
                        "food": "chicken tenders",
                        "weight": 453.59237,
                        "foodCategory": "poultry",
                        "foodId": "food_bdc1hahbi6pzj2bjr99mzbq7v4dm",
                        "image": "https://www.edamam.com/food-img/2c6/2c63188d1eda89e858e8e8ef8e8b8e99.jpg"
                    },
                    {
                        "text": "1 large onion, chopped",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "onion",
                        "weight": 150,
                        "foodCategory": "vegetables",
                        "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                        "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                    },
                    {
                        "text": "4 medium parsnips, peeled and chopped",
                        "quantity": 4,
                        "measure": "<unit>",
                        "food": "parsnips",
                        "weight": 532,
                        "foodCategory": "vegetables",
                        "foodId": "food_admr9qdb3d66y9blt7afaazt0dbq",
                        "image": "https://www.edamam.com/food-img/ec2/ec2f9c27d98c2ca45687f96e3e487868.jpg"
                    },
                    {
                        "text": "2 medium carrots, peeled and chopped",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "carrots",
                        "weight": 122,
                        "foodCategory": "vegetables",
                        "foodId": "food_ai215e5b85pdh5ajd4aafa3w2zm8",
                        "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
                    },
                    {
                        "text": "2 teaspoons chopped fresh rosemary or 1/2 teaspoon dried",
                        "quantity": 2,
                        "measure": "teaspoon",
                        "food": "fresh rosemary",
                        "weight": 1.4,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6tm2t2blxi7okaeiv91wb8bmygq",
                        "image": "https://www.edamam.com/food-img/0ac/0ac8f7cf6f2d0ad7b1a2f9900fae44f3.jpg"
                    },
                    {
                        "text": "½ teaspoon salt",
                        "quantity": 0.5,
                        "measure": "teaspoon",
                        "food": "salt",
                        "weight": 3,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "¼ teaspoon freshly ground pepper",
                        "quantity": 0.25,
                        "measure": "teaspoon",
                        "food": "ground pepper",
                        "weight": 0.725,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "4 cups reduced-sodium chicken broth",
                        "quantity": 4,
                        "measure": "cup",
                        "food": "reduced-sodium chicken broth",
                        "weight": 960,
                        "foodCategory": "canned soup",
                        "foodId": "food_ayzeplba2uirz7avuacubb7o4qwd",
                        "image": "https://www.edamam.com/food-img/7fa/7fa80c55623028f33f40c432ef8fa5b4.jpg"
                    },
                    {
                        "text": "2 Granny Smith apples, peeled and chopped",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "Granny Smith apples",
                        "weight": 349.2,
                        "foodCategory": "fruit",
                        "foodId": "food_b4m99bgatuhmfybeq0d7xa9uvr1b",
                        "image": "https://www.edamam.com/food-img/288/288a6646dd6bb05a482f4405bf6e2861.jpg"
                    },
                    {
                        "text": "2 teaspoons cider vinegar",
                        "quantity": 2,
                        "measure": "teaspoon",
                        "food": "cider vinegar",
                        "weight": 10,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_ar8m7esapmfvf8bnhfzdlabndh6v",
                        "image": "https://www.edamam.com/food-img/c7d/c7dbd1846c5d08e9739930d70a404d50.jpg"
                    }
                ],
                "calories": 2176.3576831000005,
                "totalCO2Emissions": 14614.197543990002,
                "co2EmissionsClass": "G",
                "totalWeight": 2604.41737,
                "totalTime": 45,
                "cuisineType": [
                    "french"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2176.3576831000005,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 96.74875327500003,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 18.309988762000003,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 46.469363326000014,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 17.932314658,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 241.527814737,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 194.34587366699998,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 47.18194107,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 75.002011769,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 90.69697610100002,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 185.9728717,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 5575.6325887,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 456.0173003,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 318.3499951,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 4836.8871718,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 12.193872807000002,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 8.160947986,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1638.5734007,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 1038.3997499999998,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 116.51193896000001,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.6676989770000001,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.010626133,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 38.044009327000005,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.2022146980000001,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 493.0003344,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 503.4763343999999,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1.800699399,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.9071847400000002,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 13.096973895999998,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 228.99047839,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 2146.612440938,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 108.81788415500002,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 148.84423580769237,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 91.54994381000002,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 80.509271579,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 188.72776428,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 181.39395220200004,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 61.99095723333333,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 232.31802452916668,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 45.60173003,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 75.79761788095239,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 102.91249301702128,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 67.74373781666668,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 74.19043623636364,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 234.0819143857143,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 115.37774999999998,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 129.45770995555557,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 138.97491475,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 77.74047176923077,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 237.77505829375002,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 92.4780536923077,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 123.2500836,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 75.02914162500001,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 6.047898266666667,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 87.31315930666665,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 190.8253986583333,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 96.74875327500003,
                        "hasRDI": true,
                        "daily": 148.84423580769237,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 18.309988762000003,
                                "hasRDI": true,
                                "daily": 91.54994381000002,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 46.469363326000014,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 17.932314658,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 241.527814737,
                        "hasRDI": true,
                        "daily": 80.509271579,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 194.34587366699998,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 47.18194107,
                                "hasRDI": true,
                                "daily": 188.72776428,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 75.002011769,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 90.69697610100002,
                        "hasRDI": true,
                        "daily": 181.39395220200004,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 185.9728717,
                        "hasRDI": true,
                        "daily": 61.99095723333333,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 5575.6325887,
                        "hasRDI": true,
                        "daily": 232.31802452916668,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 456.0173003,
                        "hasRDI": true,
                        "daily": 45.60173003,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 318.3499951,
                        "hasRDI": true,
                        "daily": 75.79761788095239,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 4836.8871718,
                        "hasRDI": true,
                        "daily": 102.91249301702128,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 12.193872807000002,
                        "hasRDI": true,
                        "daily": 67.74373781666668,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 8.160947986,
                        "hasRDI": true,
                        "daily": 74.19043623636364,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1638.5734007,
                        "hasRDI": true,
                        "daily": 234.0819143857143,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 1038.3997499999998,
                        "hasRDI": true,
                        "daily": 115.37774999999998,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 116.51193896000001,
                        "hasRDI": true,
                        "daily": 129.45770995555557,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.6676989770000001,
                        "hasRDI": true,
                        "daily": 138.97491475,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.010626133,
                        "hasRDI": true,
                        "daily": 77.74047176923077,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 38.044009327000005,
                        "hasRDI": true,
                        "daily": 237.77505829375002,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.2022146980000001,
                        "hasRDI": true,
                        "daily": 92.4780536923077,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 493.0003344,
                        "hasRDI": true,
                        "daily": 123.2500836,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 503.4763343999999,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 1.800699399,
                        "hasRDI": true,
                        "daily": 75.02914162500001,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.9071847400000002,
                        "hasRDI": true,
                        "daily": 6.047898266666667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 13.096973895999998,
                        "hasRDI": true,
                        "daily": 87.31315930666665,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 228.99047839,
                        "hasRDI": true,
                        "daily": 190.8253986583333,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 2146.612440938,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/5d46c5bfccc0d5c7007e3f54c264bdf8?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_47f05a6cba7f4ad5a1b6780d576e4c76",
                "label": "Chicken Mushroom Gyoza",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/e18/e18d9d574c1a1b5df913cbdd058732cd.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f1d3a6f97e8cad961ce3b325f8ca7dbf438fb2466ea477e236840576c27e5afd",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e18/e18d9d574c1a1b5df913cbdd058732cd-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e42fad06bb4defb432ffa83aa32e6f2b1f389eb9e344be00334ad66322dec29d",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e18/e18d9d574c1a1b5df913cbdd058732cd-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=08f728f07c6d0ca106b05820f01d549d0a1179fce03b2681a12b5cd33ed97e47",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e18/e18d9d574c1a1b5df913cbdd058732cd.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f1d3a6f97e8cad961ce3b325f8ca7dbf438fb2466ea477e236840576c27e5afd",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "PBS Food",
                "url": "https://www.pbs.org/food/recipes/chicken-mushroom-gyoza/",
                "shareAs": "http://www.edamam.com/recipe/chicken-mushroom-gyoza-47f05a6cba7f4ad5a1b6780d576e4c76/chicken/balanced/400-cal",
                "yield": 36,
                "dietLabels": [
                    "Balanced"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Low Potassium",
                    "Kidney-Friendly",
                    "Dairy-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Lupine-Free",
                    "Alcohol-Free"
                ],
                "cautions": [
                    "Gluten",
                    "Wheat",
                    "Sulfites"
                ],
                "ingredientLines": [
                    "3 ounces (85 grams) shiitake mushrooms (about 6 large shiitakes, finely diced)",
                    "5.3 ounces (150 grams) onions (1 small onion, minced)",
                    "1/4 cup chicken stock",
                    "11.6 ounces (330 grams) ground chicken",
                    "12 grams ginger (minced)",
                    "1 tablespoon oyster sauce",
                    "1 teaspoon sesame oil",
                    "1/2 teaspoon potato starch",
                    "1/8 teaspoon salt",
                    "1/8 teaspoon white pepper",
                    "36 potsticker wrappers",
                    "vegetable oil (for frying)"
                ],
                "ingredients": [
                    {
                        "text": "3 ounces (85 grams) shiitake mushrooms (about 6 large shiitakes, finely diced)",
                        "quantity": 3,
                        "measure": "ounce",
                        "food": "shiitake mushrooms",
                        "weight": 85.048569375,
                        "foodCategory": "vegetables",
                        "foodId": "food_aq85j07b3arnn3bjy9gribye1mpm",
                        "image": "https://www.edamam.com/food-img/e1e/e1e021cc92b36fa5d19571c2a331d53b.jpg"
                    },
                    {
                        "text": "5.3 ounces (150 grams) onions (1 small onion, minced)",
                        "quantity": 5.300000190734863,
                        "measure": "ounce",
                        "food": "onions",
                        "weight": 150.25247796974242,
                        "foodCategory": "vegetables",
                        "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                        "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                    },
                    {
                        "text": "1/4 cup chicken stock",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "chicken stock",
                        "weight": 60,
                        "foodCategory": "canned soup",
                        "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
                        "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
                    },
                    {
                        "text": "11.6 ounces (330 grams) ground chicken",
                        "quantity": 11.600000381469727,
                        "measure": "ounce",
                        "food": "ground chicken",
                        "weight": 328.85447906448485,
                        "foodCategory": "poultry",
                        "foodId": "food_b4430z5avkliqsbzns6gpbhdn07c",
                        "image": "https://www.edamam.com/food-img/d67/d673152269f59d682d27b0a8446354b3.jpg"
                    },
                    {
                        "text": "12 grams ginger (minced)",
                        "quantity": 12,
                        "measure": "gram",
                        "food": "ginger",
                        "weight": 12,
                        "foodCategory": "vegetables",
                        "foodId": "food_bi2ki2xb5zmmvbaiwf7ztbgktzp6",
                        "image": "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg"
                    },
                    {
                        "text": "1 tablespoon oyster sauce",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "oyster sauce",
                        "weight": 18,
                        "foodCategory": "canned soup",
                        "foodId": "food_bm6al56a28x19ubll7fe8btl8wq0",
                        "image": "https://www.edamam.com/food-img/6ba/6ba8c5a1ea18756f59d2c0d5980fde38.jpg"
                    },
                    {
                        "text": "1 teaspoon sesame oil",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "sesame oil",
                        "weight": 4.5,
                        "foodCategory": "Oils",
                        "foodId": "food_b2id9opa0l5afvbw2do5xa1fnz4q",
                        "image": "https://www.edamam.com/food-img/b87/b874ddcfb6770adc7a155355a902ffb8.jpg"
                    },
                    {
                        "text": "1/2 teaspoon potato starch",
                        "quantity": 0.5,
                        "measure": "teaspoon",
                        "food": "potato starch",
                        "weight": 1.33333333340096,
                        "foodCategory": "grains",
                        "foodId": "food_a4a7481azf1in3aals9wxbv4kogo",
                        "image": "https://www.edamam.com/food-img/f9b/f9b74d9495b40c0aea955c37a1fc39dc.jpg"
                    },
                    {
                        "text": "1/8 teaspoon salt",
                        "quantity": 0.125,
                        "measure": "teaspoon",
                        "food": "salt",
                        "weight": 0.75,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "1/8 teaspoon white pepper",
                        "quantity": 0.125,
                        "measure": "teaspoon",
                        "food": "white pepper",
                        "weight": 0.3,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a443px0bncpqa5avv80p3anrp26k",
                        "image": "https://www.edamam.com/food-img/4f0/4f0e35fe6c042996408b337fb550324a.jpg"
                    },
                    {
                        "text": "36 potsticker wrappers",
                        "quantity": 36,
                        "measure": "<unit>",
                        "food": "potsticker wrappers",
                        "weight": 1152,
                        "foodCategory": "quick breads and pastries",
                        "foodId": "food_aciwn4ebx5qeeobklsjebb6s408x",
                        "image": "https://www.edamam.com/food-img/64e/64e52edbb86d08069012c6a331738ace.jpg"
                    },
                    {
                        "text": "vegetable oil (for frying)",
                        "quantity": 0,
                        "measure": null,
                        "food": "vegetable oil",
                        "weight": 24.65732849249974,
                        "foodCategory": "Oils",
                        "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
                        "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
                    }
                ],
                "calories": 6316.289937856593,
                "totalCO2Emissions": 6377.7765063858205,
                "co2EmissionsClass": "C",
                "totalWeight": 2074.569688704022,
                "totalTime": 0,
                "cuisineType": [
                    "chinese"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "condiments and sauces"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 6316.289937856593,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 312.1270589001914,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 28.59669902461721,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 2.225449369525809,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 205.14967670190117,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 58.90530864086034,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 694.5870544279574,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 668.785948068096,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 25.80110635986123,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 9.54686101704208,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 175.68261123555436,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 388.29485199545707,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 7379.312157801236,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 607.7319767310778,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 340.0844022755181,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 3261.9556494524377,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 42.34760273316972,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 14.289980319359032,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1682.2499223793507,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 46.68,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 11.91968336976094,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 6.445070807452621,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 5.450000859140989,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 85.56589329799316,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 2.517810214642604,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 1593.6228296236457,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 245.7828296236459,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 794.8799999999999,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 2.1457850827611153,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.34019427750000003,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 58.207378302652,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 3.9758457443948494,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 861.9941366089574,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 315.81449689282965,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 480.1954752310637,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 142.98349512308604,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 231.52901814265243,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 103.20442543944492,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 351.3652224711087,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 129.431617331819,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 307.47133990838483,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 60.77319767310778,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 80.97247673226622,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 69.4033116904774,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 235.2644596287207,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 129.908911994173,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 240.3214174827644,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 5.1866666666666665,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 13.24409263306771,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 537.0892339543851,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 419.23083531853763,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 534.7868331124572,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 193.67770881866184,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 398.40570740591136,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 89.40771178171315,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 2.2679618500000003,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 388.0491886843467,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 3.3132047869957075,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 312.1270589001914,
                        "hasRDI": true,
                        "daily": 480.1954752310637,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 28.59669902461721,
                                "hasRDI": true,
                                "daily": 142.98349512308604,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 2.225449369525809,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 205.14967670190117,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 58.90530864086034,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 694.5870544279574,
                        "hasRDI": true,
                        "daily": 231.52901814265243,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 668.785948068096,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 25.80110635986123,
                                "hasRDI": true,
                                "daily": 103.20442543944492,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 9.54686101704208,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 175.68261123555436,
                        "hasRDI": true,
                        "daily": 351.3652224711087,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 388.29485199545707,
                        "hasRDI": true,
                        "daily": 129.431617331819,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 7379.312157801236,
                        "hasRDI": true,
                        "daily": 307.47133990838483,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 607.7319767310778,
                        "hasRDI": true,
                        "daily": 60.77319767310778,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 340.0844022755181,
                        "hasRDI": true,
                        "daily": 80.97247673226622,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 3261.9556494524377,
                        "hasRDI": true,
                        "daily": 69.4033116904774,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 42.34760273316972,
                        "hasRDI": true,
                        "daily": 235.2644596287207,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 14.289980319359032,
                        "hasRDI": true,
                        "daily": 129.908911994173,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1682.2499223793507,
                        "hasRDI": true,
                        "daily": 240.3214174827644,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 46.68,
                        "hasRDI": true,
                        "daily": 5.1866666666666665,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 11.91968336976094,
                        "hasRDI": true,
                        "daily": 13.24409263306771,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 6.445070807452621,
                        "hasRDI": true,
                        "daily": 537.0892339543851,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 5.450000859140989,
                        "hasRDI": true,
                        "daily": 419.23083531853763,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 85.56589329799316,
                        "hasRDI": true,
                        "daily": 534.7868331124572,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 2.517810214642604,
                        "hasRDI": true,
                        "daily": 193.67770881866184,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 1593.6228296236457,
                        "hasRDI": true,
                        "daily": 398.40570740591136,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 245.7828296236459,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 794.8799999999999,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 2.1457850827611153,
                        "hasRDI": true,
                        "daily": 89.40771178171315,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.34019427750000003,
                        "hasRDI": true,
                        "daily": 2.2679618500000003,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 58.207378302652,
                        "hasRDI": true,
                        "daily": 388.0491886843467,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 3.9758457443948494,
                        "hasRDI": true,
                        "daily": 3.3132047869957075,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 861.9941366089574,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/47f05a6cba7f4ad5a1b6780d576e4c76?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_35a93fee16e7683b1ece4d9070f974f1",
                "label": "Chicken, Spinach, And Noodle Casserole",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/bf8/bf8173103cd9cffd0da967b1cbb93636.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b4430ce6e1f20eaa400530f2d8c0d2171d654c7276f7b5eb75d4492953b5166b",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/bf8/bf8173103cd9cffd0da967b1cbb93636-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d5bea055c9896f36e741f53524a74e51dd2f95a97a09402d03cff2013d1840fe",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/bf8/bf8173103cd9cffd0da967b1cbb93636-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a8f4e775c5ccc7754a44339a6f659ed1cdd48aa65498506eb1adfb081bebfc64",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/bf8/bf8173103cd9cffd0da967b1cbb93636.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b4430ce6e1f20eaa400530f2d8c0d2171d654c7276f7b5eb75d4492953b5166b",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/bf8/bf8173103cd9cffd0da967b1cbb93636-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=126e261d5c08c107d806e82c482f4652e4414016d3f7a672afe90b72de543796",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Real Simple",
                "url": "http://www.realsimple.com/food-recipes/browse-all-recipes/chicken-noodle-casserole-00100000075552/index.html",
                "shareAs": "http://www.edamam.com/recipe/chicken-spinach-and-noodle-casserole-35a93fee16e7683b1ece4d9070f974f1/chicken/balanced/400-cal",
                "yield": 14,
                "dietLabels": [
                    "Balanced"
                ],
                "healthLabels": [
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free"
                ],
                "cautions": [],
                "ingredientLines": [
                    "6 tablespoons unsalted butter",
                    "1/4 cup all-purpose flour",
                    "4 cups whole milk",
                    "1 cup sour cream",
                    "kosher salt and black pepper",
                    "12 ounces egg noodles",
                    "4 slices sandwich bread",
                    "2 cups shredded cooked chicken or rotisserie chicken",
                    "5 ounces baby spinach, chopped",
                    "2 teaspoons dried thyme"
                ],
                "ingredients": [
                    {
                        "text": "6 tablespoons unsalted butter",
                        "quantity": 6,
                        "measure": "tablespoon",
                        "food": "unsalted butter",
                        "weight": 85.19999999999999,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "1/4 cup all-purpose flour",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "all-purpose flour",
                        "weight": 31.25,
                        "foodCategory": "grains",
                        "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
                        "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
                    },
                    {
                        "text": "4 cups whole milk",
                        "quantity": 4,
                        "measure": "cup",
                        "food": "whole milk",
                        "weight": 976,
                        "foodCategory": "Milk",
                        "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
                        "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
                    },
                    {
                        "text": "1 cup sour cream",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "sour cream",
                        "weight": 230,
                        "foodCategory": "Dairy",
                        "foodId": "food_adp9fcubzl3lr7bcvzn3rbfiiiwq",
                        "image": "https://www.edamam.com/food-img/f9d/f9d6183267b041b0aff9a10b89c9c15f.jpg"
                    },
                    {
                        "text": "kosher salt and black pepper",
                        "quantity": 0,
                        "measure": null,
                        "food": "kosher salt",
                        "weight": 13.214351358750001,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "kosher salt and black pepper",
                        "quantity": 0,
                        "measure": null,
                        "food": "black pepper",
                        "weight": 6.6071756793750005,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "12 ounces egg noodles",
                        "quantity": 12,
                        "measure": "ounce",
                        "food": "egg noodles",
                        "weight": 340.1942775,
                        "foodCategory": "grains",
                        "foodId": "food_aefg3gqa71nrtpbhjfo3yb36kd81",
                        "image": "https://www.edamam.com/food-img/800/800c9c0d7cef6b5474723682ffa2878d.jpg"
                    },
                    {
                        "text": "4 slices sandwich bread",
                        "quantity": 4,
                        "measure": "slice",
                        "food": "sandwich bread",
                        "weight": 116,
                        "foodCategory": "bread, rolls and tortillas",
                        "foodId": "food_a3049hmbqj5wstaeeb3udaz6uaqv",
                        "image": "https://www.edamam.com/food-img/886/886960f6ce6ccec5b9163bacf2996853.jpg"
                    },
                    {
                        "text": "2 cups shredded cooked chicken or rotisserie chicken",
                        "quantity": 2,
                        "measure": "cup",
                        "food": "cooked chicken",
                        "weight": 280,
                        "foodCategory": "Poultry",
                        "foodId": "food_a59p480aae04fubjz0yo7a5auh4m",
                        "image": "https://www.edamam.com/food-img/c81/c81b9affb7c9c29a861e8566bd2d0829.jpg"
                    },
                    {
                        "text": "5 ounces baby spinach, chopped",
                        "quantity": 5,
                        "measure": "ounce",
                        "food": "spinach",
                        "weight": 141.747615625,
                        "foodCategory": "vegetables",
                        "foodId": "food_aoceuc6bshdej1bbsdammbnj6l6o",
                        "image": "https://www.edamam.com/food-img/e6e/e6e4be375c4554ce01c8ea75232efaa6.jpg"
                    },
                    {
                        "text": "2 teaspoons dried thyme",
                        "quantity": 2,
                        "measure": "teaspoon",
                        "food": "dried thyme",
                        "weight": 2,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
                        "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
                    }
                ],
                "calories": 3921.885988148981,
                "totalCO2Emissions": 15079.807944026114,
                "co2EmissionsClass": "E",
                "totalWeight": 2218.51320103316,
                "totalTime": 0,
                "cuisineType": [
                    "asian"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 3921.885988148981,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 185.5836855490851,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 94.58459071428706,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 2.076598509275,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 50.48085775858307,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 17.392189569811418,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 389.70242073948754,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 367.4621965913557,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 22.240224148131873,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 70.98077332697301,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 175.94186548252998,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 912.2431931000001,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 5136.983154523198,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 1867.6668165882893,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 560.6257090277692,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 4160.407799401491,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 30.120944306009807,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 17.62276201362585,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 2639.8618780046622,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 2078.7412818896814,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 43.133079990625,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 5.367046725671225,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 4.660106531904125,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 61.25314842211987,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 2.780180371095731,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 1825.2459209279937,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 543.8684346529938,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 755.1154977750001,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 6.818403404750001,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 13.708582832500001,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 8.180625051002998,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 749.4974729704251,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 1436.2687003083797,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 196.09429940744906,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 285.51336238320783,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 472.9229535714353,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 129.9008069131625,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 88.96089659252749,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 351.88373096505995,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 304.0810643666667,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 214.0409647717999,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 186.76668165882893,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 133.4823116732784,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 88.51931488088277,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 167.33857947783224,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 160.20692739659864,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 377.1231254292374,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 230.97125354329793,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 47.92564443402778,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 447.2538938059354,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 358.4697332233942,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 382.8321776382492,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 213.8600285458255,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 456.3114802319984,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 284.10014186458335,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 91.39055221666668,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 54.53750034001999,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 624.5812274753541,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 185.5836855490851,
                        "hasRDI": true,
                        "daily": 285.51336238320783,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 94.58459071428706,
                                "hasRDI": true,
                                "daily": 472.9229535714353,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 2.076598509275,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 50.48085775858307,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 17.392189569811418,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 389.70242073948754,
                        "hasRDI": true,
                        "daily": 129.9008069131625,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 367.4621965913557,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 22.240224148131873,
                                "hasRDI": true,
                                "daily": 88.96089659252749,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 70.98077332697301,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 175.94186548252998,
                        "hasRDI": true,
                        "daily": 351.88373096505995,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 912.2431931000001,
                        "hasRDI": true,
                        "daily": 304.0810643666667,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 5136.983154523198,
                        "hasRDI": true,
                        "daily": 214.0409647717999,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 1867.6668165882893,
                        "hasRDI": true,
                        "daily": 186.76668165882893,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 560.6257090277692,
                        "hasRDI": true,
                        "daily": 133.4823116732784,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 4160.407799401491,
                        "hasRDI": true,
                        "daily": 88.51931488088277,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 30.120944306009807,
                        "hasRDI": true,
                        "daily": 167.33857947783224,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 17.62276201362585,
                        "hasRDI": true,
                        "daily": 160.20692739659864,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 2639.8618780046622,
                        "hasRDI": true,
                        "daily": 377.1231254292374,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 2078.7412818896814,
                        "hasRDI": true,
                        "daily": 230.97125354329793,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 43.133079990625,
                        "hasRDI": true,
                        "daily": 47.92564443402778,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 5.367046725671225,
                        "hasRDI": true,
                        "daily": 447.2538938059354,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 4.660106531904125,
                        "hasRDI": true,
                        "daily": 358.4697332233942,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 61.25314842211987,
                        "hasRDI": true,
                        "daily": 382.8321776382492,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 2.780180371095731,
                        "hasRDI": true,
                        "daily": 213.8600285458255,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 1825.2459209279937,
                        "hasRDI": true,
                        "daily": 456.3114802319984,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 543.8684346529938,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 755.1154977750001,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 6.818403404750001,
                        "hasRDI": true,
                        "daily": 284.10014186458335,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 13.708582832500001,
                        "hasRDI": true,
                        "daily": 91.39055221666668,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 8.180625051002998,
                        "hasRDI": true,
                        "daily": 54.53750034001999,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 749.4974729704251,
                        "hasRDI": true,
                        "daily": 624.5812274753541,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1436.2687003083797,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/35a93fee16e7683b1ece4d9070f974f1?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_dd9b9c78d3131472db1e67677d4873b8",
                "label": "Mini Chicken Pot Pies",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/676/676960a78527eb2a6f7850a2a0176989.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=10aba528704ab35c017f01070a8899d3a3381178f81259da22c27dd06a8e166a",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/676/676960a78527eb2a6f7850a2a0176989-s.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=22c7e954205399d1c4ca4cd18e6ce2c0ede7a037819b089552da7605f8646966",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/676/676960a78527eb2a6f7850a2a0176989-m.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1320eb3f523d7eba96688b6726202bf3982e0dabd853553f34295f928183e6df",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/676/676960a78527eb2a6f7850a2a0176989.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=10aba528704ab35c017f01070a8899d3a3381178f81259da22c27dd06a8e166a",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Food Network",
                "url": "https://www.foodnetwork.com/recipes/mini-chicken-pot-pies-3414775",
                "shareAs": "http://www.edamam.com/recipe/mini-chicken-pot-pies-dd9b9c78d3131472db1e67677d4873b8/chicken/balanced/400-cal",
                "yield": 8,
                "dietLabels": [
                    "Balanced"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Low Potassium",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "2 cups Great Value frozen mixed vegetables thawed",
                    "1 cup diced cooked chicken",
                    "1 can (10.75 oz.) condensed cream of chicken soup",
                    "1 can (16.3 oz.) Pillsbury Grands Flaky Layers refrigerated biscuits"
                ],
                "ingredients": [
                    {
                        "text": "2 cups Great Value frozen mixed vegetables thawed",
                        "quantity": 2,
                        "measure": "cup",
                        "food": "frozen mixed vegetables",
                        "weight": 182,
                        "foodCategory": "vegetables",
                        "foodId": "food_bitqzx8b319psvbib2dufarphbxy",
                        "image": "https://www.edamam.com/food-img/f3f/f3fa6996eba331be219778406f67a5a3.jpg"
                    },
                    {
                        "text": "1 cup diced cooked chicken",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "cooked chicken",
                        "weight": 140,
                        "foodCategory": "Poultry",
                        "foodId": "food_a59p480aae04fubjz0yo7a5auh4m",
                        "image": "https://www.edamam.com/food-img/c81/c81b9affb7c9c29a861e8566bd2d0829.jpg"
                    },
                    {
                        "text": "1 can (10.75 oz.) condensed cream of chicken soup",
                        "quantity": 10.75,
                        "measure": "ounce",
                        "food": "condensed cream of chicken soup",
                        "weight": 304.75737359375,
                        "foodCategory": "canned soup",
                        "foodId": "food_bss83roarr59m6ahbwlfnb138xbk",
                        "image": "https://www.edamam.com/food-img/525/525584dcb2f4c027b7d0063e4204ba33.jpg"
                    },
                    {
                        "text": "1 can (16.3 oz.) Pillsbury Grands Flaky Layers refrigerated biscuits",
                        "quantity": 16.299999237060547,
                        "measure": "ounce",
                        "food": "refrigerated biscuits",
                        "weight": 462.09720530853036,
                        "foodCategory": "quick breads and pastries",
                        "foodId": "food_apqpbdfbujbtraane617eaxwsjcw",
                        "image": null
                    }
                ],
                "calories": 1993.066447788369,
                "totalCO2Emissions": 5672.307889704705,
                "co2EmissionsClass": "E",
                "totalWeight": 1088.8545789022803,
                "totalTime": 42,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1993.066447788369,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 80.0298846562233,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 26.700591607150937,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 4.066455406715067,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 9.834421896031252,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 5.77212816009375,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 242.31984300012937,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 228.1083849205014,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 14.211458079627956,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 22.902161261598643,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 76.77901333853671,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 129.3805898875,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 7274.3768594294,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 211.24838952408697,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 85.27029494375,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 855.7711130609375,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 17.46650276431336,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 3.830796383421875,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 470.6547858140625,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 610.1256706453125,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 19.23275737359375,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.3484584585671875,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.5006883918531251,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 14.501648904487501,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.74872,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 65.875147471875,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 65.875147471875,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.406,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 1.6456898174062502,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 12.495052317343749,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 662.9381964520044,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 99.65332238941845,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 123.12289947111277,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 133.5029580357547,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 80.77328100004313,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 56.84583231851182,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 153.55802667707343,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 43.12686329583334,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 303.0990358095583,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 21.124838952408695,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 20.30245117708333,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 18.207896022573138,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 97.03612646840756,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 34.82542166747159,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 67.2363979734375,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 67.7917411828125,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 21.369730415104165,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 29.038204880598958,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 38.514491681009616,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 90.63530565304688,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 57.59384615384615,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 16.46878686796875,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 16.916666666666668,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 10.971265449375002,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 10.412543597786456,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 80.0298846562233,
                        "hasRDI": true,
                        "daily": 123.12289947111277,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 26.700591607150937,
                                "hasRDI": true,
                                "daily": 133.5029580357547,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 4.066455406715067,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 9.834421896031252,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 5.77212816009375,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 242.31984300012937,
                        "hasRDI": true,
                        "daily": 80.77328100004313,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 228.1083849205014,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 14.211458079627956,
                                "hasRDI": true,
                                "daily": 56.84583231851182,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 22.902161261598643,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 76.77901333853671,
                        "hasRDI": true,
                        "daily": 153.55802667707343,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 129.3805898875,
                        "hasRDI": true,
                        "daily": 43.12686329583334,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 7274.3768594294,
                        "hasRDI": true,
                        "daily": 303.0990358095583,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 211.24838952408697,
                        "hasRDI": true,
                        "daily": 21.124838952408695,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 85.27029494375,
                        "hasRDI": true,
                        "daily": 20.30245117708333,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 855.7711130609375,
                        "hasRDI": true,
                        "daily": 18.207896022573138,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 17.46650276431336,
                        "hasRDI": true,
                        "daily": 97.03612646840756,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 3.830796383421875,
                        "hasRDI": true,
                        "daily": 34.82542166747159,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 470.6547858140625,
                        "hasRDI": true,
                        "daily": 67.2363979734375,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 610.1256706453125,
                        "hasRDI": true,
                        "daily": 67.7917411828125,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 19.23275737359375,
                        "hasRDI": true,
                        "daily": 21.369730415104165,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.3484584585671875,
                        "hasRDI": true,
                        "daily": 29.038204880598958,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.5006883918531251,
                        "hasRDI": true,
                        "daily": 38.514491681009616,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 14.501648904487501,
                        "hasRDI": true,
                        "daily": 90.63530565304688,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.74872,
                        "hasRDI": true,
                        "daily": 57.59384615384615,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 65.875147471875,
                        "hasRDI": true,
                        "daily": 16.46878686796875,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 65.875147471875,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.406,
                        "hasRDI": true,
                        "daily": 16.916666666666668,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 1.6456898174062502,
                        "hasRDI": true,
                        "daily": 10.971265449375002,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 12.495052317343749,
                        "hasRDI": true,
                        "daily": 10.412543597786456,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 662.9381964520044,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ],
                "tags": [
                    "Chicken",
                    "Vegetable",
                    "Poultry",
                    "Pot Pie Recipes"
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/dd9b9c78d3131472db1e67677d4873b8?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_bba3c9cb8328fb1d2c45f55f51b201f1",
                "label": "Chicken and Stuffing Casserole",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/977/977c626fe73a233e4a3652f671a3ae2c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0b16f7d4f4f80c4c269d27182cd44af6c39e770856dc94d3cc5cab80a99371b6",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/977/977c626fe73a233e4a3652f671a3ae2c-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e7ca0b7fa32ed8638d20638e08d49c095a5d250e3144bf5a3d122f6bd2952a5d",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/977/977c626fe73a233e4a3652f671a3ae2c-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e4cd65832fd980ac41edbe7c01fb4b8495a74be203c29f445ee3e4eb52c434ff",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/977/977c626fe73a233e4a3652f671a3ae2c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0b16f7d4f4f80c4c269d27182cd44af6c39e770856dc94d3cc5cab80a99371b6",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/977/977c626fe73a233e4a3652f671a3ae2c-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d6496549cd00884164193b4bcbd44c27af3a8220adb8b566085dcd4ea564f115",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "The Daily Meal",
                "url": "http://www.thedailymeal.com/recipes/chicken-and-stuffing-casserole-16-recipe",
                "shareAs": "http://www.edamam.com/recipe/chicken-and-stuffing-casserole-bba3c9cb8328fb1d2c45f55f51b201f1/chicken/balanced/400-cal",
                "yield": 6,
                "dietLabels": [
                    "Balanced"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 (6-ounce) package stuffing, such as STOVE TOP Stuffing Mix for Chicken",
                    "1 1/2 ounce boneless skinless chicken breasts, cut into bite-size pieces",
                    "1 can (10 3/4 ounce) condensed cream of chicken soup",
                    "1/3 cup butter or sour cream, such as BREAKSTONES or KNUDSEN Sour Cream",
                    "1 (16-ounce) package frozen mixed vegetables (carrots, corn, green beans, peas), thawed, drained"
                ],
                "ingredients": [
                    {
                        "text": "1 (6-ounce) package stuffing, such as STOVE TOP Stuffing Mix for Chicken",
                        "quantity": 6,
                        "measure": "ounce",
                        "food": "STOVE TOP Stuffing Mix for Chicken",
                        "weight": 170.09713875,
                        "foodCategory": "quick breads and pastries",
                        "foodId": "food_arl9rxsb8bs7owb1gi522bcrm0pg",
                        "image": null
                    },
                    {
                        "text": "1 1/2 ounce boneless skinless chicken breasts, cut into bite-size pieces",
                        "quantity": 1.5,
                        "measure": "ounce",
                        "food": "boneless skinless chicken breasts",
                        "weight": 42.5242846875,
                        "foodCategory": "Poultry",
                        "foodId": "food_bdrxu94aj3x2djbpur8dhagfhkcn",
                        "image": "https://www.edamam.com/food-img/da5/da510379d3650787338ca16fb69f4c94.jpg"
                    },
                    {
                        "text": "1 can (10 3/4 ounce) condensed cream of chicken soup",
                        "quantity": 10.75,
                        "measure": "ounce",
                        "food": "condensed cream of chicken soup",
                        "weight": 304.75737359375,
                        "foodCategory": "canned soup",
                        "foodId": "food_bss83roarr59m6ahbwlfnb138xbk",
                        "image": "https://www.edamam.com/food-img/525/525584dcb2f4c027b7d0063e4204ba33.jpg"
                    },
                    {
                        "text": "1/3 cup butter or sour cream, such as BREAKSTONES or KNUDSEN Sour Cream",
                        "quantity": 0.3333333333333333,
                        "measure": "cup",
                        "food": "Sour Cream",
                        "weight": 76.66666666666666,
                        "foodCategory": "Dairy",
                        "foodId": "food_adp9fcubzl3lr7bcvzn3rbfiiiwq",
                        "image": "https://www.edamam.com/food-img/f9d/f9d6183267b041b0aff9a10b89c9c15f.jpg"
                    },
                    {
                        "text": "1 (16-ounce) package frozen mixed vegetables (carrots, corn, green beans, peas), thawed, drained",
                        "quantity": 16,
                        "measure": "ounce",
                        "food": "frozen mixed vegetables",
                        "weight": 453.59237,
                        "foodCategory": "vegetables",
                        "foodId": "food_bitqzx8b319psvbib2dufarphbxy",
                        "image": "https://www.edamam.com/food-img/f3f/f3fa6996eba331be219778406f67a5a3.jpg"
                    }
                ],
                "calories": 1451.767382896875,
                "totalCO2Emissions": 5765.926431173437,
                "co2EmissionsClass": "E",
                "totalWeight": 1047.6378336979167,
                "totalTime": 0,
                "cuisineType": [
                    "italian"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1451.767382896875,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 42.904633061255204,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 14.968918039817709,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.6132433665947916,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 10.230607852228125,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 5.090006530002084,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 210.94627299222918,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 188.5501497234792,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 22.396123268750003,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 21.439834164489586,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 55.228721616385414,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 107.46053659270834,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 4997.973994179168,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 342.78486978333336,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 140.62593012291666,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1802.970742113021,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 15.098758589104168,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 3.467127184296875,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 730.3629861526042,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 1436.6653242726043,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 53.78156943234376,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.3116861520317709,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.2230915926250003,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 17.549914987487504,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.8117539573489585,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 146.06412039375002,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 282.14183139375007,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.25030099784375,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 2.1751591449895837,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 13.64505231734375,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 721.2223691767708,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 72.58836914484374,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 66.00712778654648,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 74.84459019908854,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 70.31542433074306,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 89.58449307500001,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 110.45744323277081,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 35.82017886423611,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 208.24891642413198,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 34.27848697833333,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 33.48236431498015,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 38.36107961942598,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 83.88199216168982,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 31.519338039062504,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 104.33756945037204,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 159.6294804747338,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 59.75729936927084,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 109.30717933598092,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 94.08396866346156,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 109.6869686717969,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 62.44261210376603,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 36.516030098437504,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 10.429208243489583,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 14.501060966597226,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 11.370876931119792,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 42.904633061255204,
                        "hasRDI": true,
                        "daily": 66.00712778654648,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 14.968918039817709,
                                "hasRDI": true,
                                "daily": 74.84459019908854,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.6132433665947916,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 10.230607852228125,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 5.090006530002084,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 210.94627299222918,
                        "hasRDI": true,
                        "daily": 70.31542433074306,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 188.5501497234792,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 22.396123268750003,
                                "hasRDI": true,
                                "daily": 89.58449307500001,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 21.439834164489586,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 55.228721616385414,
                        "hasRDI": true,
                        "daily": 110.45744323277081,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 107.46053659270834,
                        "hasRDI": true,
                        "daily": 35.82017886423611,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 4997.973994179168,
                        "hasRDI": true,
                        "daily": 208.24891642413198,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 342.78486978333336,
                        "hasRDI": true,
                        "daily": 34.27848697833333,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 140.62593012291666,
                        "hasRDI": true,
                        "daily": 33.48236431498015,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1802.970742113021,
                        "hasRDI": true,
                        "daily": 38.36107961942598,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 15.098758589104168,
                        "hasRDI": true,
                        "daily": 83.88199216168982,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 3.467127184296875,
                        "hasRDI": true,
                        "daily": 31.519338039062504,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 730.3629861526042,
                        "hasRDI": true,
                        "daily": 104.33756945037204,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 1436.6653242726043,
                        "hasRDI": true,
                        "daily": 159.6294804747338,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 53.78156943234376,
                        "hasRDI": true,
                        "daily": 59.75729936927084,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.3116861520317709,
                        "hasRDI": true,
                        "daily": 109.30717933598092,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.2230915926250003,
                        "hasRDI": true,
                        "daily": 94.08396866346156,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 17.549914987487504,
                        "hasRDI": true,
                        "daily": 109.6869686717969,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.8117539573489585,
                        "hasRDI": true,
                        "daily": 62.44261210376603,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 146.06412039375002,
                        "hasRDI": true,
                        "daily": 36.516030098437504,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 282.14183139375007,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.25030099784375,
                        "hasRDI": true,
                        "daily": 10.429208243489583,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 2.1751591449895837,
                        "hasRDI": true,
                        "daily": 14.501060966597226,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 13.64505231734375,
                        "hasRDI": true,
                        "daily": 11.370876931119792,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 721.2223691767708,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ],
                "tags": [
                    "Chicken",
                    "Chicken Casserole",
                    "stuffing"
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/bba3c9cb8328fb1d2c45f55f51b201f1?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_41431fbe5ff4c2659505b24bba8c1baf",
                "label": "Chicken with Couscous and Orange",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/970/9707d953570f06e2c64d92a3aa41ae67?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5c620da98b74c2fc7b950f25c106df35e076f993d8de5e8d9373aa429a7610e7",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/970/9707d953570f06e2c64d92a3aa41ae67-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=05f6048845ae688956c07bcf8af4a28e8c43b602b26360f6a3b25bcfc4127c77",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/970/9707d953570f06e2c64d92a3aa41ae67-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7ddcb10504c4b34583c8648e41718d55257172f7383a6cd99e0c6ac2f2e84409",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/970/9707d953570f06e2c64d92a3aa41ae67?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5c620da98b74c2fc7b950f25c106df35e076f993d8de5e8d9373aa429a7610e7",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Martha Stewart",
                "url": "https://www.marthastewart.com/331830/chicken-with-couscous-and-orange",
                "shareAs": "http://www.edamam.com/recipe/chicken-with-couscous-and-orange-41431fbe5ff4c2659505b24bba8c1baf/chicken/balanced/400-cal",
                "yield": 4,
                "dietLabels": [
                    "Balanced"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Mediterranean",
                    "Dairy-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 cup couscous",
                    "1 cup shredded rotisserie chicken",
                    "1/3 cup pistachios, toasted and coarsely chopped",
                    "1 navel orange, peeled and coarsely chopped",
                    "2 tablespoons chopped fresh mint leaves",
                    "2 teaspoons extra-virgin olive oil",
                    "2 teaspoons red-wine vinegar",
                    "Coarse salt and ground pepper"
                ],
                "ingredients": [
                    {
                        "text": "1 cup couscous",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "couscous",
                        "weight": 173,
                        "foodCategory": "grains",
                        "foodId": "food_ath4mfgbrn9z6gaijwn1wb2pf4oq",
                        "image": "https://www.edamam.com/food-img/b27/b273b8089a4447e46e66d20423b386cb.jpg"
                    },
                    {
                        "text": "1 cup shredded rotisserie chicken",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "chicken",
                        "weight": 140,
                        "foodCategory": "Poultry",
                        "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
                        "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
                    },
                    {
                        "text": "1/3 cup pistachios, toasted and coarsely chopped",
                        "quantity": 0.3333333333333333,
                        "measure": "cup",
                        "food": "pistachios",
                        "weight": 41,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_apsiasib4lwjivakg7bouakq9l6s",
                        "image": "https://www.edamam.com/food-img/1ed/1eda10468a9c3df61f8208fe156e832d.jpg"
                    },
                    {
                        "text": "1 navel orange, peeled and coarsely chopped",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "navel orange",
                        "weight": 140,
                        "foodCategory": "fruit",
                        "foodId": "food_agbq12basb38ixb00moxbahrx6f9",
                        "image": "https://www.edamam.com/food-img/ffc/ffcb7b039bfc783fcfb417489160366e.jpg"
                    },
                    {
                        "text": "2 tablespoons chopped fresh mint leaves",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "mint leaves",
                        "weight": 11.4,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bxl4xoga4owdkeay51sy8anesxj5",
                        "image": "https://www.edamam.com/food-img/7f0/7f01cc4f71c5c6ad31051ed74b9c058b.jpg"
                    },
                    {
                        "text": "2 teaspoons extra-virgin olive oil",
                        "quantity": 2,
                        "measure": "teaspoon",
                        "food": "extra-virgin olive oil",
                        "weight": 9,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                    },
                    {
                        "text": "2 teaspoons red-wine vinegar",
                        "quantity": 2,
                        "measure": "teaspoon",
                        "food": "red-wine vinegar",
                        "weight": 10,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_ad6iyy1anmzb49a817rgnabnz8c9",
                        "image": "https://www.edamam.com/food-img/dc8/dc8e998b32b8d45ba15c1b1e6711e958.jpg"
                    },
                    {
                        "text": "Coarse salt and ground pepper",
                        "quantity": 0,
                        "measure": null,
                        "food": "Coarse salt",
                        "weight": 3.1464,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Coarse salt and ground pepper",
                        "quantity": 0,
                        "measure": null,
                        "food": "ground pepper",
                        "weight": 1.5732,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    }
                ],
                "calories": 1340.104732,
                "totalCO2Emissions": 1811.4462149639999,
                "co2EmissionsClass": "D",
                "totalWeight": 528.8116420544742,
                "totalTime": 0,
                "cuisineType": [
                    "mediterranean"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1340.104732,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 50.16470632,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 9.96895148,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.1358,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 25.069445948000002,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 11.910976536000002,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 164.546588,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 147.2973684,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 17.249219600000004,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 15.05066848,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 58.28267280000001,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 105.00000000000001,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 1223.1401571360002,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 191.19650209307383,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 179.43055642054475,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1279.732635364358,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 6.531724578779765,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 4.432719522054475,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 743.125656,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 108.42676399999999,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 88.8422,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.8284810560000001,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.46272176000000004,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 16.81170648,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.510490012,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 123.74744399999999,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 123.74744399999999,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.43400000000000005,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.28,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 3.11496128,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 10.098048,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 248.81122688410895,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 67.0052366,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 77.17647126153847,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 49.8447574,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 54.84886266666667,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 68.99687840000001,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 116.56534560000001,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 35.00000000000001,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 50.964173214000006,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 19.119650209307384,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 42.72156105251065,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 27.22835394392251,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 36.287358770998694,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 40.29745020049523,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 106.160808,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 12.04741822222222,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 98.71355555555557,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 69.04008800000001,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 35.59398153846154,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 105.07316550000002,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 116.19153938461537,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 30.936861,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 18.083333333333336,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 1.866666666666667,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 20.766408533333333,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 8.41504,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 50.16470632,
                        "hasRDI": true,
                        "daily": 77.17647126153847,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 9.96895148,
                                "hasRDI": true,
                                "daily": 49.8447574,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.1358,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 25.069445948000002,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 11.910976536000002,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 164.546588,
                        "hasRDI": true,
                        "daily": 54.84886266666667,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 147.2973684,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 17.249219600000004,
                                "hasRDI": true,
                                "daily": 68.99687840000001,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 15.05066848,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 58.28267280000001,
                        "hasRDI": true,
                        "daily": 116.56534560000001,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 105.00000000000001,
                        "hasRDI": true,
                        "daily": 35.00000000000001,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1223.1401571360002,
                        "hasRDI": true,
                        "daily": 50.964173214000006,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 191.19650209307383,
                        "hasRDI": true,
                        "daily": 19.119650209307384,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 179.43055642054475,
                        "hasRDI": true,
                        "daily": 42.72156105251065,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1279.732635364358,
                        "hasRDI": true,
                        "daily": 27.22835394392251,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 6.531724578779765,
                        "hasRDI": true,
                        "daily": 36.287358770998694,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 4.432719522054475,
                        "hasRDI": true,
                        "daily": 40.29745020049523,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 743.125656,
                        "hasRDI": true,
                        "daily": 106.160808,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 108.42676399999999,
                        "hasRDI": true,
                        "daily": 12.04741822222222,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 88.8422,
                        "hasRDI": true,
                        "daily": 98.71355555555557,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.8284810560000001,
                        "hasRDI": true,
                        "daily": 69.04008800000001,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.46272176000000004,
                        "hasRDI": true,
                        "daily": 35.59398153846154,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 16.81170648,
                        "hasRDI": true,
                        "daily": 105.07316550000002,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.510490012,
                        "hasRDI": true,
                        "daily": 116.19153938461537,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 123.74744399999999,
                        "hasRDI": true,
                        "daily": 30.936861,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 123.74744399999999,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.43400000000000005,
                        "hasRDI": true,
                        "daily": 18.083333333333336,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.28,
                        "hasRDI": true,
                        "daily": 1.866666666666667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 3.11496128,
                        "hasRDI": true,
                        "daily": 20.766408533333333,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 10.098048,
                        "hasRDI": true,
                        "daily": 8.41504,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 248.81122688410895,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/41431fbe5ff4c2659505b24bba8c1baf?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_96de7c7501509b658ba6a3802c6d3ad4",
                "label": "Chicken Tinga",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/d7a/d7aadde1ff6875e8d46f46c692691d73.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f1940e8e5018520ca80746ebb8ff1d5feaab587d005a1f3a5ad47eead83078bb",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d7a/d7aadde1ff6875e8d46f46c692691d73-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=87df9bd38659f48be6f2b9d3081675a46ca3ce6922508ef8912d1f1cb3e701e2",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d7a/d7aadde1ff6875e8d46f46c692691d73-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3f2c9b2e35930edeb30f34d843ba0ab89d5aa5318be5e18c63ca3937d93c83b6",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d7a/d7aadde1ff6875e8d46f46c692691d73.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f1940e8e5018520ca80746ebb8ff1d5feaab587d005a1f3a5ad47eead83078bb",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Food52",
                "url": "https://food52.com/recipes/75466-chicken-tinga",
                "shareAs": "http://www.edamam.com/recipe/chicken-tinga-96de7c7501509b658ba6a3802c6d3ad4/chicken/balanced/400-cal",
                "yield": 4,
                "dietLabels": [
                    "Balanced",
                    "High-Fiber"
                ],
                "healthLabels": [
                    "Mediterranean",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Eggs",
                    "Milk",
                    "Sulfites"
                ],
                "ingredientLines": [
                    "6 roma tomatoes",
                    "4 large tomatillos (or a hefty handful, if they're small), peeled",
                    "4-6 cloves garlic",
                    ".5 white onion, in ~.5\" slices",
                    "4 serrano chilis",
                    "1 7oz can chipotle chilis, in sauce",
                    "2-6 cloves garlic",
                    "1 fully cooked chicken breast, shredded",
                    "8 tortillas",
                    "8 lime wedges",
                    ".5 head purple cabbage, shredded",
                    "1 avocado, sliced",
                    "1 bunch cilantro"
                ],
                "ingredients": [
                    {
                        "text": "6 roma tomatoes",
                        "quantity": 6,
                        "measure": "<unit>",
                        "food": "roma tomatoes",
                        "weight": 372,
                        "foodCategory": "vegetables",
                        "foodId": "food_ab8jymba5i5xv3apgymg7a90bxb5",
                        "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
                    },
                    {
                        "text": "4 large tomatillos (or a hefty handful, if they're small), peeled",
                        "quantity": 4,
                        "measure": "<unit>",
                        "food": "tomatillos",
                        "weight": 170,
                        "foodCategory": "vegetables",
                        "foodId": "food_b1hu23zbkkdxvxahih2pqax135q7",
                        "image": "https://www.edamam.com/food-img/ef3/ef3a3787e3c6387257de5009bd264e91.jpeg"
                    },
                    {
                        "text": "4-6 cloves garlic",
                        "quantity": 5,
                        "measure": "clove",
                        "food": "garlic",
                        "weight": 15,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": ".5 white onion, in ~.5\" slices",
                        "quantity": 0.5,
                        "measure": "<unit>",
                        "food": "white onion",
                        "weight": 62.5,
                        "foodCategory": "vegetables",
                        "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                        "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                    },
                    {
                        "text": "4 serrano chilis",
                        "quantity": 4,
                        "measure": "<unit>",
                        "food": "serrano chilis",
                        "weight": 24.4,
                        "foodCategory": "vegetables",
                        "foodId": "food_akybxs9atrgwona5nz3jgbo3vor5",
                        "image": "https://www.edamam.com/food-img/e3d/e3d161d6cfe5ef287053aed5461738ba.jpg"
                    },
                    {
                        "text": "1 7oz can chipotle chilis, in sauce",
                        "quantity": 7,
                        "measure": "ounce",
                        "food": "chipotle chilis",
                        "weight": 198.44666187500002,
                        "foodCategory": "canned vegetables",
                        "foodId": "food_bumzpysb5k05cibmscqp2a0fwgpa",
                        "image": "https://www.edamam.com/food-img/c34/c343c40fbfe50bd72bbb3890c83a4315.jpeg"
                    },
                    {
                        "text": "2-6 cloves garlic",
                        "quantity": 4,
                        "measure": "clove",
                        "food": "garlic",
                        "weight": 12,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "1 fully cooked chicken breast, shredded",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "cooked chicken breast",
                        "weight": 52,
                        "foodCategory": "Poultry",
                        "foodId": "food_bncmum7a55r0byaf6mm9xbnk39my",
                        "image": "https://www.edamam.com/food-img/44c/44c95571e5b3071f266e0e742e670585.jpg"
                    },
                    {
                        "text": "8 tortillas",
                        "quantity": 8,
                        "measure": "<unit>",
                        "food": "tortillas",
                        "weight": 192,
                        "foodCategory": "quick breads and pastries",
                        "foodId": "food_bhw0b95agm97s0abfignnb8fsvb3",
                        "image": "https://www.edamam.com/food-img/b8a/b8ad23dcc06f2324f944e47eb579d644.jpg"
                    },
                    {
                        "text": "8 lime wedges",
                        "quantity": 8,
                        "measure": "wedge",
                        "food": "lime",
                        "weight": 67,
                        "foodCategory": "fruit",
                        "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
                        "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
                    },
                    {
                        "text": ".5 head purple cabbage, shredded",
                        "quantity": 0.5,
                        "measure": "head",
                        "food": "purple cabbage",
                        "weight": 417.0333333333333,
                        "foodCategory": "vegetables",
                        "foodId": "food_as6y3qxbhlnjdbbt1z5xkb0ghgne",
                        "image": "https://www.edamam.com/food-img/222/2227613966b545ff65df7c8c4b311fc1.jpg"
                    },
                    {
                        "text": "1 avocado, sliced",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "avocado",
                        "weight": 201,
                        "foodCategory": "fruit",
                        "foodId": "food_b0yuze4b1g3afpanijno5abtiu28",
                        "image": "https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg"
                    },
                    {
                        "text": "1 bunch cilantro",
                        "quantity": 1,
                        "measure": "bunch",
                        "food": "cilantro",
                        "weight": 40,
                        "foodCategory": "vegetables",
                        "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
                        "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
                    }
                ],
                "calories": 1220.6121323270834,
                "totalCO2Emissions": 2834.1065233187505,
                "co2EmissionsClass": "E",
                "totalWeight": 1823.3799952083332,
                "totalTime": 0,
                "cuisineType": [
                    "asian"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "bread"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1220.6121323270834,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 40.865959995208335,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 6.2091576661875,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 22.251647799712504,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 8.430305330697918,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 192.94453642229166,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 142.82172981791666,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 50.12280660437499,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 47.37642584091667,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 47.88945662354167,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 44.2,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 2622.9449439375007,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 552.93526633125,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 413.82586599583334,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 4737.49625770625,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 12.304889976041666,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 7.339422658520834,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1240.84093251875,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 1745.5343048229163,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 517.908330075,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.0134066657083334,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.1070753309375,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 23.40211262833333,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 3.438503059335417,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 385.55766618750005,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 385.55766618750005,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.1768,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.052000000000000005,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 10.671378633604167,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 393.4857929164583,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 1526.5965955677084,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 61.03060661635417,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 62.8707076849359,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 31.0457883309375,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 64.31484547409723,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 200.49122641749997,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 95.77891324708335,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 14.733333333333333,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 109.28937266406254,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 55.293526633125,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 98.52996809424604,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 100.79779271715425,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 68.36049986689814,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 66.72202416837122,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 177.2629903598214,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 193.94825609143513,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 575.4537000833333,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 84.45055547569444,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 85.15964084134616,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 146.2632039270833,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 264.5002353334936,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 96.38941654687501,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 7.366666666666667,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.3466666666666667,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 71.14252422402778,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 327.90482743038194,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 40.865959995208335,
                        "hasRDI": true,
                        "daily": 62.8707076849359,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 6.2091576661875,
                                "hasRDI": true,
                                "daily": 31.0457883309375,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 22.251647799712504,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 8.430305330697918,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 192.94453642229166,
                        "hasRDI": true,
                        "daily": 64.31484547409723,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 142.82172981791666,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 50.12280660437499,
                                "hasRDI": true,
                                "daily": 200.49122641749997,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 47.37642584091667,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 47.88945662354167,
                        "hasRDI": true,
                        "daily": 95.77891324708335,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 44.2,
                        "hasRDI": true,
                        "daily": 14.733333333333333,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 2622.9449439375007,
                        "hasRDI": true,
                        "daily": 109.28937266406254,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 552.93526633125,
                        "hasRDI": true,
                        "daily": 55.293526633125,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 413.82586599583334,
                        "hasRDI": true,
                        "daily": 98.52996809424604,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 4737.49625770625,
                        "hasRDI": true,
                        "daily": 100.79779271715425,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 12.304889976041666,
                        "hasRDI": true,
                        "daily": 68.36049986689814,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 7.339422658520834,
                        "hasRDI": true,
                        "daily": 66.72202416837122,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1240.84093251875,
                        "hasRDI": true,
                        "daily": 177.2629903598214,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 1745.5343048229163,
                        "hasRDI": true,
                        "daily": 193.94825609143513,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 517.908330075,
                        "hasRDI": true,
                        "daily": 575.4537000833333,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.0134066657083334,
                        "hasRDI": true,
                        "daily": 84.45055547569444,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.1070753309375,
                        "hasRDI": true,
                        "daily": 85.15964084134616,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 23.40211262833333,
                        "hasRDI": true,
                        "daily": 146.2632039270833,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 3.438503059335417,
                        "hasRDI": true,
                        "daily": 264.5002353334936,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 385.55766618750005,
                        "hasRDI": true,
                        "daily": 96.38941654687501,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 385.55766618750005,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.1768,
                        "hasRDI": true,
                        "daily": 7.366666666666667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.052000000000000005,
                        "hasRDI": true,
                        "daily": 0.3466666666666667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 10.671378633604167,
                        "hasRDI": true,
                        "daily": 71.14252422402778,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 393.4857929164583,
                        "hasRDI": true,
                        "daily": 327.90482743038194,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1526.5965955677084,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/96de7c7501509b658ba6a3802c6d3ad4?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_967527f54a04457eb97306c3259dc598",
                "label": "Chili Chicken Wings",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/49f/49f6a4654bb62a4385dea66c52be811b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=662beccddb46ec79f05edfe45c2467d04f8f7e7bd87529b2348a6b99f82882ae",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/49f/49f6a4654bb62a4385dea66c52be811b-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9f904d54969115a7bf1e11f517441d2940be0729f7c595487474247bd9b63635",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/49f/49f6a4654bb62a4385dea66c52be811b-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e3d641a2061ce0f9ea121216b63e1bf58110cf74a7fd2e947ac14ebc87564737",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/49f/49f6a4654bb62a4385dea66c52be811b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=662beccddb46ec79f05edfe45c2467d04f8f7e7bd87529b2348a6b99f82882ae",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Epicurious",
                "url": "https://www.epicurious.com/recipes/food/views/chili-chicken-wings-241548",
                "shareAs": "http://www.edamam.com/recipe/chili-chicken-wings-967527f54a04457eb97306c3259dc598/chicken/balanced/400-cal",
                "yield": 10,
                "dietLabels": [
                    "Balanced"
                ],
                "healthLabels": [
                    "Dairy-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Gluten",
                    "Wheat",
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 1/2 cups rice or cider vinegar",
                    "1 cup sugar",
                    "3/4 cup ketchup",
                    "6 tablespoons Chinese plum sauce",
                    "1 tablespoon hoisin sauce",
                    "2 tablespoons finely chopped garlic",
                    "2 tablespoons (or to taste) finely chopped fresh red, jalapeño or serrano chili, with seeds",
                    "3 tablespoons finely minced fresh ginger",
                    "1 teaspoon salt, or to taste",
                    "1 tablespoon cornstarch mixed with 1 tablespoon cold water",
                    "30 chicken wings (tips removed), rinsed and patted dry",
                    "2 tablespoons chopped cilantro, for garnish"
                ],
                "ingredients": [
                    {
                        "text": "1 1/2 cups rice or cider vinegar",
                        "quantity": 1.5,
                        "measure": "cup",
                        "food": "cider vinegar",
                        "weight": 358.5,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_ar8m7esapmfvf8bnhfzdlabndh6v",
                        "image": "https://www.edamam.com/food-img/c7d/c7dbd1846c5d08e9739930d70a404d50.jpg"
                    },
                    {
                        "text": "1 cup sugar",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "sugar",
                        "weight": 200,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "3/4 cup ketchup",
                        "quantity": 0.75,
                        "measure": "cup",
                        "food": "ketchup",
                        "weight": 180,
                        "foodCategory": "condiments and sauces",
                        "foodId": "food_au7jthtab0n3era9uue8pauakroe",
                        "image": "https://www.edamam.com/food-img/257/257207c446011b849001ae596390341c.jpeg"
                    },
                    {
                        "text": "6 tablespoons Chinese plum sauce",
                        "quantity": 6,
                        "measure": "tablespoon",
                        "food": "plum sauce",
                        "weight": 114,
                        "foodCategory": "canned soup",
                        "foodId": "food_bgsomw9as5pw2ya3luf38bfeu0nj",
                        "image": "https://www.edamam.com/food-img/9d5/9d5d428fe8e7515636c5e70132a3b448.jpg"
                    },
                    {
                        "text": "1 tablespoon hoisin sauce",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "hoisin sauce",
                        "weight": 16,
                        "foodCategory": "canned soup",
                        "foodId": "food_a50yq9jao6jvt5a4oxygsbmfbeuy",
                        "image": "https://www.edamam.com/food-img/c52/c529c507459e9133ad8689cec193f713.jpg"
                    },
                    {
                        "text": "2 tablespoons finely chopped garlic",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "garlic",
                        "weight": 16.999999999712582,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "2 tablespoons (or to taste) finely chopped fresh red, jalapeño or serrano chili, with seeds",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "serrano chili",
                        "weight": 13.124999999778096,
                        "foodCategory": "vegetables",
                        "foodId": "food_akybxs9atrgwona5nz3jgbo3vor5",
                        "image": "https://www.edamam.com/food-img/e3d/e3d161d6cfe5ef287053aed5461738ba.jpg"
                    },
                    {
                        "text": "3 tablespoons finely minced fresh ginger",
                        "quantity": 3,
                        "measure": "tablespoon",
                        "food": "fresh ginger",
                        "weight": 17.99999999969568,
                        "foodCategory": "vegetables",
                        "foodId": "food_bi2ki2xb5zmmvbaiwf7ztbgktzp6",
                        "image": "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg"
                    },
                    {
                        "text": "1 teaspoon salt, or to taste",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "salt",
                        "weight": 6,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "1 tablespoon cornstarch mixed with 1 tablespoon cold water",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "cornstarch",
                        "weight": 7.999999999864745,
                        "foodCategory": "grains",
                        "foodId": "food_a6r17hrba37cqeabesko5a2gk233",
                        "image": "https://www.edamam.com/food-img/f9b/f9b74d9495b40c0aea955c37a1fc39dc.jpg"
                    },
                    {
                        "text": "30 chicken wings (tips removed), rinsed and patted dry",
                        "quantity": 30,
                        "measure": "<unit>",
                        "food": "chicken wings",
                        "weight": 750,
                        "foodCategory": "Poultry",
                        "foodId": "food_aftnyj9ap60fc6av2a9nfbju90c1",
                        "image": "https://www.edamam.com/food-img/f92/f928682fc890edded472c5d8baeffed5.jpg"
                    },
                    {
                        "text": "2 tablespoons chopped cilantro, for garnish",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "cilantro",
                        "weight": 1.999999999966186,
                        "foodCategory": "vegetables",
                        "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
                        "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
                    }
                ],
                "calories": 2783.4149999987344,
                "totalCO2Emissions": 9257.308219667,
                "co2EmissionsClass": "E",
                "totalWeight": 1678.5212123830322,
                "totalTime": 0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2783.414999998735,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 98.20014999999506,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 26.90091374999898,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.4575,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 41.144068749999334,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 19.868107499998278,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 325.5898249997111,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 322.47319999973354,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 3.1166249999775033,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 244.73808749998315,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 199.60000000000002,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 136.36677499997126,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 832.98,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 3898.9579049977146,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 192.44384097154494,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 194.50146212357572,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 2682.0179469874483,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 7.277932500857396,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 10.121421212378818,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1068.519999999334,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 129.48874999978176,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 20.65112499978634,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.49288749999920656,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.2784712499993458,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 47.14092499999191,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 4.652101249994778,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 85.96874999988589,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 85.96874999988589,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1.875,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.75,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 7.673762499996601,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 13.535749999863803,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 1085.419142424117,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 139.17074999993673,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 151.07715384614625,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 134.50456874999492,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 108.52994166657037,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 12.466499999910013,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 272.7335499999425,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 277.66,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 162.45657937490478,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 19.244384097154494,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 46.3098719341847,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 57.06421163803082,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 40.43295833809665,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 92.01292011253472,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 152.64571428561914,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 14.38763888886464,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 22.945694444207042,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 41.073958333267214,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 98.34394230764198,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 294.63078124994945,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 357.8539423072906,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 21.492187499971475,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 78.125,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 5,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 51.15841666664401,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 11.27979166655317,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 98.20014999999506,
                        "hasRDI": true,
                        "daily": 151.07715384614625,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 26.90091374999898,
                                "hasRDI": true,
                                "daily": 134.50456874999492,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.4575,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 41.144068749999334,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 19.868107499998278,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 325.5898249997111,
                        "hasRDI": true,
                        "daily": 108.52994166657037,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 322.47319999973354,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 3.1166249999775033,
                                "hasRDI": true,
                                "daily": 12.466499999910013,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 244.73808749998315,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 199.60000000000002,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 136.36677499997126,
                        "hasRDI": true,
                        "daily": 272.7335499999425,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 832.98,
                        "hasRDI": true,
                        "daily": 277.66,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 3898.9579049977146,
                        "hasRDI": true,
                        "daily": 162.45657937490478,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 192.44384097154494,
                        "hasRDI": true,
                        "daily": 19.244384097154494,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 194.50146212357572,
                        "hasRDI": true,
                        "daily": 46.3098719341847,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 2682.0179469874483,
                        "hasRDI": true,
                        "daily": 57.06421163803082,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 7.277932500857396,
                        "hasRDI": true,
                        "daily": 40.43295833809665,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 10.121421212378818,
                        "hasRDI": true,
                        "daily": 92.01292011253472,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1068.519999999334,
                        "hasRDI": true,
                        "daily": 152.64571428561914,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 129.48874999978176,
                        "hasRDI": true,
                        "daily": 14.38763888886464,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 20.65112499978634,
                        "hasRDI": true,
                        "daily": 22.945694444207042,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.49288749999920656,
                        "hasRDI": true,
                        "daily": 41.073958333267214,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.2784712499993458,
                        "hasRDI": true,
                        "daily": 98.34394230764198,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 47.14092499999191,
                        "hasRDI": true,
                        "daily": 294.63078124994945,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 4.652101249994778,
                        "hasRDI": true,
                        "daily": 357.8539423072906,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 85.96874999988589,
                        "hasRDI": true,
                        "daily": 21.492187499971475,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 85.96874999988589,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 1.875,
                        "hasRDI": true,
                        "daily": 78.125,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.75,
                        "hasRDI": true,
                        "daily": 5,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 7.673762499996601,
                        "hasRDI": true,
                        "daily": 51.15841666664401,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 13.535749999863803,
                        "hasRDI": true,
                        "daily": 11.27979166655317,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1085.419142424117,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/967527f54a04457eb97306c3259dc598?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_e7e8b09a8fe3e09f83cfc7bc475a474d",
                "label": "Caribbean Chicken",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/30a/30afc56cae13b708dbc1b194b95d0a70.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4c464010bc75df06ceb887924300cd9838d064c3cf0c14d3f817508522904ca0",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/30a/30afc56cae13b708dbc1b194b95d0a70-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=08938cc5bad8389ec510c65b675170d82bd0a31c07ffcc68cd58a2b275fea50d",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/30a/30afc56cae13b708dbc1b194b95d0a70-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3ffdb86a32cdfc99dcda7aa42eec8ecf85c8c2dee514e017d57efc64e84c95c7",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/30a/30afc56cae13b708dbc1b194b95d0a70.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4c464010bc75df06ceb887924300cd9838d064c3cf0c14d3f817508522904ca0",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/30a/30afc56cae13b708dbc1b194b95d0a70-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=225f61d1259e87e8b521f8ce460191f3ac4f1ca66fff1e6e061b33fb542258b0",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Food52",
                "url": "https://food52.com/recipes/29799-caribbean-chicken",
                "shareAs": "http://www.edamam.com/recipe/caribbean-chicken-e7e8b09a8fe3e09f83cfc7bc475a474d/chicken/balanced/400-cal",
                "yield": 6,
                "dietLabels": [
                    "Balanced"
                ],
                "healthLabels": [
                    "Dairy-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "2 large tomatoes, roughly chopped",
                    "2 large onions, roughly chopped",
                    "6 garlic cloves, chopped",
                    "1/2 cup Worcestershire sauce",
                    "1/2 cup balsamic vinegar",
                    "1/2 cup fresh cilantro, chopped",
                    "1 teaspoon Kosher salt",
                    "1 teaspoon freshly ground black pepper",
                    "2 teaspoons dried thyme",
                    "4 pounds chicken thighs and/or drumsticks",
                    "3 tablespoons olive oil",
                    "4 tablespoons sugar",
                    "1 1/2 cups water",
                    "1/2 cup organic ketchup"
                ],
                "ingredients": [
                    {
                        "text": "2 large tomatoes, roughly chopped",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "tomatoes",
                        "weight": 307.5,
                        "foodCategory": "vegetables",
                        "foodId": "food_a6k79rrahp8fe2b26zussa3wtkqh",
                        "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
                    },
                    {
                        "text": "2 large onions, roughly chopped",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "onions",
                        "weight": 300,
                        "foodCategory": "vegetables",
                        "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                        "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                    },
                    {
                        "text": "6 garlic cloves, chopped",
                        "quantity": 6,
                        "measure": "clove",
                        "food": "garlic",
                        "weight": 18,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "1/2 cup Worcestershire sauce",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "Worcestershire sauce",
                        "weight": 137.5,
                        "foodCategory": "canned soup",
                        "foodId": "food_ahb8mscbejo58ubexo0itam1i74g",
                        "image": "https://www.edamam.com/food-img/072/072b61dd1ad5bb641f05b14f716ba6d0.jpg"
                    },
                    {
                        "text": "1/2 cup balsamic vinegar",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "balsamic vinegar",
                        "weight": 127.5,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b1ic8tzapja8jubas1f8lbhpbn6x",
                        "image": "https://www.edamam.com/food-img/90a/90a1f211768e166ecfff19e8b4747498.jpg"
                    },
                    {
                        "text": "1/2 cup fresh cilantro, chopped",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "cilantro",
                        "weight": 8,
                        "foodCategory": "vegetables",
                        "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
                        "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
                    },
                    {
                        "text": "1 teaspoon Kosher salt",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "Kosher salt",
                        "weight": 4.854166666912875,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "1 teaspoon freshly ground black pepper",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "black pepper",
                        "weight": 2.3,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "2 teaspoons dried thyme",
                        "quantity": 2,
                        "measure": "teaspoon",
                        "food": "dried thyme",
                        "weight": 2,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
                        "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
                    },
                    {
                        "text": "4 pounds chicken thighs and/or drumsticks",
                        "quantity": 1,
                        "measure": "chicken",
                        "food": "drumsticks",
                        "weight": 245,
                        "foodCategory": "Poultry",
                        "foodId": "food_agzvc6lbxg03stab195szars32lx",
                        "image": "https://www.edamam.com/food-img/491/4916353c22bd1ac381ac81d55597ddbe.jpg"
                    },
                    {
                        "text": "3 tablespoons olive oil",
                        "quantity": 3,
                        "measure": "tablespoon",
                        "food": "olive oil",
                        "weight": 40.5,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                    },
                    {
                        "text": "4 tablespoons sugar",
                        "quantity": 4,
                        "measure": "tablespoon",
                        "food": "sugar",
                        "weight": 49.9999999991548,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "1 1/2 cups water",
                        "quantity": 1.5,
                        "measure": "cup",
                        "food": "water",
                        "weight": 354.88235475,
                        "foodCategory": "water",
                        "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                        "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
                    },
                    {
                        "text": "1/2 cup organic ketchup",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "ketchup",
                        "weight": 120,
                        "foodCategory": "condiments and sauces",
                        "foodId": "food_au7jthtab0n3era9uue8pauakroe",
                        "image": "https://www.edamam.com/food-img/257/257207c446011b849001ae596390341c.jpeg"
                    }
                ],
                "calories": 1500.547999996729,
                "totalCO2Emissions": 6001.659919069717,
                "co2EmissionsClass": "E",
                "totalWeight": 1715.1613908525878,
                "totalTime": 0,
                "cuisineType": [
                    "caribbean"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1500.547999996729,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 64.43018000000001,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 11.94861,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.11515,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 38.881702000000004,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 9.504699,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 180.20784999915477,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 169.13394999915477,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 11.073899999999998,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 129.4407699991565,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 49.89999999915649,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 53.960350000000005,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 225.40000000000003,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 3983.9713023220647,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 416.8554393073155,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 175.18161390853433,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 3426.018322888258,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 15.234510819140908,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 6.599237271578348,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 737.1090000000002,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 232.90600000000006,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 95.8985,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.618679,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.0495049999998394,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 17.05087,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.8936629999999997,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 143.64600000000002,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 143.64600000000002,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1.2985000000000002,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.24500000000000005,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 10.267920000000002,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 124.0515,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 1395.968730467457,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 75.02739999983645,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 99.12335384615386,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 59.743050000000004,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 60.069283333051594,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 44.29559999999999,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 107.92070000000001,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 75.13333333333334,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 165.99880426341937,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 41.685543930731555,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 41.70990807346056,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 72.89400686996294,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 84.63617121744949,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 59.99306610525771,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 105.30128571428573,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 25.87844444444445,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 106.55388888888889,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 51.556583333333336,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 80.73115384614148,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 106.5679375,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 145.66638461538457,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 35.911500000000004,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 54.10416666666668,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 1.6333333333333335,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 68.45280000000001,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 103.37625,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 64.43018000000001,
                        "hasRDI": true,
                        "daily": 99.12335384615386,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 11.94861,
                                "hasRDI": true,
                                "daily": 59.743050000000004,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.11515,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 38.881702000000004,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 9.504699,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 180.20784999915477,
                        "hasRDI": true,
                        "daily": 60.069283333051594,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 169.13394999915477,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 11.073899999999998,
                                "hasRDI": true,
                                "daily": 44.29559999999999,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 129.4407699991565,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 49.89999999915649,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 53.960350000000005,
                        "hasRDI": true,
                        "daily": 107.92070000000001,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 225.40000000000003,
                        "hasRDI": true,
                        "daily": 75.13333333333334,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 3983.9713023220647,
                        "hasRDI": true,
                        "daily": 165.99880426341937,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 416.8554393073155,
                        "hasRDI": true,
                        "daily": 41.685543930731555,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 175.18161390853433,
                        "hasRDI": true,
                        "daily": 41.70990807346056,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 3426.018322888258,
                        "hasRDI": true,
                        "daily": 72.89400686996294,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 15.234510819140908,
                        "hasRDI": true,
                        "daily": 84.63617121744949,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 6.599237271578348,
                        "hasRDI": true,
                        "daily": 59.99306610525771,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 737.1090000000002,
                        "hasRDI": true,
                        "daily": 105.30128571428573,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 232.90600000000006,
                        "hasRDI": true,
                        "daily": 25.87844444444445,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 95.8985,
                        "hasRDI": true,
                        "daily": 106.55388888888889,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.618679,
                        "hasRDI": true,
                        "daily": 51.556583333333336,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.0495049999998394,
                        "hasRDI": true,
                        "daily": 80.73115384614148,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 17.05087,
                        "hasRDI": true,
                        "daily": 106.5679375,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.8936629999999997,
                        "hasRDI": true,
                        "daily": 145.66638461538457,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 143.64600000000002,
                        "hasRDI": true,
                        "daily": 35.911500000000004,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 143.64600000000002,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 1.2985000000000002,
                        "hasRDI": true,
                        "daily": 54.10416666666668,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.24500000000000005,
                        "hasRDI": true,
                        "daily": 1.6333333333333335,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 10.267920000000002,
                        "hasRDI": true,
                        "daily": 68.45280000000001,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 124.0515,
                        "hasRDI": true,
                        "daily": 103.37625,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1395.968730467457,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/e7e8b09a8fe3e09f83cfc7bc475a474d?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_8c06e22cd60826b142640220423751d6",
                "label": "Curried Chicken-and-Potato Pie",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/3c0/3c054472057660ea073b0e9b8249cc3e?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d41cbedce16ed947ad66291de86dd2ee1f856247647f620561de43cc2828a067",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/3c0/3c054472057660ea073b0e9b8249cc3e-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=71bb98007fac6b33d0f33560560cea47e3631c652263061cbf659f4c2d7b7054",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/3c0/3c054472057660ea073b0e9b8249cc3e-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5d4c7812e25268bde90341df73f064b3b855e9701327a633671cd41664bc3645",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/3c0/3c054472057660ea073b0e9b8249cc3e?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d41cbedce16ed947ad66291de86dd2ee1f856247647f620561de43cc2828a067",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Martha Stewart",
                "url": "https://www.marthastewart.com/951858/curried-chicken-and-potato-pie",
                "shareAs": "http://www.edamam.com/recipe/curried-chicken-and-potato-pie-8c06e22cd60826b142640220423751d6/chicken/balanced/400-cal",
                "yield": 6,
                "dietLabels": [
                    "Balanced"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "2 tablespoons unsalted butter, plus 1/2 stick melted",
                    "2 tablespoons minced peeled fresh ginger",
                    "2 teaspoons curry powder",
                    "4 cups frozen hash browns (1 pound)",
                    "1/2 pound ground chicken",
                    "1 cup frozen peas",
                    "1/2 cup fresh cilantro, chopped",
                    "Salt and pepper",
                    "6 sheets frozen phyllo dough, thawed"
                ],
                "ingredients": [
                    {
                        "text": "2 tablespoons unsalted butter, plus 1/2 stick melted",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "unsalted butter",
                        "weight": 28.4,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "2 tablespoons minced peeled fresh ginger",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "fresh ginger",
                        "weight": 11.99999999979712,
                        "foodCategory": "vegetables",
                        "foodId": "food_bi2ki2xb5zmmvbaiwf7ztbgktzp6",
                        "image": "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg"
                    },
                    {
                        "text": "2 teaspoons curry powder",
                        "quantity": 2,
                        "measure": "teaspoon",
                        "food": "curry powder",
                        "weight": 4,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_ao4koeoajh7yjxaq2knzrbv55y8o",
                        "image": "https://www.edamam.com/food-img/9ce/9ce02a2887385fd2adaec8dd8adcf9c5.jpg"
                    },
                    {
                        "text": "4 cups frozen hash browns (1 pound)",
                        "quantity": 1,
                        "measure": "pound",
                        "food": "hash browns",
                        "weight": 453.59237,
                        "foodCategory": "vegetables",
                        "foodId": "food_bl1jdf1aub2fzvbrdrg99b4zpa8t",
                        "image": "https://www.edamam.com/food-img/b79/b79481642aa6ef74614e72b5cf826dd0.jpg"
                    },
                    {
                        "text": "1/2 pound ground chicken",
                        "quantity": 0.5,
                        "measure": "pound",
                        "food": "ground chicken",
                        "weight": 226.796185,
                        "foodCategory": "poultry",
                        "foodId": "food_b4430z5avkliqsbzns6gpbhdn07c",
                        "image": "https://www.edamam.com/food-img/d67/d673152269f59d682d27b0a8446354b3.jpg"
                    },
                    {
                        "text": "1 cup frozen peas",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "frozen peas",
                        "weight": 134,
                        "foodCategory": "vegetables",
                        "foodId": "food_aqrct01b4nxw5eaxoo8woaxc3xd7",
                        "image": "https://www.edamam.com/food-img/c91/c9130a361d5c5b279bf48c69e2466ec2.jpg"
                    },
                    {
                        "text": "1/2 cup fresh cilantro, chopped",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "cilantro",
                        "weight": 8,
                        "foodCategory": "vegetables",
                        "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
                        "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
                    },
                    {
                        "text": "Salt and pepper",
                        "quantity": 0,
                        "measure": null,
                        "food": "Salt",
                        "weight": 5.884731329998783,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Salt and pepper",
                        "quantity": 0,
                        "measure": null,
                        "food": "pepper",
                        "weight": 2.9423656649993917,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "6 sheets frozen phyllo dough, thawed",
                        "quantity": 6,
                        "measure": "sheet",
                        "food": "phyllo dough",
                        "weight": 114,
                        "foodCategory": "quick breads and pastries",
                        "foodId": "food_bfy6477bulngsxbknzcdxboz2qvp",
                        "image": "https://www.edamam.com/food-img/84c/84c03643cbc1ac10b16fdebe2868294d.jpg"
                    }
                ],
                "calories": 2205.8316628689863,
                "totalCO2Emissions": 3371.0589573001375,
                "co2EmissionsClass": "D",
                "totalWeight": 983.7309206647966,
                "totalTime": 50,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2205.8316628689863,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 106.26545835567747,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 29.982467693743075,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.14741752025000002,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 42.921981970764044,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 27.058468592836384,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 244.0513943695635,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 218.0040200163227,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 26.04737435324079,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 14.083597453252548,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 69.66731331915625,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 256.1047191,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 2393.736089532974,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 167.26138279591484,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 281.3639736370618,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 4270.177600243651,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 11.333070458070226,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 7.452562209912803,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 950.6568060506302,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 360.0704387295498,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 85.87500809998986,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 2.011184472968149,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.2589965461469301,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 30.387122601579474,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 3.4923067376848236,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 311.91494321302764,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 176.25494321302762,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 79.80000000000001,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1.3183386360000005,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 2.704389539415467,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 94.45076686059879,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 546.6390017679648,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 110.29158314344932,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 163.48532054719612,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 149.91233846871538,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 81.3504647898545,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 104.18949741296315,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 139.3346266383125,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 85.3682397,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 99.73900373054059,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 16.726138279591485,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 66.99142229453852,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 90.85484255837555,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 62.96150254483459,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 67.75056554466185,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 135.80811515009,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 40.00782652550553,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 95.41667566665541,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 167.5987060806791,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 96.84588816514848,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 189.9195162598717,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 268.6389798219095,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 77.97873580325691,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 54.93077650000003,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 18.029263596103114,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 78.70897238383233,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 106.26545835567747,
                        "hasRDI": true,
                        "daily": 163.48532054719612,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 29.982467693743075,
                                "hasRDI": true,
                                "daily": 149.91233846871538,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.14741752025000002,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 42.921981970764044,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 27.058468592836384,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 244.0513943695635,
                        "hasRDI": true,
                        "daily": 81.3504647898545,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 218.0040200163227,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 26.04737435324079,
                                "hasRDI": true,
                                "daily": 104.18949741296315,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 14.083597453252548,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 69.66731331915625,
                        "hasRDI": true,
                        "daily": 139.3346266383125,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 256.1047191,
                        "hasRDI": true,
                        "daily": 85.3682397,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 2393.736089532974,
                        "hasRDI": true,
                        "daily": 99.73900373054059,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 167.26138279591484,
                        "hasRDI": true,
                        "daily": 16.726138279591485,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 281.3639736370618,
                        "hasRDI": true,
                        "daily": 66.99142229453852,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 4270.177600243651,
                        "hasRDI": true,
                        "daily": 90.85484255837555,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 11.333070458070226,
                        "hasRDI": true,
                        "daily": 62.96150254483459,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 7.452562209912803,
                        "hasRDI": true,
                        "daily": 67.75056554466185,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 950.6568060506302,
                        "hasRDI": true,
                        "daily": 135.80811515009,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 360.0704387295498,
                        "hasRDI": true,
                        "daily": 40.00782652550553,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 85.87500809998986,
                        "hasRDI": true,
                        "daily": 95.41667566665541,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 2.011184472968149,
                        "hasRDI": true,
                        "daily": 167.5987060806791,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.2589965461469301,
                        "hasRDI": true,
                        "daily": 96.84588816514848,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 30.387122601579474,
                        "hasRDI": true,
                        "daily": 189.9195162598717,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 3.4923067376848236,
                        "hasRDI": true,
                        "daily": 268.6389798219095,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 311.91494321302764,
                        "hasRDI": true,
                        "daily": 77.97873580325691,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 176.25494321302762,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 79.80000000000001,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 1.3183386360000005,
                        "hasRDI": true,
                        "daily": 54.93077650000003,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 2.704389539415467,
                        "hasRDI": true,
                        "daily": 18.029263596103114,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 94.45076686059879,
                        "hasRDI": true,
                        "daily": 78.70897238383233,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 546.6390017679648,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/8c06e22cd60826b142640220423751d6?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_048672d2c2d07f91fe929c814872e5ce",
                "label": "Not Just for Kids Chicken Schnitzel",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/e23/e230daad16d95a302deaa7777dbd3864.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=834fc1d97de01d11b8d4222ee14da700cf63b19abf38830e47f54e989ed887bf",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e23/e230daad16d95a302deaa7777dbd3864-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d4ffc3ba6cb1e70082d364d37e062f106a1016f7811f724aefa66c21427e96ab",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e23/e230daad16d95a302deaa7777dbd3864-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=deaa2b7e576c679c6ea24c5c202c924ec395be06d24e517e8ca6454308380538",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e23/e230daad16d95a302deaa7777dbd3864.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=834fc1d97de01d11b8d4222ee14da700cf63b19abf38830e47f54e989ed887bf",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e23/e230daad16d95a302deaa7777dbd3864-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIQDujpYZe0yQjlV7amj9kpKOPgoljg5AAcOA%2BzzxUmWqfAIgX7NnvIYYwR98NoRI%2FaxtOEfNOApq8iIlXaTZmQLjU3wquQUIFxAAGgwxODcwMTcxNTA5ODYiDCdlpR6gVM5njkobJiqWBZkycbE9hqp28wwBLefRdWW0sb1yjSfF7a%2BEnGjp2IaVVtdGZ6gpYA44wieHhYnfP5aFZC6BWxHQLgcOohA%2F7ZH3BVSjhzR04GmIRiy6l8McGiwLwcq0%2BH7%2F%2BkRsbnMtLDsiCvvUSKN5sizz3bNdnhBjjxiHAQpat%2FU%2Bpg6GJBAkiDKKTaeOvcsAzIlNzEGxLW%2F5Dd7Pnategokz0qG7cWCoDdCly9KTDrdJrLPfGgZpA7lMYNaWd7wApkMsP%2B0Pc1JxhdqTGkxUI3%2FgFwz9s2t0%2FT25BaKeFe9caqHuVt2TJcLzs3voX2Q38Oxk5DGzMWM3pY4g%2FRRm%2BZ1DQyrKQXJEVziHjABixXHfsEIZyYOsc4zHzjRtifPlHqX%2BxyUIIxLnmNSLMJGSRZghRvQB518GhXuF0%2FTXBC7ofekBTRvEGEd%2FrOyruoRGRcxkrKvsxWs0m4Xahwrq4deu9EwtNk2fLedsYmPl1APcxOPkhnHF%2B6N9E0JYtVZVwZ8vgR%2F9R8XeO8WPnqHPDUcQx3bEu1%2FmXxKWhrFGa7RC5WVRQEwGXv2Tgata37sMybBEnH%2FguapnVwV1hrojXN2xjuDRLmeS8r0hEXQyzSaVyLGReOYTQv5bnr8DGQFR7ij4b1fHLkjA65T%2BOvThja4Rcvz63xSKcD4NwzGu%2FaJrDHS61tH69FcGsUQaaPgp7QlgCjFgPCgOcgQk%2Bh8rqWbyQ26qC1P0McOUTfgMazneXx83Qupq1KZRtnSCydtyOjuScBOybV%2F1zEH4SZ2%2F0w9ohGajC7bZzUy%2BCkAtpKGknsXoIFMdtQhaoE3x0271C6UJD%2Fe%2FQjE3VR5H4JyB4vtBQtb6s1UUtpNalo3G99jneZuQc2BLk8CEQG4rMJmrxrMGOrEBNilYBCw41QM6c8lAO6GG%2BB5w670iJJDPqLGbj7eF%2BFo%2FMtlUIt5ZLVWQdsQQo4kCF01DpJ7fIBAETYuNaU2SkbJgFqe5y1eB4WpZKRx3Sm%2BL%2BlfLOxo%2FiBDXjfhTgBIyYcbDic22tOwjNETOInJlntOXMWFlqu20oHkxV2ugFSzmCtvEJQ9YfyHW2VmfEDvBrfgEMWQyryePbdKwoLwzNcQQJs6%2B%2BCYWYH6ibfc2TZPd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T151844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL2LZMFQK%2F20240618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ce84f39c46219f6676d0fd9ce7cfbcf4e06705e94adb6535444a26dedd873403",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Food52",
                "url": "https://food52.com/recipes/1094-not-just-for-kids-chicken-schnitzel",
                "shareAs": "http://www.edamam.com/recipe/not-just-for-kids-chicken-schnitzel-048672d2c2d07f91fe929c814872e5ce/chicken/balanced/400-cal",
                "yield": 6,
                "dietLabels": [
                    "Balanced"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Dairy-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free"
                ],
                "cautions": [
                    "FODMAP"
                ],
                "ingredientLines": [
                    "1 pound chicken tenders",
                    "2 eggs",
                    "2 tablespoons good dijon mustard",
                    "1/3 bunch parsley",
                    "1 tablespoon paprika",
                    "2-3 cups panko (Japanese bread crumbs)",
                    "1/2 cup flour",
                    "1/2 teaspoon salt",
                    "pepper",
                    "olive oil"
                ],
                "ingredients": [
                    {
                        "text": "1 pound chicken tenders",
                        "quantity": 1,
                        "measure": "pound",
                        "food": "chicken tenders",
                        "weight": 453.59237,
                        "foodCategory": "poultry",
                        "foodId": "food_bdc1hahbi6pzj2bjr99mzbq7v4dm",
                        "image": "https://www.edamam.com/food-img/2c6/2c63188d1eda89e858e8e8ef8e8b8e99.jpg"
                    },
                    {
                        "text": "2 eggs",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "eggs",
                        "weight": 86,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "2 tablespoons good dijon mustard",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "dijon mustard",
                        "weight": 31.1249999994738,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a34cdj5b0kyuhfbov30xcb50u4dv",
                        "image": "https://www.edamam.com/food-img/e23/e238f2e4cfa6aa1a30f46dc73e7344eb.jpg"
                    },
                    {
                        "text": "1/3 bunch parsley",
                        "quantity": 0.3333333333333333,
                        "measure": "bunch",
                        "food": "parsley",
                        "weight": 20,
                        "foodCategory": "vegetables",
                        "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
                        "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
                    },
                    {
                        "text": "1 tablespoon paprika",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "paprika",
                        "weight": 6.8,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a9dpcnjb883g67b3lq82ca0421ql",
                        "image": "https://www.edamam.com/food-img/474/474d63763b9d8b9da98c5f43a114648c.jpg"
                    },
                    {
                        "text": "2-3 cups panko (Japanese bread crumbs)",
                        "quantity": 2.5,
                        "measure": "cup",
                        "food": "panko",
                        "weight": 150,
                        "foodCategory": "grains",
                        "foodId": "food_a9tnk2lbj0xkckbytqnx1ajhpqbp",
                        "image": null
                    },
                    {
                        "text": "1/2 cup flour",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "flour",
                        "weight": 62.5,
                        "foodCategory": "grains",
                        "foodId": "food_ahebfs0a985an4aubqaebbipra58",
                        "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
                    },
                    {
                        "text": "1/2 teaspoon salt",
                        "quantity": 0.5,
                        "measure": "teaspoon",
                        "food": "salt",
                        "weight": 3,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "pepper",
                        "quantity": 0,
                        "measure": null,
                        "food": "pepper",
                        "weight": 2.4390521099984217,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "olive oil",
                        "quantity": 0,
                        "measure": null,
                        "food": "olive oil",
                        "weight": 11.057036231992845,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                    }
                ],
                "calories": 2217.3451541865975,
                "totalCO2Emissions": 5367.76730512245,
                "co2EmissionsClass": "E",
                "totalWeight": 823.5134583414651,
                "totalTime": 0,
                "cuisineType": [
                    "central europe"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2217.3451541865975,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 98.24322260576122,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 19.374087586342867,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.03548124999995264,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 41.5375466204362,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 19.03010820241296,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 229.70449558736834,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 213.3321993335598,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 16.372296253808557,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 8.137601702499149,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 101.30819252042016,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 505.8928717,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 2742.4795398408514,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 504.0638715092814,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 169.61102420784474,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1501.9426352244993,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 12.395789169771536,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 5.821585206105614,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1265.2806030332295,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 391.29479406967323,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 30.383313959998418,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.159309403277867,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.9556709267976289,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 27.89833577105101,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.5475420896397271,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 147.4264732586629,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 147.4264732586629,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1.990099399,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 2.62718474,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 5.161803255349059,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 411.6761096620497,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 356.85222245130944,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 110.86725770932988,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 151.1434193934788,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 96.87043793171433,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 76.56816519578945,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 65.48918501523423,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 202.61638504084033,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 168.63095723333333,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 114.26998082670214,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 50.40638715092814,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 40.383577192343985,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 31.956226281372327,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 68.86549538761965,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 52.9235018736874,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 180.75437186188992,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 43.4771993410748,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 33.759237733331574,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 96.60911693982226,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 73.51314821520222,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 174.36459856906882,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 42.11862227997901,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 36.856618314665724,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 82.92080829166667,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 17.514564933333336,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 34.41202170232706,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 343.06342471837473,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 98.24322260576122,
                        "hasRDI": true,
                        "daily": 151.1434193934788,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 19.374087586342867,
                                "hasRDI": true,
                                "daily": 96.87043793171433,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.03548124999995264,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 41.5375466204362,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 19.03010820241296,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 229.70449558736834,
                        "hasRDI": true,
                        "daily": 76.56816519578945,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 213.3321993335598,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 16.372296253808557,
                                "hasRDI": true,
                                "daily": 65.48918501523423,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 8.137601702499149,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 101.30819252042016,
                        "hasRDI": true,
                        "daily": 202.61638504084033,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 505.8928717,
                        "hasRDI": true,
                        "daily": 168.63095723333333,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 2742.4795398408514,
                        "hasRDI": true,
                        "daily": 114.26998082670214,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 504.0638715092814,
                        "hasRDI": true,
                        "daily": 50.40638715092814,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 169.61102420784474,
                        "hasRDI": true,
                        "daily": 40.383577192343985,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1501.9426352244993,
                        "hasRDI": true,
                        "daily": 31.956226281372327,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 12.395789169771536,
                        "hasRDI": true,
                        "daily": 68.86549538761965,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 5.821585206105614,
                        "hasRDI": true,
                        "daily": 52.9235018736874,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1265.2806030332295,
                        "hasRDI": true,
                        "daily": 180.75437186188992,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 391.29479406967323,
                        "hasRDI": true,
                        "daily": 43.4771993410748,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 30.383313959998418,
                        "hasRDI": true,
                        "daily": 33.759237733331574,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.159309403277867,
                        "hasRDI": true,
                        "daily": 96.60911693982226,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.9556709267976289,
                        "hasRDI": true,
                        "daily": 73.51314821520222,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 27.89833577105101,
                        "hasRDI": true,
                        "daily": 174.36459856906882,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.5475420896397271,
                        "hasRDI": true,
                        "daily": 42.11862227997901,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 147.4264732586629,
                        "hasRDI": true,
                        "daily": 36.856618314665724,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 147.4264732586629,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 1.990099399,
                        "hasRDI": true,
                        "daily": 82.92080829166667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 2.62718474,
                        "hasRDI": true,
                        "daily": 17.514564933333336,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 5.161803255349059,
                        "hasRDI": true,
                        "daily": 34.41202170232706,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 411.6761096620497,
                        "hasRDI": true,
                        "daily": 343.06342471837473,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 356.85222245130944,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/048672d2c2d07f91fe929c814872e5ce?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591"
                }
            }
        }
    ],
    "next": {
        "href": "https://api.edamam.com/api/recipes/v2?q=chicken&app_key=924c6d3e8a53b1dcb0c777f909cf5591&mealType=Dinner&_cont=CHcVQBtNNQphDmgVQntAEX4BYkt7BwICQ2JEB2oRZVNxBAACUXlSUTBCYAZ6V1EPQGdIVTASN1cgAAZRRmAWBmNBYVVyUgIVLnlSVSBMPkd5BgNK&diet=balanced&calories=400&imageSize=THUMBNAIL&type=public&app_id=c80e50f7",
        "title": "Next page"
    },
    "previous": false
}

  constructor(
    private recipe_service: RecipesService,
    private toast_service: ToastrService,
    private web_service: WebserviceService,
    private user_service : UsersService
  ) {}

  ngOnInit(): void {
    this.user_service.checkSession()
    this.user_service.checkVirtualUserActive()
    this.recipe_service.newRecipeOnLocalStorage().subscribe(() => {
      
    });

    /* Subcripcion para hacer peticion de las recetas al api de recetas */
    this.isLoading = true
    this.recipe_service.getRecipes().subscribe(
      (data: any) => {
        if (data) {
          
          this.setrequestData(data)
          this.isLoading = false
        }
      },
      (error) => {
        console.log('request error')
        console.error(error)
        this.error = true
        this.isLoading = false
      }
    )

    // if(!this.current_recipes){
    //   this.isLoading = false
    //   this.setrequestData(this.initial_data)
    // }

    /* Lamada al servicio de recipes para que recupere la informacion del mealplanner del usuario de la base de datos */
    // this.virtual_user_on_demand = this.user_service.getVirtualUserOnOFocus()
    // this.recipe_service.getMealPlannerFromDatabase(this.virtual_user_on_demand['ID'])

    
  }

 

  setrequestData(data : any){

    this.current_recipes = data.recipes
    this.next = data.next
    this.previous = data.previous
    this.error = false

    
  }

  onSaveMealPlanner() {
    const meal_planner = this.recipe_service.getMealPlannerFromLocalStorage();
    if (meal_planner){

       this.data_to_save = {
        'virtual_user' : this.user_service.getVirtualUserOnOFocus(),
        'meal_planner' : meal_planner
      }
      
      this.sendData();
    }
  }
  

  sendData() {
    this.isLoading = true;

    return new Promise(async (resolve, reject) => {
      this.web_service.post(
        `recipes/`, /* ruta para guardar el meal planner */
        this.data_to_save,
        (response: any) => {
          resolve(response);
          if (response.success) { 
            this.toast_service.success('Meal planner saved successfully')
            document.getElementById('close-button-modal')?.click()
          }else{
            this.toast_service.info('Meal planner unsaved')
          }
          this.isLoading = false;
        },

        (error: any) => {
          reject(error);
          this.isLoading = false;
          this.toast_service.error('Something wnet wrong')
        }
      );
    });
  }

  searchRecipe(url: string): void {
    this.isLoading = true
    this.recipe_service.fetchRecipe(null, url).subscribe(
      (data: any) => {
        const recipes = {
          recipes: data.hits,
          next: data._links.next || false,
          previous: data._links.previous || false,
        };

        this.recipe_service.saveRecipes(recipes);
        this.isLoading = false
      },
      (error) => {
        console.log('request error');
        console.error(error);
        this.isLoading = false
      }
    );
  }

  toggleError(value: boolean) {
    this.error = value;
  }

  throwSuccessNotitication() {
    this.toast_service.success('Recipe successfully adding', 'Success');
  }
}




