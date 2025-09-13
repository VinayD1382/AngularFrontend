import { Component,OnInit } from '@angular/core';
import { Product } from '../products/products';
import { CommonModule } from '@angular/common';
import { BrandFooterComponent } from '../brand-footer/brand-footer';
import { CartService } from '../../services/cart.service'; 

@Component({
  selector: 'app-stationary',
    standalone: true,
    imports: [CommonModule,BrandFooterComponent],
  templateUrl: './stationary.component.html',
  styleUrl: './stationary.component.css'
})
export class StationaryComponent implements OnInit {
  stationary: Product[] = [];
 selectedProduct: Product | null = null;
  showImageOnly = false;
  quantity = 1;
  isModalOpen = false;
  ngOnInit(): void {
  this.stationary = [
    {
      id: 1,
      name: 'Whiteboard',
      imageUrl: 'Stationary/one.png',
      price: 450,
      onSale: true
    },
    {
      id: 2,
      name: 'Casio Calculator',
      imageUrl: 'Stationary/two.png',
      price: 750,
      onSale: true
    },
    {
      id: 3,
      name: 'Fevicol Glue Box',
      imageUrl: 'Stationary/three.png',
      price: 120,
      onSale: true
    },
    {
      id: 4,
      name: 'Study Table Board',
      imageUrl: 'Stationary/four.png',
      price: 1100,
      onSale: true
    },
    {
      id: 5,
      name: 'JK Copier A4 Paper',
      imageUrl: 'Stationary/five.png',
      price: 300,
      onSale: true
    },
    {
      id: 6,
      name: 'Domes Geometry Box',
      imageUrl: 'Stationary/six.png',
      price: 160,
      onSale: true
    },
    {
      id: 7,
      name: 'Camlin White Glue',
      imageUrl: 'Stationary/seven.png',
      price: 40,
      onSale: true
    },
    {
      id: 8,
      name: 'Classmate Notebooks',
      imageUrl: 'Stationary/eight.png',
      price: 180,
      onSale: true
    },
    {
      id: 9,
      name: 'Sketch Pens',
      imageUrl: 'Stationary/nine.png',
      price: 90,
      onSale: true
    },
    {
      id: 10,
      name: 'Oil Pastels & Colors',
      imageUrl: 'Stationary/ten.png',
      price: 250,
      onSale: true
    },
    {
      id: 11,
      name: 'Advanced Color Set',
      imageUrl: 'Stationary/eleven.png',
      price: 600,
      onSale: true
    },
    {
      id: 12,
      name: 'Mega Art & Craft Kit',
      imageUrl: 'Stationary/twe.png',
      price: 950,
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
