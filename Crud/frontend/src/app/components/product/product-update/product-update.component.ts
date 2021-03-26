import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  }

  constructor(private router: Router, private productService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // id é a chave do parâmetro (:id, definido no app.routing)
    if (id === null) return;
    this.productService.readById(id).subscribe(product => {
      this.product = product;
    });
  }

  updateProduct(): void {
    this.productService.update(this.product).
      subscribe(
        () => {
          this.productService.showMessage('Produto alterado!');
          this.router.navigate(['/products'])
        }
      );
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
  
}
