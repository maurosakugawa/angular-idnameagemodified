import { Injectable } from '@angular/core';
import { Cliente } from './cliente';

@Injectable()
export class ServicoService {
  private lista: Cliente[] = [];
  constructor() {
    this.loadLista();
  }

  add(cliente: Cliente): void {
    const cli: Cliente = new Cliente();
    cli.nome = cliente.nome;
    cli.idade = cliente.idade;
    this.lista.push(cli);
    this.salvar();
  }

  get dados(): Cliente[] {
    return this.lista;
  }

  loadLista(): void {
    let temp = localStorage.getItem("lista");
    if (temp != null && temp != '') {
      this.lista = JSON.parse(temp);
    }
  }

  salvar(): void {
    localStorage.setItem("lista", JSON.stringify(this.lista));
  }
}