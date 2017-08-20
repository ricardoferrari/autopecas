import { Component } from '@angular/core';
export class Peca {
	id: number;
	nome: string;
	categoria: string;
	imagem: string;
}

const PECAS: Peca[] = [
  { id: 11, nome: 'Calota', categoria: 'Acabamento', imagem: null },
  { id: 12, nome: 'Adesivo', categoria: 'Acabamento', imagem: null },
  { id: 13, nome: 'Vela', categoria: 'Elétrica', imagem: null }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Autopeças';
  selectedPeca: Peca;
  pecas = PECAS;

  onSelect(peca: Peca): void {
	  this.selectedPeca = peca;
  }
}
