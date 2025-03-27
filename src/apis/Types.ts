import { v4 as uuidv4 } from "uuid";
import { Motivações } from "./TreeApi";

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