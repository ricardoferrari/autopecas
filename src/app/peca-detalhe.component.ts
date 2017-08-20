import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Peca } from './peca';
import { PecaService } from './peca.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'peca-detalhe',
  templateUrl: './peca-detalhe.component.html'
})

export class PecaDetalheComponent implements OnInit {
	@Input() peca: Peca;

	constructor(
	  private pecaService: PecaService,
	  private route: ActivatedRoute,
	  private location: Location
	) {}

	ngOnInit(): void {
	  this.route.paramMap
	    .switchMap((params: ParamMap) => this.pecaService.getPeca(+params.get('id')))
	    .subscribe(peca => this.peca = peca);
	}

	goBack(): void {
	  this.location.back();
	}
}