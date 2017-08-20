import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { PecaService } from './peca.service';
import { AppComponent } from './app.component';
import { PecaDetalheComponent } from './peca-detalhe.component';
import { PecasComponent } from './pecas.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PecaDetalheComponent,
    PecasComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
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
      }
    ])
  ],
  providers: [PecaService],
  bootstrap: [AppComponent]
})



export class AppModule { }
