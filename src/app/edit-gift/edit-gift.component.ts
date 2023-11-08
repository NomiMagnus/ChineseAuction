import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { gift } from '../models/gift.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-gift',
  templateUrl: './edit-gift.component.html',
  styleUrls: ['./edit-gift.component.css']

})
export class EditGiftComponent implements OnChanges, OnInit {

  @Output()
  addGift: EventEmitter<gift> = new EventEmitter<gift>();

  @Output()
  giftChange: EventEmitter<gift> = new EventEmitter<gift>();

  copyGift: gift = new gift()

  @Input()
  isNew: boolean = false;

  @Input()
  gift: gift = new gift();

  frmGift: FormGroup = new FormGroup({});

  constructor() {
    this.frmGift = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      price: new FormControl(10, [Validators.required]),
      donor: new FormControl('', [Validators.required])
    })
  }
  ngOnInit(): void {
    this.frmGift = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      price: new FormControl(10, [Validators.required]),
      donor: new FormControl('', [Validators.required])
    })
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.copyGift = Object.assign(this.copyGift, this.gift);
  }


  save() {
    let g: gift = new gift();
    Object.assign(g, this.copyGift);
    if (this.isNew) {
      this.addGift.emit(g);
      this.gift = new gift();
    }
    else
      this.giftChange.emit(g);
  }
}