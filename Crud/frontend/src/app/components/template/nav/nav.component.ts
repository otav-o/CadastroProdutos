import { Component, OnInit } from '@angular/core';

@Component({ // decorator
  selector: 'app-nav', // nome da tag
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit { // classe passa a ser um componente graças ao decorator

  constructor() { }

  ngOnInit(): void {
  }

}
