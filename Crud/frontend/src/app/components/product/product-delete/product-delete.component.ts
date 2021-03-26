import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  }

  constructor(
    private productService: ProductService, 
    private router: Router, 
    private active: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.active.snapshot.paramMap.get('id');

    if (id === null)
      return;

    this.productService.readById(id).subscribe((produto) => {
      this.product = produto;
    })
  }

  deleteProduct(): void {
    if (this.product.id === undefined) return // só assim que compila. Que chato!
    this.productService.delete(this.product.id).subscribe(
      () => {
        this.productService.showMessage('Deletado');
        this.router.navigate(['/products']);
      }
    );
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
