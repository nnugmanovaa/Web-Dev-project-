import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isClicked : boolean = true;
  menuOpened: boolean = true;

  isCreate: boolean = true;

  constructor() { }

  showForm(){
    this.isClicked = !this.isClicked;
  }

  closeForm(){
    this.isClicked = !this.isClicked;
  }

  closeCreateForm(){
    this.isCreate = !this.isCreate;
  }

  showMenu(){
    this.menuOpened = !this.menuOpened;
  }

  showCreateForm(){
    this.isCreate = !this.isCreate;
    this.isClicked = !this.isClicked;
  }



  ngOnInit(): void {

  }

}
