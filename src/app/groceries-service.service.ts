import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceriesServiceService {

  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 1
    },
    {
      name: "Banana",
      quantity: 3
    },
    {
      name: "Sugar",
      quantity: 1
    }
  ]

  constructor() { }

  getItems() {
    return this.items
  }

  removeItem(index: number) {
    this.items.splice(index, 1)
  }

  addItem(item: Item) {
    this.items.push(item)
  }

  editItem(item: Item, index: number) {
    this.items[index] = item
  }
}

interface Item {
  name: string;
  quantity: number;
}
