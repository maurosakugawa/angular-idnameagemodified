import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent {
  constructor(private servico: ServicoService){}
}