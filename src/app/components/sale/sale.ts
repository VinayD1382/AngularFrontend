import { Component,OnInit } from '@angular/core';
import { Product } from '../products/products';
import { CommonModule } from '@angular/common';
import { BrandFooterComponent } from '../brand-footer/brand-footer';
import { CartService } from '../../services/cart.service'; 

@Component({
  selector: 'app-sale',
    standalone: true,
    imports: [CommonModule,BrandFooterComponent],
  templateUrl: './sale.html',
  styleUrl: './sale.css'
})
export class Sale implements OnInit {
  sale: Product[] = [];
selectedProduct: Product | null = null;
  showImageOnly = false;
  quantity = 1;

  isModalOpen = false;
 ngOnInit(): void {
  this.sale = [
    {
      id: 1,
      name: 'Rainbow Pop-It Sling ',
      imageUrl: 'Sale/one.png',
      price: 600,
      onSale: true
    },
    {
      id: 2,
      name: 'Spiderman T-shirt',
      imageUrl: 'Sale/two.png',
      price: 700,
      onSale: true
    },
    {
      id: 3,
      name: 'Butterfly Shoulder Bag',
      imageUrl: 'Sale/three.png',
      price: 550,
      onSale: true
    },
    {
      id: 4,
      name: 'Cute Elephant Plush ',
      imageUrl: 'Sale/four.png',
      price: 800,
      onSale: true
    },
    {
      id: 5,
      name: 'Kids Toy Camera',
      imageUrl: 'Sale/five.png',
      price: 900,
      onSale: true
    },
    {
      id: 6,
      name: 'Animal Farm Toy ',
      imageUrl: 'Sale/six.png',
      price: 1200,
      onSale: true
    },
    {
      id: 7,
      name: 'Stylish Sunglasses Pack',
      imageUrl: 'Sale/seven.png',
      price: 400,
      onSale: true
    },
    {
      id: 8,
      name: 'Cute Bunny Backpack',
      imageUrl: 'Sale/eight.png',
      price: 850,
      onSale: true
    },
    {
      id: 9,
      name: 'Mini Purple Doll ',
      imageUrl: 'Sale/nine.png',
      price: 1100,
      onSale: true
    },
    {
      id: 10,
      name: 'Kids Kitchen Playset',
      imageUrl: 'Sale/ten.png',
      price: 1500,
      onSale: true
    },
    {
      id: 11,
      name: 'Wooden Puzzle Game',
      imageUrl: 'Sale/eleven.png',
      price: 1000,
      onSale: true
    },
    {
      id: 12,
      name: 'Toy Board Game',
      imageUrl: 'Sale/twe.png',
      price: 900,
      onSale: true
    }
  ];
}

  openModal(product: Product, imageOnly: boolean = false) {
    this.selectedProduct = product;
    this.showImageOnly = imageOnly;
    this.quantity = 1;
    this.isModalOpen = true;  
  }

  closeModal() {
    this.selectedProduct = null;
    this.showImageOnly = false;
    this.isModalOpen = false;  
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
  constructor(private cartService: CartService) {}
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart`);
  }
}
