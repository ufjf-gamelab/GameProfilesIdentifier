import { cloneWithMethods } from "@/components/created/utils/deepClone";
import {  Motivações, TreeData } from "./Types";
import { data } from "react-router-dom";



export class PersonasTreeApi {
  tree: TreeData[] = [
    new TreeData("Jogo", {
      ação: 0,
      social: 0,
      maestria: 0,
      conquista: 0,
      imersão: 0,
      criatividade: 0,
    }),
  ];
  noEmEdicao: TreeData;
  nosSelecionados: TreeData[] = [];
  constructor() {
    this.nosSelecionados.push(this.tree[0]);
    this.noEmEdicao = this.tree[0];
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
  getDataSet() {
    const actions: (keyof Motivações)[] = [
      "ação",
      "social",
      "maestria",
      "conquista",
      "imersão",
      "criatividade",
    ];
    const dataSet: { dataKeys: string[]; data: { [key: string]: any }[] } = {
      dataKeys: [],
      data: [],
    };

    actions.forEach((legenda) => {
      const data: { [key: string]: any } = { subtitle: legenda };
      this.nosSelecionados.forEach((node) => {
        data[node.name] = node.pesos[legenda];
      });
      dataSet.data.push(data);
    });

    dataSet.dataKeys = this.nosSelecionados.map((node) => node.name);
    console.log(dataSet);

    return dataSet;
  }
  getAvaregeDataSet() {
    const actions: (keyof Motivações)[] = [
      "ação",
      "social",
      "maestria",
      "conquista",
      "imersão",
      "criatividade",
    ];
    const dataSet: { dataKeys: string[]; data: { [key: string]: any }[] } = {
      dataKeys: [],
      data: [],
    };

    actions.forEach((legenda) => {
      const data: { [key: string]: any } = { subtitle: legenda };
      let total = 0;
      data["jogo"] = this.tree[0].pesos[legenda];
      const nosSelecionadosFiltrados = this.nosSelecionados.filter((node) => {
        if (node.name === "Jogo") return false;
        return true;
      });
     nosSelecionadosFiltrados.forEach((node) => {
        console.log(node.pesos[legenda]);
        total += node.pesos[legenda];
      });
      data["media"] = total /nosSelecionadosFiltrados.length;
      
      dataSet.data.push(data);
    });
    dataSet.dataKeys = ["jogo","media"]
    console.log(dataSet);

    return dataSet;
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
    this.tree[0].children.push(newPersona);
  }
}

// export function selectEditedNode(personasTreeApi: PersonasTreeApi) {
//   // return personasTreeApi.nosSelecionados.length === 1
//   //   ? personasTreeApi.nosSelecionados[0]
//   //   : undefined;

// }



export type { Motivações };
