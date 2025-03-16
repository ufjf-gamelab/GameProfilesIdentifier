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
function GameCreator() {
  const [estado, dispatch] = useReducer(reducer, new PersonasTreeApi(),);
  const gameEditor = selectEditedNode(estado);
  const gameFeature: GameFeatureProps[] = [
    {
      textLabel: "Ação",
      textdescription: "Foco em destruição e excitação intensa.",
      setValue: (value: number) => {dispatch({ type: "SET_ACTION", value })},
      valorProp: gameEditor?.pesos.ação!,
    },
    {
      textLabel: "Social",
      textdescription: "Competição e interação em comunidade.",
      setValue: (value: number) => {dispatch({ type: "SET_SOCIAL", value })},
      valorProp: gameEditor?.pesos.social!,
    },
    {
      textLabel: "Maestria",
      textdescription: "Desafio e desenvolvimento de estratégias",
      setValue: (value: number) => {dispatch({ type: "SET_MAESTRIA", value })},
      valorProp: gameEditor?.pesos.maestria!,

    },
    {
      textLabel: "Conquista",
      textdescription: "Completar objetivos e obter poder.",
      setValue: (value: number) => {dispatch({ type: "SET_CONQUISTA", value })},
      valorProp: gameEditor?.pesos.conquista!,

    },
    {
      textLabel: "Imersão",
      textdescription: "Exploração de fantasia e histórias profundas",
      setValue: (value: number) => {dispatch({ type: "SET_IMERSÃO", value })},
      valorProp: gameEditor?.pesos.imersão!,

    },
    {
      textLabel: "Criatividade",
      textdescription: "Personalização e descoberta de novidades.",
      setValue: (value: number) => {dispatch({ type: "SET_CRIATIVIDADE", value })},
      valorProp: gameEditor?.pesos.criatividade!,

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
