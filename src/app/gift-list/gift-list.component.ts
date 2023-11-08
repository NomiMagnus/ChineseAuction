import { Component } from '@angular/core';
import { gift } from '../models/gift.model';

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.css']
})
export class GiftListComponent {

selectedIndex: number = 0;

isNew:boolean = false;

listGift: gift[]=[
{id : 1, name : 'mixer', price:10, donor:'Yosi Green'},
{id : 2, name : 'camera', price:10, donor:'Yosi Green'}

 ]

 delete(gift:gift){
  this.listGift = this.listGift.filter(i=>i!=gift)
 }
addNewGift(g:gift){
  let max = this.listGift.map(i=>i.id).sort().pop();
  g.id = (max ?? 0) +1;
  this.listGift.push(g);
  this.isNew = false;
}
editGift(g:gift){
  let gg = this.listGift.find(i=>i.id)
  if(gg){
    gg.name = g.name;
    gg.donor = g.donor;
    gg.price = g.price;
  }
  
}
}
