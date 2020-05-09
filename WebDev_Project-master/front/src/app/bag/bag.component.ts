import { Component, OnInit, NgModule } from '@angular/core';
import {of} from 'rxjs';
import {Card, cards} from '../card';
import {Product} from '../entities/product';
import {ProductService} from '../services/product.service';


@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {
  cards: Card[];
  products: Product[];
  show: number;
  public logged = false;
  sum = 0;
  product: Product;



  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();

    const token = localStorage.getItem('token');
    if ( token ) {
      this.logged = true;
    }
  }

  public getProducts() {
    this.productService.getProducts().subscribe(perf => {
      this.products = perf.filter(e => e.is_added === true);
      this.show = this.products.length;
      this.products.forEach((e) => {
        this.sum += e.price;
      });
    });
  }

  remove(id: number) {
    this.productService.addToBasket(id).subscribe(perf => {
      this.sum = 0;
      console.log('removes');
      this.getProducts();
    });
  }
}
