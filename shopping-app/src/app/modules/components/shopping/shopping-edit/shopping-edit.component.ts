import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  // Different ways to bind variables using ngModel directive & @ViewChild directive
  ingredientName: string;

  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
  }

  addIngredient() {
    this.shoppingService.addIngredient(new Ingredient(this.ingredientName, this.amountInputRef.nativeElement.value));
  }
}
