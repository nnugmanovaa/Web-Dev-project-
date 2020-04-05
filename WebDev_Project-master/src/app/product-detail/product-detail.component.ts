import { Component, OnInit, NgModule } from '@angular/core';
import { Product } from '../products';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductsService } from '../products.service';
import { ShareService } from '@ngx-share/core';

import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faPinterestP } from '@fortawesome/free-brands-svg-icons/faPinterestP';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faVk } from '@fortawesome/free-brands-svg-icons/faVk';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons/faTelegramPlane';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons/faGooglePlusG';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  products: Product;
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  faPinterestP = faPinterestP;
  faWhatsapp = faWhatsapp;
  faVk = faVk;
  faTelegramPlane = faTelegramPlane;
  faLinkedinIn = faLinkedinIn;
  faGooglePlusG = faGooglePlusG;

  constructor(private route: ActivatedRoute,
  private productsService: ProductsService,
  private location: Location,
  public share: ShareService) { }

  getProduct(): void {
  	  const id1 = +this.route.snapshot.paramMap.get('categoryId');
  	  const id2 = +this.route.snapshot.paramMap.get('productId');
      this.productsService.getProductFromProducts(id1, id2).subscribe(product => this.products = product);
  } 

  ngOnInit(): void {
  	this.getProduct();
  }

}
