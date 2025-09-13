import { Component,OnInit } from '@angular/core';
import { Product } from '../products/products';
import { CommonModule } from '@angular/common';
import { BrandFooterComponent } from '../brand-footer/brand-footer';
import { CartService } from '../../services/cart.service'; 

@Component({
  selector: 'app-boyswear',
    standalone: true,
    imports: [CommonModule,BrandFooterComponent],
  templateUrl: './boyswear.html',
  styleUrls: ['./boyswear.css'],
})
export class Boyswear implements OnInit {
    constructor(private cartService: CartService) {}
 addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart`);
  }
  boyswear: Product[] = [];
selectedProduct: Product | null = null;
  showImageOnly = false;
  quantity = 1;
  isModalOpen = false;

  ngOnInit(): void {
  this.boyswear = [
    {
      id: 1,
      name: 'Boys Maroon Casual',
      imageUrl: 'Boyswear/one.png',
      price: 399,
      oldPrice: 499,
      onSale: true
    },
    {
      id: 2,
      name: 'Boys Ethnic Kurta ',
      imageUrl: 'Boyswear/two.png',
      price: 749,
      oldPrice: 899,
      onSale: true
    },
    {
      id: 3,
      name: 'Boys Teal Kurta Pajama',
      imageUrl: 'Boyswear/three.png',
      price: 699,
      oldPrice: 849,
      onSale: true
    },
    {
      id: 4,
      name: 'Boys Maroon Kurta',
      imageUrl: 'Boyswear/four.png',
      price: 649,
      oldPrice: 799,
      onSale: true
    },
    {
      id: 5,
      name: 'Boys Black & Red ',
      imageUrl: 'Boyswear/five.png',
      price: 799,
      oldPrice: 999,
      onSale: true
    },
    {
      id: 6,
      name: 'Boys Printed Cotton ',
      imageUrl: 'Boyswear/six.png',
      price: 499,
      oldPrice: 599,
      onSale: true
    },
    {
      id: 7,
      name: 'Baby Boys Winter',
      imageUrl: 'Boyswear/seven.png',
      price: 549,
      oldPrice: 699,
      onSale: true
    },
    {
      id: 8,
      name: 'Boys Jacket & Tee',
      imageUrl: 'Boyswear/eight.png',
      price: 899,
      oldPrice: 1099,
      onSale: true
    },
    {
      id: 9,
      name: 'Toddler Boys Printed',
      imageUrl: 'Boyswear/nine.png',
      price: 299,
      oldPrice: 399,
      onSale: true
    },
    {
      id: 10,
      name: 'Boys Casual Linen',
      imageUrl: 'Boyswear/ten.png',
      price: 549,
      oldPrice: 699,
      onSale: true
    },
    {
      id: 11,
      name: 'Boys Grey Party',
      imageUrl: 'Boyswear/eleven.png',
      price: 1199,
      oldPrice: 1499,
      onSale: true
    },
    {
      id: 12,
      name: 'Boys Denim Shades',
      imageUrl: 'Boyswear/twe.png',
      price: 999,
      oldPrice: 1299,
      onSale: true
    },
     {
      id: 13,
      name: 'Boys Denim Shades',
      imageUrl: 'Boyswear/o1.png',
      price: 899,
      oldPrice: 1299,
      onSale: true
    },
     {
      id: 14,
      name: 'Snowdrop Classic',
      imageUrl: 'Boyswear/t2.png',
      price: 929,
      oldPrice: 1299,
      onSale: true
    },
     {
      id: 15,
      name: 'Saffron Spark',
      imageUrl: 'Boyswear/t3.png',
      price: 789,
      oldPrice: 1299,
      onSale: true
    },
     {
      id: 16,
      name: 'Sky Breezes',
      imageUrl: 'Boyswear/f4.png',
      price: 399,
      oldPrice: 1299,
      onSale: true
    },
     {
      id: 17,
      name: 'Sandstone Serenity',
      imageUrl: 'Boyswear/fi5.png',
      price: 969,
      oldPrice: 1299,
      onSale: true
    },
     {
      id: 18,
      name: 'Sandstone Serenity',
      imageUrl: 'Boyswear/s6.png',
      price: 4556,
      oldPrice: 1299,
      onSale: true
    },
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
  
}
