import { Motivações } from "./Types/MotivacaoType";
import { PersonasTreeInterface, TreeData } from "./Types/PersonasTreeType";

export class DataGenerator{
  #motivacoesKeywords: (keyof Motivações)[] =  [
    "ação",
    "social",
    "maestria",
    "conquista",
    "imersão",
    "criatividade",
  ];
  getAbsoluteDataSet(nosSelecionados:TreeData[] ) {
    const dataSet: { dataKeys: string[]; data: { [key: string]: any }[] } = {
      dataKeys: [],
      data: [],
    };

    this.#motivacoesKeywords.forEach((legenda) => {
      const data: { [key: string]: any } = { subtitle: legenda };
      nosSelecionados.forEach((node) => {
        data[node.name] = node.pesos[legenda];
      });
      dataSet.data.push(data);
    });

    dataSet.dataKeys = nosSelecionados.map((node) => node.name);
    console.log(dataSet);

    return dataSet;
  }
  getAvaregeDataSet(PersonasTree: PersonasTreeApi) {
    const jogo = PersonasTree.jogo
    const nosSelecionados = PersonasTree.nosSelecionados
    const nosAnalisados = nosSelecionados.filter((node) => {
      if (node.name === "Jogo") return false;
      return true;
    });
    const dataSet: { dataKeys: string[]; data: { [key: string]: any }[] } = {
      dataKeys: [],
      data: [],
    };
    this.#motivacoesKeywords.forEach((legenda) => {
      const data: { [key: string]: any } = { subtitle: legenda };
      let total = 0;

      data["jogo"] = jogo[legenda]
      nosAnalisados.forEach((node) => {
          console.log(node.pesos[legenda]);
          total += node.pesos[legenda];
        });
      data["media"] = total/nosAnalisados.length;
      
      dataSet.data.push(data);
    });
    dataSet.dataKeys = ["jogo","media"]
    console.log(dataSet);

    return dataSet;
  }
}
export class PersonasTreeApi implements PersonasTreeInterface {
  
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
  get jogo(){
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
}



export type { Motivações };
