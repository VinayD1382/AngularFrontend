import { Routes } from '@angular/router';
import { Boyswear } from './components/boyswear/boyswear';
import { Girlwear } from './components/Girlswear/girlwear';
import { App } from './app';
import { HomeComponent } from './components/home/home';
import { ToysComponent } from './components/Toys/toys.component';
import { StationaryComponent } from './components/Stationary/stationary.component';
import { Kidselectronics } from './components/kidselectronics/kidselectronics';
import { Games } from './components/Games/games';
import { Footwear } from './components/Footwear/footwear';
import { Sale } from './components/sale/sale';
import { CartPageComponent } from './components/cart-page/cart-page';

export const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'boyswear', component: Boyswear },
  { path: 'girlwear', component: Girlwear },
  { path: 'toys', component: ToysComponent },
  { path: 'stationary', component: StationaryComponent },
  { path: 'kidselectronics', component: Kidselectronics },
  { path: 'games', component: Games },
  { path: 'footwear', component: Footwear },
  { path: 'sale', component: Sale },
  { path: 'cart', component: CartPageComponent },
  { path: '**', redirectTo: '' } 
];
