import { Component,OnInit } from '@angular/core';
import { Product } from '../products/products';
import { CommonModule } from '@angular/common';
import { BrandFooterComponent } from '../brand-footer/brand-footer';
import { CartService } from '../../services/cart.service'; 

@Component({
  selector: 'app-girlwear',
    standalone: true,
    imports: [CommonModule,BrandFooterComponent],
  templateUrl: './girlwear.html',
  styleUrl: './girlwear.css'
})
export class Girlwear implements OnInit {
  girlwear: Product[] = [];
selectedProduct: Product | null = null;
  showImageOnly = false;
  quantity = 1;
  isModalOpen = false;
  ngOnInit(): void {
  this.girlwear = [
    {
      id: 1,
      name: 'Girls Party Dress',
      imageUrl: 'GirlWear/one.png',
      price: 300.00,
      onSale: true
    },
    {
      id: 2,
      name: 'Girls Casual T-shirt',
      imageUrl: 'GirlWear/two.png',
      price: 250.00,
      onSale: true
    },
    {
      id: 3,
      name: 'Girls Stylish Top',
      imageUrl: 'GirlWear/three.png',
      price: 220.00,
      onSale: true
    },
    {
      id: 4,
      name: 'Girls Pink Party',
      imageUrl: 'GirlWear/four.png',
      price: 350.00,
      onSale: true
    },
    {
      id: 5,
      name: 'Girls Blue Party',
      imageUrl: 'GirlWear/five.png',
      price: 400.00,
      onSale: true
    },
    {
      id: 6,
      name: 'Girls Navy Party',
      imageUrl: 'GirlWear/six.png',
      price: 380.00,
      onSale: true
    },
    {
      id: 7,
      name: 'Girls Red Gown',
      imageUrl: 'GirlWear/seven.png',
      price: 420.00,
      onSale: true
    },
    {
      id: 8,
      name: 'Girls Pink Gown',
      imageUrl: 'GirlWear/eight.png',
      price: 450.00,
      onSale: true
    },
    {
      id: 9,
      name: 'Girls Black & White',
      imageUrl: 'GirlWear/nine.png',
      price: 280.00,
      onSale: true
    },
    {
      id: 10,
      name: 'Girls White Party',
      imageUrl: 'GirlWear/ten.png',
      price: 300.00,
      onSale: true
    },
    {
      id: 11,
      name: 'Girls Pink Jumpsuit',
      imageUrl: 'GirlWear/eleven.png',
      price: 260.00,
      onSale: true
    },
    {
      id: 12,
      name: 'Girls Blazer & Jeans',
      imageUrl: 'Boyswear/twe.png',
      price: 500.00,
      onSale: true
    },
    {
      id: 12,
      name: 'Girls Blazer & Jeans',
      imageUrl: 'Boyswear/twe.png',
      price: 500.00,
      onSale: true
    },
    {
      id: 12,
      name: 'Girls Blazer & Jeans',
      imageUrl: 'Boyswear/twe.png',
      price: 500.00,
      onSale: true
    },
    {
      id: 12,
      name: 'Girls Blazer & Jeans',
      imageUrl: 'Boyswear/twe.png',
      price: 500.00,
      onSale: true
    },
    {
      id: 12,
      name: 'Girls Blazer & Jeans',
      imageUrl: 'Boyswear/twe.png',
      price: 500.00,
      onSale: true
    },
    {
      id: 12,
      name: 'Girls Blazer & Jeans',
      imageUrl: 'Boyswear/twe.png',
      price: 500.00,
      onSale: true
    },
    {
      id: 12,
      name: 'Girls Blazer & Jeans',
      imageUrl: 'Boyswear/twe.png',
      price: 500.00,
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
