export class Cliente{
  static cont:number = 0;
  id:number = ++Cliente.cont;
  nome:string;
  idade:number;
}