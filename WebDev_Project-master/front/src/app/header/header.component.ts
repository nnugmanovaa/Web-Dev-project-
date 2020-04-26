import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import {Category} from '../entities/category';
import {CategoryService} from '../services/category.service';
import {RegisterService} from '../services/register.service';
import {IAuthResponse, User} from '../entities/register';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isClicked = true;
  public menuOpened = true;
  public isCreate = true;
  public categories: Category[];
  public country: string;
  registered = false;
  logged = false;
  public username = '';
  public password = '';
  public email = '';
  user = {} as User;
  receivedUser: User;
  done = false;

  constructor(private categoryService: CategoryService,
              private register: RegisterService) { }

  private getCategories(): void {
    this.categoryService.getCategories().subscribe(perf => {
      this.categories = perf;
    });
  }

  ngOnInit(): void {
    this.registered = false;
    let token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
    this.getCategories();
  }


  signup(user: User) {
    this.register.signup(user)
      .subscribe(
        (data: User) => {this.receivedUser = data; this.done = true; },
        error => console.log(error)
      );
  }

  login() {
    this.register.login(this.username, this.password)
      .subscribe(res => {

        localStorage.setItem('token', res.token);

        this.logged = true;

        this.username = '';
        this.password = '';
      });
  }

  logout() {
    localStorage.clear();
    this.logged = false;
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
}
