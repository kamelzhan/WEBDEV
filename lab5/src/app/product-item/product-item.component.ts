import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  products = products;
  type;

  constructor(
    private route: ActivatedRoute
  ) { }
  share(url, des) {
    let teleg = "https://t.me/share/url?url="+url+"&text="+des;
    window.open(teleg,"_blank");
  }
  Like(id){
    products[id].like += 1
  }
  remove(numb) {
    products.splice(numb, 1)
    for (var i = numb; i<products.length; i++) {
      products[i].numb = i
    }
  }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const TypeRoute = Number(routeParams.get('typeType'));
    this.type =  TypeRoute
  }

}
