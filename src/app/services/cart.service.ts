import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../components/products/products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: Product[] = [];
  private cartCount = new BehaviorSubject<number>(0);

  cartCount$ = this.cartCount.asObservable();

  constructor() {
    // ✅ Guard against SSR (where localStorage is undefined)
    if (typeof window !== 'undefined' && localStorage) {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        this.cartItems = JSON.parse(savedCart);
        this.cartCount.next(this.cartItems.length);
      }
    }
  }

  private saveCart() {
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
    this.cartCount.next(this.cartItems.length);
  }

  

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.removeItem('cart');
    }
    this.cartCount.next(0);
  }
  addToCart(product: Product) {
  const existing = this.cartItems.find(p => p.name === product.name);
  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    this.cartItems.push({ ...product, quantity: 1 });
  }
  this.saveCart();
}

updateQuantity(product: Product, quantity: number) {
  const item = this.cartItems.find(p => p.name === product.name);
  if (item) {
    item.quantity = quantity;
    this.saveCart();
  }
}

removeFromCart(product: Product) {
  this.cartItems = this.cartItems.filter(p => p.name !== product.name);
  this.saveCart();
}

}
