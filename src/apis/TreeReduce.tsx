import { cloneWithMethods } from "@/components/created/utils/deepClone";
import { Motivações } from "./PersonasApi";

export function TreeReducer(state: any, action: any) {
    const novoEstado = cloneWithMethods(state);
    const no = state.noEmEdicao;
  
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
        const node = novoEstado.findbyUUID(novoEstado.arvorePersonas[0], action.value);
        if (node) novoEstado.nosSelecionados.push(node);
        return novoEstado;
      case "REMOVE_SELECTED_NODE":
  
        novoEstado.nosSelecionados = novoEstado.nosSelecionados.filter(
          (item: any) => {
            return item.id !== action.value
          }
        );
        return novoEstado;
      case "MUDA_EDITABLE_NODE":
        novoEstado.noEmEdicao = novoEstado.findbyUUID(novoEstado.arvorePersonas[0], action.value);
        return novoEstado;
      case "CLONA_PERSONA":
        novoEstado.clonePersona(action.value);
        return novoEstado;
      case "DELETA_PERSONA":
        novoEstado.deletaNo(action.value);
        return novoEstado;
      case "SET_PERSONA_NAME":
        console.log(action.value);
        state.changePersonaNamee(no.id, action.value);
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