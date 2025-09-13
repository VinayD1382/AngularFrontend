import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero';
import { HomeProducts } from '../products/products';
import { BrandProducts } from '../brand/brand';
import { Awards } from '../awards/awards';
import { BrandFooterComponent } from '../brand-footer/brand-footer';
import { FooterComponent } from '../footer/footer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    HomeProducts,
    BrandProducts,
    Awards,
    BrandFooterComponent,
    FooterComponent,
CommonModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  isChatOpen = false; 

  openChat() {
    this.isChatOpen = !this.isChatOpen;
  }
}
