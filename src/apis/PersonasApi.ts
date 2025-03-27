import { Motivações } from "./Types/MotivacaoType";
import { PersonasTreeInterface, TreeData } from "./Types/PersonasTreeType";


export class PersonasApi implements PersonasTreeInterface {

  noEmEdicao: TreeData;
  nosSelecionados: TreeData[] = [];
  arvorePersonas: TreeData[] = [
    new TreeData("Jogo", {
      ação: 0,
      social: 0,
      maestria: 0,
      conquista: 0,
      imersão: 0,
      criatividade: 0,
    }),
  ];
  constructor() {
    this.nosSelecionados.push(this.arvorePersonas[0]);
    this.noEmEdicao = this.arvorePersonas[0];
  }
  get jogo() {
    return this.arvorePersonas[0].pesos;
  }
  areSelected(uuid: string): boolean {
    return this.nosSelecionados.some((item) => item.id === uuid);
  }
  findbyUUID(node: TreeData, targetUUID: string): TreeData | null {
    if (node.id === targetUUID) {
      return node;
    }
    if (node.children) {
      for (let child of node.children) {
        const result = this.findbyUUID(child, targetUUID);
        if (result) return result;
      }
    }
    return null;
  }
  addPersona(valor: string) {
    const newPersona = new TreeData(valor, {
      ação: 3,
      social: 3,
      maestria: 3,
      conquista: 3,
      imersão: 3,
      criatividade: 3,
    });
    this.arvorePersonas[0].children.push(newPersona);
  }
  clonePersona(uuid: string): void {
    const nodeToClone = this.findbyUUID(this.arvorePersonas[0], uuid);
    if(nodeToClone?.name === "Jogo") return;
    const cloneNode = (node: TreeData): TreeData => {
      const clonedNode = new TreeData(node.name, { ...node.pesos });
      if (node.children) {
        clonedNode.children = node.children.map((child) => cloneNode(child));
      }
      return clonedNode;
    };
    if(!nodeToClone) return;
    const clonedPersona = cloneNode(nodeToClone);
    this.arvorePersonas[0].children.push(clonedPersona);
  }
}



export type { Motivações };
