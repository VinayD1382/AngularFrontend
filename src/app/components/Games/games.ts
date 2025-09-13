import { Component,OnInit } from '@angular/core';
import { Product } from '../products/products';
import { CommonModule } from '@angular/common';
import { BrandFooterComponent } from '../brand-footer/brand-footer';

@Component({
  selector: 'app-games',
    standalone: true,
    imports: [CommonModule,BrandFooterComponent],
  templateUrl: './games.html',
  styleUrl: './games.css'
})
export class Games implements OnInit {
  games: Product[] = [];

  ngOnInit(): void {
  this.games = [
    { id: 1, name: 'Jungle Jump', imageUrl: 'Games/one.png', price: 20.00, onSale: true },
    { id: 2, name: 'Rescue The Zookeeper', imageUrl: 'Games/two.png', price: 20.00, onSale: true },
    { id: 3, name: 'Math Games', imageUrl: 'Games/three.png', price: 20.00, onSale: true },
    { id: 4, name: 'Funny Rescue', imageUrl: 'Games/four.png', price: 20.00, onSale: true },
    { id: 5, name: 'Creative Puzzle', imageUrl: 'Games/five.png', price: 20.00, onSale: true },
    { id: 6, name: 'Math Game for Kids', imageUrl: 'Games/six.png', price: 20.00, onSale: true },
    { id: 7, name: 'Dig It!', imageUrl: 'Games/seven.png', price: 20.00, onSale: true },
    { id: 8, name: 'Pizza Time', imageUrl: 'Games/eight.png', price: 20.00, onSale: true },
    { id: 9, name: 'Wheely', imageUrl: 'Games/nine.png', price: 20.00, onSale: true },
    { id: 10, name: 'Kitten Pet Carer', imageUrl: 'Games/ten.png', price: 20.00, onSale: true },
    { id: 11, name: 'Dungeon Dash', imageUrl: 'Games/eleve.png', price: 20.00, onSale: true },
    { id: 12, name: 'Another Game', imageUrl: 'Games/twe.png', price: 20.00, onSale: true }
  ];
}

}
