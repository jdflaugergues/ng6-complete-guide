import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Output() clearList = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(nameInput, amountInput) {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);

    // this.ingredientAdded.emit({name: nameInput.value, amount: amountInput.value});
    this.ingredientAdded.emit(newIngredient);
  }

  onDelete() {

  }

  onClear() {
    this.clearList.emit();
  }
}
