import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishListItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.css']
})
export class WishlistCreateComponent implements OnInit {

  @Output() addItemEmitter = new EventEmitter<IWishListItem>();

  item: IWishListItem;

  constructor() {
    this.item = {} as IWishListItem;
  }

  ngOnInit(): void {
  }

  addItem() {
    this.addItemEmitter.emit(
      {
        title: this.item.title,
        authors: this.item.authors
      })
      this.item = {} as IWishListItem;
  }

}
