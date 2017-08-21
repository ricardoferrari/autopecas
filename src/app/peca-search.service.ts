import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
 
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
import { Peca }           from './peca';
 
@Injectable()
export class PecaSearchService {
 
  constructor(private http: Http) {}
 
  search(term: string): Observable<Peca[]> {
    return this.http
               .get(`api/pecas/?nome=${term}`)
               .map(response => response.json().data as Peca[]);
  }
}