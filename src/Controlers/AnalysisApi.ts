import { v4 as uuidv4 } from 'uuid';

export type Categorias={
    Community: number,
    Competition: number,
    Excitement: number,
    Destruction: number,
    Completion: number,
    Power: number,
    Strategy: number,
    Challenge: number,
    Fantasy: number,
    Story: number,
    Discovery: number,
    Design: number,
  }
export type Motivações = {
    ação:number,
    social : number,
    maestria : number,
    conquista : number,
    imersão : number,
    criatividade : number
  };
export type Persona = {
  nome: string,
  imagem: string,
  descricao: string,
  categoria: string,
  quantidade: number,
  pesos:Categorias
}
export type Jogo = {
    nome: string,
    imagem: string,
    descricao: string,
    categoria: string,
    quantidade: number,
    Valores: Motivações,
  }
export type Data={
  subtitle: string,
  dataKey: number
}

export class treeData{

  id: string;
  name: string;
  pesos: Motivações;
  children: treeData[];

  nosSelecionados: treeData[] | undefined;

  constructor( name: string, pesos: Motivações, children: treeData[]){
    this.id= uuidv4(),
    this.name = name;
    this.pesos = pesos;
    this.children = children;
  }
  setNosSelecionados(nosSelecionados: treeData[]){
    this.nosSelecionados = nosSelecionados;
  }
  gameValtoData(){
    return [
      { subtitle: "Ação", dataKey: this.pesos.ação },
      { subtitle: "Social", dataKey: this.pesos.social },
      { subtitle: "Maestria", dataKey: this.pesos.maestria },
      { subtitle: "Conquista", dataKey: this.pesos.conquista },
      { subtitle: "Imersão", dataKey: this.pesos.imersão },
      { subtitle: "Criatividade", dataKey: this.pesos.criatividade },
    ]
  }
  
  addPersona( valor: String) {
      this.children.push(
        {
        id: uuidv4(),
        name: valor,
        children:[]
      }as never
      );      
  } 
}




