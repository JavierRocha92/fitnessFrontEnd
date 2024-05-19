import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { RecipeFormComponent } from '../recipe-form/recipe-form.component';
import { RecipesService } from '../../../services/recipes.service';
import { Recipes } from '../../../types/recipes';
import { RecipeComponent } from '../recipe/recipe.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipeFormComponent, RecipeComponent, CommonModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})

export class RecipesComponent implements OnInit {


  data = {


    "next": {
      "href": "https://api.edamam.com/api/recipes/v2?q=chicken&q=tuna&app_key=924c6d3e8a53b1dcb0c777f909cf5591&mealType=Breakfast&_cont=CHcVQBtNNQphDmgVQntAEX4BY0t1BwEERWBDC2YUZVR1DAAVX3dDCmRFagQiAVZTEm1EB2YRMQF2UAsDQTZDBTZGMgd3BRFqX3cWQT1OcV9xBE4%3D&diet=balanced&calories=333&imageSize=THUMBNAIL&type=public&app_id=c80e50f7",
      "title": "Next page"
    },
    "previous": {
      "href": "https://api.edamam.com/api/recipes/v2?q=chicken&q=tuna&app_key=924c6d3e8a53b1dcb0c777f909cf5591&mealType=Breakfast&_cont=CHcVQBtNNQphDmgVQntAEX4BY0t1BwEERWBDC2YUZVR1DAAVX3dDCmRFagQiAVZTEm1EB2YRMQF2UAsDQTZDBTZGMgd3BRFqX3cWQT1OcV9xBE4%3D&diet=balanced&calories=333&imageSize=THUMBNAIL&type=public&app_id=c80e50f7",
      "title": "Next page"
    },

    "recipes": [
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_6b5f1e149de4497396441c0908d576f9",
          "label": "Congee with Chicken and Peanuts",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/643/6433b2c7ba7139cfb932e419d9c8954e.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4a97868740713e98026e85431aafe481d2c85f308309dfc19bfb4dd7ce11e334",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/643/6433b2c7ba7139cfb932e419d9c8954e-s.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=12bd50378a70674d3a32ab3b0c3427f1ce985c02ed137be0f15fca0b9230e1b3",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/643/6433b2c7ba7139cfb932e419d9c8954e-m.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=61ab33542f20805af72d7a56a0fdce4c13283def96b7c5563a15d37e853a576e",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/643/6433b2c7ba7139cfb932e419d9c8954e.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4a97868740713e98026e85431aafe481d2c85f308309dfc19bfb4dd7ce11e334",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/643/6433b2c7ba7139cfb932e419d9c8954e-l.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=00e145bde09dd0c70e02ef2c29ae9af082ae3ecce21815e54c8e01b880cd6fd0",
              "width": 600,
              "height": 600
            }
          },
          "source": "Food & Wine",
          "url": "https://www.foodandwine.com/recipes/march-2008-congee-with-chicken-and-peanuts",
          "shareAs": "http://www.edamam.com/recipe/congee-with-chicken-and-peanuts-6b5f1e149de4497396441c0908d576f9/chicken/balanced/333-cal",
          "yield": 6.0,
          "dietLabels": [
            "Balanced"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Low Potassium",
            "Dairy-Free",
            "Egg-Free",
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
          "cautions": [],
          "ingredientLines": [
            "5 cups chicken stock or low-sodium broth",
            "4 cups water",
            "1 cup short-grain rice, rinsed",
            "2 cups chopped roasted chicken (1/2 pound)",
            "Salt",
            "Soy sauce, Asian sesame oil, thinly sliced scallions, chopped cilantro, finely chopped chiles, finely and chopped roasted unsalted peanuts, for serving"
          ],
          "ingredients": [
            {
              "text": "5 cups chicken stock or low-sodium broth",
              "quantity": 5.0,
              "measure": "cup",
              "food": "broth",
              "weight": 1135.0,
              "foodCategory": "Vegan products",
              "foodId": "food_bb2qjrjamst0vmam39stubtkmrs4",
              "image": "https://www.edamam.com/food-img/e61/e6184a8681b772e5198ef0ca1919e1b7.jpg"
            },
            {
              "text": "4 cups water",
              "quantity": 4.0,
              "measure": "cup",
              "food": "water",
              "weight": 946.352946,
              "foodCategory": "water",
              "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
              "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
            },
            {
              "text": "1 cup short-grain rice, rinsed",
              "quantity": 1.0,
              "measure": "cup",
              "food": "rice",
              "weight": 195.0,
              "foodCategory": "grains",
              "foodId": "food_bpumdjzb5rtqaeabb0kbgbcgr4t9",
              "image": "https://www.edamam.com/food-img/0fc/0fc9fa8a3e0276198d75b2e259068f8a.jpg"
            },
            {
              "text": "2 cups chopped roasted chicken (1/2 pound)",
              "quantity": 0.5,
              "measure": "pound",
              "food": "chicken",
              "weight": 226.796185,
              "foodCategory": "Poultry",
              "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
              "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
            },
            {
              "text": "Salt",
              "quantity": 0.0,
              "measure": null,
              "food": "Salt",
              "weight": 15.018894786,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "Soy sauce, Asian sesame oil, thinly sliced scallions, chopped cilantro, finely chopped chiles, finely and chopped roasted unsalted peanuts, for serving",
              "quantity": 0.0,
              "measure": null,
              "food": "Soy sauce",
              "weight": 0.0,
              "foodCategory": "plant-based protein",
              "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
              "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
            },
            {
              "text": "Soy sauce, Asian sesame oil, thinly sliced scallions, chopped cilantro, finely chopped chiles, finely and chopped roasted unsalted peanuts, for serving",
              "quantity": 0.0,
              "measure": null,
              "food": "sesame oil",
              "weight": 0.0,
              "foodCategory": "Oils",
              "foodId": "food_b2id9opa0l5afvbw2do5xa1fnz4q",
              "image": "https://www.edamam.com/food-img/b87/b874ddcfb6770adc7a155355a902ffb8.jpg"
            },
            {
              "text": "Soy sauce, Asian sesame oil, thinly sliced scallions, chopped cilantro, finely chopped chiles, finely and chopped roasted unsalted peanuts, for serving",
              "quantity": 0.0,
              "measure": null,
              "food": "scallions",
              "weight": 0.0,
              "foodCategory": "vegetables",
              "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
              "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
            },
            {
              "text": "Soy sauce, Asian sesame oil, thinly sliced scallions, chopped cilantro, finely chopped chiles, finely and chopped roasted unsalted peanuts, for serving",
              "quantity": 0.0,
              "measure": null,
              "food": "cilantro",
              "weight": 0.0,
              "foodCategory": "vegetables",
              "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
              "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
            },
            {
              "text": "Soy sauce, Asian sesame oil, thinly sliced scallions, chopped cilantro, finely chopped chiles, finely and chopped roasted unsalted peanuts, for serving",
              "quantity": 0.0,
              "measure": null,
              "food": "chiles",
              "weight": 0.0,
              "foodCategory": "vegetables",
              "foodId": "food_a6g98mqatzj7vca6ms3bnbzqxf3s",
              "image": "https://www.edamam.com/food-img/469/469213672957a242638e20c27e3e8acd.jpeg"
            },
            {
              "text": "Soy sauce, Asian sesame oil, thinly sliced scallions, chopped cilantro, finely chopped chiles, finely and chopped roasted unsalted peanuts, for serving",
              "quantity": 0.0,
              "measure": null,
              "food": "peanuts",
              "weight": 0.0,
              "foodCategory": "plant-based protein",
              "foodId": "food_aft8y4gab0fvs5bcgjac6boztho3",
              "image": "https://www.edamam.com/food-img/6f4/6f41e31c53bb58cc1b7331d0764963f7.jpg"
            }
          ],
          "calories": 1200.5454940964,
          "totalCO2Emissions": 3008.35026018658,
          "co2EmissionsClass": "D",
          "totalWeight": 2517.176904458358,
          "totalTime": 75.0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "breakfast"
          ],
          "dishType": [
            "cereals"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1200.5454940964,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 35.80475994585,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 10.1453790111,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.21999229945000004,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 14.7828956978,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 7.68597265135,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 156.34098645895,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 155.86148092055,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 0.4795055384,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 0.60700411765,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 55.41797516315001,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 170.09713875000003,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 5821.02324115788,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 118.43655769615592,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 137.9897141026336,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 653.1845848249186,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 3.9038403336125818,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 5.525318771458358,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 552.6395077232,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 132.3828047947,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 6.772549105300001,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.28297431100000003,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.3851573844,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 18.7209157693,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 1.1049466622500002,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 37.54170825105,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 37.54170825105,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 0.7037616585,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.45774647000000007,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 0.8134305537000001,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 20.813814357700004,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 2251.177159969417,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 60.02727470482,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 55.08424607053846,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 50.726895055499995,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 52.11366215298333,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 1.9180221536,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 110.83595032630002,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 56.69904625,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 242.542635048245,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 11.843655769615593,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 32.85469383396038,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 13.89754435797699,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 21.688001853403232,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 50.230170649621435,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 78.9485011033143,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 14.709200532744445,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 7.525054561444446,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 23.581192583333337,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 29.627491107692308,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 117.005723558125,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 84.99589709615385,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 9.3854270627625,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 29.323402437500004,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 3.051643133333334,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 5.422870358,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 17.344845298083335,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 35.80475994585,
              "hasRDI": true,
              "daily": 55.08424607053846,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 10.1453790111,
                  "hasRDI": true,
                  "daily": 50.726895055499995,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.21999229945000004,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 14.7828956978,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 7.68597265135,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 156.34098645895,
              "hasRDI": true,
              "daily": 52.11366215298333,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 155.86148092055,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 0.4795055384,
                  "hasRDI": true,
                  "daily": 1.9180221536,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 0.60700411765,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 55.41797516315001,
              "hasRDI": true,
              "daily": 110.83595032630002,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 170.09713875000003,
              "hasRDI": true,
              "daily": 56.69904625,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 5821.02324115788,
              "hasRDI": true,
              "daily": 242.542635048245,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 118.43655769615592,
              "hasRDI": true,
              "daily": 11.843655769615593,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 137.9897141026336,
              "hasRDI": true,
              "daily": 32.85469383396038,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 653.1845848249186,
              "hasRDI": true,
              "daily": 13.89754435797699,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 3.9038403336125818,
              "hasRDI": true,
              "daily": 21.688001853403232,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 5.525318771458358,
              "hasRDI": true,
              "daily": 50.230170649621435,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 552.6395077232,
              "hasRDI": true,
              "daily": 78.9485011033143,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 132.3828047947,
              "hasRDI": true,
              "daily": 14.709200532744445,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 6.772549105300001,
              "hasRDI": true,
              "daily": 7.525054561444446,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.28297431100000003,
              "hasRDI": true,
              "daily": 23.581192583333337,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.3851573844,
              "hasRDI": true,
              "daily": 29.627491107692308,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 18.7209157693,
              "hasRDI": true,
              "daily": 117.005723558125,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 1.1049466622500002,
              "hasRDI": true,
              "daily": 84.99589709615385,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 37.54170825105,
              "hasRDI": true,
              "daily": 9.3854270627625,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 37.54170825105,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 0.7037616585,
              "hasRDI": true,
              "daily": 29.323402437500004,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.45774647000000007,
              "hasRDI": true,
              "daily": 3.051643133333334,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 0.8134305537000001,
              "hasRDI": true,
              "daily": 5.422870358,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 20.813814357700004,
              "hasRDI": true,
              "daily": 17.344845298083335,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 2251.177159969417,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/6b5f1e149de4497396441c0908d576f9?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_ba8f24c1936a48a3873c153e2ca4ae75",
          "label": "Simply Irresistible Pok Pok Chicken Wings",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/e73/e731f187182028e1722e3b678cfac3c7.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8b9d40d8927dc862328b0432a5f6fad84198dd970116b5b829948862aa3327cc",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e73/e731f187182028e1722e3b678cfac3c7-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dfc0c2179a9fc47f54e501c30a1462ba03da0f9e21aab9dc5129a5bdc896b02c",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e73/e731f187182028e1722e3b678cfac3c7-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9450a7d50b430052b0219c0397be7d631e54c8cc3f4787200c36ae40933cd18d",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e73/e731f187182028e1722e3b678cfac3c7.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8b9d40d8927dc862328b0432a5f6fad84198dd970116b5b829948862aa3327cc",
              "width": 300,
              "height": 300
            }
          },
          "source": "Honest Cooking",
          "url": "https://honestcooking.com/simply-irresistible-pok-pok-chicken-wings/",
          "shareAs": "http://www.edamam.com/recipe/simply-irresistible-pok-pok-chicken-wings-ba8f24c1936a48a3873c153e2ca4ae75/chicken/balanced/333-cal",
          "yield": 6.0,
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
            "Gluten",
            "Wheat",
            "Sulfites"
          ],
          "ingredientLines": [
            "12 chicken wings, remove wing tips",
            "Vegetable oil",
            "1 cup rice flour",
            "¼ cup tempura flour (or batter mix)",
            "¼ cup water",
            "1-2 tsp Naam Phrik Phao (roasted chile paste), optional",
            "Sprigs of vietnamese mint, cilantro (to garnish)",
            "Pickled carrot, radish (to serve)"
          ],
          "ingredients": [
            {
              "text": "12 chicken wings, remove wing tips",
              "quantity": 12.0,
              "measure": "<unit>",
              "food": "chicken wings",
              "weight": 300.0,
              "foodCategory": "Poultry",
              "foodId": "food_aftnyj9ap60fc6av2a9nfbju90c1",
              "image": "https://www.edamam.com/food-img/f92/f928682fc890edded472c5d8baeffed5.jpg"
            },
            {
              "text": "Vegetable oil",
              "quantity": 0.0,
              "measure": null,
              "food": "Vegetable oil",
              "weight": 7.592547226327502,
              "foodCategory": "Oils",
              "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
              "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
            },
            {
              "text": "1 cup rice flour",
              "quantity": 1.0,
              "measure": "cup",
              "food": "rice flour",
              "weight": 158.0,
              "foodCategory": "grains",
              "foodId": "food_aqhc4cvbkrr2jnai8i98zbrsuelh",
              "image": "https://www.edamam.com/food-img/252/25233e59c8548d747b232000e7c3f939.jpg"
            },
            {
              "text": "¼ cup tempura flour (or batter mix)",
              "quantity": 0.25,
              "measure": "cup",
              "food": "flour",
              "weight": 31.25,
              "foodCategory": "grains",
              "foodId": "food_ahebfs0a985an4aubqaebbipra58",
              "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
            },
            {
              "text": "¼ cup water",
              "quantity": 0.25,
              "measure": "cup",
              "food": "water",
              "weight": 59.147059125,
              "foodCategory": "water",
              "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
              "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
            },
            {
              "text": "1-2 tsp Naam Phrik Phao (roasted chile paste), optional",
              "quantity": 1.5,
              "measure": "teaspoon",
              "food": "chile paste",
              "weight": 7.656250000388333,
              "foodCategory": "canned soup",
              "foodId": "food_ayjzfd9bhvwqorb6m5iq3bekq7cj",
              "image": "https://www.edamam.com/food-img/12f/12f4b9a8e738f35b7dd787a5360e4a45.jpg"
            },
            {
              "text": "Sprigs of vietnamese mint, cilantro (to garnish)",
              "quantity": 1.0,
              "measure": "sprig",
              "food": "cilantro",
              "weight": 2.2222222222222223,
              "foodCategory": "vegetables",
              "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
              "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
            },
            {
              "text": "Pickled carrot, radish (to serve)",
              "quantity": 1.0,
              "measure": "carrot",
              "food": "radish",
              "weight": 0.0,
              "foodCategory": "vegetables",
              "foodId": "food_bs6xkukbtd85e7b2lh5zfazpe45y",
              "image": "https://www.edamam.com/food-img/ad7/ad78f4315cdba1dc26ccef0d7dba464b.jpg"
            }
          ],
          "calories": 1334.2670410919277,
          "totalCO2Emissions": 3280.208693924969,
          "co2EmissionsClass": "D",
          "totalWeight": 565.868078573938,
          "totalTime": 0.0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "breakfast"
          ],
          "dishType": [
            "starter"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1334.2670410919277,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 48.59989028188539,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 11.779028435545344,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.24123483722593198,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 22.489759801568507,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 9.53276258959118,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 150.7818993055707,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 146.03033333334577,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 4.75156597222494,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 0.48854270834323577,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 65.23598958333683,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 333.0,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 257.92716708731933,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 57.439863162673845,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 112.2629983690744,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 769.276527779968,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 2.376239583335275,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 5.141260192024194,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 559.8816666667288,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 36.24982638897821,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 2.8968750001165,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.41979451388892774,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.36517062500034947,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 21.653429166669,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 2.300659861111655,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 37.6649652778205,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 37.6649652778205,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 0.75,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.30000000000000004,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 3.8508433508963487,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 7.495607638914908,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 298.4620822051294,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 66.71335205459638,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 74.76906197213137,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 58.895142177726726,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 50.2606331018569,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 19.00626388889976,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 130.47197916667366,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 111.0,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 10.746965295304971,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 5.743986316267384,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 26.729285325970093,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 16.367585697446128,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 13.201331018529308,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 46.738729018401756,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 79.98309523810413,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 4.027758487664245,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 3.2187500001294445,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 34.98287615741065,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 28.09004807694996,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 135.33393229168124,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 176.9738354701273,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 9.416241319455125,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 31.25,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 2.0000000000000004,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 25.672289005975657,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 6.246339699095757,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 48.59989028188539,
              "hasRDI": true,
              "daily": 74.76906197213137,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 11.779028435545344,
                  "hasRDI": true,
                  "daily": 58.895142177726726,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.24123483722593198,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 22.489759801568507,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 9.53276258959118,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 150.7818993055707,
              "hasRDI": true,
              "daily": 50.2606331018569,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 146.03033333334577,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 4.75156597222494,
                  "hasRDI": true,
                  "daily": 19.00626388889976,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 0.48854270834323577,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 65.23598958333683,
              "hasRDI": true,
              "daily": 130.47197916667366,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 333.0,
              "hasRDI": true,
              "daily": 111.0,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 257.92716708731933,
              "hasRDI": true,
              "daily": 10.746965295304971,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 57.439863162673845,
              "hasRDI": true,
              "daily": 5.743986316267384,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 112.2629983690744,
              "hasRDI": true,
              "daily": 26.729285325970093,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 769.276527779968,
              "hasRDI": true,
              "daily": 16.367585697446128,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 2.376239583335275,
              "hasRDI": true,
              "daily": 13.201331018529308,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 5.141260192024194,
              "hasRDI": true,
              "daily": 46.738729018401756,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 559.8816666667288,
              "hasRDI": true,
              "daily": 79.98309523810413,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 36.24982638897821,
              "hasRDI": true,
              "daily": 4.027758487664245,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 2.8968750001165,
              "hasRDI": true,
              "daily": 3.2187500001294445,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.41979451388892774,
              "hasRDI": true,
              "daily": 34.98287615741065,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.36517062500034947,
              "hasRDI": true,
              "daily": 28.09004807694996,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 21.653429166669,
              "hasRDI": true,
              "daily": 135.33393229168124,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 2.300659861111655,
              "hasRDI": true,
              "daily": 176.9738354701273,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 37.6649652778205,
              "hasRDI": true,
              "daily": 9.416241319455125,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 37.6649652778205,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 0.75,
              "hasRDI": true,
              "daily": 31.25,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.30000000000000004,
              "hasRDI": true,
              "daily": 2.0000000000000004,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 3.8508433508963487,
              "hasRDI": true,
              "daily": 25.672289005975657,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 7.495607638914908,
              "hasRDI": true,
              "daily": 6.246339699095757,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 298.4620822051294,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/ba8f24c1936a48a3873c153e2ca4ae75?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_4a3b1156f5c04b87b906b06fa9d5e37f",
          "label": "Crisp Granola Chicken Cutlets",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/0f4/0f4e91de301907b5008190227cbfd100.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=921d72c4384e4bb3f394cfa889fc471caf05097783d34f4db5ec8e3327999af4",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/0f4/0f4e91de301907b5008190227cbfd100-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dba7844c588a0e19f6832591348b422b6edc3754a5a58e44be651f06b2fe5f4b",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/0f4/0f4e91de301907b5008190227cbfd100-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=33ac477d645f05a3bdbd135c20709d936a4521484898cb1599ab37a0a73bbead",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/0f4/0f4e91de301907b5008190227cbfd100.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=921d72c4384e4bb3f394cfa889fc471caf05097783d34f4db5ec8e3327999af4",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/0f4/0f4e91de301907b5008190227cbfd100-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0c363b1842ca493b47cf3d75b2317abc63155a603bbe9eb11697c17fa6f3746c",
              "width": 600,
              "height": 600
            }
          },
          "source": "Food52",
          "url": "https://food52.com/recipes/59863-crisp-granola-chicken-cutlets",
          "shareAs": "http://www.edamam.com/recipe/crisp-granola-chicken-cutlets-4a3b1156f5c04b87b906b06fa9d5e37f/chicken/balanced/333-cal",
          "yield": 4.0,
          "dietLabels": [
            "Balanced",
            "Low-Sodium"
          ],
          "healthLabels": [
            "Low Potassium",
            "Kidney-Friendly",
            "Vegetarian",
            "Pescatarian",
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
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free",
            "Kosher"
          ],
          "cautions": [
            "Gluten",
            "Wheat",
            "Sulfites"
          ],
          "ingredientLines": [
            "2 eggs beaten",
            "1 cup panko crumbs",
            "1/2 cup Viki's Granola - Original",
            "salt & pepper to taste"
          ],
          "ingredients": [
            {
              "text": "2 eggs beaten",
              "quantity": 2.0,
              "measure": "<unit>",
              "food": "eggs",
              "weight": 86.0,
              "foodCategory": "Eggs",
              "foodId": "food_bhpradua77pk16aipcvzeayg732r",
              "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
              "text": "1 cup panko crumbs",
              "quantity": 1.0,
              "measure": "cup",
              "food": "panko",
              "weight": 60.0,
              "foodCategory": "grains",
              "foodId": "food_a9tnk2lbj0xkckbytqnx1ajhpqbp",
              "image": null
            },
            {
              "text": "1/2 cup Viki's Granola - Original",
              "quantity": 0.5,
              "measure": "cup",
              "food": "Granola",
              "weight": 61.0,
              "foodCategory": "ready-to-eat cereals",
              "foodId": "food_b34qe9ya35sl0oawlmwdmaalkwhh",
              "image": "https://www.edamam.com/food-img/c1d/c1ddb4084dd26bd5fa47e01bb49ed6a8.jpg"
            },
            {
              "text": "salt & pepper to taste",
              "quantity": 0.0,
              "measure": null,
              "food": "salt",
              "weight": 1.242,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            }
          ],
          "calories": 631.27,
          "totalCO2Emissions": 592.2482600000001,
          "co2EmissionsClass": "B",
          "totalWeight": 207.6639029896907,
          "totalTime": 0.0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "breakfast"
          ],
          "dishType": [
            "cereals",
            "starter"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 631.27,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 24.921599999999998,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 5.1074,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.04671,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 9.8576,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 6.4067,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 75.4982,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 68.1492,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 7.349,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 14.316199999999998,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 24.893,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 319.92,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 481.3743599999999,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 209.33933671752578,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 112.80663902989691,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 447.5231122391753,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 4.57669087986598,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 3.6537639029896907,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 433.18999999999994,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 138.21,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 0.732,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.36868,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.6089600000000001,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 1.7359,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 0.3719,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 91.66,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 91.66,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 0.7654,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 1.72,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 7.6739999999999995,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 3.4909999999999997,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 69.09572780597938,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 31.5635,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 38.340923076923076,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 25.537,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 25.166066666666666,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 29.396,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 49.786,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 106.64,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 20.057264999999997,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 20.933933671752577,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 26.858723578546883,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 9.521768345514369,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 25.42606044369989,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 33.21603548172446,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 61.8842857142857,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 15.356666666666667,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 0.8133333333333334,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 30.723333333333336,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 46.84307692307693,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 10.849375,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 28.607692307692304,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 22.915,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 31.891666666666666,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 11.466666666666667,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 51.16,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 2.9091666666666662,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 24.921599999999998,
              "hasRDI": true,
              "daily": 38.340923076923076,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 5.1074,
                  "hasRDI": true,
                  "daily": 25.537,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.04671,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 9.8576,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 6.4067,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 75.4982,
              "hasRDI": true,
              "daily": 25.166066666666666,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 68.1492,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 7.349,
                  "hasRDI": true,
                  "daily": 29.396,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 14.316199999999998,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 24.893,
              "hasRDI": true,
              "daily": 49.786,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 319.92,
              "hasRDI": true,
              "daily": 106.64,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 481.3743599999999,
              "hasRDI": true,
              "daily": 20.057264999999997,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 209.33933671752578,
              "hasRDI": true,
              "daily": 20.933933671752577,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 112.80663902989691,
              "hasRDI": true,
              "daily": 26.858723578546883,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 447.5231122391753,
              "hasRDI": true,
              "daily": 9.521768345514369,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 4.57669087986598,
              "hasRDI": true,
              "daily": 25.42606044369989,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 3.6537639029896907,
              "hasRDI": true,
              "daily": 33.21603548172446,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 433.18999999999994,
              "hasRDI": true,
              "daily": 61.8842857142857,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 138.21,
              "hasRDI": true,
              "daily": 15.356666666666667,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 0.732,
              "hasRDI": true,
              "daily": 0.8133333333333334,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.36868,
              "hasRDI": true,
              "daily": 30.723333333333336,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.6089600000000001,
              "hasRDI": true,
              "daily": 46.84307692307693,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 1.7359,
              "hasRDI": true,
              "daily": 10.849375,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 0.3719,
              "hasRDI": true,
              "daily": 28.607692307692304,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 91.66,
              "hasRDI": true,
              "daily": 22.915,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 91.66,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 0.7654,
              "hasRDI": true,
              "daily": 31.891666666666666,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 1.72,
              "hasRDI": true,
              "daily": 11.466666666666667,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 7.6739999999999995,
              "hasRDI": true,
              "daily": 51.16,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 3.4909999999999997,
              "hasRDI": true,
              "daily": 2.9091666666666662,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 69.09572780597938,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/4a3b1156f5c04b87b906b06fa9d5e37f?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_5264ac91e794760a3f67543f03266d91",
          "label": "Strawberry and Rosemary Chicken and Waffles",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/60f/60f0cbbdda0e9d52b70853ebd350e95a.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1a209a4ec13b8b7b6cfbe39b8c4b61d557567c79075de898d9dc5f53842ac14a",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/60f/60f0cbbdda0e9d52b70853ebd350e95a-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6b895509d5e9c69d7de3e75aa17fca30186a9bd97241cf4c1f6aa98e60a26ec2",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/60f/60f0cbbdda0e9d52b70853ebd350e95a-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6bf4a7a8136b5a2f294060f327784e936ba83327d826bf329597d9e5fe537764",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/60f/60f0cbbdda0e9d52b70853ebd350e95a.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1a209a4ec13b8b7b6cfbe39b8c4b61d557567c79075de898d9dc5f53842ac14a",
              "width": 300,
              "height": 300
            }
          },
          "source": "The Daily Meal",
          "url": "http://www.thedailymeal.com/recipes/strawberry-and-rosemary-chicken-and-waffles-recipe",
          "shareAs": "http://www.edamam.com/recipe/strawberry-and-rosemary-chicken-and-waffles-5264ac91e794760a3f67543f03266d91/chicken/balanced/333-cal",
          "yield": 12.0,
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
            "Soy",
            "Sulfites"
          ],
          "ingredientLines": [
            "2 cups pancake mix, such as Krusteaz Buttermilk Pancake Mix",
            "1 1/4 cups cold water",
            "1 egg",
            "1 teaspoon vanilla extract",
            "2 tablespoons melted butter",
            "3/4 cup chopped strawberries",
            "3 tablespoons fresh rosemary",
            "12 fried chicken strips"
          ],
          "ingredients": [
            {
              "text": "2 cups pancake mix, such as Krusteaz Buttermilk Pancake Mix",
              "quantity": 2.0,
              "measure": "cup",
              "food": "Buttermilk Pancake Mix",
              "weight": 224.0,
              "foodCategory": "quick breads and pastries",
              "foodId": "food_a6n7kp3avcmvv0b0zkh4lb4kv8z5",
              "image": "https://www.edamam.com/food-img/095/095a07855cd09f25b156de558b24d32a.jpg"
            },
            {
              "text": "1 1/4 cups cold water",
              "quantity": 1.25,
              "measure": "cup",
              "food": "water",
              "weight": 295.735295625,
              "foodCategory": "water",
              "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
              "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
            },
            {
              "text": "1 egg",
              "quantity": 1.0,
              "measure": "<unit>",
              "food": "egg",
              "weight": 43.0,
              "foodCategory": "Eggs",
              "foodId": "food_bhpradua77pk16aipcvzeayg732r",
              "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
              "text": "1 teaspoon vanilla extract",
              "quantity": 1.0,
              "measure": "teaspoon",
              "food": "vanilla extract",
              "weight": 4.2,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
              "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
            },
            {
              "text": "2 tablespoons melted butter",
              "quantity": 2.0,
              "measure": "tablespoon",
              "food": "butter",
              "weight": 28.4,
              "foodCategory": "Dairy",
              "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
              "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            },
            {
              "text": "3/4 cup chopped strawberries",
              "quantity": 0.75,
              "measure": "cup",
              "food": "strawberries",
              "weight": 114.0,
              "foodCategory": "fruit",
              "foodId": "food_b4s2ibkbrrucmbabbaxhfau8ay42",
              "image": "https://www.edamam.com/food-img/00c/00c8851e401bf7975be7f73499b4b573.jpg"
            },
            {
              "text": "3 tablespoons fresh rosemary",
              "quantity": 3.0,
              "measure": "tablespoon",
              "food": "fresh rosemary",
              "weight": 5.1,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6tm2t2blxi7okaeiv91wb8bmygq",
              "image": "https://www.edamam.com/food-img/0ac/0ac8f7cf6f2d0ad7b1a2f9900fae44f3.jpg"
            },
            {
              "text": "12 fried chicken strips",
              "quantity": 12.0,
              "measure": "<unit>",
              "food": "chicken strips",
              "weight": 360.0,
              "foodCategory": "sandwhiches",
              "foodId": "food_bpbsk7zaearxssa39q2fia84qudv",
              "image": "https://www.edamam.com/food-img/cc3/cc359f770f8f4d9ab2eeb40cc7bf6768.jpg"
            }
          ],
          "calories": 2091.175,
          "totalCO2Emissions": 5156.9349999999995,
          "co2EmissionsClass": "D",
          "totalWeight": 1074.435295625,
          "totalTime": 0.0,
          "cuisineType": [
            "central europe"
          ],
          "mealType": [
            "breakfast"
          ],
          "dishType": [
            "condiments and sauces"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 2091.175,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 81.97308,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 25.37426,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.20354,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 26.441760000000002,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 24.333199,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 237.45074,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 218.03564,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 19.415100000000002,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 12.67034,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 98.11453,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 393.82000000000005,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 5423.257411825,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 901.91705886875,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 198.89035295625,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 2051.5,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 11.029770000000001,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 5.2590835295625,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 2542.6140000000005,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 282.442,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 72.1038,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.8106780000000002,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 1.7184280000000003,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 38.562979999999996,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 2.08928,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 640.781,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 120.941,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 306.08000000000004,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 1.00698,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 1.58,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 13.726580000000002,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 34.993,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 630.3573603293751,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 104.55875000000002,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 126.11243076923076,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 126.87129999999999,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 79.15024666666667,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 77.66040000000001,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 196.22906,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 131.27333333333337,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 225.96905882604167,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 90.191705886875,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 47.35484594196429,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 43.648936170212764,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 61.276500000000006,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 47.809850268750004,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 363.2305714285715,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 31.382444444444445,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 80.11533333333334,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 150.88983333333337,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 132.18676923076924,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 241.018625,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 160.71384615384613,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 160.19525,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 41.957499999999996,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 10.533333333333333,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 91.51053333333334,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 29.160833333333336,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 81.97308,
              "hasRDI": true,
              "daily": 126.11243076923076,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 25.37426,
                  "hasRDI": true,
                  "daily": 126.87129999999999,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.20354,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 26.441760000000002,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 24.333199,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 237.45074,
              "hasRDI": true,
              "daily": 79.15024666666667,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 218.03564,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 19.415100000000002,
                  "hasRDI": true,
                  "daily": 77.66040000000001,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 12.67034,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 98.11453,
              "hasRDI": true,
              "daily": 196.22906,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 393.82000000000005,
              "hasRDI": true,
              "daily": 131.27333333333337,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 5423.257411825,
              "hasRDI": true,
              "daily": 225.96905882604167,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 901.91705886875,
              "hasRDI": true,
              "daily": 90.191705886875,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 198.89035295625,
              "hasRDI": true,
              "daily": 47.35484594196429,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 2051.5,
              "hasRDI": true,
              "daily": 43.648936170212764,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 11.029770000000001,
              "hasRDI": true,
              "daily": 61.276500000000006,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 5.2590835295625,
              "hasRDI": true,
              "daily": 47.809850268750004,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 2542.6140000000005,
              "hasRDI": true,
              "daily": 363.2305714285715,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 282.442,
              "hasRDI": true,
              "daily": 31.382444444444445,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 72.1038,
              "hasRDI": true,
              "daily": 80.11533333333334,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.8106780000000002,
              "hasRDI": true,
              "daily": 150.88983333333337,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 1.7184280000000003,
              "hasRDI": true,
              "daily": 132.18676923076924,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 38.562979999999996,
              "hasRDI": true,
              "daily": 241.018625,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 2.08928,
              "hasRDI": true,
              "daily": 160.71384615384613,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 640.781,
              "hasRDI": true,
              "daily": 160.19525,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 120.941,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 306.08000000000004,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 1.00698,
              "hasRDI": true,
              "daily": 41.957499999999996,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 1.58,
              "hasRDI": true,
              "daily": 10.533333333333333,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 13.726580000000002,
              "hasRDI": true,
              "daily": 91.51053333333334,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 34.993,
              "hasRDI": true,
              "daily": 29.160833333333336,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 630.3573603293751,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ],
          "tags": [
            "Chicken",
            "waffles",
            "chicken and waffles"
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/5264ac91e794760a3f67543f03266d91?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_c3bfd73633de488ea9841f6d3b931c3b",
          "label": "Chicken Artichoke Bread Bombs",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/5c7/5c7462ec77f0d1690f2d0a6f0570ef7c.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=610171e8c176734cf649f42bf0fe4d535d1ad33a5aaa27b4fef5668b5182168f",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5c7/5c7462ec77f0d1690f2d0a6f0570ef7c-s.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7553c6a5f8147598fd6d7abffed77d28b4572a915920a93c22ec2d9023dbe1a0",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5c7/5c7462ec77f0d1690f2d0a6f0570ef7c-m.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8fe7fd4ce1adb99d21c032c66e3c32433820e49094f7851559d4d8f794ee22c6",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5c7/5c7462ec77f0d1690f2d0a6f0570ef7c.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=610171e8c176734cf649f42bf0fe4d535d1ad33a5aaa27b4fef5668b5182168f",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5c7/5c7462ec77f0d1690f2d0a6f0570ef7c-l.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a7298a91c394368bb1889b34324af5b30766eff19b8d9a973bf596903dab1afd",
              "width": 600,
              "height": 600
            }
          },
          "source": "Food Network",
          "url": "https://www.foodnetwork.com/recipes/ree-drummond/chicken-artichoke-bread-bombs-17036911",
          "shareAs": "http://www.edamam.com/recipe/chicken-artichoke-bread-bombs-c3bfd73633de488ea9841f6d3b931c3b/chicken/balanced/333-cal",
          "yield": 26.0,
          "dietLabels": [
            "Balanced"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Low Potassium",
            "Kidney-Friendly",
            "Peanut-Free",
            "Tree-Nut-Free",
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
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "Nonstick cooking spray, for the sheet tray",
            "4 ounces cream cheese, at room temperature",
            "1/4 cup grated fontina cheese",
            "1/4 cup freshly grated Parmesan",
            "1 teaspoon crushed red pepper flakes",
            "Pinch of kosher salt",
            "Pinch of freshly ground black pepper",
            "1 cup pulled rotisserie chicken, white meat only",
            "1/2 cup chopped canned artichokes",
            "12 frozen bread rolls, thawed and risen",
            "1 large egg, beaten",
            "1 tablespoon Italian seasoning"
          ],
          "ingredients": [
            {
              "text": "Nonstick cooking spray, for the sheet tray",
              "quantity": 0.0,
              "measure": null,
              "food": "cooking spray",
              "weight": 15.803099683008275,
              "foodCategory": "Oils",
              "foodId": "food_aglc0hqae3alv1biazc6qaiamw2x",
              "image": null
            },
            {
              "text": "4 ounces cream cheese, at room temperature",
              "quantity": 4.0,
              "measure": "ounce",
              "food": "cream cheese",
              "weight": 113.3980925,
              "foodCategory": "Cheese",
              "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
              "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
            },
            {
              "text": "1/4 cup grated fontina cheese",
              "quantity": 0.25,
              "measure": "cup",
              "food": "fontina cheese",
              "weight": 33.0,
              "foodCategory": "Cheese",
              "foodId": "food_bocv6wqb7zq8y4bzbjx2val9imlj",
              "image": "https://www.edamam.com/food-img/0ac/0acf62d2ccdf71b1c03e13115f6cc002.jpg"
            },
            {
              "text": "1/4 cup freshly grated Parmesan",
              "quantity": 0.25,
              "measure": "cup",
              "food": "Parmesan",
              "weight": 37.1765625,
              "foodCategory": "Cheese",
              "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
              "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
            },
            {
              "text": "1 teaspoon crushed red pepper flakes",
              "quantity": 1.0,
              "measure": "teaspoon",
              "food": "red pepper flakes",
              "weight": 0.7708333333724309,
              "foodCategory": "vegetables",
              "foodId": "food_bispmxiaijcuxcagex14mbhk2o48",
              "image": "https://www.edamam.com/food-img/6cb/6cb8e4510251a322178f6e191b3a7b1b.jpeg"
            },
            {
              "text": "Pinch of kosher salt",
              "quantity": 1.0,
              "measure": "pinch",
              "food": "kosher salt",
              "weight": 0.30338541705136723,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "Pinch of freshly ground black pepper",
              "quantity": 1.0,
              "measure": "pinch",
              "food": "black pepper",
              "weight": 0.1437500001847091,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
              "text": "1 cup pulled rotisserie chicken, white meat only",
              "quantity": 1.0,
              "measure": "cup",
              "food": "meat",
              "weight": 140.0,
              "foodCategory": "meats",
              "foodId": "food_bknby1la98smrsbwnthinbam42nj",
              "image": "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg"
            },
            {
              "text": "1/2 cup chopped canned artichokes",
              "quantity": 0.5,
              "measure": "cup",
              "food": "artichokes",
              "weight": 112.5,
              "foodCategory": "vegetables",
              "foodId": "food_aneqha3aarf9vmawbdwibaf8jnus",
              "image": "https://www.edamam.com/food-img/8f8/8f80887cee9e2455b7f8a162c2615758.jpg"
            },
            {
              "text": "12 frozen bread rolls, thawed and risen",
              "quantity": 12.0,
              "measure": "roll",
              "food": "bread",
              "weight": 672.0,
              "foodCategory": "bread, rolls and tortillas",
              "foodId": "food_a3049hmbqj5wstaeeb3udaz6uaqv",
              "image": "https://www.edamam.com/food-img/886/886960f6ce6ccec5b9163bacf2996853.jpg"
            },
            {
              "text": "1 large egg, beaten",
              "quantity": 1.0,
              "measure": "<unit>",
              "food": "egg",
              "weight": 50.0,
              "foodCategory": "Eggs",
              "foodId": "food_bhpradua77pk16aipcvzeayg732r",
              "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
              "text": "1 tablespoon Italian seasoning",
              "quantity": 1.0,
              "measure": "tablespoon",
              "food": "Italian seasoning",
              "weight": 2.7,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
              "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
            }
          ],
          "calories": 2954.1213107400163,
          "totalCO2Emissions": 19737.5239582864,
          "co2EmissionsClass": "E",
          "totalWeight": 1177.4923380165653,
          "totalTime": 40.0,
          "cuisineType": [
            "mediterranean"
          ],
          "mealType": [
            "breakfast"
          ],
          "dishType": [
            "bread"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 2954.1213107400163,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 113.35255556220247,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 44.6951765390899,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 1.9175176822499997,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 33.116715996389665,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 18.33151773123954,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 345.13601415302827,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 310.92441623630367,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 34.21159791672462,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 44.98441499676725,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 141.23765845628253,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 452.2921359250001,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 4536.202485096381,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 1717.8932747258357,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 416.46766165868354,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 2198.2823779365212,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 33.34700217260363,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 18.679829056252597,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1871.3310527253543,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 611.6204217755659,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 16.098541666678944,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 3.037061045650231,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 2.7060335502508015,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 46.0848407485555,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 1.9028556661758542,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 792.0837502000513,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 563.6037502000514,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 134.4,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 4.872994553500001,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 1.5238828125000001,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 3.641321199669815,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 102.93761150534516,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 554.9846621480106,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 147.7060655370008,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 174.38854701877304,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 223.47588269544949,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 115.04533805100944,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 136.84639166689848,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 282.47531691256506,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 150.76404530833338,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 189.00843687901587,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 171.78932747258358,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 99.15896706159133,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 46.77196548801109,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 185.26112318113127,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 169.81662778411453,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 267.3330075321935,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 67.95782464172954,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 17.88726851853216,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 253.0884204708526,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 208.15642694236934,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 288.03025467847186,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 146.373512782758,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 198.02093755001283,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 203.0414397291667,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 10.15921875,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 24.275474664465435,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 85.78134292112097,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 113.35255556220247,
              "hasRDI": true,
              "daily": 174.38854701877304,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 44.6951765390899,
                  "hasRDI": true,
                  "daily": 223.47588269544949,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 1.9175176822499997,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 33.116715996389665,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 18.33151773123954,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 345.13601415302827,
              "hasRDI": true,
              "daily": 115.04533805100944,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 310.92441623630367,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 34.21159791672462,
                  "hasRDI": true,
                  "daily": 136.84639166689848,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 44.98441499676725,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 141.23765845628253,
              "hasRDI": true,
              "daily": 282.47531691256506,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 452.2921359250001,
              "hasRDI": true,
              "daily": 150.76404530833338,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 4536.202485096381,
              "hasRDI": true,
              "daily": 189.00843687901587,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 1717.8932747258357,
              "hasRDI": true,
              "daily": 171.78932747258358,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 416.46766165868354,
              "hasRDI": true,
              "daily": 99.15896706159133,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 2198.2823779365212,
              "hasRDI": true,
              "daily": 46.77196548801109,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 33.34700217260363,
              "hasRDI": true,
              "daily": 185.26112318113127,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 18.679829056252597,
              "hasRDI": true,
              "daily": 169.81662778411453,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 1871.3310527253543,
              "hasRDI": true,
              "daily": 267.3330075321935,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 611.6204217755659,
              "hasRDI": true,
              "daily": 67.95782464172954,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 16.098541666678944,
              "hasRDI": true,
              "daily": 17.88726851853216,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 3.037061045650231,
              "hasRDI": true,
              "daily": 253.0884204708526,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 2.7060335502508015,
              "hasRDI": true,
              "daily": 208.15642694236934,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 46.0848407485555,
              "hasRDI": true,
              "daily": 288.03025467847186,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 1.9028556661758542,
              "hasRDI": true,
              "daily": 146.373512782758,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 792.0837502000513,
              "hasRDI": true,
              "daily": 198.02093755001283,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 563.6037502000514,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 134.4,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 4.872994553500001,
              "hasRDI": true,
              "daily": 203.0414397291667,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 1.5238828125000001,
              "hasRDI": true,
              "daily": 10.15921875,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 3.641321199669815,
              "hasRDI": true,
              "daily": 24.275474664465435,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 102.93761150534516,
              "hasRDI": true,
              "daily": 85.78134292112097,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 554.9846621480106,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/c3bfd73633de488ea9841f6d3b931c3b?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b7ee7a095777bbcdb31956edefa093b0",
          "label": "Healthy & Delicious: Baked Wheat Bulgur with Sweet Potatoes and Almonds Recipe",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/ec4/ec49b29fe33f92b0847a1210de9872e5.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=474b697208b1828a02ae60e017b49f6232b7d2e70cadde8b5cc65a4ab8bbd824",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ec4/ec49b29fe33f92b0847a1210de9872e5-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5caae4899f3bedc8e4217d23c5848afc7b0b81ea2ddd5a4e4c420a1613f78629",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ec4/ec49b29fe33f92b0847a1210de9872e5-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=29f3a2e7a3fa5556533212c19cbacb58509ab5842af148ae4a99d000015b496e",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ec4/ec49b29fe33f92b0847a1210de9872e5.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=474b697208b1828a02ae60e017b49f6232b7d2e70cadde8b5cc65a4ab8bbd824",
              "width": 300,
              "height": 300
            }
          },
          "source": "Serious Eats",
          "url": "http://www.seriouseats.com/recipes/2011/02/baked-wheat-bulgur-with-sweet-potatoes-almonds-recipe.html",
          "shareAs": "http://www.edamam.com/recipe/healthy-delicious-baked-wheat-bulgur-with-sweet-potatoes-and-almonds-recipe-b7ee7a095777bbcdb31956edefa093b0/chicken/balanced/333-cal",
          "yield": 8.0,
          "dietLabels": [
            "Balanced",
            "High-Fiber"
          ],
          "healthLabels": [
            "Sugar-Conscious",
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
            "No oil added",
            "Sulfite-Free"
          ],
          "cautions": [
            "Gluten",
            "Wheat",
            "Sulfites"
          ],
          "ingredientLines": [
            "2 (15-ounce) cans low-sodium chicken broth",
            "1 1/2 cups water",
            "2 cups bulgur wheat",
            "1 medium onion, diced",
            "1 pound (about 2 large) sweet potatoes, peeled and diced into 1/2-inch cubes",
            "1 cup parsley, chopped",
            "2/3 cup grated Parmesan",
            "2/3 cup sliced almonds, toasted",
            "1/2 teaspoon ground cinnamon",
            "Pinch of ground nutmeg",
            "1 1/2 to 2 teaspoons salt",
            "Freshly ground black pepper"
          ],
          "ingredients": [
            {
              "text": "2 (15-ounce) cans low-sodium chicken broth",
              "quantity": 30.0,
              "measure": "ounce",
              "food": "low-sodium chicken broth",
              "weight": 850.48569375,
              "foodCategory": "canned soup",
              "foodId": "food_axg87lea13vni7a0lc9adauqgcs9",
              "image": "https://www.edamam.com/food-img/2eb/2eb3c708f58f5fa1543022650ff0ae8d.png"
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
              "text": "2 cups bulgur wheat",
              "quantity": 2.0,
              "measure": "cup",
              "food": "bulgur wheat",
              "weight": 280.0,
              "foodCategory": "grains",
              "foodId": "food_bnvq3wpby97h34bvahz0hb1sggds",
              "image": "https://www.edamam.com/food-img/efd/efdae488ee5023e28e7f128e61b261f7.jpg"
            },
            {
              "text": "1 medium onion, diced",
              "quantity": 1.0,
              "measure": "<unit>",
              "food": "onion",
              "weight": 110.0,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "1 pound (about 2 large) sweet potatoes, peeled and diced into 1/2-inch cubes",
              "quantity": 1.0,
              "measure": "pound",
              "food": "sweet potatoes",
              "weight": 453.59237,
              "foodCategory": "vegetables",
              "foodId": "food_bg68yf2b3dlfusawgs590bjloxfd",
              "image": "https://www.edamam.com/food-img/b66/b660e3d37b4ea9d58cb98e8ea73933b6.jpg"
            },
            {
              "text": "1 cup parsley, chopped",
              "quantity": 1.0,
              "measure": "cup",
              "food": "parsley",
              "weight": 60.0,
              "foodCategory": "vegetables",
              "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
              "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
            },
            {
              "text": "2/3 cup grated Parmesan",
              "quantity": 0.6666666666666666,
              "measure": "cup",
              "food": "Parmesan",
              "weight": 99.1375,
              "foodCategory": "Cheese",
              "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
              "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
            },
            {
              "text": "2/3 cup sliced almonds, toasted",
              "quantity": 0.6666666666666666,
              "measure": "cup",
              "food": "almonds",
              "weight": 61.33333333333333,
              "foodCategory": "plant-based protein",
              "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
              "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
            },
            {
              "text": "1/2 teaspoon ground cinnamon",
              "quantity": 0.5,
              "measure": "teaspoon",
              "food": "ground cinnamon",
              "weight": 1.3,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_atjxtznauw5zabaixm24xa787onz",
              "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
            },
            {
              "text": "Pinch of ground nutmeg",
              "quantity": 1.0,
              "measure": "pinch",
              "food": "ground nutmeg",
              "weight": 0.14583333352071937,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_aa8vp2kadkkiiubgpp48fazrqiq2",
              "image": "https://www.edamam.com/food-img/b9e/b9e54f78ae18cf99a6504b472ba25e7b.jpg"
            },
            {
              "text": "1 1/2 to 2 teaspoons salt",
              "quantity": 1.75,
              "measure": "teaspoon",
              "food": "salt",
              "weight": 10.5,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "Freshly ground black pepper",
              "quantity": 0.0,
              "measure": null,
              "food": "black pepper",
              "weight": 6.844131255500563,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            }
          ],
          "calories": 2314.2615436522897,
          "totalCO2Emissions": 11529.271111129321,
          "co2EmissionsClass": "F",
          "totalWeight": 2286.794464710069,
          "totalTime": 95.0,
          "cuisineType": [
            "middle eastern"
          ],
          "mealType": [
            "breakfast",
            "lunch/dinner"
          ],
          "dishType": [
            "cereals"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 2314.2615436522897,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 65.31959485983069,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 19.51942194291249,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.009199999999999998,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 29.90551202122585,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 10.920806127522217,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 349.91006203194615,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 287.33342572426557,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 62.576636307680616,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 29.24121657458248,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 110.82918206791634,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 67.4135,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 5296.795134365858,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 1767.4181904437637,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 847.713344915126,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 4539.670039086832,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 19.287427778139257,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 13.237076116123866,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 2370.018057742424,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 3675.8347354056614,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 98.87999188000563,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.2781812520232558,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 1.9836091150850075,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 31.98590172659015,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 2.373102169628806,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 272.8737880135775,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 272.8737880135775,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 2.04013569375,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.4956875,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 17.84011496039054,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 1011.2399754190209,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1730.9172387254412,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 115.71307718261448,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 100.49168439973951,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 97.59710971456245,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 116.63668734398205,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 250.30654523072246,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 221.65836413583267,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 22.47116666666667,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 220.6997972652441,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 176.74181904437637,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 201.8365106940776,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 96.58872423589004,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 107.15237654521809,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 120.33705560112607,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 338.57400824891766,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 408.42608171174015,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 109.86665764445071,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 106.51510433527133,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 152.58531654500058,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 199.91188579118844,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 182.54632074067737,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 68.21844700339437,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 85.00565390625,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 3.3045833333333334,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 118.93409973593694,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 842.6999795158507,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 65.31959485983069,
              "hasRDI": true,
              "daily": 100.49168439973951,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 19.51942194291249,
                  "hasRDI": true,
                  "daily": 97.59710971456245,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.009199999999999998,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 29.90551202122585,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 10.920806127522217,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 349.91006203194615,
              "hasRDI": true,
              "daily": 116.63668734398205,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 287.33342572426557,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 62.576636307680616,
                  "hasRDI": true,
                  "daily": 250.30654523072246,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 29.24121657458248,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 110.82918206791634,
              "hasRDI": true,
              "daily": 221.65836413583267,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 67.4135,
              "hasRDI": true,
              "daily": 22.47116666666667,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 5296.795134365858,
              "hasRDI": true,
              "daily": 220.6997972652441,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 1767.4181904437637,
              "hasRDI": true,
              "daily": 176.74181904437637,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 847.713344915126,
              "hasRDI": true,
              "daily": 201.8365106940776,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 4539.670039086832,
              "hasRDI": true,
              "daily": 96.58872423589004,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 19.287427778139257,
              "hasRDI": true,
              "daily": 107.15237654521809,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 13.237076116123866,
              "hasRDI": true,
              "daily": 120.33705560112607,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 2370.018057742424,
              "hasRDI": true,
              "daily": 338.57400824891766,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 3675.8347354056614,
              "hasRDI": true,
              "daily": 408.42608171174015,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 98.87999188000563,
              "hasRDI": true,
              "daily": 109.86665764445071,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.2781812520232558,
              "hasRDI": true,
              "daily": 106.51510433527133,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 1.9836091150850075,
              "hasRDI": true,
              "daily": 152.58531654500058,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 31.98590172659015,
              "hasRDI": true,
              "daily": 199.91188579118844,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 2.373102169628806,
              "hasRDI": true,
              "daily": 182.54632074067737,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 272.8737880135775,
              "hasRDI": true,
              "daily": 68.21844700339437,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 272.8737880135775,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 2.04013569375,
              "hasRDI": true,
              "daily": 85.00565390625,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.4956875,
              "hasRDI": true,
              "daily": 3.3045833333333334,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 17.84011496039054,
              "hasRDI": true,
              "daily": 118.93409973593694,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 1011.2399754190209,
              "hasRDI": true,
              "daily": 842.6999795158507,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1730.9172387254412,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ],
          "tags": [
            "casseroles",
            "sweet potatoes",
            "almonds",
            "wheat bulgur",
            "Healthy and Delicous"
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/b7ee7a095777bbcdb31956edefa093b0?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_47eb5a4ba0c55a8f05388ee339ee0d31",
          "label": "Summer Millet Risotto",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/e9d/e9d60503e218c305b8a82f53bd3f0448.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a651115928ce9336facdfb22889b4f18eed9ce8f6aa145674e7b1437a5276848",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e9d/e9d60503e218c305b8a82f53bd3f0448-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=04ff49a22f4ca1dcb5d6d64999360984fa269f6bc4ff09588399b7525f7c41b6",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e9d/e9d60503e218c305b8a82f53bd3f0448-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9cdfacbddbfc612af75a0ef466949eb62a042b8ef146d667a264e49bfa852d5e",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e9d/e9d60503e218c305b8a82f53bd3f0448.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=833564c3104d9b729ea5467cea3ebf09be6e636533c15e469481d54c6ad75a20",
              "width": 300,
              "height": 300
            }
          },
          "source": "Cookstr",
          "url": "http://www.cookstr.com/recipes/summer-millet-risotto",
          "shareAs": "http://www.edamam.com/recipe/summer-millet-risotto-47eb5a4ba0c55a8f05388ee339ee0d31/chicken/balanced/333-cal",
          "yield": 6.0,
          "dietLabels": [
            "Balanced"
          ],
          "healthLabels": [
            "Sugar-Conscious",
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
            "Sulfite-Free",
            "Kosher"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "3 tablespoons olive oil",
            "1½ ounces (1/3 cup) finely chopped white onion",
            "¾ cup millet",
            "2½ cups Chicken Stock or Fake Chicken Stock",
            "2 ounces (about ½ cup) zucchini in ¼-inch dice",
            "2 cloves garlic, smashed, peeled, and finely chopped",
            "¾ cup loosely packed basil leaves, chopped (about 3 tablespoons)",
            "Kosher salt",
            "Freshly ground black pepper"
          ],
          "ingredients": [
            {
              "text": "3 tablespoons olive oil",
              "quantity": 3.0,
              "measure": "tablespoon",
              "food": "olive oil",
              "weight": 40.5,
              "foodCategory": "Oils",
              "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
              "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
              "text": "1½ ounces (1/3 cup) finely chopped white onion",
              "quantity": 1.5,
              "measure": "ounce",
              "food": "white onion",
              "weight": 42.5242846875,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "¾ cup millet",
              "quantity": 0.75,
              "measure": "cup",
              "food": "millet",
              "weight": 150.0,
              "foodCategory": "grains",
              "foodId": "food_atlw6euael4ib4be9bq8sameb47e",
              "image": "https://www.edamam.com/food-img/66d/66d7359fb24a51ab5fce4b647b0c9170.jpg"
            },
            {
              "text": "2½ cups Chicken Stock or Fake Chicken Stock",
              "quantity": 2.5,
              "measure": "cup",
              "food": "Chicken Stock",
              "weight": 600.0,
              "foodCategory": "canned soup",
              "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
              "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
            },
            {
              "text": "2 ounces (about ½ cup) zucchini in ¼-inch dice",
              "quantity": 2.0,
              "measure": "ounce",
              "food": "zucchini",
              "weight": 56.69904625,
              "foodCategory": "vegetables",
              "foodId": "food_avpihljbuwpd8ibbmahcabaros5s",
              "image": "https://www.edamam.com/food-img/f63/f637280594e4a731eccc1199194a8847.jpg"
            },
            {
              "text": "2 cloves garlic, smashed, peeled, and finely chopped",
              "quantity": 2.0,
              "measure": "clove",
              "food": "garlic",
              "weight": 6.0,
              "foodCategory": "vegetables",
              "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
              "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
            },
            {
              "text": "¾ cup loosely packed basil leaves, chopped (about 3 tablespoons)",
              "quantity": 3.0,
              "measure": "tablespoon",
              "food": "basil",
              "weight": 7.949999999999999,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
              "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
            },
            {
              "text": "Kosher salt",
              "quantity": 0.0,
              "measure": null,
              "food": "Kosher salt",
              "weight": 5.422039985625,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "Freshly ground black pepper",
              "quantity": 0.0,
              "measure": null,
              "food": "black pepper",
              "weight": 2.7110199928125,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            }
          ],
          "calories": 1185.2417119194595,
          "totalCO2Emissions": 6471.168089145339,
          "co2EmissionsClass": "E",
          "totalWeight": 909.5630921192696,
          "totalTime": 60.0,
          "cuisineType": [
            "italian"
          ],
          "mealType": [
            "breakfast"
          ],
          "dishType": [
            "starter"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1185.2417119194595,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 54.42322048445318,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 8.711270076318845,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.0,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 34.255955489843764,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 8.857246740012645,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 140.04683632358748,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 125.06784496321842,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 14.978991360369061,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 12.801706354954,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 33.68779667044,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 18.0,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 2107.7786804014227,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 86.96164933163408,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 220.71388839334895,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 1216.7983315557728,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 6.928632356194402,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 3.783163111072176,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 641.2930917230186,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 33.389880023059376,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 17.798926345625002,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.9042066433609874,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 1.0273004963276875,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 17.009655496743065,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 1.1800601551915846,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 185.23425858940314,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 185.23425858940314,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.0,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 6.260138320362751,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 67.07972891571251,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 669.028018483042,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 59.26208559597298,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 83.72803151454336,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 43.55635038159423,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 46.68227877452916,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 59.915965441476246,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 67.37559334088,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 6.0,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 87.82411168339262,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 8.696164933163407,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 52.55092580794023,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 25.889326203314315,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 38.49240197885779,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 34.392391918837966,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 91.61329881757409,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 3.7099866692288197,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 19.776584828472224,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 75.35055361341561,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 79.02311510212981,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 106.31034685464415,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 90.77385809166034,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 46.308564647350785,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 0.0,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.0,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 41.73425546908501,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 55.899774096427095,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 54.42322048445318,
              "hasRDI": true,
              "daily": 83.72803151454336,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 8.711270076318845,
                  "hasRDI": true,
                  "daily": 43.55635038159423,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 34.255955489843764,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 8.857246740012645,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 140.04683632358748,
              "hasRDI": true,
              "daily": 46.68227877452916,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 125.06784496321842,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 14.978991360369061,
                  "hasRDI": true,
                  "daily": 59.915965441476246,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 12.801706354954,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 33.68779667044,
              "hasRDI": true,
              "daily": 67.37559334088,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 18.0,
              "hasRDI": true,
              "daily": 6.0,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 2107.7786804014227,
              "hasRDI": true,
              "daily": 87.82411168339262,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 86.96164933163408,
              "hasRDI": true,
              "daily": 8.696164933163407,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 220.71388839334895,
              "hasRDI": true,
              "daily": 52.55092580794023,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 1216.7983315557728,
              "hasRDI": true,
              "daily": 25.889326203314315,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 6.928632356194402,
              "hasRDI": true,
              "daily": 38.49240197885779,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 3.783163111072176,
              "hasRDI": true,
              "daily": 34.392391918837966,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 641.2930917230186,
              "hasRDI": true,
              "daily": 91.61329881757409,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 33.389880023059376,
              "hasRDI": true,
              "daily": 3.7099866692288197,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 17.798926345625002,
              "hasRDI": true,
              "daily": 19.776584828472224,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.9042066433609874,
              "hasRDI": true,
              "daily": 75.35055361341561,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 1.0273004963276875,
              "hasRDI": true,
              "daily": 79.02311510212981,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 17.009655496743065,
              "hasRDI": true,
              "daily": 106.31034685464415,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 1.1800601551915846,
              "hasRDI": true,
              "daily": 90.77385809166034,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 185.23425858940314,
              "hasRDI": true,
              "daily": 46.308564647350785,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 185.23425858940314,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": true,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": true,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 6.260138320362751,
              "hasRDI": true,
              "daily": 41.73425546908501,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 67.07972891571251,
              "hasRDI": true,
              "daily": 55.899774096427095,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 669.028018483042,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ],
          "tags": [
            "Easy",
            "side dish",
            "dinner",
            "main course",
            "Casual Dinner Party",
            "Family Get-together"
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/47eb5a4ba0c55a8f05388ee339ee0d31?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_112a020a140ff815644ebac5c743c685",
          "label": "Wild Rice With Dried Cherries & Toasted Pecans",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/06f/06f4521f0018950dfbbd0cc8a08c43d6.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dcfd1faedd26ccd3862861c84b9641ac86cbf85a867c3a934743e1c4fbd9b168",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/06f/06f4521f0018950dfbbd0cc8a08c43d6-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=20fcf8e8c740c5120d68fdf26c6d5527b5a15b5ff2fb7e215da184f646060ba5",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/06f/06f4521f0018950dfbbd0cc8a08c43d6-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b83a73d61bf68b3a69b2dc6310f0ce5d0b8d5602044c8d7fc3c7bf1bb29f2fe1",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/06f/06f4521f0018950dfbbd0cc8a08c43d6.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dcfd1faedd26ccd3862861c84b9641ac86cbf85a867c3a934743e1c4fbd9b168",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/06f/06f4521f0018950dfbbd0cc8a08c43d6-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d00b598b3f82fb18aedd9a98964f4f3ecd1ebd5d32db9268077b8f21f0b0bcea",
              "width": 600,
              "height": 600
            }
          },
          "source": "San Francisco Gate",
          "url": "http://www.sfgate.com/food/recipes/detail.html?rid=15588&sorig=qs",
          "shareAs": "http://www.edamam.com/recipe/wild-rice-with-dried-cherries-toasted-pecans-112a020a140ff815644ebac5c743c685/chicken/balanced/333-cal",
          "yield": 8.0,
          "dietLabels": [
            "Balanced"
          ],
          "healthLabels": [
            "Mediterranean",
            "Dairy-Free",
            "Gluten-Free",
            "Wheat-Free",
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
            "Kosher"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "1 tablespoon olive oil",
            "1 small onion, minced",
            "1 1/2 cups wild rice blend",
            "1/2 cup dry white wine",
            "2 1/2 cups chicken broth",
            "3/4 cup toasted pecans",
            "1 cup chopped dried cherries",
            "1/2 cup sliced green onions",
            "Kosher salt and freshly ground pepper to taste"
          ],
          "ingredients": [
            {
              "text": "1 tablespoon olive oil",
              "quantity": 1.0,
              "measure": "tablespoon",
              "food": "olive oil",
              "weight": 13.5,
              "foodCategory": "Oils",
              "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
              "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
              "text": "1 small onion, minced",
              "quantity": 1.0,
              "measure": "<unit>",
              "food": "onion",
              "weight": 70.0,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "1 1/2 cups wild rice blend",
              "quantity": 1.5,
              "measure": "cup",
              "food": "wild rice",
              "weight": 240.0,
              "foodCategory": "grains",
              "foodId": "food_at0h9hean2v4bobxbjzvgbhm51h7",
              "image": "https://www.edamam.com/food-img/1bc/1bcfd41e4d9869c95647b8040069408c.jpg"
            },
            {
              "text": "1/2 cup dry white wine",
              "quantity": 0.5,
              "measure": "cup",
              "food": "dry white wine",
              "weight": 117.6,
              "foodCategory": "wines",
              "foodId": "food_a656mk2a5dmqb2adiamu6beihduu",
              "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
            },
            {
              "text": "2 1/2 cups chicken broth",
              "quantity": 2.5,
              "measure": "cup",
              "food": "chicken broth",
              "weight": 600.0,
              "foodCategory": "canned soup",
              "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
              "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
            },
            {
              "text": "3/4 cup toasted pecans",
              "quantity": 0.75,
              "measure": "cup",
              "food": "pecans",
              "weight": 74.25,
              "foodCategory": "plant-based protein",
              "foodId": "food_a9apeypa4rgl7eax9hbjradaa4ry",
              "image": "https://www.edamam.com/food-img/42f/42ff4c36d4d0b4e8069604c97af1cfef.jpg"
            },
            {
              "text": "1 cup chopped dried cherries",
              "quantity": 1.0,
              "measure": "cup",
              "food": "dried cherries",
              "weight": 160.0,
              "foodCategory": "sugar jam",
              "foodId": "food_am5qn60a2zxubua23hvaebukpcne",
              "image": "https://www.edamam.com/food-img/330/330dd43a630a5649ff5b0d2e5c18fa08.jpg"
            },
            {
              "text": "1/2 cup sliced green onions",
              "quantity": 0.5,
              "measure": "cup",
              "food": "green onions",
              "weight": 50.0,
              "foodCategory": "vegetables",
              "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
              "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
            },
            {
              "text": "Kosher salt and freshly ground pepper to taste",
              "quantity": 0.0,
              "measure": null,
              "food": "Kosher salt",
              "weight": 7.9521,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "Kosher salt and freshly ground pepper to taste",
              "quantity": 0.0,
              "measure": null,
              "food": "pepper",
              "weight": 3.97605,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            }
          ],
          "calories": 2388.4193855,
          "totalCO2Emissions": 7344.4438035968,
          "co2EmissionsClass": "E",
          "totalWeight": 1334.939390032871,
          "totalTime": 0.0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "breakfast"
          ],
          "dishType": [
            "starter"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 2388.4193855,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 78.21461923000001,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 9.086317094999998,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.0,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 44.357783009500004,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 20.754880979000003,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 355.71102200000007,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 326.20708135000007,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 29.50394065,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 131.23513172,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 61.3895542,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 18.0,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 3091.321142754,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 262.9551031078891,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 609.4576789003288,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 2937.9865322026294,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 10.615243477108475,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 19.41557333503287,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1530.7226589999998,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 262.3010335,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 47.47675,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.1387241340000003,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 1.48062189,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 28.403959970000002,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 1.8067953055000001,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 339.0869285,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 339.0869285,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.0,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 5.733850920000001,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 135.416872,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 810.9702329300659,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 119.42096927499999,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 120.33018343076924,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 45.43158547499999,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 118.5703406666667,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 118.0157626,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 122.7791084,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 6.0,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 128.80504761475,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 26.295510310788913,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 145.10897116674496,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 62.51035174899212,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 58.973574872824855,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 176.50521213666246,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 218.67466557142853,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 29.14455927777778,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 52.75194444444445,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 94.89367783333336,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 113.89399153846155,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 177.5247498125,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 138.98425426923077,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 84.771732125,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 0.0,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.0,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 38.225672800000005,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 112.84739333333333,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 78.21461923000001,
              "hasRDI": true,
              "daily": 120.33018343076924,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 9.086317094999998,
                  "hasRDI": true,
                  "daily": 45.43158547499999,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 44.357783009500004,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 20.754880979000003,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 355.71102200000007,
              "hasRDI": true,
              "daily": 118.5703406666667,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 326.20708135000007,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 29.50394065,
                  "hasRDI": true,
                  "daily": 118.0157626,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 131.23513172,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 61.3895542,
              "hasRDI": true,
              "daily": 122.7791084,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 18.0,
              "hasRDI": true,
              "daily": 6.0,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 3091.321142754,
              "hasRDI": true,
              "daily": 128.80504761475,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 262.9551031078891,
              "hasRDI": true,
              "daily": 26.295510310788913,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 609.4576789003288,
              "hasRDI": true,
              "daily": 145.10897116674496,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 2937.9865322026294,
              "hasRDI": true,
              "daily": 62.51035174899212,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 10.615243477108475,
              "hasRDI": true,
              "daily": 58.973574872824855,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 19.41557333503287,
              "hasRDI": true,
              "daily": 176.50521213666246,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 1530.7226589999998,
              "hasRDI": true,
              "daily": 218.67466557142853,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 262.3010335,
              "hasRDI": true,
              "daily": 29.14455927777778,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 47.47675,
              "hasRDI": true,
              "daily": 52.75194444444445,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.1387241340000003,
              "hasRDI": true,
              "daily": 94.89367783333336,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 1.48062189,
              "hasRDI": true,
              "daily": 113.89399153846155,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 28.403959970000002,
              "hasRDI": true,
              "daily": 177.5247498125,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 1.8067953055000001,
              "hasRDI": true,
              "daily": 138.98425426923077,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 339.0869285,
              "hasRDI": true,
              "daily": 84.771732125,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 339.0869285,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": true,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": true,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 5.733850920000001,
              "hasRDI": true,
              "daily": 38.225672800000005,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 135.416872,
              "hasRDI": true,
              "daily": 112.84739333333333,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 810.9702329300659,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/112a020a140ff815644ebac5c743c685?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_229f8bac6a4a49eaad42224d144bfc66",
          "label": "Turkey Shepard's Pot Pie",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/c65/c657dc2d545e732fac9ed2d635390033.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b8e46cf1196e13badf9cb12e24b984521ad4673140c140cf263b9a876d2be039",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c65/c657dc2d545e732fac9ed2d635390033-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=60d96b38c3a04be821303bb3859c39d7ee6410293f2d6c92a6d9ea4df6a09006",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c65/c657dc2d545e732fac9ed2d635390033-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=76a8f0f192050b68c2fe837c1dca98d93bc041d26a1249387aae4c854ec75664",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c65/c657dc2d545e732fac9ed2d635390033.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b8e46cf1196e13badf9cb12e24b984521ad4673140c140cf263b9a876d2be039",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c65/c657dc2d545e732fac9ed2d635390033-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cc4236b7ea78966b31446b433c743e6ef68be5f5f6b68802072966f503cff7a6",
              "width": 600,
              "height": 600
            }
          },
          "source": "Food52",
          "url": "https://food52.com/recipes/39620-turkey-shepard-s-pot-pie",
          "shareAs": "http://www.edamam.com/recipe/turkey-shepard-s-pot-pie-229f8bac6a4a49eaad42224d144bfc66/chicken/balanced/333-cal",
          "yield": 18.0,
          "dietLabels": [
            "Balanced"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free"
          ],
          "cautions": [
            "Soy",
            "Sulfites",
            "FODMAP"
          ],
          "ingredientLines": [
            "2 leftover pie crusts",
            "3 tablespoons leftover fat siphoned from turkey or chicken drippings",
            "3 tablespoons Wondra or AP flour",
            "4 cups coarsely diced cooked turkey or chicken",
            "6 to 8 ounces frozen baby pearl onions, steamed and then cut in half",
            "1 1/2 cups cooked diced carrots",
            "1 cup cooked diced parsnips (NB - I made a diced parsnip and carrot dish and so had leftovers to add)",
            "Handful chopped cooked green beans (optional)",
            "Handful other leftover root veggies that are chopped (optional)",
            "2 cups leftover gravy",
            "1 cup turkey or chicken broth",
            "1 teaspoon each of salt and pepper",
            "10 ounces bag frozen peas",
            "1/4 cup finely chopped parsley",
            "salt and pepper, to taste",
            "Dash Worcestershire sauce or soy sauce, to taste",
            "4-5 cups mashed potatoes, mashed turnips or rutabagas, or mashed sweet potatoes, or a combination to make a total of 4-5 cups",
            "3 tablespoons butter, cut into 1/2\" bits"
          ],
          "ingredients": [
            {
              "text": "2 leftover pie crusts",
              "quantity": 2.0,
              "measure": "<unit>",
              "food": "pie crusts",
              "weight": 458.0,
              "foodCategory": "quick breads and pastries",
              "foodId": "food_ap3v07rbeac7cza2zc7kgbztk848",
              "image": "https://www.edamam.com/food-img/e89/e89249260f599fede44e5b98925042f2.jpg"
            },
            {
              "text": "3 tablespoons leftover fat siphoned from turkey or chicken drippings",
              "quantity": 3.0,
              "measure": "tablespoon",
              "food": "turkey",
              "weight": 26.249999999556195,
              "foodCategory": "Poultry",
              "foodId": "food_a9m7tjlaizm6qwb80yipna6dvd20",
              "image": "https://www.edamam.com/food-img/45b/45ba5c5df6da8dbc4d19f2bd7d04d345.jpg"
            },
            {
              "text": "3 tablespoons Wondra or AP flour",
              "quantity": 3.0,
              "measure": "tablespoon",
              "food": "flour",
              "weight": 23.437499999603745,
              "foodCategory": "grains",
              "foodId": "food_ahebfs0a985an4aubqaebbipra58",
              "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
            },
            {
              "text": "4 cups coarsely diced cooked turkey or chicken",
              "quantity": 4.0,
              "measure": "cup",
              "food": "cooked turkey",
              "weight": 560.0,
              "foodCategory": "Poultry",
              "foodId": "food_aklv5e4ankpywpbarktmgb5ue0pw",
              "image": "https://www.edamam.com/food-img/b07/b07e529596022b362f2ca630ce508fcc.jpg"
            },
            {
              "text": "6 to 8 ounces frozen baby pearl onions, steamed and then cut in half",
              "quantity": 7.0,
              "measure": "ounce",
              "food": "pearl onions",
              "weight": 198.44666187500002,
              "foodCategory": "vegetables",
              "foodId": "food_bye6035blu09tpb1bnvdsb2js8j6",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "1 1/2 cups cooked diced carrots",
              "quantity": 1.5,
              "measure": "cup",
              "food": "carrots",
              "weight": 183.0,
              "foodCategory": "vegetables",
              "foodId": "food_ai215e5b85pdh5ajd4aafa3w2zm8",
              "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
            },
            {
              "text": "1 cup cooked diced parsnips (NB - I made a diced parsnip and carrot dish and so had leftovers to add)",
              "quantity": 1.0,
              "measure": "cup",
              "food": "parsnips",
              "weight": 133.0,
              "foodCategory": "vegetables",
              "foodId": "food_admr9qdb3d66y9blt7afaazt0dbq",
              "image": "https://www.edamam.com/food-img/ec2/ec2f9c27d98c2ca45687f96e3e487868.jpg"
            },
            {
              "text": "Handful chopped cooked green beans (optional)",
              "quantity": 1.0,
              "measure": "handful",
              "food": "green beans",
              "weight": 12.5,
              "foodCategory": "vegetables",
              "foodId": "food_aceucvpau4a8v6atkx5eabxyoqdn",
              "image": "https://www.edamam.com/food-img/891/89135f10639878a2360e6a33c9af3d91.jpg"
            },
            {
              "text": "1 cup turkey or chicken broth",
              "quantity": 1.0,
              "measure": "cup",
              "food": "chicken broth",
              "weight": 240.0,
              "foodCategory": "canned soup",
              "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
              "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
            },
            {
              "text": "1 teaspoon each of salt and pepper",
              "quantity": 1.0,
              "measure": "teaspoon",
              "food": "salt",
              "weight": 6.0,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "1 teaspoon each of salt and pepper",
              "quantity": 1.0,
              "measure": "teaspoon",
              "food": "pepper",
              "weight": 2.9,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
              "text": "10 ounces bag frozen peas",
              "quantity": 10.0,
              "measure": "ounce",
              "food": "frozen peas",
              "weight": 283.49523125,
              "foodCategory": "vegetables",
              "foodId": "food_aqrct01b4nxw5eaxoo8woaxc3xd7",
              "image": "https://www.edamam.com/food-img/c91/c9130a361d5c5b279bf48c69e2466ec2.jpg"
            },
            {
              "text": "1/4 cup finely chopped parsley",
              "quantity": 0.25,
              "measure": "cup",
              "food": "parsley",
              "weight": 15.0,
              "foodCategory": "vegetables",
              "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
              "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
            },
            {
              "text": "salt and pepper, to taste",
              "quantity": 0.0,
              "measure": null,
              "food": "salt",
              "weight": 19.646073233743437,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "salt and pepper, to taste",
              "quantity": 0.0,
              "measure": null,
              "food": "pepper",
              "weight": 9.823036616871718,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
              "text": "Dash Worcestershire sauce or soy sauce, to taste",
              "quantity": 1.0,
              "measure": "dash",
              "food": "Worcestershire sauce",
              "weight": 0.7161458330790678,
              "foodCategory": "canned soup",
              "foodId": "food_ahb8mscbejo58ubexo0itam1i74g",
              "image": "https://www.edamam.com/food-img/072/072b61dd1ad5bb641f05b14f716ba6d0.jpg"
            },
            {
              "text": "4-5 cups mashed potatoes, mashed turnips or rutabagas, or mashed sweet potatoes, or a combination to make a total of 4-5 cups",
              "quantity": 4.5,
              "measure": "cup",
              "food": "mashed potatoes",
              "weight": 1089.0,
              "foodCategory": "vegetables",
              "foodId": "food_bnhuc7cb6ad68xblbhbpfa7owf2p",
              "image": "https://www.edamam.com/food-img/0cc/0cc519163a98fc340c2077a1353005dd.jpg"
            },
            {
              "text": "3 tablespoons butter, cut into 1/2\" bits",
              "quantity": 3.0,
              "measure": "tablespoon",
              "food": "butter",
              "weight": 42.599999999999994,
              "foodCategory": "Dairy",
              "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
              "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            }
          ],
          "calories": 4926.875747010238,
          "totalCO2Emissions": 13502.463423940238,
          "co2EmissionsClass": "E",
          "totalWeight": 3280.745156733256,
          "totalTime": 0.0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "breakfast"
          ],
          "dishType": [
            "desserts"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 4926.875747010238,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 210.8739860805561,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 79.88092278457992,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 1.434124999999725,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 73.90856035794647,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 38.64365536763447,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 528.1117856035711,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 473.25466618138825,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 54.85711942218285,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 47.6793582936545,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 231.30197265989307,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 683.2899999996805,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 7623.315459126083,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 637.8015158384728,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 571.1444336970443,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 7225.838635310341,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 23.25651908053066,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 22.605214115409595,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 2722.6617069220156,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 2679.962615365634,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 121.16929356205029,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.9636752950286878,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 2.8071797854486427,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 84.56264749350008,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 6.228254072739763,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 680.0617962101303,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 542.6617962101304,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 82.44,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 6.4189699999945855,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 1.7587499999986687,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 9.819338376106293,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 474.0012101762493,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 2275.890380448649,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 246.34378735051192,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 324.4215170470094,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 399.4046139228996,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 176.03726186785704,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 219.4284776887314,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 462.60394531978613,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 227.76333333322683,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 317.63814413025347,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 63.780151583847285,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 135.9867699278677,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 153.7412475597945,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 129.20288378072587,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 205.5019465037236,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 388.9516724174308,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 297.7736239295149,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 134.63254840227808,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 163.6396079190573,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 215.9369065729725,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 528.5165468343755,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 479.09646713382796,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 170.01544905253257,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 267.45708333310773,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 11.724999999991125,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 65.46225584070862,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 395.00100848020776,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 210.8739860805561,
              "hasRDI": true,
              "daily": 324.4215170470094,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 79.88092278457992,
                  "hasRDI": true,
                  "daily": 399.4046139228996,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 1.434124999999725,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 73.90856035794647,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 38.64365536763447,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 528.1117856035711,
              "hasRDI": true,
              "daily": 176.03726186785704,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 473.25466618138825,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 54.85711942218285,
                  "hasRDI": true,
                  "daily": 219.4284776887314,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 47.6793582936545,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 231.30197265989307,
              "hasRDI": true,
              "daily": 462.60394531978613,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 683.2899999996805,
              "hasRDI": true,
              "daily": 227.76333333322683,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 7623.315459126083,
              "hasRDI": true,
              "daily": 317.63814413025347,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 637.8015158384728,
              "hasRDI": true,
              "daily": 63.780151583847285,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 571.1444336970443,
              "hasRDI": true,
              "daily": 135.9867699278677,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 7225.838635310341,
              "hasRDI": true,
              "daily": 153.7412475597945,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 23.25651908053066,
              "hasRDI": true,
              "daily": 129.20288378072587,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 22.605214115409595,
              "hasRDI": true,
              "daily": 205.5019465037236,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 2722.6617069220156,
              "hasRDI": true,
              "daily": 388.9516724174308,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 2679.962615365634,
              "hasRDI": true,
              "daily": 297.7736239295149,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 121.16929356205029,
              "hasRDI": true,
              "daily": 134.63254840227808,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.9636752950286878,
              "hasRDI": true,
              "daily": 163.6396079190573,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 2.8071797854486427,
              "hasRDI": true,
              "daily": 215.9369065729725,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 84.56264749350008,
              "hasRDI": true,
              "daily": 528.5165468343755,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 6.228254072739763,
              "hasRDI": true,
              "daily": 479.09646713382796,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 680.0617962101303,
              "hasRDI": true,
              "daily": 170.01544905253257,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 542.6617962101304,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 82.44,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 6.4189699999945855,
              "hasRDI": true,
              "daily": 267.45708333310773,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 1.7587499999986687,
              "hasRDI": true,
              "daily": 11.724999999991125,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 9.819338376106293,
              "hasRDI": true,
              "daily": 65.46225584070862,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 474.0012101762493,
              "hasRDI": true,
              "daily": 395.00100848020776,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 2275.890380448649,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/229f8bac6a4a49eaad42224d144bfc66?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_8be8f11eb783043944b840c550babc1b",
          "label": "Jalapeño, Sausage, Jack, and Egg Breakfast Braid",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/5be/5beeb9c9fd62904a4da670e7a22b79b5?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=470c3aa8f64b44aa349a5bbc4f9e221c8d455f9239052cd0c894276ff127c8f7",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5be/5beeb9c9fd62904a4da670e7a22b79b5-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c7abce53551b0836310af5b9431621e4feedc23c852c6394546c62290f43f989",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5be/5beeb9c9fd62904a4da670e7a22b79b5-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5d27f791466f396f4fd471eee2a283832fee9e0cd8d2a1053f60eaa882f68db3",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5be/5beeb9c9fd62904a4da670e7a22b79b5?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=470c3aa8f64b44aa349a5bbc4f9e221c8d455f9239052cd0c894276ff127c8f7",
              "width": 300,
              "height": 300
            }
          },
          "source": "My Recipes",
          "url": "https://www.myrecipes.com/recipe/jalapeo-sausage-jack-egg-breakfast-braid",
          "shareAs": "http://www.edamam.com/recipe/jalape%C3%B1o-sausage-jack-and-egg-breakfast-braid-8be8f11eb783043944b840c550babc1b/chicken/balanced/333-cal",
          "yield": 6.0,
          "dietLabels": [
            "Balanced"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Kidney-Friendly",
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
            "Sulfite-Free",
            "Kosher",
            "Immuno-Supportive"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "1 (13.8-ounce) can refrigerated pizza crust dough",
            "Cooking spray",
            "1 tablespoon olive oil",
            "¼ cup chopped onion",
            "4 ounces chicken sausage with jalapeño peppers, chopped",
            "2 large eggs, lightly beaten",
            "½ cup (2 ounces) shredded Monterey Jack cheese",
            "¼ cup shredded cheddar cheese",
            "¼ cup chopped seeded jalapeño peppers",
            "1 large egg white, lightly beaten"
          ],
          "ingredients": [
            {
              "text": "1 (13.8-ounce) can refrigerated pizza crust dough",
              "quantity": 1.0,
              "measure": "pizza",
              "food": "dough",
              "weight": 228.0,
              "foodCategory": "bread, rolls and tortillas",
              "foodId": "food_bq98fb1beuvdwxax58q1cayt7w6k",
              "image": "https://www.edamam.com/food-img/19f/19fc0706f04d44f62fc79ab4d7a07d7b.jpg"
            },
            {
              "text": "Cooking spray",
              "quantity": 0.0,
              "measure": null,
              "food": "Cooking spray",
              "weight": 8.640721087,
              "foodCategory": "Oils",
              "foodId": "food_aglc0hqae3alv1biazc6qaiamw2x",
              "image": null
            },
            {
              "text": "1 tablespoon olive oil",
              "quantity": 1.0,
              "measure": "tablespoon",
              "food": "olive oil",
              "weight": 13.5,
              "foodCategory": "Oils",
              "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
              "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
              "text": "¼ cup chopped onion",
              "quantity": 0.25,
              "measure": "cup",
              "food": "onion",
              "weight": 40.0,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "4 ounces chicken sausage with jalapeño peppers, chopped",
              "quantity": 4.0,
              "measure": "ounce",
              "food": "jalapeño peppers",
              "weight": 113.3980925,
              "foodCategory": "vegetables",
              "foodId": "food_b7txsnbadj6plsbq27zvwah80r6y",
              "image": "https://www.edamam.com/food-img/0df/0df9aa459870a6d477b0925c1fdb6d4c.jpg"
            },
            {
              "text": "2 large eggs, lightly beaten",
              "quantity": 2.0,
              "measure": "<unit>",
              "food": "eggs",
              "weight": 100.0,
              "foodCategory": "Eggs",
              "foodId": "food_bhpradua77pk16aipcvzeayg732r",
              "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
              "text": "½ cup (2 ounces) shredded Monterey Jack cheese",
              "quantity": 2.0,
              "measure": "ounce",
              "food": "Jack cheese",
              "weight": 56.69904625,
              "foodCategory": "Cheese",
              "foodId": "food_atp17pta7d5it2a80ct13ard6aj3",
              "image": "https://www.edamam.com/food-img/590/59062b9f8d57ebc7d831b7b7c231f726.jpg"
            },
            {
              "text": "¼ cup shredded cheddar cheese",
              "quantity": 0.25,
              "measure": "cup",
              "food": "cheddar cheese",
              "weight": 28.25,
              "foodCategory": "Cheese",
              "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
              "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
            },
            {
              "text": "¼ cup chopped seeded jalapeño peppers",
              "quantity": 0.25,
              "measure": "cup",
              "food": "jalapeño peppers",
              "weight": 22.5,
              "foodCategory": "vegetables",
              "foodId": "food_b7txsnbadj6plsbq27zvwah80r6y",
              "image": "https://www.edamam.com/food-img/0df/0df9aa459870a6d477b0925c1fdb6d4c.jpg"
            },
            {
              "text": "1 large egg white, lightly beaten",
              "quantity": 1.0,
              "measure": "<unit>",
              "food": "egg white",
              "weight": 33.0,
              "foodCategory": "Eggs",
              "foodId": "food_a7hurbpb20zs42bnwg2p8bca3ihs",
              "image": "https://www.edamam.com/food-img/b30/b304a020501418f9a63cf7f9359bc99d.jpg"
            }
          ],
          "calories": 1319.1999003465403,
          "totalCO2Emissions": 3424.4895352572507,
          "co2EmissionsClass": "D",
          "totalWeight": 643.987859837,
          "totalTime": 0.0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "breakfast"
          ],
          "dishType": [
            "starter"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1319.1999003465403,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 63.220631451469,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 22.977678277417404,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.07676000000000001,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 26.600571095026,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 9.1587446496145,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 126.32448379200903,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 117.05133720200905,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 9.273146590000001,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 19.011596642250005,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 59.893854847826205,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 450.4296511625,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 2141.5317457163305,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 946.902656125,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 122.23095636250002,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 937.4684968624999,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 10.589528364250002,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 6.0886287170000015,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 846.7647694000001,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 440.85158152500003,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 164.67873007500003,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.4577365939375,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 1.781714945125,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 12.316143197012497,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 1.0896202541125002,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 411.4058133000001,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 343.00581330000006,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 41.040000000000006,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 1.701052083875,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 2.5096942775000004,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 8.876344231750002,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 42.66362326875001,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 384.51866457819574,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 65.95999501732702,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 97.26250992533693,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 114.88839138708701,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 42.10816126400301,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 37.092586360000006,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 119.78770969565241,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 150.14321705416668,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 89.2304894048471,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 94.69026561250001,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 29.1026086577381,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 19.94613823111702,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 58.83071313472223,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 55.351170154545464,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 120.96639562857143,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 48.98350905833333,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 182.97636675,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 121.47804949479166,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 137.05499577884615,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 76.97589498132811,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 83.81694262403848,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 102.85145332500002,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 70.87717016145834,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 16.731295183333337,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 59.17562821166668,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 35.553019390625,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 63.220631451469,
              "hasRDI": true,
              "daily": 97.26250992533693,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 22.977678277417404,
                  "hasRDI": true,
                  "daily": 114.88839138708701,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.07676000000000001,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 26.600571095026,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 9.1587446496145,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 126.32448379200903,
              "hasRDI": true,
              "daily": 42.10816126400301,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 117.05133720200905,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 9.273146590000001,
                  "hasRDI": true,
                  "daily": 37.092586360000006,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 19.011596642250005,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 59.893854847826205,
              "hasRDI": true,
              "daily": 119.78770969565241,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 450.4296511625,
              "hasRDI": true,
              "daily": 150.14321705416668,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 2141.5317457163305,
              "hasRDI": true,
              "daily": 89.2304894048471,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 946.902656125,
              "hasRDI": true,
              "daily": 94.69026561250001,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 122.23095636250002,
              "hasRDI": true,
              "daily": 29.1026086577381,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 937.4684968624999,
              "hasRDI": true,
              "daily": 19.94613823111702,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 10.589528364250002,
              "hasRDI": true,
              "daily": 58.83071313472223,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 6.0886287170000015,
              "hasRDI": true,
              "daily": 55.351170154545464,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 846.7647694000001,
              "hasRDI": true,
              "daily": 120.96639562857143,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 440.85158152500003,
              "hasRDI": true,
              "daily": 48.98350905833333,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 164.67873007500003,
              "hasRDI": true,
              "daily": 182.97636675,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.4577365939375,
              "hasRDI": true,
              "daily": 121.47804949479166,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 1.781714945125,
              "hasRDI": true,
              "daily": 137.05499577884615,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 12.316143197012497,
              "hasRDI": true,
              "daily": 76.97589498132811,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 1.0896202541125002,
              "hasRDI": true,
              "daily": 83.81694262403848,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 411.4058133000001,
              "hasRDI": true,
              "daily": 102.85145332500002,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 343.00581330000006,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 41.040000000000006,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 1.701052083875,
              "hasRDI": true,
              "daily": 70.87717016145834,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 2.5096942775000004,
              "hasRDI": true,
              "daily": 16.731295183333337,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 8.876344231750002,
              "hasRDI": true,
              "daily": 59.17562821166668,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 42.66362326875001,
              "hasRDI": true,
              "daily": 35.553019390625,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 384.51866457819574,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/8be8f11eb783043944b840c550babc1b?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_3d9a5f0307fc1ab750d5659cfc41379d",
          "label": "Israeli Couscous with Porcini and Arugula",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/15f/15f8b3235e8825cece25dfe2b8b62606.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3284027ad989682aa953cc077b700584ee1430f7911b68cab9d01419f318d4e3",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/15f/15f8b3235e8825cece25dfe2b8b62606-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=89106edcc7fe77095a6abb4c6b4b19919b3665f417ef44fffd1addaa4a79c0a0",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/15f/15f8b3235e8825cece25dfe2b8b62606-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bc62e11ffe1ba6ac3934a407d2f13147f255966f4527d4084bdb32cddb76cf4d",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/15f/15f8b3235e8825cece25dfe2b8b62606.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3284027ad989682aa953cc077b700584ee1430f7911b68cab9d01419f318d4e3",
              "width": 300,
              "height": 300
            }
          },
          "source": "Williams-Sonoma",
          "url": "https://www.williams-sonoma.com/recipe/israeli-couscous-with-porcini-and-arugula.html",
          "shareAs": "http://www.edamam.com/recipe/israeli-couscous-with-porcini-and-arugula-3d9a5f0307fc1ab750d5659cfc41379d/chicken/balanced/333-cal",
          "yield": 8.0,
          "dietLabels": [
            "Balanced"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Mediterranean",
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
            "Sulfites"
          ],
          "ingredientLines": [
            "1/2 cup dried porcini mushrooms",
            "1/2 cup water",
            "3 Tbs. olive oil",
            "1 cup Israeli couscous",
            "2 cups chicken stock or low-sodium broth, warmed",
            "2 ears of corn, husks and silks removed",
            "2 handfuls of baby arugula, tough stems removed",
            "1/4 lb. smoked mozzarella cheese, cut into 1/4-inch dice",
            "1 Tbs. Champagne vinegar",
            "Sea salt and freshly ground pepper, to taste"
          ],
          "ingredients": [
            {
              "text": "1/2 cup dried porcini mushrooms",
              "quantity": 0.5,
              "measure": "cup",
              "food": "dried porcini mushrooms",
              "weight": 75.0,
              "foodCategory": "vegetables",
              "foodId": "food_awl67rcb7mtdtsa5s3s1bae6zijs",
              "image": "https://www.edamam.com/food-img/34e/34e3396564deed18766b5e7d2b987bd0.jpg"
            },
            {
              "text": "1/2 cup water",
              "quantity": 0.5,
              "measure": "cup",
              "food": "water",
              "weight": 118.29411825,
              "foodCategory": "water",
              "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
              "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
            },
            {
              "text": "3 Tbs. olive oil",
              "quantity": 3.0,
              "measure": "tablespoon",
              "food": "olive oil",
              "weight": 40.5,
              "foodCategory": "Oils",
              "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
              "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
              "text": "1 cup Israeli couscous",
              "quantity": 1.0,
              "measure": "cup",
              "food": "Israeli couscous",
              "weight": 173.0,
              "foodCategory": "grains",
              "foodId": "food_b4ck1qyb62xgoxa1mrv7caxgr0yg",
              "image": "https://www.edamam.com/food-img/b27/b273b8089a4447e46e66d20423b386cb.jpg"
            },
            {
              "text": "2 cups chicken stock or low-sodium broth, warmed",
              "quantity": 2.0,
              "measure": "cup",
              "food": "broth",
              "weight": 454.0,
              "foodCategory": "Vegan products",
              "foodId": "food_bb2qjrjamst0vmam39stubtkmrs4",
              "image": "https://www.edamam.com/food-img/e61/e6184a8681b772e5198ef0ca1919e1b7.jpg"
            },
            {
              "text": "2 ears of corn, husks and silks removed",
              "quantity": 2.0,
              "measure": "<unit>",
              "food": "ears of corn",
              "weight": 250.0,
              "foodCategory": "vegetables",
              "foodId": "food_aa49gmdair7ajnadhosexakllckj",
              "image": "https://www.edamam.com/food-img/89b/89b72c058fd6016ee3bd57e5729ce8e8.jpg"
            },
            {
              "text": "2 handfuls of baby arugula, tough stems removed",
              "quantity": 2.0,
              "measure": "handful",
              "food": "arugula",
              "weight": 1.666666666666665,
              "foodCategory": "vegetables",
              "foodId": "food_a8z1kzrawhksuzav2g1irb6zf4zc",
              "image": "https://www.edamam.com/food-img/fa7/fa761a311efc0ec361a5eba4ed71870e.jpeg"
            },
            {
              "text": "1/4 lb. smoked mozzarella cheese, cut into 1/4-inch dice",
              "quantity": 0.25,
              "measure": "pound",
              "food": "mozzarella cheese",
              "weight": 113.3980925,
              "foodCategory": "Cheese",
              "foodId": "food_acjhpy7bkl7a9qboztipaa2i9e4m",
              "image": "https://www.edamam.com/food-img/92d/92d92d4a4dfe8c025cea407c9ce764c3.jpg"
            },
            {
              "text": "1 Tbs. Champagne vinegar",
              "quantity": 1.0,
              "measure": "tablespoon",
              "food": "Champagne vinegar",
              "weight": 14.9,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_bxdqsxkax2vgmpbv8e4ygb6zfnkn",
              "image": "https://www.edamam.com/food-img/5f6/5f69b84c399d778c4728e9ab4f8065a2.jpg"
            },
            {
              "text": "Sea salt and freshly ground pepper, to taste",
              "quantity": 0.0,
              "measure": null,
              "food": "Sea salt",
              "weight": 7.4445532645000005,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "Sea salt and freshly ground pepper, to taste",
              "quantity": 0.0,
              "measure": null,
              "food": "pepper",
              "weight": 3.7222766322500003,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            }
          ],
          "calories": 1852.9209937021744,
          "totalCO2Emissions": 3871.7396072577903,
          "co2EmissionsClass": "D",
          "totalWeight": 1249.5595846688168,
          "totalTime": 0.0,
          "cuisineType": [
            "middle eastern"
          ],
          "mealType": [
            "breakfast"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1852.9209937021744,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 72.49899137755135,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 24.028380783561612,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.0,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 38.63807569524899,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 6.667194497446521,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 255.13437784630335,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 229.69917297631744,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 25.435204869985917,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 12.559571618423067,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 62.590858651014,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 100.92430232500001,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 2894.0160341176747,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 754.7047202532702,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 293.3754192513998,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 2333.781152352817,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 5.821544606850479,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 11.864469615162012,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1210.1036511549016,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 272.1411378269209,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 22.13252405812,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.7915457268961634,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 1.6295090659813836,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 21.03832156961098,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 1.4552693149165143,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 270.7248759545692,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 270.7248759545692,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 0.8280834692500001,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 3.4936521025,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 6.394231137372068,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 43.10190128913667,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 842.9840873827544,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 92.64604968510872,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 111.53690981161746,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 120.14190391780805,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 85.04479261543446,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 101.74081947994368,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 125.181717302028,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 33.641434108333335,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 120.58400142156978,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 75.47047202532703,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 69.85129029795235,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 49.65491813516632,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 32.34191448250266,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 107.85881468329102,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 172.87195016498595,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 30.23790420299121,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 24.591693397911115,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 65.96214390801363,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 125.34685122933719,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 131.48950981006863,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 111.94379345511648,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 67.6812189886423,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 34.50347788541667,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 23.29101401666667,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 42.62820758248045,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 35.918251074280555,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 72.49899137755135,
              "hasRDI": true,
              "daily": 111.53690981161746,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 24.028380783561612,
                  "hasRDI": true,
                  "daily": 120.14190391780805,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 38.63807569524899,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 6.667194497446521,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 255.13437784630335,
              "hasRDI": true,
              "daily": 85.04479261543446,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 229.69917297631744,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 25.435204869985917,
                  "hasRDI": true,
                  "daily": 101.74081947994368,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 12.559571618423067,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 62.590858651014,
              "hasRDI": true,
              "daily": 125.181717302028,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 100.92430232500001,
              "hasRDI": true,
              "daily": 33.641434108333335,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 2894.0160341176747,
              "hasRDI": true,
              "daily": 120.58400142156978,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 754.7047202532702,
              "hasRDI": true,
              "daily": 75.47047202532703,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 293.3754192513998,
              "hasRDI": true,
              "daily": 69.85129029795235,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 2333.781152352817,
              "hasRDI": true,
              "daily": 49.65491813516632,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 5.821544606850479,
              "hasRDI": true,
              "daily": 32.34191448250266,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 11.864469615162012,
              "hasRDI": true,
              "daily": 107.85881468329102,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 1210.1036511549016,
              "hasRDI": true,
              "daily": 172.87195016498595,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 272.1411378269209,
              "hasRDI": true,
              "daily": 30.23790420299121,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 22.13252405812,
              "hasRDI": true,
              "daily": 24.591693397911115,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.7915457268961634,
              "hasRDI": true,
              "daily": 65.96214390801363,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 1.6295090659813836,
              "hasRDI": true,
              "daily": 125.34685122933719,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 21.03832156961098,
              "hasRDI": true,
              "daily": 131.48950981006863,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 1.4552693149165143,
              "hasRDI": true,
              "daily": 111.94379345511648,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 270.7248759545692,
              "hasRDI": true,
              "daily": 67.6812189886423,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 270.7248759545692,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 0.8280834692500001,
              "hasRDI": true,
              "daily": 34.50347788541667,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 3.4936521025,
              "hasRDI": true,
              "daily": 23.29101401666667,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 6.394231137372068,
              "hasRDI": true,
              "daily": 42.62820758248045,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 43.10190128913667,
              "hasRDI": true,
              "daily": 35.918251074280555,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 842.9840873827544,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/3d9a5f0307fc1ab750d5659cfc41379d?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_a4f85fad365fcd06f21462f84fcf911a",
          "label": "Sourdough Dashi Scallion Pancakes Recipe",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/633/6339e3d06f69f380232f8e93ce7c45fc.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cd900089f9391ca7ca3a077324dc0436945cfef13b16ae1449208e349998f4a6",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/633/6339e3d06f69f380232f8e93ce7c45fc-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3d666f7689d91ba5e5bc8dfc2f3f6783c6866d4a808cb785517435fadf370966",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/633/6339e3d06f69f380232f8e93ce7c45fc-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=77a044ade98f50007000e9a8f9ab1f9e1586ec9ad5670881b11364389bbad49b",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/633/6339e3d06f69f380232f8e93ce7c45fc.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cd900089f9391ca7ca3a077324dc0436945cfef13b16ae1449208e349998f4a6",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/633/6339e3d06f69f380232f8e93ce7c45fc-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2df21a2319d1a2d290104e145de2f70f965d3ecef5016a1f9df3ab22da83dc84",
              "width": 600,
              "height": 600
            }
          },
          "source": "Serious Eats",
          "url": "https://www.seriouseats.com/recipes/2020/07/sourdough-discard-scallion-pancakes.html",
          "shareAs": "http://www.edamam.com/recipe/sourdough-dashi-scallion-pancakes-recipe-a4f85fad365fcd06f21462f84fcf911a/chicken/balanced/333-cal",
          "yield": 4.5,
          "dietLabels": [
            "Balanced",
            "Low-Sodium"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Low Potassium",
            "Kidney-Friendly",
            "Keto-Friendly",
            "Mediterranean",
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
            "Immuno-Supportive"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "3/4 cup (6 1/2 ounces; 185g) sourdough starter discard",
            "1/2 cup (120ml) milk",
            "2 teaspoons (6g) instant dashi, such as Hondashi",
            "1/2 teaspoon (2g) kosher salt",
            "4 scallions (2 ounces; 60g), thinly sliced",
            "Vegetable oil, for cooking"
          ],
          "ingredients": [
            {
              "text": "3/4 cup (6 1/2 ounces; 185g) sourdough starter discard",
              "quantity": 0.75,
              "measure": "ounce",
              "food": "sourdough",
              "weight": 21.26214234375,
              "foodCategory": "bread, rolls and tortillas",
              "foodId": "food_ay7f6vxa98k5w2ahve8h1ardjn1w",
              "image": "https://www.edamam.com/food-img/470/47053c77e167539c64fef3f2a3249bb2.jpg"
            },
            {
              "text": "1/2 cup (120ml) milk",
              "quantity": 120.0,
              "measure": "milliliter",
              "food": "milk",
              "weight": 123.75932308874536,
              "foodCategory": "Milk",
              "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
              "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
            },
            {
              "text": "2 teaspoons (6g) instant dashi, such as Hondashi",
              "quantity": 6.0,
              "measure": "gram",
              "food": "dashi",
              "weight": 6.0,
              "foodCategory": "canned soup",
              "foodId": "food_a00wj3maedk41kbwmbl4hb3s5gua",
              "image": "https://www.edamam.com/food-img/e07/e07d7b7a8320da9f235be9d663b7a9f4.jpg"
            },
            {
              "text": "1/2 teaspoon (2g) kosher salt",
              "quantity": 2.0,
              "measure": "gram",
              "food": "kosher salt",
              "weight": 2.0,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "4 scallions (2 ounces; 60g), thinly sliced",
              "quantity": 4.0,
              "measure": "<unit>",
              "food": "scallions",
              "weight": 55.555555555555564,
              "foodCategory": "vegetables",
              "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
              "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
            },
            {
              "text": "Vegetable oil, for cooking",
              "quantity": 0.0,
              "measure": null,
              "food": "Vegetable oil",
              "weight": 2.836647485437492,
              "foodCategory": "Oils",
              "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
              "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
            }
          ],
          "calories": 177.13995580817988,
          "totalCO2Emissions": 536.4742795229467,
          "co2EmissionsClass": "B",
          "totalWeight": 210.15470920296085,
          "totalTime": 35.0,
          "cuisineType": [
            "french"
          ],
          "mealType": [
            "breakfast"
          ],
          "dishType": [
            "pancake"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 177.13995580817988,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 7.527524886096021,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 2.62902367152886,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.022820193330493066,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 3.1534408482799816,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 0.9575798281830381,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 21.053277162443806,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 19.14106558643686,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 1.912211576006945,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 8.526601236707334,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 7.346996717087146,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 12.435932308874534,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 486.98729776172786,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 191.2621988841056,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 30.718339377280376,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 350.2716296110225,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 1.6937452191967302,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 0.900043483199497,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 150.1986364110392,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 84.82706639860064,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 10.450444444444448,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.24042605481700347,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.3489470482722366,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 1.4980477251844002,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 0.10341273750864972,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 78.00916369436783,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 53.77032142249283,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 14.2456353703125,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 0.5983169538993541,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 1.6088712001536896,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 1.0654267324649256,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 115.52011296567251,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 171.73484158496998,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 8.856997790408993,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 11.580807517070802,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 13.145118357644302,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 7.017759054147935,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 7.64884630402778,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 14.693993434174292,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 4.145310769624845,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 20.29113740673866,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 19.12621988841056,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 7.313890327923899,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 7.452587864064308,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 9.409695662204056,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 8.182213483631791,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 21.456948058719885,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 9.425229599844515,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 11.61160493827161,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 20.03550456808362,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 26.842080636325893,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 9.362798282402501,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 7.9548259622038255,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 19.502290923591957,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 24.929873079139757,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 10.725808001024598,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 7.102844883099504,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 96.26676080472708,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 7.527524886096021,
              "hasRDI": true,
              "daily": 11.580807517070802,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 2.62902367152886,
                  "hasRDI": true,
                  "daily": 13.145118357644302,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.022820193330493066,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 3.1534408482799816,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 0.9575798281830381,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 21.053277162443806,
              "hasRDI": true,
              "daily": 7.017759054147935,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 19.14106558643686,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 1.912211576006945,
                  "hasRDI": true,
                  "daily": 7.64884630402778,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 8.526601236707334,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 7.346996717087146,
              "hasRDI": true,
              "daily": 14.693993434174292,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 12.435932308874534,
              "hasRDI": true,
              "daily": 4.145310769624845,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 486.98729776172786,
              "hasRDI": true,
              "daily": 20.29113740673866,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 191.2621988841056,
              "hasRDI": true,
              "daily": 19.12621988841056,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 30.718339377280376,
              "hasRDI": true,
              "daily": 7.313890327923899,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 350.2716296110225,
              "hasRDI": true,
              "daily": 7.452587864064308,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 1.6937452191967302,
              "hasRDI": true,
              "daily": 9.409695662204056,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 0.900043483199497,
              "hasRDI": true,
              "daily": 8.182213483631791,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 150.1986364110392,
              "hasRDI": true,
              "daily": 21.456948058719885,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 84.82706639860064,
              "hasRDI": true,
              "daily": 9.425229599844515,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 10.450444444444448,
              "hasRDI": true,
              "daily": 11.61160493827161,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.24042605481700347,
              "hasRDI": true,
              "daily": 20.03550456808362,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.3489470482722366,
              "hasRDI": true,
              "daily": 26.842080636325893,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 1.4980477251844002,
              "hasRDI": true,
              "daily": 9.362798282402501,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 0.10341273750864972,
              "hasRDI": true,
              "daily": 7.9548259622038255,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 78.00916369436783,
              "hasRDI": true,
              "daily": 19.502290923591957,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 53.77032142249283,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 14.2456353703125,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 0.5983169538993541,
              "hasRDI": true,
              "daily": 24.929873079139757,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 1.6088712001536896,
              "hasRDI": true,
              "daily": 10.725808001024598,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 1.0654267324649256,
              "hasRDI": true,
              "daily": 7.102844883099504,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 115.52011296567251,
              "hasRDI": true,
              "daily": 96.26676080472708,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 171.73484158496998,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ],
          "tags": [
            "...",
            "Quick and Easy",
            "Snacks",
            "Vegetarian",
            "Stovetop",
            "Meal",
            "Method",
            "Diet",
            "Recipes",
            "Sides",
            "Appetizers and Hors d'Oeuvres"
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/a4f85fad365fcd06f21462f84fcf911a?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_9f28bbb722d970c7c4230e9d2f55c4d8",
          "label": "Cheesy Polenta Waffles",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/ce2/ce21c6b89c9613915437c684a379e2b2.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=95c86e7f69a86486412c20093774a526261f8cccc655f7c1d33082b97d772bca",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ce2/ce21c6b89c9613915437c684a379e2b2-s.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f30243d0683fe97857794a3ed348be0dce3bd8a6b1273c7c5a497a31897ab0f3",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ce2/ce21c6b89c9613915437c684a379e2b2-m.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=74d298ae24de54a5a3e348c3f24aae20a0564d92d83d691cda9b38dedfa147fa",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ce2/ce21c6b89c9613915437c684a379e2b2.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=95c86e7f69a86486412c20093774a526261f8cccc655f7c1d33082b97d772bca",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ce2/ce21c6b89c9613915437c684a379e2b2-l.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=58680451325082d596f9aeecccf52a96b1fec7c93f920cd27d985cddb801a08b",
              "width": 600,
              "height": 600
            }
          },
          "source": "Martha Stewart",
          "url": "https://www.marthastewart.com/866195/cheesy-polenta-waffles",
          "shareAs": "http://www.edamam.com/recipe/cheesy-polenta-waffles-9f28bbb722d970c7c4230e9d2f55c4d8/chicken/balanced/333-cal",
          "yield": 6.0,
          "dietLabels": [
            "Balanced"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Kidney-Friendly",
            "Vegetarian",
            "Pescatarian",
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
            "Sulfite-Free",
            "Kosher"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "½ cup fine milled polenta",
            "1 ½ cups milk",
            "1 cup C4C flour",
            "1 ½ teaspoons coarse salt",
            "1 teaspoon onion powder",
            "1 teaspoon garlic powder",
            "1 teaspoon freshly ground black pepper",
            "1 teaspoon baking powder",
            "Pinch cayenne pepper",
            "½ cup finely grated sharp cheddar cheese",
            "1 large egg",
            "Nonstick cooking spray"
          ],
          "ingredients": [
            {
              "text": "½ cup fine milled polenta",
              "quantity": 0.5,
              "measure": "cup",
              "food": "polenta",
              "weight": 78.5,
              "foodCategory": "grains",
              "foodId": "food_b05sp8gagykqhgb4uo2jhbsbfftc",
              "image": null
            },
            {
              "text": "1 ½ cups milk",
              "quantity": 1.5,
              "measure": "cup",
              "food": "milk",
              "weight": 366.0,
              "foodCategory": "Milk",
              "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
              "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
            },
            {
              "text": "1 cup C4C flour",
              "quantity": 1.0,
              "measure": "cup",
              "food": "flour",
              "weight": 125.0,
              "foodCategory": "grains",
              "foodId": "food_ahebfs0a985an4aubqaebbipra58",
              "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
            },
            {
              "text": "1 ½ teaspoons coarse salt",
              "quantity": 1.5,
              "measure": "teaspoon",
              "food": "coarse salt",
              "weight": 7.2812500003693135,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "1 teaspoon onion powder",
              "quantity": 1.0,
              "measure": "teaspoon",
              "food": "onion powder",
              "weight": 2.4,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_bmv8z27b1o25vcbu41ooyawd2zj4",
              "image": "https://www.edamam.com/food-img/1e7/1e73e6f5dd96bb233abc0fcc05fb0ec8.jpg"
            },
            {
              "text": "1 teaspoon garlic powder",
              "quantity": 1.0,
              "measure": "teaspoon",
              "food": "garlic powder",
              "weight": 3.1,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_boq94r1a036492bdup9u1beyph0l",
              "image": "https://www.edamam.com/food-img/5c3/5c3db1d5a1a16b1f0a74796f74dd5985.jpg"
            },
            {
              "text": "1 teaspoon freshly ground black pepper",
              "quantity": 1.0,
              "measure": "teaspoon",
              "food": "black pepper",
              "weight": 2.3,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
              "text": "1 teaspoon baking powder",
              "quantity": 1.0,
              "measure": "teaspoon",
              "food": "baking powder",
              "weight": 4.6,
              "foodCategory": "condiments and sauces",
              "foodId": "food_bad4zycbt4w60dbut111vaub2g3e",
              "image": "https://www.edamam.com/food-img/a84/a8410ec57a2e62a1ad9955ac14d40af6.jpg"
            },
            {
              "text": "Pinch cayenne pepper",
              "quantity": 1.0,
              "measure": "pinch",
              "food": "cayenne pepper",
              "weight": 0.110416666808545,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a8iooz3aris8gba605l07brngnrx",
              "image": "https://www.edamam.com/food-img/374/3742b9434a0fb66a45e0dd6d227ba669.jpg"
            },
            {
              "text": "½ cup finely grated sharp cheddar cheese",
              "quantity": 0.5,
              "measure": "cup",
              "food": "cheddar cheese",
              "weight": 66.0,
              "foodCategory": "Cheese",
              "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
              "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
            },
            {
              "text": "1 large egg",
              "quantity": 1.0,
              "measure": "<unit>",
              "food": "egg",
              "weight": 50.0,
              "foodCategory": "Eggs",
              "foodId": "food_bhpradua77pk16aipcvzeayg732r",
              "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
              "text": "Nonstick cooking spray",
              "quantity": 0.0,
              "measure": null,
              "food": "cooking spray",
              "weight": 9.591966666673619,
              "foodCategory": "Oils",
              "foodId": "food_aglc0hqae3alv1biazc6qaiamw2x",
              "image": null
            }
          ],
          "calories": 1409.0735010005062,
          "totalCO2Emissions": 3236.062886616378,
          "co2EmissionsClass": "D",
          "totalWeight": 709.1628364393094,
          "totalTime": 0.0,
          "cuisineType": [
            "mediterranean"
          ],
          "mealType": [
            "breakfast"
          ],
          "dishType": [
            "starter"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1409.0735010005062,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 48.91729985003002,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 21.743111310004977,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.019,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 16.219465858340698,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 5.621628508346745,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 186.6369329334151,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 178.93549960004316,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 7.7014333333719245,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 20.846692916681285,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 52.44553911335038,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 287.94,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 1645.5151903943463,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 1292.2369254122755,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 124.04943786460726,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 941.1942112513179,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 4.428841995260296,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 6.017178786442679,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1400.294520833749,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 482.33266666961777,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 0.6831583334417284,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.494699166667132,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 1.2302157291679707,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 2.8178862500123434,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 0.5359702083368094,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 119.17104166681705,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 119.17104166681705,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 2.818,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 6.154,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 1.5030741667089464,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 7.178464583447262,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 409.3243706112231,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 70.45367505002531,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 75.25738438466158,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 108.7155565500249,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 62.212310977805025,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 30.805733333487698,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 104.89107822670076,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 95.98,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 68.56313293309776,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 129.22369254122754,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 29.53558044395411,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 20.025408750028042,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 24.60467775144609,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 54.70162533129708,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 200.04207440482128,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 53.59251851884642,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 0.7590648149352538,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 41.224930555594334,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 94.63197916676697,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 17.611789062577145,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 41.22847756436995,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 29.792760416704265,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 117.41666666666667,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 41.026666666666664,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 10.020494444726308,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 5.982053819539385,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 48.91729985003002,
              "hasRDI": true,
              "daily": 75.25738438466158,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 21.743111310004977,
                  "hasRDI": true,
                  "daily": 108.7155565500249,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.019,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 16.219465858340698,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 5.621628508346745,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 186.6369329334151,
              "hasRDI": true,
              "daily": 62.212310977805025,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 178.93549960004316,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 7.7014333333719245,
                  "hasRDI": true,
                  "daily": 30.805733333487698,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 20.846692916681285,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 52.44553911335038,
              "hasRDI": true,
              "daily": 104.89107822670076,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 287.94,
              "hasRDI": true,
              "daily": 95.98,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 1645.5151903943463,
              "hasRDI": true,
              "daily": 68.56313293309776,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 1292.2369254122755,
              "hasRDI": true,
              "daily": 129.22369254122754,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 124.04943786460726,
              "hasRDI": true,
              "daily": 29.53558044395411,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 941.1942112513179,
              "hasRDI": true,
              "daily": 20.025408750028042,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 4.428841995260296,
              "hasRDI": true,
              "daily": 24.60467775144609,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 6.017178786442679,
              "hasRDI": true,
              "daily": 54.70162533129708,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 1400.294520833749,
              "hasRDI": true,
              "daily": 200.04207440482128,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 482.33266666961777,
              "hasRDI": true,
              "daily": 53.59251851884642,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 0.6831583334417284,
              "hasRDI": true,
              "daily": 0.7590648149352538,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.494699166667132,
              "hasRDI": true,
              "daily": 41.224930555594334,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 1.2302157291679707,
              "hasRDI": true,
              "daily": 94.63197916676697,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 2.8178862500123434,
              "hasRDI": true,
              "daily": 17.611789062577145,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 0.5359702083368094,
              "hasRDI": true,
              "daily": 41.22847756436995,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 119.17104166681705,
              "hasRDI": true,
              "daily": 29.792760416704265,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 119.17104166681705,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 2.818,
              "hasRDI": true,
              "daily": 117.41666666666667,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 6.154,
              "hasRDI": true,
              "daily": 41.026666666666664,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 1.5030741667089464,
              "hasRDI": true,
              "daily": 10.020494444726308,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 7.178464583447262,
              "hasRDI": true,
              "daily": 5.982053819539385,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 409.3243706112231,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/9f28bbb722d970c7c4230e9d2f55c4d8?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_caed5b64cf920044adbade57a672ad75",
          "label": "Stuffing Muffins",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/0fc/0fcdfca1175aa55e1d59451a543a5609.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d0a8e78949da51b361b1ace87a151953a8a08bc882b019020c8d2f3f1d66de78",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/0fc/0fcdfca1175aa55e1d59451a543a5609-s.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=704729e784489e9eaf3985c45ca65fa45f6e45ee0e86f90703c6649de24842cd",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/0fc/0fcdfca1175aa55e1d59451a543a5609-m.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4d85a1e2d02c0b05ef0f2cef2b37ede0c9c7fbb5ea86bcb4a6ce9039c77f8424",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/0fc/0fcdfca1175aa55e1d59451a543a5609.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d0a8e78949da51b361b1ace87a151953a8a08bc882b019020c8d2f3f1d66de78",
              "width": 300,
              "height": 300
            }
          },
          "source": "Food Network",
          "url": "https://www.foodnetwork.com/recipes/stuffing-muffins-3415683",
          "shareAs": "http://www.edamam.com/recipe/stuffing-muffins-caed5b64cf920044adbade57a672ad75/chicken/balanced/333-cal",
          "yield": 8.0,
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
            "3 stalks celery, chopped",
            "4 medium yellow onions, chopped",
            "1 tablespoon butter",
            "1 loaf bread",
            "3 medium eggs, lightly beaten",
            "½ cup milk",
            "3 tablespoons dried parsley",
            "3 cups chicken stock (or turkey stock)",
            "salt",
            "pepper"
          ],
          "ingredients": [
            {
              "text": "3 stalks celery, chopped",
              "quantity": 3.0,
              "measure": "stalk",
              "food": "celery",
              "weight": 120.0,
              "foodCategory": "vegetables",
              "foodId": "food_bffeoksbyyur8ja4da73ub2xs57g",
              "image": "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg"
            },
            {
              "text": "4 medium yellow onions, chopped",
              "quantity": 4.0,
              "measure": "<unit>",
              "food": "yellow onions",
              "weight": 440.0,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "1 tablespoon butter",
              "quantity": 1.0,
              "measure": "tablespoon",
              "food": "butter",
              "weight": 14.2,
              "foodCategory": "Dairy",
              "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
              "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            },
            {
              "text": "1 loaf bread",
              "quantity": 1.0,
              "measure": "loaf",
              "food": "bread",
              "weight": 384.0,
              "foodCategory": "bread, rolls and tortillas",
              "foodId": "food_a3049hmbqj5wstaeeb3udaz6uaqv",
              "image": "https://www.edamam.com/food-img/886/886960f6ce6ccec5b9163bacf2996853.jpg"
            },
            {
              "text": "3 medium eggs, lightly beaten",
              "quantity": 3.0,
              "measure": "<unit>",
              "food": "eggs",
              "weight": 132.0,
              "foodCategory": "Eggs",
              "foodId": "food_bhpradua77pk16aipcvzeayg732r",
              "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
              "text": "½ cup milk",
              "quantity": 0.5,
              "measure": "cup",
              "food": "milk",
              "weight": 122.0,
              "foodCategory": "Milk",
              "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
              "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
            },
            {
              "text": "3 tablespoons dried parsley",
              "quantity": 3.0,
              "measure": "tablespoon",
              "food": "dried parsley",
              "weight": 4.800000000000001,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a5oe5hianlpew5bik62kxb25wpjt",
              "image": "https://www.edamam.com/food-img/e45/e453e0756d9ebe39fbcdae1594587ae1.jpg"
            },
            {
              "text": "3 cups chicken stock (or turkey stock)",
              "quantity": 3.0,
              "measure": "cup",
              "food": "chicken stock",
              "weight": 720.0,
              "foodCategory": "canned soup",
              "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
              "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
            },
            {
              "text": "salt",
              "quantity": 0.0,
              "measure": null,
              "food": "salt",
              "weight": 11.622,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "pepper",
              "quantity": 0.0,
              "measure": null,
              "food": "pepper",
              "weight": 5.811,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            }
          ],
          "calories": 1897.7556100000002,
          "totalCO2Emissions": 9356.4297258956,
          "co2EmissionsClass": "E",
          "totalWeight": 1946.1463812481443,
          "totalTime": 85.0,
          "cuisineType": [
            "british"
          ],
          "mealType": [
            "breakfast"
          ],
          "dishType": [
            "desserts"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1897.7556100000002,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 55.1660786,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 18.9416929,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.17688,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 15.86019129,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 11.31827378,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 265.43876,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 237.926977,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 27.511782999999998,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 60.6872704,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 87.37684399999999,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 555.3700000000001,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 4517.968124279999,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 947.2512214995546,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 300.9341638124814,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 2804.641130499852,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 20.48069485811888,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 8.406186281248145,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1243.51738,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 404.27297,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 44.488,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 2.18315388,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 2.7058278000000002,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 34.4929094,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 1.8110960099999998,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 621.15387,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 490.59387000000004,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 76.8,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 1.7479400000000003,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 4.226,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 3.6489544000000005,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 133.74204,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1516.9101657624963,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 94.8877805,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 84.87089015384616,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 94.7084645,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 88.47958666666666,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 110.04713199999998,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 174.75368799999995,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 185.1233333333334,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 188.24867184499993,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 94.72512214995547,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 71.65099138392415,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 59.67321554255004,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 113.78163810066046,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 76.41987528407404,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 177.64534,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 44.919218888888885,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 49.431111111111115,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 181.92949,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 208.1406,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 215.58068375000002,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 139.31507769230765,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 155.2884675,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 72.83083333333336,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 28.173333333333336,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 24.32636266666667,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 111.4517,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 55.1660786,
              "hasRDI": true,
              "daily": 84.87089015384616,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 18.9416929,
                  "hasRDI": true,
                  "daily": 94.7084645,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.17688,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 15.86019129,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 11.31827378,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 265.43876,
              "hasRDI": true,
              "daily": 88.47958666666666,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 237.926977,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 27.511782999999998,
                  "hasRDI": true,
                  "daily": 110.04713199999998,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 60.6872704,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 87.37684399999999,
              "hasRDI": true,
              "daily": 174.75368799999995,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 555.3700000000001,
              "hasRDI": true,
              "daily": 185.1233333333334,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 4517.968124279999,
              "hasRDI": true,
              "daily": 188.24867184499993,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 947.2512214995546,
              "hasRDI": true,
              "daily": 94.72512214995547,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 300.9341638124814,
              "hasRDI": true,
              "daily": 71.65099138392415,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 2804.641130499852,
              "hasRDI": true,
              "daily": 59.67321554255004,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 20.48069485811888,
              "hasRDI": true,
              "daily": 113.78163810066046,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 8.406186281248145,
              "hasRDI": true,
              "daily": 76.41987528407404,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 1243.51738,
              "hasRDI": true,
              "daily": 177.64534,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 404.27297,
              "hasRDI": true,
              "daily": 44.919218888888885,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 44.488,
              "hasRDI": true,
              "daily": 49.431111111111115,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 2.18315388,
              "hasRDI": true,
              "daily": 181.92949,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 2.7058278000000002,
              "hasRDI": true,
              "daily": 208.1406,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 34.4929094,
              "hasRDI": true,
              "daily": 215.58068375000002,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 1.8110960099999998,
              "hasRDI": true,
              "daily": 139.31507769230765,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 621.15387,
              "hasRDI": true,
              "daily": 155.2884675,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 490.59387000000004,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 76.8,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 1.7479400000000003,
              "hasRDI": true,
              "daily": 72.83083333333336,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 4.226,
              "hasRDI": true,
              "daily": 28.173333333333336,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 3.6489544000000005,
              "hasRDI": true,
              "daily": 24.32636266666667,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 133.74204,
              "hasRDI": true,
              "daily": 111.4517,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1516.9101657624963,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ],
          "tags": [
            "Muffin",
            "Vegetable",
            "Thanksgiving",
            "Celery",
            "Holiday",
            "Onion Recipes",
            "Dairy Recipes",
            "Sauteing Recipes",
            "Egg Recipes"
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/caed5b64cf920044adbade57a672ad75?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_22b6c9bde41169dff0248b6f787ac82a",
          "label": "Easy Roasted Spring Breakfast Skillet",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/0f0/0f0e302edede6fb000bfd955b61a378c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a80bf10db373ddeb09f2821420b40d2ff720ce3f8722dc233bf02b3610038310",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/0f0/0f0e302edede6fb000bfd955b61a378c-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0cac3d2f804966d56a212077cbeda85cd766c2b6faa92775315f79626f8f4b0d",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/0f0/0f0e302edede6fb000bfd955b61a378c-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6570d6fe0692112c17c60b5246c90677e375e43daebc58fa652aa33ec2c02852",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/0f0/0f0e302edede6fb000bfd955b61a378c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a80bf10db373ddeb09f2821420b40d2ff720ce3f8722dc233bf02b3610038310",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/0f0/0f0e302edede6fb000bfd955b61a378c-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=52716f98c4363ba3fc6b08a40c8455becd26ac1d387ff45d92e3b6a3082ce2ad",
              "width": 600,
              "height": 600
            }
          },
          "source": "The Daily Meal",
          "url": "http://www.thedailymeal.com/recipes/easy-roasted-spring-breakfast-skillet-recipe",
          "shareAs": "http://www.edamam.com/recipe/easy-roasted-spring-breakfast-skillet-22b6c9bde41169dff0248b6f787ac82a/chicken/balanced/333-cal",
          "yield": 4.0,
          "dietLabels": [
            "Balanced"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Mediterranean",
            "Dairy-Free",
            "Gluten-Free",
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
            "1 Tablespoon olive oil",
            "3 new potatoes, diced",
            "1 onion, diced,",
            "1/2 Cup leeks, white part only, diced",
            "1 clove garlic, minced",
            "1/4 Cup chicken stock",
            "2 eggs",
            "Salt and pepper, to taste",
            "Fresh Basil, for garnish"
          ],
          "ingredients": [
            {
              "text": "1 Tablespoon olive oil",
              "quantity": 1.0,
              "measure": "tablespoon",
              "food": "olive oil",
              "weight": 13.5,
              "foodCategory": "Oils",
              "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
              "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
              "text": "3 new potatoes, diced",
              "quantity": 3.0,
              "measure": "<unit>",
              "food": "new potatoes",
              "weight": 255.0,
              "foodCategory": "vegetables",
              "foodId": "food_b5m473aabh39qbbre3ypaa4uwd7j",
              "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
            },
            {
              "text": "1 onion, diced,",
              "quantity": 1.0,
              "measure": "<unit>",
              "food": "onion",
              "weight": 125.0,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "1/2 Cup leeks, white part only, diced",
              "quantity": 0.5,
              "measure": "cup",
              "food": "leeks",
              "weight": 44.5,
              "foodCategory": "vegetables",
              "foodId": "food_a27jevnb06c1m9ax7k41xbbcwcuo",
              "image": "https://www.edamam.com/food-img/4ae/4ae9e09d029a28e0e2c64bdfdbf3f6ae.jpg"
            },
            {
              "text": "1 clove garlic, minced",
              "quantity": 1.0,
              "measure": "clove",
              "food": "garlic",
              "weight": 3.0,
              "foodCategory": "vegetables",
              "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
              "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
            },
            {
              "text": "1/4 Cup chicken stock",
              "quantity": 0.25,
              "measure": "cup",
              "food": "chicken stock",
              "weight": 60.0,
              "foodCategory": "canned soup",
              "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
              "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
            },
            {
              "text": "2 eggs",
              "quantity": 2.0,
              "measure": "<unit>",
              "food": "eggs",
              "weight": 86.0,
              "foodCategory": "Eggs",
              "foodId": "food_bhpradua77pk16aipcvzeayg732r",
              "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
              "text": "Salt and pepper, to taste",
              "quantity": 0.0,
              "measure": null,
              "food": "Salt",
              "weight": 3.5220000000000002,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "Salt and pepper, to taste",
              "quantity": 0.0,
              "measure": null,
              "food": "pepper",
              "weight": 1.7610000000000001,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
              "text": "Fresh Basil, for garnish",
              "quantity": 0.0,
              "measure": null,
              "food": "Fresh Basil",
              "weight": 0.0,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
              "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
            }
          ],
          "calories": 546.3051100000001,
          "totalCO2Emissions": 1282.6577332059996,
          "co2EmissionsClass": "D",
          "totalWeight": 591.6756900264949,
          "totalTime": 0.0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "breakfast"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 546.3051100000001,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 22.9590086,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 4.908597899999999,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.03268,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 13.388273790000001,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 3.41516478,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 67.47624000000002,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 58.68670700000002,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 8.789533,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 10.4339704,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 19.991943999999997,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 321.72,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 1369.15193028,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 149.63075560635878,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 100.12045690026495,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 1563.8494752021195,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 5.200711577087434,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 2.282970590026495,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 391.02738,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 175.61047,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 65.881,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.35405188000000004,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.5791898,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 4.0795753999999995,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 1.2387095099999996,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 134.28937000000002,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 134.28937000000002,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 0.7654,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 1.72,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 3.3456144,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 37.95904,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 473.105954380053,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 27.315255500000006,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 35.32155169230769,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 24.542989499999997,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 22.492080000000005,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 35.158132,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 39.98388799999999,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 107.24000000000001,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 57.04799709500001,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 14.963075560635877,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 23.83820402387261,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 33.273393089406795,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 28.892842094930188,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 20.754278091149953,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 55.86105428571428,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 19.512274444444444,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 73.20111111111112,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 29.504323333333335,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 44.553061538461534,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 25.497346249999996,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 95.28534692307689,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 33.572342500000005,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 31.891666666666666,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 11.466666666666667,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 22.304096,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 31.632533333333335,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 22.9590086,
              "hasRDI": true,
              "daily": 35.32155169230769,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 4.908597899999999,
                  "hasRDI": true,
                  "daily": 24.542989499999997,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.03268,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 13.388273790000001,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 3.41516478,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 67.47624000000002,
              "hasRDI": true,
              "daily": 22.492080000000005,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 58.68670700000002,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 8.789533,
                  "hasRDI": true,
                  "daily": 35.158132,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 10.4339704,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 19.991943999999997,
              "hasRDI": true,
              "daily": 39.98388799999999,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 321.72,
              "hasRDI": true,
              "daily": 107.24000000000001,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 1369.15193028,
              "hasRDI": true,
              "daily": 57.04799709500001,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 149.63075560635878,
              "hasRDI": true,
              "daily": 14.963075560635877,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 100.12045690026495,
              "hasRDI": true,
              "daily": 23.83820402387261,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 1563.8494752021195,
              "hasRDI": true,
              "daily": 33.273393089406795,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 5.200711577087434,
              "hasRDI": true,
              "daily": 28.892842094930188,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 2.282970590026495,
              "hasRDI": true,
              "daily": 20.754278091149953,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 391.02738,
              "hasRDI": true,
              "daily": 55.86105428571428,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 175.61047,
              "hasRDI": true,
              "daily": 19.512274444444444,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 65.881,
              "hasRDI": true,
              "daily": 73.20111111111112,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.35405188000000004,
              "hasRDI": true,
              "daily": 29.504323333333335,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.5791898,
              "hasRDI": true,
              "daily": 44.553061538461534,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 4.0795753999999995,
              "hasRDI": true,
              "daily": 25.497346249999996,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 1.2387095099999996,
              "hasRDI": true,
              "daily": 95.28534692307689,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 134.28937000000002,
              "hasRDI": true,
              "daily": 33.572342500000005,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 134.28937000000002,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 0.7654,
              "hasRDI": true,
              "daily": 31.891666666666666,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 1.72,
              "hasRDI": true,
              "daily": 11.466666666666667,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 3.3456144,
              "hasRDI": true,
              "daily": 22.304096,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 37.95904,
              "hasRDI": true,
              "daily": 31.632533333333335,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 473.105954380053,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ],
          "tags": [
            "breakfast skillet",
            "egg recipes",
            "seasonal",
            "best breakfast recipes"
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/22b6c9bde41169dff0248b6f787ac82a?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_396f9aa5eda84442bd5d842c36deab41",
          "label": "Corn & Basil Cakes",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/f30/f30933909f3d97c0ede78814726c1dff?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b0f69744dd1a5a85b93a7856900aed58a73d6bbe2e5b1e5df400bcbd979dfa42",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f30/f30933909f3d97c0ede78814726c1dff-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a54581dadd39f81d3e3967acc0f4873288dc5901c7dc0b073378f4586fd840b4",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f30/f30933909f3d97c0ede78814726c1dff-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=72234afdeaa9b21513cbb9af2a6bd21889f82a5c698a9b41eb9506baa18f4928",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f30/f30933909f3d97c0ede78814726c1dff?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b0f69744dd1a5a85b93a7856900aed58a73d6bbe2e5b1e5df400bcbd979dfa42",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f30/f30933909f3d97c0ede78814726c1dff-l?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cf7aedcee1e617e298e24a4126a2c30873cc8f70f535db48818f7300c76498ce",
              "width": 600,
              "height": 600
            }
          },
          "source": "EatingWell",
          "url": "https://www.eatingwell.com/recipe/250124/corn-basil-cakes/",
          "shareAs": "http://www.edamam.com/recipe/corn-basil-cakes-396f9aa5eda84442bd5d842c36deab41/chicken/balanced/333-cal",
          "yield": 5.0,
          "dietLabels": [
            "Balanced"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Vegetarian",
            "Pescatarian",
            "Mediterranean",
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
          "cautions": [],
          "ingredientLines": [
            "½ cup white whole-wheat flour (see Note) or all-purpose flour",
            "½ cup low-fat milk",
            "2 large eggs",
            "2 tablespoons canola oil, divided",
            "½ teaspoon baking powder",
            "½ teaspoon salt",
            "¼ teaspoon freshly ground pepper",
            "2 cups fresh corn kernels (about 2 large ears; see Tip) or frozen",
            "½ cup chopped fresh basil"
          ],
          "ingredients": [
            {
              "text": "½ cup white whole-wheat flour (see Note) or all-purpose flour",
              "quantity": 0.5,
              "measure": "cup",
              "food": "whole-wheat flour",
              "weight": 60.0,
              "foodCategory": "grains",
              "foodId": "food_azuyr92bee8mu1aodnko9agg46su",
              "image": "https://www.edamam.com/food-img/f46/f46a64137365c10237522be5980f769c.jpg"
            },
            {
              "text": "½ cup low-fat milk",
              "quantity": 0.5,
              "measure": "cup",
              "food": "low-fat milk",
              "weight": 122.0,
              "foodCategory": "Milk",
              "foodId": "food_anmsfo1a7sxp0paea6rcsav5m5t0",
              "image": "https://www.edamam.com/food-img/007/0072c28f37f18088ff10e36d9e6d0ace.png"
            },
            {
              "text": "2 large eggs",
              "quantity": 2.0,
              "measure": "<unit>",
              "food": "eggs",
              "weight": 100.0,
              "foodCategory": "Eggs",
              "foodId": "food_bhpradua77pk16aipcvzeayg732r",
              "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
              "text": "2 tablespoons canola oil, divided",
              "quantity": 2.0,
              "measure": "tablespoon",
              "food": "canola oil",
              "weight": 28.0,
              "foodCategory": "Oils",
              "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
              "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
            },
            {
              "text": "½ teaspoon baking powder",
              "quantity": 0.5,
              "measure": "teaspoon",
              "food": "baking powder",
              "weight": 2.3,
              "foodCategory": "condiments and sauces",
              "foodId": "food_bad4zycbt4w60dbut111vaub2g3e",
              "image": "https://www.edamam.com/food-img/a84/a8410ec57a2e62a1ad9955ac14d40af6.jpg"
            },
            {
              "text": "½ teaspoon salt",
              "quantity": 0.5,
              "measure": "teaspoon",
              "food": "salt",
              "weight": 3.0,
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
              "text": "2 cups fresh corn kernels (about 2 large ears; see Tip) or frozen",
              "quantity": 2.0,
              "measure": "cup",
              "food": "corn kernels",
              "weight": 282.0,
              "foodCategory": "vegetables",
              "foodId": "food_bljsxw8akb9zr5aj5dahpay2gxsb",
              "image": "https://www.edamam.com/food-img/34c/34c09c7af85efb3a2025167cc38af8d1.jpg"
            },
            {
              "text": "½ cup chopped fresh basil",
              "quantity": 0.5,
              "measure": "cup",
              "food": "fresh basil",
              "weight": 12.0,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
              "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
            }
          ],
          "calories": 970.17275,
          "totalCO2Emissions": 1115.36100653,
          "co2EmissionsClass": "C",
          "totalWeight": 609.6573956108248,
          "totalTime": 30.0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "breakfast"
          ],
          "dishType": [
            "pancake"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 970.17275,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 44.29823499999999,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 6.659057500000001,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.1486,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 22.71699775,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 11.882275500000002,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 124.3821,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 110.250075,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 14.132024999999999,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 16.47584,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 35.2955,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 378.1,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 1411.6244970000005,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 437.363524946598,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 187.96307395610825,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 1362.488091648866,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 5.765784405515722,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 4.965919895610824,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1032.0255,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 296.47575,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 2.16,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.6045229999999998,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.9331250000000001,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 9.118364999999999,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 0.8184497499999999,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 87.78324999999998,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 194.94325,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 1.4634,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 3.464,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 6.77374,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 73.643,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 396.4258897912217,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 48.5086375,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 68.15113076923076,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 33.29528750000001,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 41.460699999999996,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 56.528099999999995,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 70.591,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 126.03333333333333,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 58.81768737500002,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 43.7363524946598,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 44.75311284669244,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 28.989108332954594,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 32.03213558619846,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 45.144726323734766,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 147.43221428571428,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 32.94175,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 2.4,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 50.37691666666665,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 71.77884615384616,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 56.98978124999999,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 62.957673076923065,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 21.9458125,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 60.975,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 23.09333333333333,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 45.15826666666667,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 61.369166666666665,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 44.29823499999999,
              "hasRDI": true,
              "daily": 68.15113076923076,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 6.659057500000001,
                  "hasRDI": true,
                  "daily": 33.29528750000001,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.1486,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 22.71699775,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 11.882275500000002,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 124.3821,
              "hasRDI": true,
              "daily": 41.460699999999996,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 110.250075,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 14.132024999999999,
                  "hasRDI": true,
                  "daily": 56.528099999999995,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 16.47584,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 35.2955,
              "hasRDI": true,
              "daily": 70.591,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 378.1,
              "hasRDI": true,
              "daily": 126.03333333333333,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 1411.6244970000005,
              "hasRDI": true,
              "daily": 58.81768737500002,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 437.363524946598,
              "hasRDI": true,
              "daily": 43.7363524946598,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 187.96307395610825,
              "hasRDI": true,
              "daily": 44.75311284669244,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 1362.488091648866,
              "hasRDI": true,
              "daily": 28.989108332954594,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 5.765784405515722,
              "hasRDI": true,
              "daily": 32.03213558619846,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 4.965919895610824,
              "hasRDI": true,
              "daily": 45.144726323734766,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 1032.0255,
              "hasRDI": true,
              "daily": 147.43221428571428,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 296.47575,
              "hasRDI": true,
              "daily": 32.94175,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 2.16,
              "hasRDI": true,
              "daily": 2.4,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.6045229999999998,
              "hasRDI": true,
              "daily": 50.37691666666665,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.9331250000000001,
              "hasRDI": true,
              "daily": 71.77884615384616,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 9.118364999999999,
              "hasRDI": true,
              "daily": 56.98978124999999,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 0.8184497499999999,
              "hasRDI": true,
              "daily": 62.957673076923065,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 87.78324999999998,
              "hasRDI": true,
              "daily": 21.9458125,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 194.94325,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 1.4634,
              "hasRDI": true,
              "daily": 60.975,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 3.464,
              "hasRDI": true,
              "daily": 23.09333333333333,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 6.77374,
              "hasRDI": true,
              "daily": 45.15826666666667,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 73.643,
              "hasRDI": true,
              "daily": 61.369166666666665,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 396.4258897912217,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/396f9aa5eda84442bd5d842c36deab41?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_c068e108877188b28cfa25f5b33806af",
          "label": "Rainy Day Potato Shakshuka",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/c4d/c4d4509820e31d6268e34ca51f40f916.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b3a2b0a50b11d4470d8dc1227ef68426c7983329dce11d79fa36b91683f8e0f4",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c4d/c4d4509820e31d6268e34ca51f40f916-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9bac8eb175639d11f13ce49cf5b0ecc5fed5df5904f26820264cbc6d31a7d860",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c4d/c4d4509820e31d6268e34ca51f40f916-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6a43ce2a13e1cbc705cbee8b8f2604571d8782d6ef1e7d925d1a04a3fd26cd98",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c4d/c4d4509820e31d6268e34ca51f40f916.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b3a2b0a50b11d4470d8dc1227ef68426c7983329dce11d79fa36b91683f8e0f4",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c4d/c4d4509820e31d6268e34ca51f40f916-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3a4a3fe3f16c7cdbb79644d5565f65f6fd4ab2b34bbd9528f2a0745517f2c494",
              "width": 600,
              "height": 600
            }
          },
          "source": "Food52",
          "url": "https://food52.com/recipes/38456-rainy-day-potato-shakshuka",
          "shareAs": "http://www.edamam.com/recipe/rainy-day-potato-shakshuka-c068e108877188b28cfa25f5b33806af/chicken/balanced/333-cal",
          "yield": 4.0,
          "dietLabels": [
            "Balanced",
            "High-Fiber"
          ],
          "healthLabels": [
            "Dairy-Free",
            "Gluten-Free",
            "Wheat-Free",
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
            "Sulfite-Free",
            "Kosher"
          ],
          "cautions": [
            "Gluten",
            "Wheat",
            "Sulfites"
          ],
          "ingredientLines": [
            "1 potato, diced and cooked",
            "1-2 cups cooked rice, optional",
            "1-2 cups vegetables, such as eggplant or spinach",
            "cooked dark meat chicken, optional",
            "4 cloves garlic, chopped",
            "1/2 small onion, chopped",
            "3 tablespoons harissa paste or pilpelchuma",
            "1 teaspoon ground cumin",
            "1 teaspoon smoked or fresh Israeli paprika",
            "2 cups tomato sauce, low-sodium, high quality",
            "2-4 eggs",
            "olive oil",
            "fresh chopped herbs, such as parsley",
            "salt and pepper to taste"
          ],
          "ingredients": [
            {
              "text": "1 potato, diced and cooked",
              "quantity": 1.0,
              "measure": "<unit>",
              "food": "potato",
              "weight": 213.0,
              "foodCategory": "vegetables",
              "foodId": "food_abiw5baauresjmb6xpap2bg3otzu",
              "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
            },
            {
              "text": "1-2 cups cooked rice, optional",
              "quantity": 1.5,
              "measure": "cup",
              "food": "cooked rice",
              "weight": 237.0,
              "foodCategory": "grains",
              "foodId": "food_brqcp7fardef20b44y8riax4k0yz",
              "image": "https://www.edamam.com/food-img/43e/43e669c6de11504972da1ae1898ac19e.jpg"
            },
            {
              "text": "1-2 cups vegetables, such as eggplant or spinach",
              "quantity": 1.5,
              "measure": "cup",
              "food": "eggplant",
              "weight": 123.0,
              "foodCategory": "vegetables",
              "foodId": "food_ac9n68caswlpggbp7727varlyjk5",
              "image": "https://www.edamam.com/food-img/da5/da5978d61b89a363147a6d13c36e3b54.jpg"
            },
            {
              "text": "cooked dark meat chicken, optional",
              "quantity": 0.0,
              "measure": null,
              "food": "meat",
              "weight": 0.0,
              "foodCategory": "meats",
              "foodId": "food_bknby1la98smrsbwnthinbam42nj",
              "image": "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg"
            },
            {
              "text": "cooked dark meat chicken, optional",
              "quantity": 0.0,
              "measure": null,
              "food": "chicken",
              "weight": 0.0,
              "foodCategory": "Poultry",
              "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
              "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
            },
            {
              "text": "4 cloves garlic, chopped",
              "quantity": 4.0,
              "measure": "clove",
              "food": "garlic",
              "weight": 12.0,
              "foodCategory": "vegetables",
              "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
              "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
            },
            {
              "text": "1/2 small onion, chopped",
              "quantity": 0.5,
              "measure": "<unit>",
              "food": "onion",
              "weight": 35.0,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "3 tablespoons harissa paste or pilpelchuma",
              "quantity": 3.0,
              "measure": "tablespoon",
              "food": "harissa",
              "weight": 45.0,
              "foodCategory": "canned soup",
              "foodId": "food_ayjzfd9bhvwqorb6m5iq3bekq7cj",
              "image": "https://www.edamam.com/food-img/12f/12f4b9a8e738f35b7dd787a5360e4a45.jpg"
            },
            {
              "text": "1 teaspoon ground cumin",
              "quantity": 1.0,
              "measure": "teaspoon",
              "food": "cumin",
              "weight": 2.1,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a8jjbx4biqndasapojdb5by3e92e",
              "image": "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg"
            },
            {
              "text": "1 teaspoon smoked or fresh Israeli paprika",
              "quantity": 1.0,
              "measure": "teaspoon",
              "food": "paprika",
              "weight": 2.3,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a9dpcnjb883g67b3lq82ca0421ql",
              "image": "https://www.edamam.com/food-img/474/474d63763b9d8b9da98c5f43a114648c.jpg"
            },
            {
              "text": "2 cups tomato sauce, low-sodium, high quality",
              "quantity": 2.0,
              "measure": "cup",
              "food": "tomato sauce",
              "weight": 490.0,
              "foodCategory": "canned vegetables",
              "foodId": "food_altklniaqmdz3eb1rlf1ybjv8ihn",
              "image": null
            },
            {
              "text": "2-4 eggs",
              "quantity": 3.0,
              "measure": "<unit>",
              "food": "eggs",
              "weight": 129.0,
              "foodCategory": "Eggs",
              "foodId": "food_bhpradua77pk16aipcvzeayg732r",
              "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
              "text": "olive oil",
              "quantity": 0.0,
              "measure": null,
              "food": "olive oil",
              "weight": 17.52224,
              "foodCategory": "Oils",
              "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
              "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
              "text": "fresh chopped herbs, such as parsley",
              "quantity": 0.0,
              "measure": null,
              "food": "herbs",
              "weight": 12.884,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
              "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
            },
            {
              "text": "salt and pepper to taste",
              "quantity": 0.0,
              "measure": null,
              "food": "salt",
              "weight": 7.7304,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "salt and pepper to taste",
              "quantity": 0.0,
              "measure": null,
              "food": "pepper",
              "weight": 3.8652,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            }
          ],
          "calories": 1060.7790936,
          "totalCO2Emissions": 2219.733693055209,
          "co2EmissionsClass": "D",
          "totalWeight": 1324.0231521017815,
          "totalTime": 0.0,
          "cuisineType": [
            "french"
          ],
          "mealType": [
            "breakfast"
          ],
          "dishType": [
            "starter"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1060.7790936,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 34.55012672,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 7.482628600000001,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.04902,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 18.578673827999996,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 5.768309496,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 160.162004,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 135.7708284,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 24.3911756,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 27.409003680000005,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 37.90821319999999,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 479.88,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 3075.8459802912002,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 520.9380693044276,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 242.27780912101778,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 3502.806279368143,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 30.64995611393588,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 6.049368792101783,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 725.974856,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 409.22720400000003,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 105.42540000000002,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.9116573359999999,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 1.20918152,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 12.919932880000001,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 2.052234732,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 442.88624400000003,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 220.106244,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 130.35,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 1.1481000000000001,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 2.58,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 13.34055384,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 265.19501648000005,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1072.4793770242038,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 53.038954679999996,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 53.154041107692315,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 37.413143000000005,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 53.38733466666667,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 97.5647024,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 75.81642639999998,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 159.96,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 128.1602491788,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 52.09380693044275,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 57.68519264786138,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 74.52779317804558,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 170.27753396631044,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 54.99426174637984,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 103.71069371428571,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 45.46968933333334,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 117.13933333333337,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 75.97144466666666,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 93.01396307692308,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 80.74958050000001,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 157.86421015384616,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 110.72156100000001,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 47.837500000000006,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 17.2,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 88.9370256,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 220.9958470666667,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 34.55012672,
              "hasRDI": true,
              "daily": 53.154041107692315,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 7.482628600000001,
                  "hasRDI": true,
                  "daily": 37.413143000000005,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.04902,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 18.578673827999996,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 5.768309496,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 160.162004,
              "hasRDI": true,
              "daily": 53.38733466666667,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 135.7708284,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 24.3911756,
                  "hasRDI": true,
                  "daily": 97.5647024,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 27.409003680000005,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 37.90821319999999,
              "hasRDI": true,
              "daily": 75.81642639999998,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 479.88,
              "hasRDI": true,
              "daily": 159.96,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 3075.8459802912002,
              "hasRDI": true,
              "daily": 128.1602491788,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 520.9380693044276,
              "hasRDI": true,
              "daily": 52.09380693044275,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 242.27780912101778,
              "hasRDI": true,
              "daily": 57.68519264786138,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 3502.806279368143,
              "hasRDI": true,
              "daily": 74.52779317804558,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 30.64995611393588,
              "hasRDI": true,
              "daily": 170.27753396631044,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 6.049368792101783,
              "hasRDI": true,
              "daily": 54.99426174637984,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 725.974856,
              "hasRDI": true,
              "daily": 103.71069371428571,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 409.22720400000003,
              "hasRDI": true,
              "daily": 45.46968933333334,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 105.42540000000002,
              "hasRDI": true,
              "daily": 117.13933333333337,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.9116573359999999,
              "hasRDI": true,
              "daily": 75.97144466666666,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 1.20918152,
              "hasRDI": true,
              "daily": 93.01396307692308,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 12.919932880000001,
              "hasRDI": true,
              "daily": 80.74958050000001,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 2.052234732,
              "hasRDI": true,
              "daily": 157.86421015384616,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 442.88624400000003,
              "hasRDI": true,
              "daily": 110.72156100000001,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 220.106244,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 130.35,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 1.1481000000000001,
              "hasRDI": true,
              "daily": 47.837500000000006,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 2.58,
              "hasRDI": true,
              "daily": 17.2,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 13.34055384,
              "hasRDI": true,
              "daily": 88.9370256,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 265.19501648000005,
              "hasRDI": true,
              "daily": 220.9958470666667,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1072.4793770242038,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/c068e108877188b28cfa25f5b33806af?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_38296d94618b9da296f52887834f5c3d",
          "label": "Charlie Palmer's Asparagus with Morel Ragout",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/5c7/5c7462ec77f0d1690f2d0a6f0570ef7c.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=610171e8c176734cf649f42bf0fe4d535d1ad33a5aaa27b4fef5668b5182168f",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5c7/5c7462ec77f0d1690f2d0a6f0570ef7c-s.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7553c6a5f8147598fd6d7abffed77d28b4572a915920a93c22ec2d9023dbe1a0",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5c7/5c7462ec77f0d1690f2d0a6f0570ef7c-m.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8fe7fd4ce1adb99d21c032c66e3c32433820e49094f7851559d4d8f794ee22c6",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5c7/5c7462ec77f0d1690f2d0a6f0570ef7c.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=610171e8c176734cf649f42bf0fe4d535d1ad33a5aaa27b4fef5668b5182168f",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5c7/5c7462ec77f0d1690f2d0a6f0570ef7c-l.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a7298a91c394368bb1889b34324af5b30766eff19b8d9a973bf596903dab1afd",
              "width": 600,
              "height": 600
            }
          },
          "source": "Food Network",
          "url": "https://www.foodnetwork.com/recipes/charlie-palmers-asparagus-with-morel-ragout-recipe-1926523",
          "shareAs": "http://www.edamam.com/recipe/charlie-palmer-s-asparagus-with-morel-ragout-38296d94618b9da296f52887834f5c3d/chicken/balanced/333-cal",
          "yield": 6.0,
          "dietLabels": [
            "Balanced",
            "High-Fiber"
          ],
          "healthLabels": [
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
            "Mollusk-Free"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "1 1/2 pounds fresh asparagus, trimmed",
            "2 tablespoons unsalted butter",
            "6 leeks, white part only, washed and sliced, lengthwise",
            "1/2 pound fresh morels, well-cleaned",
            "1 1/2 cups chicken stock",
            "1/4 cup white wine",
            "Coarse salt and freshly ground pepper to taste",
            "1 tablespoon chopped fresh chives",
            "1 tablespoon minced fresh parsley"
          ],
          "ingredients": [
            {
              "text": "1 1/2 pounds fresh asparagus, trimmed",
              "quantity": 1.5,
              "measure": "pound",
              "food": "asparagus",
              "weight": 680.388555,
              "foodCategory": "vegetables",
              "foodId": "food_b7bgzddbqq26mia27xpv7acn083m",
              "image": "https://www.edamam.com/food-img/159/159dec8bbcabf7ed641a57b40a2d2eb9.jpg"
            },
            {
              "text": "2 tablespoons unsalted butter",
              "quantity": 2.0,
              "measure": "tablespoon",
              "food": "unsalted butter",
              "weight": 28.4,
              "foodCategory": "Dairy",
              "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
              "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            },
            {
              "text": "6 leeks, white part only, washed and sliced, lengthwise",
              "quantity": 6.0,
              "measure": "<unit>",
              "food": "leeks",
              "weight": 534.0,
              "foodCategory": "vegetables",
              "foodId": "food_a27jevnb06c1m9ax7k41xbbcwcuo",
              "image": "https://www.edamam.com/food-img/4ae/4ae9e09d029a28e0e2c64bdfdbf3f6ae.jpg"
            },
            {
              "text": "1/2 pound fresh morels, well-cleaned",
              "quantity": 0.5,
              "measure": "pound",
              "food": "morels",
              "weight": 226.796185,
              "foodCategory": "vegetables",
              "foodId": "food_bcj0lvqbbp4x7ibn0s11saxry68q",
              "image": "https://www.edamam.com/food-img/9a0/9a09b0330ec3ac82c969df18a1802077.jpg"
            },
            {
              "text": "1 1/2 cups chicken stock",
              "quantity": 1.5,
              "measure": "cup",
              "food": "chicken stock",
              "weight": 360.0,
              "foodCategory": "canned soup",
              "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
              "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
            },
            {
              "text": "1/4 cup white wine",
              "quantity": 0.25,
              "measure": "cup",
              "food": "white wine",
              "weight": 58.8,
              "foodCategory": "wines",
              "foodId": "food_bn44h7baron9ufaoxinmya8l0yye",
              "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
            },
            {
              "text": "Coarse salt and freshly ground pepper to taste",
              "quantity": 0.0,
              "measure": null,
              "food": "Coarse salt",
              "weight": 11.37110844,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "Coarse salt and freshly ground pepper to taste",
              "quantity": 0.0,
              "measure": null,
              "food": "pepper",
              "weight": 5.68555422,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
              "text": "1 tablespoon chopped fresh chives",
              "quantity": 1.0,
              "measure": "tablespoon",
              "food": "chives",
              "weight": 3.0,
              "foodCategory": "vegetables",
              "foodId": "food_btg1uzjak79lawbirsitkaeai60l",
              "image": "https://www.edamam.com/food-img/f3f/f3f48643a924ba174b894e979cb48620.jpg"
            },
            {
              "text": "1 tablespoon minced fresh parsley",
              "quantity": 1.0,
              "measure": "tablespoon",
              "food": "parsley",
              "weight": 3.8,
              "foodCategory": "vegetables",
              "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
              "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
            }
          ],
          "calories": 930.1072694422,
          "totalCO2Emissions": 5118.2566588517875,
          "co2EmissionsClass": "E",
          "totalWeight": 1910.4790101246617,
          "totalTime": 0.0,
          "cuisineType": [
            "mediterranean"
          ],
          "mealType": [
            "breakfast"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 930.1072694422,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 31.300873588072,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 16.219198145908003,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.0,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 8.9361702618858,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 3.8997655896656003,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 132.0573160698,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 100.16801801714001,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 31.889298052660003,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 41.37178949100801,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 40.21140682088,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 71.86,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 4420.435851802725,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 634.2807097617189,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 321.6920577252465,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 3800.599769848373,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 55.23126572424739,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 9.653707563622664,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1108.2138231676001,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 923.6967505394,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 109.69875908,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.5919533998576,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 1.9263640393960002,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 19.790551548508,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 2.4457733594302002,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 745.3062494674,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 745.3062494674,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 0.04827999999999999,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 11.566605435000001,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 13.462000435388,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 614.9991478008001,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1674.9500267293092,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 46.505363472110005,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 48.15519013549538,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 81.09599072954002,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 44.01910535660001,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 127.55719221064001,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 80.42281364176,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 23.953333333333333,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 184.18482715844686,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 63.42807097617189,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 76.59334707743965,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 80.8638248903909,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 306.8403651347078,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 87.76097785111513,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 158.3162604525143,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 102.63297228215555,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 121.88751008888889,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 132.66278332146666,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 148.1818491843077,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 123.690947178175,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 188.13641226386156,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 186.32656236685,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 2.0116666666666667,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 77.1107029,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 89.74666956925333,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 512.499289834,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 31.300873588072,
              "hasRDI": true,
              "daily": 48.15519013549538,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 16.219198145908003,
                  "hasRDI": true,
                  "daily": 81.09599072954002,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 8.9361702618858,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 3.8997655896656003,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 132.0573160698,
              "hasRDI": true,
              "daily": 44.01910535660001,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 100.16801801714001,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 31.889298052660003,
                  "hasRDI": true,
                  "daily": 127.55719221064001,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 41.37178949100801,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 40.21140682088,
              "hasRDI": true,
              "daily": 80.42281364176,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 71.86,
              "hasRDI": true,
              "daily": 23.953333333333333,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 4420.435851802725,
              "hasRDI": true,
              "daily": 184.18482715844686,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 634.2807097617189,
              "hasRDI": true,
              "daily": 63.42807097617189,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 321.6920577252465,
              "hasRDI": true,
              "daily": 76.59334707743965,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 3800.599769848373,
              "hasRDI": true,
              "daily": 80.8638248903909,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 55.23126572424739,
              "hasRDI": true,
              "daily": 306.8403651347078,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 9.653707563622664,
              "hasRDI": true,
              "daily": 87.76097785111513,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 1108.2138231676001,
              "hasRDI": true,
              "daily": 158.3162604525143,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 923.6967505394,
              "hasRDI": true,
              "daily": 102.63297228215555,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 109.69875908,
              "hasRDI": true,
              "daily": 121.88751008888889,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.5919533998576,
              "hasRDI": true,
              "daily": 132.66278332146666,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 1.9263640393960002,
              "hasRDI": true,
              "daily": 148.1818491843077,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 19.790551548508,
              "hasRDI": true,
              "daily": 123.690947178175,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 2.4457733594302002,
              "hasRDI": true,
              "daily": 188.13641226386156,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 745.3062494674,
              "hasRDI": true,
              "daily": 186.32656236685,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 745.3062494674,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 0.04827999999999999,
              "hasRDI": true,
              "daily": 2.0116666666666667,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 11.566605435000001,
              "hasRDI": true,
              "daily": 77.1107029,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 13.462000435388,
              "hasRDI": true,
              "daily": 89.74666956925333,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 614.9991478008001,
              "hasRDI": true,
              "daily": 512.499289834,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1674.9500267293092,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/38296d94618b9da296f52887834f5c3d?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_3afc51e803fad7089a70ee10360ceb0c",
          "label": "Bacon and Brussels Sprout Hash",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/a31/a311ba7b8c6440b5db46e8bf9345a49c.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1e0ce91dbfc3f955c97588c7166d7914952405385dd5caba96f719fd33d125d7",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a31/a311ba7b8c6440b5db46e8bf9345a49c-s.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d01d63d994d1f6e86a5e13c8155a8d92ccbdc43532ee5be89a4d6a4d37a66572",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a31/a311ba7b8c6440b5db46e8bf9345a49c-m.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a8062461238f0a13d2371abaf44b27388fa587cdd5ef820c736b6a5c6ea56ee5",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a31/a311ba7b8c6440b5db46e8bf9345a49c.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1e0ce91dbfc3f955c97588c7166d7914952405385dd5caba96f719fd33d125d7",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a31/a311ba7b8c6440b5db46e8bf9345a49c-l.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1e13ba63ddaf17c1d62cf184a0899bdef66003a89b64a5de6f3f9488fca78087",
              "width": 600,
              "height": 600
            }
          },
          "source": "Food Network",
          "url": "https://www.foodnetwork.com/recipes/tyler-florence/bacon-and-brussels-sprout-hash-recipe-1943344",
          "shareAs": "http://www.edamam.com/recipe/bacon-and-brussels-sprout-hash-3afc51e803fad7089a70ee10360ceb0c/chicken/balanced/333-cal",
          "yield": 6.0,
          "dietLabels": [
            "Balanced"
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
            "Sulfites"
          ],
          "ingredientLines": [
            "Extra-virgin olive oil",
            "4 slices thick-cut bacon",
            "4 sprigs fresh thyme",
            "2 pints Brussels sprouts, cut in 1/2",
            "1 pound fingerling potatoes, split down the middle",
            "1/2 pound red pearl onions, peeled",
            "Kosher salt and freshly ground black pepper",
            "1/2 cup low-sodium chicken broth",
            "2 tablespoons balsamic vinegar",
            "1/4 bunch flat-leaf parsley, leaves roughly chopped"
          ],
          "ingredients": [
            {
              "text": "Extra-virgin olive oil",
              "quantity": 0.0,
              "measure": null,
              "food": "Extra-virgin olive oil",
              "weight": 18.052484348,
              "foodCategory": "Oils",
              "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
              "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
              "text": "4 slices thick-cut bacon",
              "quantity": 4.0,
              "measure": "slice",
              "food": "bacon",
              "weight": 116.0,
              "foodCategory": "cured meats",
              "foodId": "food_av0awb0bgs18qub01sd9kbx44b61",
              "image": "https://www.edamam.com/food-img/d42/d426884a125fa39a70d5a5d7217864ec.jpg"
            },
            {
              "text": "4 sprigs fresh thyme",
              "quantity": 4.0,
              "measure": "sprig",
              "food": "fresh thyme",
              "weight": 12.0,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b3o3cj7a5gskecb0ufphtadnbfqb",
              "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
            },
            {
              "text": "2 pints Brussels sprouts, cut in 1/2",
              "quantity": 2.0,
              "measure": "pint",
              "food": "Brussels sprouts",
              "weight": 352.00000000000006,
              "foodCategory": "vegetables",
              "foodId": "food_bkr6xbxbvl7pgua0vy4ibblf93qq",
              "image": "https://www.edamam.com/food-img/28a/28a88a795cd97a3b3b28b65eb8bff5aa.jpg"
            },
            {
              "text": "1 pound fingerling potatoes, split down the middle",
              "quantity": 1.0,
              "measure": "pound",
              "food": "fingerling",
              "weight": 453.59237,
              "foodCategory": "vegetables",
              "foodId": "food_b5m473aabh39qbbre3ypaa4uwd7j",
              "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
            },
            {
              "text": "1/2 pound red pearl onions, peeled",
              "quantity": 0.5,
              "measure": "pound",
              "food": "pearl onions",
              "weight": 226.796185,
              "foodCategory": "vegetables",
              "foodId": "food_bye6035blu09tpb1bnvdsb2js8j6",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "Kosher salt and freshly ground black pepper",
              "quantity": 0.0,
              "measure": null,
              "food": "Kosher salt",
              "weight": 7.96433133,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "Kosher salt and freshly ground black pepper",
              "quantity": 0.0,
              "measure": null,
              "food": "black pepper",
              "weight": 3.982165665,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
              "text": "1/2 cup low-sodium chicken broth",
              "quantity": 0.5,
              "measure": "cup",
              "food": "low-sodium chicken broth",
              "weight": 120.0,
              "foodCategory": "canned soup",
              "foodId": "food_axg87lea13vni7a0lc9adauqgcs9",
              "image": "https://www.edamam.com/food-img/2eb/2eb3c708f58f5fa1543022650ff0ae8d.png"
            },
            {
              "text": "2 tablespoons balsamic vinegar",
              "quantity": 2.0,
              "measure": "tablespoon",
              "food": "balsamic vinegar",
              "weight": 32.0,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b1ic8tzapja8jubas1f8lbhpbn6x",
              "image": "https://www.edamam.com/food-img/90a/90a1f211768e166ecfff19e8b4747498.jpg"
            },
            {
              "text": "1/4 bunch flat-leaf parsley, leaves roughly chopped",
              "quantity": 0.25,
              "measure": "bunch",
              "food": "parsley",
              "weight": 15.0,
              "foodCategory": "vegetables",
              "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
              "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
            }
          ],
          "calories": 1281.6837963554701,
          "totalCO2Emissions": 3314.0705724037307,
          "co2EmissionsClass": "D",
          "totalWeight": 1354.8062251222104,
          "totalTime": 45.0,
          "cuisineType": [
            "french"
          ],
          "mealType": [
            "breakfast"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1281.6837963554701,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 63.949432266679,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 17.880127432967498,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.17051999999999998,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 32.15402712975435,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 9.618117016726698,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 145.3715144546,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 115.43205162635499,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 29.939462828245006,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 26.594601538256008,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 43.666646849159996,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 76.55999999999999,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 3138.056674793631,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 363.24765051564054,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 261.6491970882421,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 4210.123972396718,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 13.525096350280696,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 5.1232014160227095,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 829.5503663007,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 239.30518472955,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 444.49061457999994,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.3041368037182,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.7315324265470001,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 14.461059385181002,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 2.78214878668515,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 354.7270988130501,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 354.7270988130501,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 0.7,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.46399999999999997,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 6.440590743028001,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 896.4173794080962,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1079.3360946233436,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 64.0841898177735,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 98.38374194873691,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 89.40063716483749,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 48.45717148486667,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 119.75785131298002,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 87.33329369831999,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 25.519999999999996,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 130.75236144973462,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 36.32476505156406,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 62.297427878152874,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 89.57710579567487,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 75.13942416822609,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 46.574558327479174,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 118.50719518581428,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 26.58946496995,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 493.87846064444443,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 108.67806697651666,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 56.271725119,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 90.38162115738126,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 214.01144512962694,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 88.68177470326253,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 29.166666666666668,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 3.0933333333333333,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 42.93727162018668,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 747.0144828400802,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 63.949432266679,
              "hasRDI": true,
              "daily": 98.38374194873691,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 17.880127432967498,
                  "hasRDI": true,
                  "daily": 89.40063716483749,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.17051999999999998,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 32.15402712975435,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 9.618117016726698,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 145.3715144546,
              "hasRDI": true,
              "daily": 48.45717148486667,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 115.43205162635499,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 29.939462828245006,
                  "hasRDI": true,
                  "daily": 119.75785131298002,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 26.594601538256008,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 43.666646849159996,
              "hasRDI": true,
              "daily": 87.33329369831999,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 76.55999999999999,
              "hasRDI": true,
              "daily": 25.519999999999996,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 3138.056674793631,
              "hasRDI": true,
              "daily": 130.75236144973462,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 363.24765051564054,
              "hasRDI": true,
              "daily": 36.32476505156406,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 261.6491970882421,
              "hasRDI": true,
              "daily": 62.297427878152874,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 4210.123972396718,
              "hasRDI": true,
              "daily": 89.57710579567487,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 13.525096350280696,
              "hasRDI": true,
              "daily": 75.13942416822609,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 5.1232014160227095,
              "hasRDI": true,
              "daily": 46.574558327479174,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 829.5503663007,
              "hasRDI": true,
              "daily": 118.50719518581428,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 239.30518472955,
              "hasRDI": true,
              "daily": 26.58946496995,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 444.49061457999994,
              "hasRDI": true,
              "daily": 493.87846064444443,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.3041368037182,
              "hasRDI": true,
              "daily": 108.67806697651666,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.7315324265470001,
              "hasRDI": true,
              "daily": 56.271725119,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 14.461059385181002,
              "hasRDI": true,
              "daily": 90.38162115738126,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 2.78214878668515,
              "hasRDI": true,
              "daily": 214.01144512962694,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 354.7270988130501,
              "hasRDI": true,
              "daily": 88.68177470326253,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 354.7270988130501,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 0.7,
              "hasRDI": true,
              "daily": 29.166666666666668,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.46399999999999997,
              "hasRDI": true,
              "daily": 3.0933333333333333,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 6.440590743028001,
              "hasRDI": true,
              "daily": 42.93727162018668,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 896.4173794080962,
              "hasRDI": true,
              "daily": 747.0144828400802,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1079.3360946233436,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/3afc51e803fad7089a70ee10360ceb0c?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_0bc0b61c277f4726a3109dda0ff459fb",
          "label": "Everything Bagel Stuffing",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/3c9/3c9f9d653832976bf9664386626a7cad.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=512e58da74784760f0647b172a3320953ec1f2775a8366b0d0ddceb9977f886e",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/3c9/3c9f9d653832976bf9664386626a7cad-s.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=368da4ae584cc582e9c6df50da0d6eaea2619233600c83d1c0e1bf79b749cc9f",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/3c9/3c9f9d653832976bf9664386626a7cad-m.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f4a5b9ba112e06a46ce5486cb5b66541f824b9cdb5451c3602df2c8b3225cb64",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/3c9/3c9f9d653832976bf9664386626a7cad.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=512e58da74784760f0647b172a3320953ec1f2775a8366b0d0ddceb9977f886e",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/3c9/3c9f9d653832976bf9664386626a7cad-l.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIH29Lb8h3bYvYtoRWqJpwkXCXX7X6M6N2ZWl0XaZoKPzAiEAmD%2FYbODEjX%2Bf7ZJBUYhG3maBsoeZeeB0RPLBiVq2OAAqwQUIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHq3iQYAR4AJJrKxciqVBVq4XqtUBgm8sEsImRbJraZs2kNhWpJFRtpA%2FkiriO0gmxpkN5cfAJttuKK1d5IVP72nuZ6xKtKxv7H%2FVn0vnqivkxCJjGSjWeoeUW2cNKJ3ctevTYo3cIK%2F5G5c2INrPbwAN3zZotVV2mJB0TL6uper14uHPNMf7CJgxODYT8SZ%2B7c7RiBY0tPYE7XwT7V%2B5HgfYcDg7xRC5p%2BXDX1zb5FeHwd9we4cHwlJPqx7%2F1YnLhhnrLbKFetSWTbA0dJ0NPuotioFymQBQq7jBwVq8h4O%2BFv8kUAPjtrlWd%2B29%2FDke%2BOwkuZCyz1BH00QGivO0QrDeyBQJxzTGitLIZMWMCeGoPZjkJEvXv4hKrWTP9HsK7MoxqlQP%2BOzYoeYFK2YBi297a49x2mMrlljwU5iUXQyIkVxOD73q0EFUAg1f2ordTbLv%2BoUj%2Bkoj8Mzs7uQkJzRtGJyHA9Ewp6Qq2GJz8XiI18sFZKIqNwuGh5jYwyx1rfFaBIvoIMuB4SQjDDd41nQxyxNKHmFlpL3u%2FK1s4FnRPl0aivT%2FFjPsRzx3D5cC1ilp6hLlK0NPA9lSD3lG41yg%2Fyrk%2FOiap7GEhqp5BoaToevIBrVHGs4PvlkHPJ%2FZjXQniDy7iSVWXfqgpfelXpEhPENdNZIBs%2B6l3u47J7NxFRhk17%2Bpoywer1vl9XxFYBxR%2BADfy%2FLnsAebub1JVj7zFk4kGqJnP5niCq1gKgjPgXqB3XYUmHFzoUnF6%2F4Xoq%2FoFHblDxBSknzA82Sci8C01miSYKuR%2FqU%2B6mlTAU6S5OFsy99Ay3h4uSmpYT1BCKPoEyx33724gdkX3GfjdotqmN1WpTu0yp4Nr4krkWVF2SheIEvd9%2BSKeUZHYeeNSOGQ1kwyrmWsgY6sQHWB9PVT9LsNFefBPmrAXdkFkLCqdtJUSNVxHU1x6sJwZyORF8BV%2BM1%2FN3xp%2BmakECpJKyujjIdzhEw9HY3oX02RjTFNvGeDJG8EkogC3b1JpLHUvXNIt60nWUyaSqgDHIAWRAsxURmObOWXExjFEzDQctWVb6APVEHUR4Vcqe31ZM6lvO1y7%2BccOFRIkZdd7ZQwWuCZ75y36GYdVe2uHav6u%2BQqkRIqoyTacoCx1o%2FIUY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240516T065624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHVUN7CQK%2F20240516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5d1c5a31cb0dee6a864bd7e9c15503fc529b14944c46472b680e81d6ebfaa42e",
              "width": 600,
              "height": 600
            }
          },
          "source": "Food Network",
          "url": "https://www.foodnetwork.com/recipes/everything-bagel-stuffing-11942045",
          "shareAs": "http://www.edamam.com/recipe/everything-bagel-stuffing-0bc0b61c277f4726a3109dda0ff459fb/chicken/balanced/333-cal",
          "yield": 8.0,
          "dietLabels": [
            "Balanced"
          ],
          "healthLabels": [
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
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "6 tablespoons butter or margarine",
            "1 large red onion, thinly sliced",
            "5 stalks of scallions, sliced, white and green parts separated",
            "Kosher salt",
            "Freshly ground black pepper",
            "2 tablespoons chopped chives, plus 2 teaspoons for garnish",
            "3 garlic cloves, minced",
            "1 1/2 to 2 cups chicken broth (depending on how big and dry the bagels are)",
            "2 large eggs",
            "2 tablespoons capers, optional",
            "5 large day-old everything bagels, cut into 1-inch cubes (about 8 cups)"
          ],
          "ingredients": [
            {
              "text": "6 tablespoons butter or margarine",
              "quantity": 6.0,
              "measure": "tablespoon",
              "food": "butter",
              "weight": 85.19999999999999,
              "foodCategory": "Dairy",
              "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
              "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            },
            {
              "text": "1 large red onion, thinly sliced",
              "quantity": 1.0,
              "measure": "<unit>",
              "food": "red onion",
              "weight": 150.0,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "5 stalks of scallions, sliced, white and green parts separated",
              "quantity": 5.0,
              "measure": "stalk",
              "food": "scallions",
              "weight": 75.0,
              "foodCategory": "vegetables",
              "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
              "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
            },
            {
              "text": "Kosher salt",
              "quantity": 0.0,
              "measure": null,
              "food": "Kosher salt",
              "weight": 8.156400000000001,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "Freshly ground black pepper",
              "quantity": 0.0,
              "measure": null,
              "food": "black pepper",
              "weight": 4.078200000000001,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
              "text": "2 tablespoons chopped chives, plus 2 teaspoons for garnish",
              "quantity": 2.0,
              "measure": "tablespoon",
              "food": "chives",
              "weight": 6.0,
              "foodCategory": "vegetables",
              "foodId": "food_btg1uzjak79lawbirsitkaeai60l",
              "image": "https://www.edamam.com/food-img/f3f/f3f48643a924ba174b894e979cb48620.jpg"
            },
            {
              "text": "2 tablespoons chopped chives, plus 2 teaspoons for garnish",
              "quantity": 2.0,
              "measure": "teaspoon",
              "food": "chives",
              "weight": 2.0,
              "foodCategory": "vegetables",
              "foodId": "food_btg1uzjak79lawbirsitkaeai60l",
              "image": "https://www.edamam.com/food-img/f3f/f3f48643a924ba174b894e979cb48620.jpg"
            },
            {
              "text": "3 garlic cloves, minced",
              "quantity": 3.0,
              "measure": "clove",
              "food": "garlic",
              "weight": 9.0,
              "foodCategory": "vegetables",
              "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
              "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
            },
            {
              "text": "1 1/2 to 2 cups chicken broth (depending on how big and dry the bagels are)",
              "quantity": 1.75,
              "measure": "cup",
              "food": "chicken broth",
              "weight": 420.0,
              "foodCategory": "canned soup",
              "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
              "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
            },
            {
              "text": "2 large eggs",
              "quantity": 2.0,
              "measure": "<unit>",
              "food": "eggs",
              "weight": 100.0,
              "foodCategory": "Eggs",
              "foodId": "food_bhpradua77pk16aipcvzeayg732r",
              "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
              "text": "2 tablespoons capers, optional",
              "quantity": 2.0,
              "measure": "tablespoon",
              "food": "capers",
              "weight": 17.2,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_ak4s9lna3rmnfeaz93ni0blu823w",
              "image": "https://www.edamam.com/food-img/627/627582f390a350d98c367f89c3a943fe.jpg"
            },
            {
              "text": "5 large day-old everything bagels, cut into 1-inch cubes (about 8 cups)",
              "quantity": 5.0,
              "measure": "<unit>",
              "food": "everything bagels",
              "weight": 495.0,
              "foodCategory": "quick breads and pastries",
              "foodId": "food_abgmon9a80fjy1b5vyx0kawkj6n1",
              "image": "https://www.edamam.com/food-img/755/7553666b2864e4003538607529dcccde.jpg"
            }
          ],
          "calories": 2325.886282,
          "totalCO2Emissions": 7575.265188279998,
          "co2EmissionsClass": "E",
          "totalWeight": 1363.4782,
          "totalTime": 50.0,
          "cuisineType": [
            "eastern europe"
          ],
          "mealType": [
            "breakfast"
          ],
          "dishType": [
            "preps"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 2325.886282,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 90.85796932000001,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 49.48965298,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.14195000000000002,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 28.061013897999995,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 8.190578436,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 301.270248,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 286.8790634,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 14.3911846,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 57.22774048,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 81.0647528,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 567.78,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 3265.6576400000004,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 1310.194426,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 222.31372200000004,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 1675.9880600000001,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 22.70977322,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 6.86345058,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 919.721556,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 804.213114,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 34.23560000000001,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 3.144850456,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 2.69661676,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 29.961929480000002,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 1.139469562,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 967.225294,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 279.175294,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 405.90000000000003,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 1.03484,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 2.0,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 40.739913279999996,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 192.056448,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 872.997775,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 116.29431410000001,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 139.7814912615385,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 247.4482649,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 100.423416,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 57.5647384,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 162.1295056,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 189.26,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 136.06906833333335,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 131.01944260000002,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 52.931838571428585,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 35.65932042553192,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 126.16540677777776,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 62.395005272727275,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 131.38879371428573,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 89.35701266666668,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 38.03955555555557,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 262.07087133333334,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 207.43205846153845,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 187.26205925000002,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 87.65150476923075,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 241.8063235,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 43.11833333333333,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 13.333333333333334,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 271.59942186666666,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 160.04703999999998,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 90.85796932000001,
              "hasRDI": true,
              "daily": 139.7814912615385,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 49.48965298,
                  "hasRDI": true,
                  "daily": 247.4482649,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.14195000000000002,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 28.061013897999995,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 8.190578436,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 301.270248,
              "hasRDI": true,
              "daily": 100.423416,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 286.8790634,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 14.3911846,
                  "hasRDI": true,
                  "daily": 57.5647384,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 57.22774048,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 81.0647528,
              "hasRDI": true,
              "daily": 162.1295056,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 567.78,
              "hasRDI": true,
              "daily": 189.26,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 3265.6576400000004,
              "hasRDI": true,
              "daily": 136.06906833333335,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 1310.194426,
              "hasRDI": true,
              "daily": 131.01944260000002,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 222.31372200000004,
              "hasRDI": true,
              "daily": 52.931838571428585,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 1675.9880600000001,
              "hasRDI": true,
              "daily": 35.65932042553192,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 22.70977322,
              "hasRDI": true,
              "daily": 126.16540677777776,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 6.86345058,
              "hasRDI": true,
              "daily": 62.395005272727275,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 919.721556,
              "hasRDI": true,
              "daily": 131.38879371428573,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 804.213114,
              "hasRDI": true,
              "daily": 89.35701266666668,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 34.23560000000001,
              "hasRDI": true,
              "daily": 38.03955555555557,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 3.144850456,
              "hasRDI": true,
              "daily": 262.07087133333334,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 2.69661676,
              "hasRDI": true,
              "daily": 207.43205846153845,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 29.961929480000002,
              "hasRDI": true,
              "daily": 187.26205925000002,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 1.139469562,
              "hasRDI": true,
              "daily": 87.65150476923075,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 967.225294,
              "hasRDI": true,
              "daily": 241.8063235,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 279.175294,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 405.90000000000003,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 1.03484,
              "hasRDI": true,
              "daily": 43.11833333333333,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 2.0,
              "hasRDI": true,
              "daily": 13.333333333333334,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 40.739913279999996,
              "hasRDI": true,
              "daily": 271.59942186666666,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 192.056448,
              "hasRDI": true,
              "daily": 160.04703999999998,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 872.997775,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/0bc0b61c277f4726a3109dda0ff459fb?type=public&app_id=c80e50f7&app_key=924c6d3e8a53b1dcb0c777f909cf5591",
            "title": "Self"
          }
        }
      }
    ]
  }

  

  @ViewChildren(RecipeComponent) recipes_children!: QueryList<RecipeComponent>; 
  current_recipes: any
  next: { href: string, title: string } | undefined
  previous: { href: string, title: string } | undefined
  error: boolean = false

  constructor(private recipe_service: RecipesService) { }

  ngOnInit(): void {
    // this.recipe_service.getRecipes().subscribe(
    //   (data: any) => {
    //     if (data) {

    //       this.current_recipes = data.recipes
    //       this.next = data.next
    //       this.previous = data.previous
    //       this.error = false
    //     }
    //   },
    //   (error) => {
    //     console.log('request error')
    //     console.error(error)
    //     this.error = true
    //   }
    // )

    this.current_recipes = this.data.recipes
    this.next = this.data.next
    this.previous = this.data.previous
    this.error = false
  }


  searchRecipe(url: string): void {
    this.recipe_service.fetchRecipe(null, url).subscribe(
      (data: any) => {
        const recipes = {
          'recipes': data.hits,
          'next': data._links.next || false,
          'previous': data._links.previous || false

        }

        this.recipe_service.saveRecipes(recipes)
      },
      (error) => {
        console.log('request error')
        console.error(error)
      }
    )
  }

  toggleError(value: boolean) {
    this.error = value
  }



}


// https://api.edamam.com/api/recipes/v2?q=chicken&q=chicken&app_key=924c6d3e8a53b1dcb0c777f909cf5591&mealType=Breakfast&_cont=CHcVQBtNNQphDmgVQ3tAEX4BYktxAgQOR2ZFCmAbalN2AgoOUXlSBDQXMFxzB1dUFzYTUTcWZQR3UgcGQDYWVTBHYFJ1BFcVLnlSVSBMPkd5AANK&diet=balanced&calories=333&imageSize=THUMBNAIL&type=public&app_id=c80e50f7