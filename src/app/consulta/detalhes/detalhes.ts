import { Component } from '@angular/core';
import { Produto } from '../produto';
import { ActivatedRoute, Router } from '@angular/router';
import { LojaService } from '../../loja-service';

@Component({
  selector: 'app-detalhes',
  imports: [],
  templateUrl: './detalhes.html',
  styleUrl: './detalhes.css'
})
export class Detalhes {
  produto?: Produto;
  loading: boolean = true;
  erro: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: LojaService
  ) {}

  ngOnInit() {
    this.carregarProduto();
  }

  carregarProduto() {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.loading = true;
      this.service.obterProdutoPorId(+id).subscribe({
        next: (produto) => {
          this.produto = produto;
          this.loading = false;
        },
        error: (error) => {
          this.erro = 'Produto não encontrado';
          this.loading = false;
          console.error('Erro:', error);
        }
      });
    }
  }

  voltar() {
    this.router.navigate(['/inicio']);
  }
}
