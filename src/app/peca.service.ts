import { Injectable } from '@angular/core';
import { Peca } from './peca';
import { PECAS } from './lista-pecas';

@Injectable()
export class PecaService {
	//Promise retorna uma promessa e assincronamente aguarda a resposta que é alimentada no callback "resolve"
	getPecas(): Promise<Peca[]> {
		return Promise.resolve(PECAS);
	}
	getPeca(id: number): Promise<Peca> {
	  return this.getPecas()
	             .then(pecas => pecas.find(peca => peca.id === id));
	}
}