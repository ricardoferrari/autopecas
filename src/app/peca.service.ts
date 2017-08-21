import { Injectable } from '@angular/core';
import { Headers, Http }    from '@angular/http';


import { Peca } from './peca';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class PecaService {
	private pecasUrl = 'api/pecas';  // URL to web api
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	//Promise retorna uma promessa e assincronamente aguarda a resposta que é alimentada no callback "resolve"
	getPecas(): Promise<Peca[]> {
		//Simula uma requisicao http
		return this.http.get(this.pecasUrl)
             .toPromise()
             .then(response => response.json().data as Peca[])
             .catch(this.handleError);
	}


	getPeca(id: number): Promise<Peca> {
	  //return this.getPecas().then(pecas => pecas.find(peca => peca.id === id));

	  const url = `${this.pecasUrl}/${id}`;
	  return this.http.get(url)
	    .toPromise()
	    .then(response => response.json().data as Peca)
	    .catch(this.handleError);
	}

	update(peca: Peca): Promise<Peca> {
	  const url = `${this.pecasUrl}/${peca.id}`;
	  return this.http
	    .put(url, JSON.stringify(peca), {headers: this.headers})
	    .toPromise()
	    .then(() => peca)
	    .catch(this.handleError);
	}

	create(nome: string): Promise<Peca> {
	  return this.http
	    .post(this.pecasUrl, JSON.stringify({nome: nome}), {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().data as Peca)
	    .catch(this.handleError);
	}

	delete(id: number): Promise<void> {
	  const url = `${this.pecasUrl}/${id}`;
	  return this.http.delete(url, {headers: this.headers})
	    .toPromise()
	    .then(() => null)
	    .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}
}