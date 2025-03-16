import { cloneWithMethods } from "@/Componentes/utils/deepClone";
import {  Motivações, TreeData } from "./Types";



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
  nosSelecionados: TreeData[] = [];
  constructor() {
    this.nosSelecionados.push(this.tree[0]);
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

export function selectEditedNode(personasTreeApi: PersonasTreeApi) {
  return personasTreeApi.nosSelecionados.length === 1
    ? personasTreeApi.nosSelecionados[0]
    : undefined;
}
export function TreeReducer(state: any, action: any) {
  const novoEstado = cloneWithMethods(state);
  const no = novoEstado.findbyUUID(state.tree[0], selectEditedNode(state)?.id);

  const updatePesos = (key: keyof Motivações, value: number) => {
    if (no) {
      no.pesos[key] = value;
    }
  };

  switch (action.type) {
    case "ADD_PERSONA":
      state.addPersona(action.value);
      return novoEstado;
    case "ADD_SELECTED_NODE":
      const node = novoEstado.findbyUUID(novoEstado.tree[0], action.value);
      if (node) novoEstado.nosSelecionados.push(node);
      return novoEstado;
    case "REMOVE_SELECTED_NODE":
      console.log(action);

      novoEstado.nosSelecionados = novoEstado.nosSelecionados.filter(
        (item: any) => {
          item.id !== action.value}
      );
      return novoEstado;
    case "SET_AÇÃO":
      updatePesos("ação", action.value);
      return novoEstado;
    case "SET_SOCIAL":
      updatePesos("social", action.value);
      return novoEstado;
    case "SET_MAESTRIA":
      updatePesos("maestria", action.value);
      return novoEstado;
    case "SET_CONQUISTA":
      updatePesos("conquista", action.value);
      return novoEstado;
    case "SET_IMERSÃO":
      updatePesos("imersão", action.value);
      return novoEstado;
    case "SET_CRIATIVIDADE":
      updatePesos("criatividade", action.value);
      return novoEstado;
    default:
      return state;
  }
}

