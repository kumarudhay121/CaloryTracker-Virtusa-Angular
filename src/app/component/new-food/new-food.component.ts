import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Food } from './../../interface/food';
import { items } from './../../interface/foods';

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css']
})
export class NewFoodComponent implements OnInit {

  items: Food[];
  newFoodName = 'Enter Food Name';
  newFoodCalories = 0;
  newFoodImage = '';
  searchTerm = ""
  totalCalories : number = 0;
  @Output() totalCaloriesEvent = new EventEmitter<number>();

  constructor() {
   }

  ngOnInit(): void {
    this.items = items;
  }


  addFood()
  {
    const newFood = {
      name: this.newFoodName,
      calories: this.newFoodCalories,
      image: this.newFoodImage,
      count: 0
    };

    this.items.unshift(newFood);
  }

  addCount(count:number, item:Food): any{
    item.count = Number(item.count) + Number(count);
    this.totalCalories += (Number(count) * Number(item.calories));
    
  }
  sendTotalCalories() {
    this.totalCaloriesEvent.emit(this.totalCalories);
  }
  
  


}
