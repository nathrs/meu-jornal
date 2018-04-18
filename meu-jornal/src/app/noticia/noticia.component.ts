import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  noticia: string[] = [
    "Notícia 1",
    "Notícia 2",
    "Notícia 3",
    "Notícia 4" ];

  mostrarNoticia: boolean = true; // quando a variavel estiver true as notícias aparecem    

  constructor() { }

  ngOnInit() {
  }

  public esconderNoticia() {
    this.mostrarNoticia = false;
  }

  public exibirNoticia() {
    this.mostrarNoticia = true;
  }


}
