import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit{ // ou OnChange

  @Input('myForEm') numbers!: number[] // pega o parâmetro depois do 'em'
  @Input('myForUsando') texto!: string // depois de usando

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) { // injetar como variáveis privadas
    
  } // TemplateRef helps you get to the <ng-template> contents and ViewContainerRef accesses the view container.

  ngOnInit(): void {

    for (let number of this.numbers) {
      this.container.createEmbeddedView(this.template, {$implicit: number})
    } // para cada repetição, cria um template (que é a li) e p valor implícito é number
    // como imprimir mais de uma coisa (além de number?)

    console.log(this.numbers);
    console.log(this.texto);
  }
}
