import "./GameCreator.css";
import Header from "../../Componentes/Header/Header.js";
import Footer from "../../Componentes/Footer/Footer.js";
import GameFeaturesPicker from "../../Componentes/gameFeaturesPicker/GameFeaturesPicker.js";
import Resultado from "../../Componentes/Results/Resultado.js";
import { useReducer, useState } from "react";
import ResultApi from "../../Controlers/ResultGameApi.js";
import { GameFeatureProps } from "../../Controlers/Types.ts";


import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs.js";
import PersonasTree from "@/Componentes/PersonasTree/PersonasTree.tsx";
import { Motivações, PersonasTreeApi, treeData } from "@/Controlers/TreeApi.ts";
import { cloneWithMethods } from "@/Componentes/utils/deepClone.ts";

function selectEditedNode(personasTreeApi: PersonasTreeApi) {
  const justOne = personasTreeApi.nosSelecionados.length == 1
  if (justOne) {
    return personasTreeApi.nosSelecionados[0];
  } else {
    return undefined;
  }
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case "ADD_PERSONA":
      const newTreeAddPersona = cloneWithMethods(state.personasTreeApi);
      state.personasTreeApi.addPersona(action.value);
      return {
        ...state,
        personasTreeApi: newTreeAddPersona,
      };
    case "ADD_SELECTED_NODE":
      const newTreeAddSelected = cloneWithMethods(state.personasTreeApi);
      const node = newTreeAddSelected.findbyUUID(newTreeAddSelected.tree[0], action.uuid);
      newTreeAddSelected.nosSelecionados.push(node);
      return {
        ...state,
        personasTreeApi: newTreeAddSelected,
      };
    case "REMOVE_SELECTED_NODE":
      const newTreeRemoveSelected = cloneWithMethods(state.personasTreeApi);
      newTreeRemoveSelected.nosSelecionados = newTreeRemoveSelected.nosSelecionados.filter(
        (item: any) => item.id !== action.uuid
      );
      return {
        ...state,
        personasTreeApi: newTreeRemoveSelected,
      };
    case "SET_PESOS_VALUES_ACTION":
      const novoEstado = cloneWithMethods(state);
      const no = novoEstado.findbyUUID(state.tree[0], selectEditedNode(state)?.id);
      no.pesos['ação'] = action.value; 
      return novoEstado;
    default:
      return state;
  }
}
function GameCreator() {
  const [estado, dispatch] = useReducer(reducer, new PersonasTreeApi(),);
  const gameEditor = selectEditedNode(estado);
  const gameFeature: GameFeatureProps[] = [
    {
      textLabel: "Ação",
      textdescription: "Foco em destruição e excitação intensa.",
      setValue: (value: number) => {
        dispatch({ type: "SET_PESOS_VALUES_ACTION", value })
      },
      valorProp: gameEditor?.pesos.ação!,

    },
  ];
  
  return (
    <div className="GameCreatorCtn">
      <Header></Header>

      <main>
        <aside className="DataInput">
          <Tabs defaultValue="account" className="tabLayouyt">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Editar Valores</TabsTrigger>
              <TabsTrigger value="password">Selecionar Elementos</TabsTrigger>
            </TabsList>
            <TabsContent className="space-y-2" value="account">
              <GameFeaturesPicker Features={gameFeature} disabled={gameEditor === undefined} />
            </TabsContent>
            <TabsContent className="space-y-2" value="password">
              <PersonasTree
                addPersonaHandler={
                  (value) => { dispatch({ type: "ADD_PERSONA", value }) }
                }
                pushNosSelecionados={
                  (value) => { dispatch({ type: "ADD_SELECTED_NODE", value }) }
                }
                removeNosSelecionados={
                  (value) => { dispatch({ type: "REMOVE_SELECTED_NODE", value }) }
                }

                arvoreApi={estado} />
            </TabsContent>
          </Tabs>
        </aside>
        <div className="Results">
          <Resultado personasTree={estado} />
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default GameCreator;
