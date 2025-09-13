import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../products/products';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.html',
  imports: [CommonModule],
  styleUrls: ['./cart-page.css']
})
export class CartPageComponent implements OnInit {
  cartItems: (Product & { quantity?: number })[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  increaseQuantity(item: Product & { quantity?: number }) {
    item.quantity = (item.quantity || 1) + 1;
  }

  decreaseQuantity(item: Product & { quantity?: number }) {
    if (item.quantity && item.quantity > 1) {
      item.quantity -= 1;
    }
  }

  removeItem(item: Product) {
    this.cartItems = this.cartItems.filter(i => i !== item);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  }

  getDiscount(): number {
    return Math.floor(this.getTotal() * 0.15); // Example: 15% discount
  }
}
