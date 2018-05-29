import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://previews.123rf.com/images/foodandmore/foodandmore1502/foodandmore150200150/36578073-close-up-tasty-recipe-of-crumbled-escalope-with-potato-fries-styled-with-slice-of-lemon-and-tomato-a.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://i.pinimg.com/236x/48/f6/e9/48f6e92bbb500ea47f94ad752a09f425.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
