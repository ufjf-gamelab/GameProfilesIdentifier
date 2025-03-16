import { cloneWithMethods } from '@/Componentes/utils/deepClone';
import { actions } from 'react-arborist/dist/module/state/open-slice';
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
  

}
export class PersonasTreeApi{
  tree: treeData[] = [new treeData(
    "Jogo",
    { ação: 0, social: 0, maestria: 0, conquista: 0, imersão: 0, criatividade: 0 },
    []
  )];
  nosSelecionados: treeData[] = [];
  constructor( ){
    this.nosSelecionados .push(this.tree[0]);
  }
  areSelected(uuid: String):boolean{
    return this.nosSelecionados.find((item) => item.id === uuid) ? true : false;
  }
  findbyUUID(node: any, targetUUID: String): any {
    // Se o nó atual tiver o UUID que procuramos, retorna o nó
    console.log("achei",node.id,targetUUID)

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
  compartiveDataSet():any{

    const actions: (keyof Motivações)[] = ["ação", "social", "maestria", "conquista", "imersão", "criatividade"];
    const dataSet: { dataKeys: string[], data: { [key: string]: any }[] } = { dataKeys: [], data: [] };
    actions.forEach((legenda) => {
        const data: { [key: string]: any } = { subtitle: legenda };
        let name = "";
        this.nosSelecionados.forEach((node,index) => {
          
          data[node.name] = node.pesos[legenda];
          name = node.name;
        });
        dataSet["data"].push(data);
        return data;
    });
    dataSet.dataKeys =  this.nosSelecionados.map((node) => node.name);
    console.log(dataSet);
    return dataSet;

  }
  addPersona( valor: String) {
    this.tree[0].children.push(
      {
      id: uuidv4(),
      name: valor,
      children:[],
      pesos: { ação: 3, social: 3, maestria: 3, conquista: 3, imersão: 3, criatividade: 3 }
    }as never
    );      
} 
}
export function selectEditedNode(personasTreeApi: PersonasTreeApi) {
  const justOne = personasTreeApi.nosSelecionados.length == 1
  if (justOne) {
    return personasTreeApi.nosSelecionados[0];
  } else {
    return undefined;
  }
}
export function TreeReducer(state: any, action: any) {
  const novoEstado = cloneWithMethods(state);
  const no = novoEstado.findbyUUID(state.tree[0], selectEditedNode(state)?.id);
  switch (action.type) {
    case "ADD_PERSONA":
      state.addPersona(action.value);
      return novoEstado
    case "ADD_SELECTED_NODE":
      const node = novoEstado.findbyUUID(novoEstado.tree[0], action.uuid);
      novoEstado.nosSelecionados.push(node);
      return  novoEstado
    case "REMOVE_SELECTED_NODE":
      novoEstado.nosSelecionados = novoEstado.nosSelecionados.filter(
        (item: any) => item.id !== action.uuid
      );
      return novoEstado
    case "SET_ACTION":
      no.pesos['ação'] = action.value; 
      return novoEstado;
    case "SET_SOCIAL":
      no.pesos['social'] = action.value; 
      return novoEstado;
      case "SET_MAESTRIA":
        no.pesos['maestria'] = action.value; 
        return novoEstado;
    case "SET_CONQUISTA":
      no.pesos['conquista'] = action.value; 
      return novoEstado;
    case "SET_IMERSÃO":
      no.pesos['imersão'] = action.value;
      return novoEstado;
    case "SET_CRIATIVIDADE":
      no.pesos['criatividade'] = action.value;
      return novoEstado;
    default:
      return state;
  }
}


