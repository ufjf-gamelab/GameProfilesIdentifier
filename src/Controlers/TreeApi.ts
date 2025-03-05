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
  constructor( name: string, pesos: Motivações, children: treeData[]){
    this.id= uuidv4(),
    this.name = name;
    this.pesos = pesos;
    this.children = children;
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
export class PersonasTreeApi{
  tree: treeData[] = [new treeData(
    "Jogo",
    { ação: 0, social: 0, maestria: 0, conquista: 0, imersão: 0, criatividade: 0 },
    []
  )];
  nosSelecionados: treeData[] = [];
  constructor( ){
  
  }
  findbyUUID(node: any, targetUUID: String): any {
    // Se o nó atual tiver o UUID que procuramos, retorna o nó
      
    if (node.id === targetUUID) {
  
      return node;
    }
    // Se o nó tiver filhos, percorre cada um
    if (node.children) {
      for (let child of node.children) {
        const result = this.findbyUUID(child, targetUUID);
        if (result) {
          return result;
        }
      }
    }
  
    // Se não encontrar o UUID, retorna null
    return null;
  }
}



