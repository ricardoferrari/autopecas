import { Component, Input } from '@angular/core';
import { Peca } from './peca';

@Component({
  selector: 'peca-detalhe',
  templateUrl: './peca-detalhe.component.html'
})
export class PecaDetalheComponent {
	@Input() peca: Peca;
}