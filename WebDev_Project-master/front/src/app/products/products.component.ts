import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {CategoryService} from '../services/category.service';
import {Product} from '../entities/product';
import {Category} from '../entities/category';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public categoryService: CategoryService,
              private route: ActivatedRoute,
              public productService: ProductService,
              public router: Router) { }

  products: Product[];
  cat: Category;
  categories: Category[];
  id: number;
  filtered = false;
  choose = false;
  prd: Product[];
  prc_l: number;
  prc_g: number;

  ngOnInit(): void {
    const categoryId = this.route.snapshot.paramMap.get('categoryId');
    this.categoryService.getProductsByCategory(+categoryId).subscribe(perf => {
      this.products  = perf;
      this.id = +categoryId;
    });
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(perf => {
      this.categories = perf;
    });
  }

  filter_l(cnt: number) {
    this.filtered = true;
    const categoryId = this.route.snapshot.paramMap.get('categoryId');
    this.productService.filterLower(+categoryId, cnt).subscribe(perf => {
      this.prd = perf;
    });
  }
  filter_g(cnt: number) {
    this.filtered = true;
    const categoryId = this.route.snapshot.paramMap.get('categoryId');
    this.productService.filterGreater(+categoryId, cnt).subscribe(perf => {
      this.prd = perf;
    });
  }

  type() {
    this.choose = !this.choose;
  }

  all() {
    this.filtered = false;
    const categoryId = this.route.snapshot.paramMap.get('categoryId');
    this.categoryService.getProductsByCategory(+categoryId).subscribe(perf => {
      this.products  = perf;
      this.id = +categoryId;
    });
  }
}
