import { v4 as uuidv4 } from "uuid";

 export type GameFeatureProps = {
    textLabel: string
    textdescription: string
    valorProp: number
    setValue: (value: number) => void
}

export type SelectGameProps = {
    Features: GameFeatureProps[];
    disabled : boolean;
  }
  export type Categorias = {
    Community: number;
    Competition: number;
    Excitement: number;
    Destruction: number;
    Completion: number;
    Power: number;
    Strategy: number;
    Challenge: number;
    Fantasy: number;
    Story: number;
    Discovery: number;
    Design: number;
  };
  
  export type Motivações = {
    ação: number;
    social: number;
    maestria: number;
    conquista: number;
    imersão: number;
    criatividade: number;
  };
  
  export type Persona = {
    nome: string;
    imagem: string;
    descricao: string;
    categoria: string;
    quantidade: number;
    pesos: Categorias;
  };
  
  export type Jogo = {
    nome: string;
    imagem: string;
    descricao: string;
    categoria: string;
    quantidade: number;
    Valores: Motivações;
  };
  
  export type Data = {
    subtitle: string;
    dataKey: number;
  };
  
  export class TreeData {
    id: string;
    name: string;
    pesos: Motivações;
    children: TreeData[];
  
    constructor(name: string, pesos: Motivações, children: TreeData[] = []) {
      this.id = uuidv4();
      this.name = name;
      this.pesos = pesos;
      this.children = children;
    }
  }