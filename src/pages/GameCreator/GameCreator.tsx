import "./GameCreator.css";
import Header from "../../Componentes/Header/Header.js";
import Footer from "../../Componentes/Footer/Footer.js";
import GameFeaturesPicker from "../../Componentes/gameFeaturesPicker/GameFeaturesPicker.js";
import Resultado from "../../Componentes/Results/Resultado.js";
import { useState } from "react";
import ResultApi from "../../Controlers/ResultGameApi.js";
import { GameFeatureProps } from "../../Controlers/Types.ts";


import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs.js";
import PersonasTree from "@/Componentes/PersonasTree/PersonasTree.js";
import { findbyUUID, Motivações, treeData } from "@/Controlers/AnalysisApi.ts";

function GameCreator() {
  const resultApi = new ResultApi();
  const [analisysTree, setanalisysTree] = useState( [new treeData(
    "Jogo",
    resultApi.Inputs,
    []
  )]);
  let nosSelecionados: treeData[] = [];


  function addPersonaHandler(value: String) {
    const novoEstadoTree = Object.assign({}, analisysTree);
    novoEstadoTree[0].addPersona(
      value
    );
    setanalisysTree(novoEstadoTree);
  }
  function addSelecedNode(uuid: String) {
    const no = findbyUUID(analisysTree[0],uuid) as treeData;
    nosSelecionados.push(no);
    console.log(nosSelecionados);

  }
  function removeSelecedNode(uuid: String) {
    nosSelecionados = nosSelecionados.filter((item) => {
      return item.id !== uuid;
    });
  }

  function setPesosValues(uuid: String, valor: keyof Motivações, acrescimo: number) {
    const novoEstadoValues = [ ...analisysTree ];
    const no = findbyUUID(novoEstadoValues[0], uuid) as treeData;
    if (no) {
      no.pesos[valor] = acrescimo;
      console.log(novoEstadoValues);
      setanalisysTree(novoEstadoValues);
    }
  }

  const gameFeature: GameFeatureProps[] = [
    {
      textLabel: "Ação",
      textdescription: "Foco em destruição e excitação intensa.",
      setValue: (value: number) => setPesosValues(analisysTree[0].id,"ação", value),
    },
    {
      textLabel: "Social",
      textdescription: " Competição e interação em comunidade.",
      setValue: (value: number) => setPesosValues(analisysTree[0].id,"social", value),
    },
    {
      textLabel: "Maestria",
      textdescription: "Desafio e desenvolvimento de estratégias",
      setValue: (value: number) => setPesosValues(analisysTree[0].id,"maestria", value),
    },
    {
      textLabel: "Conquista",
      textdescription: "Completar objetivos e obter poder.",
      setValue: (value: number) => setPesosValues(analisysTree[0].id,"conquista", value),
    },
    {
      textLabel: "Imersão",
      textdescription: "Exploração de fantasia e histórias profundas",
      setValue: (value: number) => setPesosValues(analisysTree[0].id,"imersão", value),
    },
    {
      textLabel: "Criatividade",
      textdescription: "Personalização e descoberta de novidades.",
      setValue: (value: number) => setPesosValues(analisysTree[0].id,"criatividade", value),
    },
  ];
 

  return (
    <div className="GameCreatorCtn">
      <Header></Header>

      <main>
        <aside className="DataInput">
          <Tabs defaultValue="account" className="tabLayouyt">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Game Values</TabsTrigger>
              <TabsTrigger value="password">Tree</TabsTrigger>
            </TabsList>
            <TabsContent className="space-y-2" value="account">
              <GameFeaturesPicker Features={gameFeature} />
            </TabsContent>
            <TabsContent className="space-y-2" value="password">
              <PersonasTree 
              addPersonaHandler={addPersonaHandler} 
              pushNosSelecionados ={
                addSelecedNode
              } 
              removeNosSelecionados={
                removeSelecedNode
              }
              arvore={analisysTree}/>
            </TabsContent>
          </Tabs>
        </aside>
        <div className="Results">
          <Resultado arvore={analisysTree[0]}  />
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default GameCreator;
