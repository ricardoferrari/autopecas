import { Component, Input, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
 
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { NgModule } from '@angular/core';
 
// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
 
import { PecaSearchService } from './peca-search.service';
import { Peca } from './peca';
 
@Component({
  selector: 'peca-search',
  templateUrl: './peca-search.component.html',
  styleUrls: [ './peca-search.component.css' ],
  providers: [PecaSearchService]
})

export class PecaSearchComponent implements OnInit {
  pecas: Observable<Peca[]>;
  private searchTerms = new Subject<string>();
  private selecionado = 0;
  private selecionadoPeca:Peca;
  private qtd: number = 0;
  private inputState = "inactive";

  constructor(
    private pecaSearchService: PecaSearchService,
    private router: Router) {}
 
  // Push a search term into the observable stream.
  search(term: string, keyCode): void {

    this.pecas.subscribe( message => { this.qtd = message.length });

    switch(keyCode){
      case 38: this.selecionado = (this.selecionado>0) ? (this.selecionado-1) : 0;
      break;
      case 40: this.selecionado = (this.selecionado<this.qtd) ? (this.selecionado+1) : this.selecionado;
      break;
      case 13: 
          this.pecas.subscribe( message => { 
            this.selecionadoPeca = message[this.selecionado-1]; 
            if (message[this.selecionado-1]) this.gotoDetail(this.selecionadoPeca); 
          });
      break;
    }



    this.searchTerms.next(term);
  }

  limpaSelecao(): void {
    this.searchTerms.next();
    this.inputState = "inactive";
  }

  atualizaSelecao(term):void {
   this.inputState = "active";
   this.searchTerms.next(term); 
  }
 
  ngOnInit(): void {
    this.pecas = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.pecaSearchService.search(term)
        // or the observable of empty pecas if there was no search term
        : Observable.of<Peca[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Peca[]>([]);
      });
  }
 
  gotoDetail(peca: Peca): void {
    let link = ['/detalhe', peca.id];
    this.router.navigate(link);
  }
}