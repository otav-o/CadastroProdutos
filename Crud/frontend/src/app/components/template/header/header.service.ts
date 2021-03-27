import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-data.model';

@Injectable({
  providedIn: 'root' // apenas uma instância na aplicação
})
export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderData> ({ // emite eventos quando há mudança nos dados
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  })

  constructor() { }

  get headerData(): HeaderData { // retorna o objeto headerData
    return this._headerData.value
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData); // behavior subject vai detectar alterações
  }
}
