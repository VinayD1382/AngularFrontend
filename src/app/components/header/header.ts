import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Product } from '../products/products';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {

  cartCount = 0;
  cartItems: Product[] = [];
  showCart = false;
  savedForLater: any[] = []; 
 constructor(private cartService: CartService, private router: Router) {
  this.cartService.cartCount$.subscribe(count => this.cartCount = count);
}


  toggleCart() {
    this.showCart = !this.showCart;
    this.cartItems = this.cartService.getCartItems();
  }
/*
  increaseQuantity(item: Product & { quantity?: number }) {
    item.quantity = (item.quantity || 1) + 1;
  }

  decreaseQuantity(item: Product & { quantity?: number }) {
    if (item.quantity && item.quantity > 1) {
      item.quantity -= 1;
    }
  }*/

    increaseQuantity(item: Product & { quantity?: number }) {
  const newQty = (item.quantity || 1) + 1;
  this.cartService.updateQuantity(item, newQty);
  this.cartItems = this.cartService.getCartItems(); 
}

decreaseQuantity(item: Product & { quantity?: number }) {
  if ((item.quantity || 1) > 1) {
    const newQty = (item.quantity || 1) - 1;
    this.cartService.updateQuantity(item, newQty);
    this.cartItems = this.cartService.getCartItems();
  }
}
removeItem(item: any) {
  this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
  localStorage.setItem('cart', JSON.stringify(this.cartItems));
  this.getTotal();
  this.router.navigate(['/cart']);
}




  getTotal(): number {
    return this.cartItems.reduce((sum, item) =>
      sum + item.price * (item.quantity || 1), 0);
  }
   saveForLater(item: any) {

  this.removeItem(item); 

  this.savedForLater.push(item);

  console.log('Saved for later:', this.savedForLater);
}

}
