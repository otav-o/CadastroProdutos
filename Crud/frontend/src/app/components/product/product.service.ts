import { HttpClient } from '@angular/common/http';
import {Product} from './product.model'
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' // significa que o service é singleton (uma única instância). Atributos compartilhados!
})
export class ProductService {

  baseUrl = 'http://localhost:3001/products';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    console.log(msg);

    this.snackBar.open(msg, 'fechar', { //mensagem, action, objeto de configuração
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError?['msg-error']:['msg-success'] // classes css que podem ser aplicadas
    });
  }

  create (product: Product): Observable<Product> {
      return this.http.post<Product>(this.baseUrl, product).pipe( // post retorna um Observable
        map(obj => obj), // retornar o objeto sem fazer nada, pois o objetivo é capturar o erro
        catchError(e => this.errorHandler(e)) // arrow function somente para garantir que this é a instância atual
      );
  }

  read(): Observable<Product[]> {
	  return this.http.get<Product[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      catchError(e => this.errorHandler)
    );
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      catchError(e => this.errorHandler)
    );
  }

  delete(id: number) : Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url).pipe(
      catchError(e => this.errorHandler)
    );
  }
  
  errorHandler(e: any): Observable<any> {
    console.log(e);
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY; // retornar observable vazio
  }

}
