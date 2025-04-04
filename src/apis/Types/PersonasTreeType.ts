import { Motivações } from "./MotivacaoType";
import { v4 as uuidv4 } from "uuid";

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

export interface PersonasTreeInterface {
  arvorePersonas: TreeData[] ;
  areSelected(uuid: string): boolean;
  findbyUUID(node: TreeData, targetUUID: string): TreeData | null;
  addPersona(valor: string):void;
}




