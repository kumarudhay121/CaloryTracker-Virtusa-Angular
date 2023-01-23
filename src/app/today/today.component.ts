import { Component, Input, OnInit } from '@angular/core';
import { Food } from './../interface/food';
import { items } from './../interface/foods';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  items: Food[];
  newFood: any = {};
  @Input() totalCalories:number;
  constructor() {
    
  }

  ngOnInit(): void {
    this.items = items;
  }

  addCount(count, item): any {
    item.count += count;
    this.totalCalories += Number(count) * Number(item.calories)
  }
  // totalCalorie(){
  //   for (let i=0;i<this.items.length;i++){
  //     this.totalCalories += Number(this.items[i].calories)*Number(this.items[i].count);
  //   }
  //   return this.totalCalories;
  // }



}
