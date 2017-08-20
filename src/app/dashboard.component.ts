import { Component, OnInit } from '@angular/core';

import { Peca } from './peca';
import { PecaService } from './peca.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  pecas: Peca[] = [];

  constructor(private pecaService: PecaService) { } 

  ngOnInit(): void {
    this.pecaService.getPecas().then(pecas => this.pecas = pecas.slice(0, 2));
  }
}