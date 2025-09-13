import { Component, OnInit } from '@angular/core';
import { Product } from '../products/products';
import { CommonModule } from '@angular/common';
import { BrandFooterComponent } from '../brand-footer/brand-footer';
import { CartService } from '../../services/cart.service'; 

@Component({
  selector: 'app-kidselectronics',
  standalone: true,
  imports: [CommonModule, BrandFooterComponent],
  templateUrl: './kidselectronics.html',
  styleUrls: ['./kidselectronics.css'],
})
export class Kidselectronics implements OnInit {
  kidselectronics: Product[] = [];
  selectedProduct: Product | null = null;
  showImageOnly = false;
  quantity = 1;
  isModalOpen = false;

  ngOnInit(): void {
  this.kidselectronics = [
    {
      id: 1,
      name: 'Handheld Video Game',
      imageUrl: 'KidsElectronics/one.png',
      price: 1500,
      onSale: true
    },
    {
      id: 2,
      name: 'Wireless Gamepad',
      imageUrl: 'KidsElectronics/two.png',
      price: 950,
      onSale: true
    },
    {
      id: 3,
      name: 'Kids Learning Laptop',
      imageUrl: 'KidsElectronics/three.png',
      price: 1200,
      onSale: true
    },
    {
      id: 4,
      name: 'LCD Writing Tablet',
      imageUrl: 'KidsElectronics/four.png',
      price: 450,
      onSale: true
    },
    {
      id: 5,
      name: 'Kids Acoustic Guitar',
      imageUrl: 'KidsElectronics/five.png',
      price: 1800,
      onSale: true
    },
    {
      id: 6,
      name: 'Musical Keyboard',
      imageUrl: 'KidsElectronics/six.png',
      price: 2200,
      onSale: true
    },
    {
      id: 7,
      name: 'Smart Robot Dog',
      imageUrl: 'KidsElectronics/seven.png',
      price: 2500,
      onSale: true
    },
    {
      id: 8,
      name: 'Mini Kids Laptop',
      imageUrl: 'KidsElectronics/eight.png',
      price: 1350,
      onSale: true
    },
    {
      id: 9,
      name: 'Kids Digital Camera',
      imageUrl: 'KidsElectronics/nine.png',
      price: 1600,
      onSale: true
    },
    {
      id: 10,
      name: 'Pop-it Fidget Game',
      imageUrl: 'KidsElectronics/ten.png',
      price: 500,
      onSale: true
    },
    {
      id: 11,
      name: 'Remote Control Bike',
      imageUrl: 'KidsElectronics/eleven.png',
      price: 1400,
      onSale: true
    },
    {
      id: 12,
      name: 'Remote Helicopter',
      imageUrl: 'KidsElectronics/twe.png',
      price: 2200,
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
