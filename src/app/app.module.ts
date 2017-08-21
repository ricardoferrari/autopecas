import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

//Simula o back-end
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


import { PecaService } from './peca.service';
import { AppComponent } from './app.component';
import { PecaDetalheComponent } from './peca-detalhe.component';
import { PecasComponent } from './pecas.component';
import { DashboardComponent } from './dashboard.component';
import { PecaSearchComponent }  from './peca-search.component';

import { AppRoutingModule }     from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    PecaDetalheComponent,
    PecasComponent,
    DashboardComponent,
    PecaSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [PecaService],
  bootstrap: [AppComponent]
})



export class AppModule { }
