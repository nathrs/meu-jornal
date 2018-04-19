import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiaModule } from './noticia/noticia.module';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    
  ],
  imports: [
    BrowserModule, 
    NoticiaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
