import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = []
  paginaAtual: number = 1

  haMaisPensamentosClass: boolean = true
  filtro: string = ''
  favoritos: boolean = false
  listaFavoritosPai: Pensamento[] = []
  titulo: string = 'Meu Mural'

  constructor(private service: PensamentoService, private router: Router) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos) =>{
      this.listaPensamentos = listaPensamentos
    })
  }
  carregarMaisPensamentos(){
    this.service.listar(++this.paginaAtual, this.filtro, this.favoritos )
        .subscribe(listaPensamentos =>{
          this.listaPensamentos.push(...listaPensamentos)
          if(!listaPensamentos.length){
            this.haMaisPensamentosClass = false
          }
        })
  }

  pesquisarPensamentos(){
    this.haMaisPensamentosClass = true
    this.paginaAtual = 1
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
        .subscribe(listaPensamentos =>{
          this.listaPensamentos = listaPensamentos
        })
  }

  listarFavoritos(){
    this.favoritos = true
    this.haMaisPensamentosClass = true
    this.paginaAtual = 1
    this.titulo = "Meus Favoritos"
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
        .subscribe(listaPensamentosFavoritos =>{
          this.listaPensamentos = listaPensamentosFavoritos
          this.listaFavoritosPai = listaPensamentosFavoritos
        })
  }

  recarregarComponente() {
    this.favoritos = false
    this.paginaAtual = 1
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])
  }
}