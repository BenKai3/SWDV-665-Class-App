import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from '../groceries-service.service';
import { InputDialogService } from '../input-dialog.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Grocery App"
  
  constructor(public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: GroceriesServiceService, public inputDialogService: InputDialogService) {}

  loadItems() {
    return this.dataService.getItems()
  }

  async removeItem(item: Item, index: number) {
    console.log(`removing item ${item.name} index: ${index}`)
    const toast = await this.toastCtrl.create({
      message: `Removing Item - ${item.name}...`,
      duration: 3000
    })
    await toast.present()

    this.dataService.removeItem(index)
  }

  async editItem(item: Item, index: number) {
    console.log(`Editing item ${item.name} index: ${index}`)
    const toast = await this.toastCtrl.create({
      message: `Editing Item - ${item.name}...`,
      duration: 3000
    })
    await toast.present()
    this.inputDialogService.showPrompt(item, index)
  }

  addItem() {
    console.log("adding item")
    this.inputDialogService.showPrompt()
  }

}

interface Item {
  name: string;
  quantity: number;
}