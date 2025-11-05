import { Component, inject } from '@angular/core';
import { LojaService } from '../../loja-service';
import { Produto } from '../produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {

  loja = inject(LojaService)
  produtos: Produto[] = [];
  erro: boolean = false;
  loading: boolean = false;


  constructor(
    private router: Router
  ) {}

  ngOnInit(){
    this.buscarProdutos();
  }

  buscarProdutos(){
    this.loading = true;
    this.loja.obterProdutos().subscribe({
      next: (res: any) => {
        this.produtos = res || [] ;
        this.erro = false;
        this.loading = false;

      },
      error: () => {
        this.erro = true;
        this.loading = false;
      }
    })
  }

   verDetalhes(id: number) {
    this.router.navigate(['/id', id]);

  }
}
