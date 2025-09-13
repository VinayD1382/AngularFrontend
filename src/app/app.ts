/*import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer';
import { HeaderComponent } from './components/header/header';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { HomeProducts } from './components/products/products';
import { BrandProducts } from './components/brand/brand';
import { BrandFooterComponent } from './components/brand-footer/brand-footer';
import { Awards } from './components/awards/awards';


@Component({
  selector: 'app-root',
  imports: [ FooterComponent, HeaderComponent, NavbarComponent, HeroComponent, HomeProducts, 
    BrandProducts, BrandFooterComponent, Awards, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngKidsMart');
  openChat() {
  alert("Chat window will open here!");
}
}
//RouterOutlet,
*/

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { NavbarComponent } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngKidsMart');
}
