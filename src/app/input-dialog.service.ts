import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from './groceries-service.service';


@Injectable({
  providedIn: 'root'
})
export class InputDialogService {

  constructor(public alertCtrl: AlertController, public dataService: GroceriesServiceService) { }
  // item? allows for the function to be called without the item argument
  async showPrompt(item?: Item, index?: number) {
    const prompt = await this.alertCtrl.create({
      header: item ? 'Edit Item' : 'Add Item',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item ? item.name : null
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
          value: item ? item.quantity : null
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
          text: item ? 'Edit' : 'Add',
          handler: item => {
           
            if(index) {
              console.log('Edit clicked', item)
              this.dataService.editItem(item, index)
            } else {
              console.log('Add clicked', item)
              this.dataService.addItem(item)
            }
            
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