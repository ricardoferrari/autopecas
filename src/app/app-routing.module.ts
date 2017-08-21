import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DashboardComponent } from './dashboard.component';
import { PecaDetalheComponent } from './peca-detalhe.component';
import { PecasComponent } from './pecas.component';
import { PecaSearchComponent }  from './peca-search.component';
 
const routes: Routes = [
  {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'pecas',
        component: PecasComponent
      },
      {
        path: 'detalhe/:id',
        component: PecaDetalheComponent
      },
      {
        path: 'busca',
        component: PecaSearchComponent
      }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}