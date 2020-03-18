import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor() {
    this.recipes.push(
      new Recipe('Hyderabad Biryani', 'Easy Recipe for a spicy Biryani',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Hyderabadi_Chicken_Biryani.jpg/1024px-Hyderabadi_Chicken_Biryani.jpg'),
      new Recipe('Pulihora', 'Pulihora is prepared with tamarind and jaggery',
        'https://aahaaramonline.com/wp-content/uploads/2019/04/Andhra_Nuvvula_Chintapandu_Pulihora_1.jpg'))
  }

  ngOnInit(): void {
  }

}
