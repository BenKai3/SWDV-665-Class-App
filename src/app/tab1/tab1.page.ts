import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Grocery App"
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
  
  constructor(public toastCtrl: ToastController, public alertCtrl: AlertController) {}

  async removeItem(item: Item, index: number) {
    console.log(`removing item ${item.name} index: ${index}`)
    const toast = await this.toastCtrl.create({
      message: `Removing Item - ${item.name}...`,
      duration: 3000
    })
    await toast.present()
    this.items.splice(index, 1)
  }

  addItem() {
    console.log("adding item")
    this.showAddItemPrompt()
  }

  async showAddItemPrompt() {
    const prompt = await this.alertCtrl.create({
      header: 'Add Item',
      // message: "add an item",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked')
          }
        },
        {
          text: 'Add',
          handler: item => {
            console.log('Add clicked', item)
            this.items.push(item)
          }
        }
      ]
    })
    await prompt.present()
  }

}

interface Item {
  name: string;
  quantity: number;
}