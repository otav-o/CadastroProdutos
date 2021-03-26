import { HttpClient } from '@angular/common/http';
import {Product} from './product.model'
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // significa que o service é singleton (uma única instância). Atributos compartilhados!
})
export class ProductService {

  baseUrl = 'http://localhost:3001/products';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    console.log(msg);

    this.snackBar.open(msg, 'fechar', { //mensagem, action, objeto de configuração
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  create (product: Product): Observable<Product> {
      return this.http.post<Product>(this.baseUrl, product); // post retorna um Observable
  }

  read(): Observable<Product[]> {
	  return this.http.get<Product[]>(this.baseUrl);
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product)
  }

  delete(id: number) : Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url);
  }
}
