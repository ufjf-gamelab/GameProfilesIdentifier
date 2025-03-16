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
import { Motivações, PersonasTreeApi, selectEditedNode, treeData, TreeReducer } from "@/Controlers/TreeApi.ts";
import { cloneWithMethods } from "@/Componentes/utils/deepClone.ts";




function GameCreator() {
  const [estado, dispatch] = useReducer(TreeReducer, new PersonasTreeApi(),);
  const selectedNode = selectEditedNode(estado);
  const gameFeature: GameFeatureProps[] = [
    {
      textLabel: "Ação",
      textdescription: "Foco em destruição e excitação intensa.",
      setValue: (value: number) => {dispatch({ type: "SET_ACTION", value })},
      valorProp: selectedNode?.pesos.ação!,
    },
    {
      textLabel: "Social",
      textdescription: "Competição e interação em comunidade.",
      setValue: (value: number) => {dispatch({ type: "SET_SOCIAL", value })},
      valorProp: selectedNode?.pesos.social!,
    },
    {
      textLabel: "Maestria",
      textdescription: "Desafio e desenvolvimento de estratégias",
      setValue: (value: number) => {dispatch({ type: "SET_MAESTRIA", value })},
      valorProp: selectedNode?.pesos.maestria!,

    },
    {
      textLabel: "Conquista",
      textdescription: "Completar objetivos e obter poder.",
      setValue: (value: number) => {dispatch({ type: "SET_CONQUISTA", value })},
      valorProp: selectedNode?.pesos.conquista!,

    },
    {
      textLabel: "Imersão",
      textdescription: "Exploração de fantasia e histórias profundas",
      setValue: (value: number) => {dispatch({ type: "SET_IMERSÃO", value })},
      valorProp: selectedNode?.pesos.imersão!,

    },
    {
      textLabel: "Criatividade",
      textdescription: "Personalização e descoberta de novidades.",
      setValue: (value: number) => {dispatch({ type: "SET_CRIATIVIDADE", value })},
      valorProp: selectedNode?.pesos.criatividade!,

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
              <GameFeaturesPicker Features={gameFeature} disabled={selectedNode === undefined} />
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
