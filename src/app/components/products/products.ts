import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service'; 

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  oldPrice?: number;
  onSale?: boolean;
quantity?: number;   

}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class HomeProducts {
  constructor(private cartService: CartService) {}
  products: Product[] = [
    { id: 1, name: 'Boys T Shirt', imageUrl: 'BoyHome.png', price: 399, onSale: true },
    { id: 2, name: 'Dool', imageUrl: 'Product1.jpg', price: 700, onSale: true },
    { id: 3, name: 'Writing Pad', imageUrl: 'product2.jpg', price: 99, onSale: true },
    { id: 5, name: 'Game Pad', imageUrl: 'product4.jpg', price: 700, onSale: true },
    { id: 6, name: 'Boy FootWear', imageUrl: 'product5.jpg', price: 149, onSale: true },
    { id: 7, name: 'Girl Frock', imageUrl: 'product6.jpg', price: 399, onSale: true },
    { id: 8, name: 'Blue Pen', imageUrl: 'product7.jpg', price: 249, onSale: true },
    { id: 9, name: 'Toy Car', imageUrl: 'product8.jpg', price: 700, onSale: true },
    { id: 10, name: 'Boy Footwear', imageUrl: 'product9.jpg', price: 149, onSale: true },
    { id: 4, name: 'Game Kit', imageUrl: 'product3.jpg', price: 759, onSale: true },
  ];
    addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart`);
  }
  selectedProduct: Product | null = null;
  showImageOnly = false;
  quantity = 1;

  openModal(product: Product, imageOnly: boolean = false) {
    this.selectedProduct = product;
    this.showImageOnly = imageOnly;
    this.quantity = 1;
  }

  closeModal() {
    this.selectedProduct = null;
    this.showImageOnly = false;
  }

  increaseQty() {
    this.quantity++;
  }

  decreaseQty() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  checkout() {
    if (this.selectedProduct) {
      alert(
        `Checkout: ${this.selectedProduct.name} x${this.quantity} = Rs.${this.selectedProduct.price * this.quantity}`
      );
      this.closeModal();
    }
  }
}
