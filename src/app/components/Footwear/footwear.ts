import { Component,OnInit } from '@angular/core';
import { Product } from '../products/products';
import { CommonModule } from '@angular/common';
import { BrandFooterComponent } from '../brand-footer/brand-footer';
import { CartService } from '../../services/cart.service'; 

@Component({
  selector: 'app-footwear',
    standalone: true,
    imports: [CommonModule,BrandFooterComponent],
  templateUrl: './footwear.html',
  styleUrl: './footwear.css'
})
export class Footwear implements OnInit {
  footwear: Product[] = [];
selectedProduct: Product | null = null;
  showImageOnly = false;
  quantity = 1;
  isModalOpen = false;
ngOnInit(): void {
  this.footwear = [
    {
      id: 1,
      name: 'LED Light Sneakers',
      imageUrl: 'Footwear/one.png',
      price: 1200,
      onSale: true
    },
    {
      id: 2,
      name: 'Kids Roller Skates',
      imageUrl: 'Footwear/two.png',
      price: 1800,
      onSale: true
    },
    {
      id: 3,
      name: 'Kids Crocs Sandals',
      imageUrl: 'Footwear/three.png',
      price: 600,
      onSale: true
    },
    {
      id: 4,
      name: 'Roller Skate Shoes',
      imageUrl: 'Footwear/four.png',
      price: 1900,
      onSale: true
    },
    {
      id: 5,
      name: 'Spiderman Flip-Flops',
      imageUrl: 'Footwear/five.png',
      price: 400,
      onSale: true
    },
    {
      id: 6,
      name: 'Sports Running Shoes',
      imageUrl: 'Footwear/six.png',
      price: 950,
      onSale: true
    },
    {
      id: 7,
      name: 'Grey Casual Sandals',
      imageUrl: 'Footwear/seven.png',
      price: 750,
      onSale: true
    },
    {
      id: 8,
      name: 'Cute Unicorn Slippers',
      imageUrl: 'Footwear/eight.png',
      price: 500,
      onSale: true
    },
    {
      id: 9,
      name: 'Red-Black Sports Shoes',
      imageUrl: 'Footwear/nine.png',
      price: 1100,
      onSale: true
    },
    {
      id: 10,
      name: 'Cartoon Print Sandals',
      imageUrl: 'Footwear/ten.png',
      price: 550,
      onSale: true
    },
    {
      id: 11,
      name: 'Orange Crocs Sandals',
      imageUrl: 'Footwear/eleven.png',
      price: 650,
      onSale: true
    },
    {
      id: 12,
      name: 'Rainbow Crocs Slippers',
      imageUrl: 'Footwear/twe.png',
      price: 700,
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
