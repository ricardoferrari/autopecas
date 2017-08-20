import { Component, OnInit } from '@angular/core';
import { Peca } from './peca';
import { PecaDetalheComponent } from './peca-detalhe.component';
import { PecaService } from './peca.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PecaService]
})
export class AppComponent implements OnInit{
  title = 'Autopeças';
  selectedPeca: Peca;
  pecas : Peca[];

  constructor(private pecaService: PecaService) { } 

  onSelect(peca: Peca): void {
	  this.selectedPeca = peca;
  }

  getPecas(): void {
    this.pecaService.getPecas().then(pecas => this.pecas = pecas);
  }

  ngOnInit(): void {
    this.getPecas();
  }

  
}
