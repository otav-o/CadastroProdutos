import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root' // significa que o service é singleton (uma única instância). Atributos compartilhados!
})
export class ProductService {

  constructor(private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    console.log(msg);

    this.snackBar.open(msg, 'fechar', { //mensagem, action, objeto de configuração
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });

  }
}
