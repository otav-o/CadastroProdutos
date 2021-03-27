import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  get title(): string{ // retorna o titulo do objeto HeaderService
    return this.headerService.headerData.title;
  } // o título do cabeçalho depende dos atributos do objeto em header.service

  get icon(): string{
    return this.headerService.headerData.icon;
  }

  get routeUrl(): string{
    return this.headerService.headerData.routeUrl;
  }

  // métodos get usados como atributo: recurso do JS
}
