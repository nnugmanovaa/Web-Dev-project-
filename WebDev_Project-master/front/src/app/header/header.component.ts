import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import {Category} from '../entities/category';
import {CategoryService} from '../services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isClicked = true;
  menuOpened = true;
  isCreate = true;
  categories: Category[];
  username: string;
  password: string;
  repassword: string;
  email: string;
  country: string;

  constructor(public categoryService: CategoryService) { }

   private getCategories(): void {
    this.categoryService.getCategories().subscribe(perf => {
      this.categories = perf;
    });
}

  showForm() {
    this.isClicked = !this.isClicked;
  }

  closeForm() {
    this.isClicked = !this.isClicked;
  }

  closeCreateForm() {
    this.isCreate = !this.isCreate;
  }

  showMenu() {
    this.menuOpened = !this.menuOpened;
  }

  showCreateForm() {
    this.isCreate = !this.isCreate;
    this.isClicked = !this.isClicked;
  }



  ngOnInit(): void {
     this.getCategories();
  }

}
