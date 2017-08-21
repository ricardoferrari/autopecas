import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Peca } from './peca';
import { PecaDetalheComponent } from './peca-detalhe.component';
import { PecaService } from './peca.service';


@Component({
  selector: 'lista-pecas',
  templateUrl: './peca.component.html',
  styleUrls: ['./peca.component.css'],
  providers: [PecaService]
})

export class PecasComponent implements OnInit{
  title = 'Autopeças';
  selectedPeca: Peca;
  pecas : Peca[];

  constructor(private router: Router, private pecaService: PecaService) { } 

  onSelect(peca: Peca): void {
	  this.selectedPeca = peca;
  }

  getPecas(): void {
    this.pecaService.getPecas().then(pecas => this.pecas = pecas);
  }

  add(nome: string): void {
    nome = nome.trim();
    if (!nome) { return; }
    this.pecaService.create(nome)
      .then(peca => {
        this.pecas.push(peca);
        this.selectedPeca = null;
      });
  }

  delete(peca: Peca): void {
    this.pecaService
        .delete(peca.id)
        .then(() => {
          this.pecas = this.pecas.filter(h => h !== peca);
          if (this.selectedPeca === peca) { this.selectedPeca = null; }
        });
  }

  ngOnInit(): void {
    this.getPecas();
  }

  gotoDetail(): void {
    this.router.navigate(['/detalhe', this.selectedPeca.id]);
  }
  
}
