import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foodSearch'
})
export class FoodSearchPipe implements PipeTransform {
  transform(foods: any[], searchTerm: string): any[] {
    if (!foods) return [];
    if (!searchTerm) return foods;

    searchTerm = searchTerm.toLowerCase();

    return foods.filter(food => {
      return food.name.toLowerCase().includes(searchTerm);
    });
  }
}
