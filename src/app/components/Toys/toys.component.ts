import { Component,OnInit } from '@angular/core';
import { Product } from '../products/products';
import { CommonModule } from '@angular/common';
import { BrandFooterComponent } from '../brand-footer/brand-footer';
import { CartService } from '../../services/cart.service'; 

@Component({
  selector: 'app-toys',
    standalone: true,
    imports: [CommonModule,BrandFooterComponent],
   templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']  
})

export class ToysComponent implements OnInit {
  toys: Product[] = [];
 selectedProduct: Product | null = null;
  showImageOnly = false;
  quantity = 1;
  isModalOpen = false;
  ngOnInit(): void {
  this.toys = [
    {
      id: 1,
      name: 'Kids Scooter',
      imageUrl: 'Toys/one.png',
      price: 1200,
      onSale: true
    },
    {
      id: 2,
      name: 'Kids Xylophone',
      imageUrl: 'Toys/two.png',
      price: 450,
      onSale: true
    },
    {
      id: 3,
      name: 'Toy Tractor',
      imageUrl: 'Toys/three.png',
      price: 850,
      onSale: true
    },
    {
      id: 4,
      name: 'Remote Control Car',
      imageUrl: 'Toys/four.png',
      price: 1500,
      onSale: true
    },
    {
      id: 5,
      name: 'Soft Plush Octopus',
      imageUrl: 'Toys/five.png',
      price: 600,
      onSale: true
    },
    {
      id: 6,
      name: 'Space Puzzle Game',
      imageUrl: 'Toys/six.png',
      price: 300,
      onSale: true
    },
    {
      id: 7,
      name: 'Iron Man Action',
      imageUrl: 'Toys/seven.png',
      price: 1800,
      onSale: true
    },
    {
      id: 8,
      name: 'Building Blocks Set',
      imageUrl: 'Toys/eight.png',
      price: 950,
      onSale: true
    },
    {
      id: 9,
      name: 'Monster Truck Toys',
      imageUrl: 'Toys/nine.png',
      price: 700,
      onSale: true
    },
    {
      id: 10,
      name: 'Toy JCB Excavator',
      imageUrl: 'Toys/ten.png',
      price: 1300,
      onSale: true
    },
    {
      id: 11,
      name: 'Blue Teddy Bear',
      imageUrl: 'Toys/eleven.png',
      price: 550,
      onSale: true
    },
    {
      id: 12,
      name: 'Ride-on Toy Car',
      imageUrl: 'Toys/twe.png',
      price: 2200,
      onSale: true
    },
    {
      id: 13,
      name: 'Bubble Blaster',
      imageUrl: 'Toys/o1.png',
      price: 580,
      onSale: true
    },
    {
      id: 14,
      name: 'Rainbow Pop-It',
      imageUrl: 'Toys/t2.png',
      price: 550,
      onSale: true
    },
    {
      id: 15,
      name: 'Dreamy Sparkle',
      imageUrl: 'Toys/t3.png',
      price: 520,
      onSale: true
    },
    {
      id: 16,
      name: 'Twin Fantasy',
      imageUrl: 'Toys/f4.png',
      price: 530,
      onSale: true
    },
    {
      id: 17,
      name: 'SkyZoom Ride-On',
      imageUrl: 'Toys/f5.png',
      price: 540,
      onSale: true
    },
    {
      id: 18,
      name: 'Little Genius',
      imageUrl: 'Toys/s6.png',
      price: 550,
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
