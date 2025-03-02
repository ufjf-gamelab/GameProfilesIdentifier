import "./GameCreator.css";
import Header from "../../Componentes/Header/Header.js";
import Footer from "../../Componentes/Footer/Footer.js";
import GameFeaturesPicker from "../../Componentes/gameFeaturesPicker/GameFeaturesPicker.js";
import Resultado from "../../Componentes/Results/Resultado.js";
import { useState } from "react";
import ResultApi from "../../Controlers/ResultGameApi.js";
import { GameFeatureProps } from "@/Controlers/Features/FeaturesData.js";
import { Tree } from 'react-arborist';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs.js";
type gameValues = {
  ação: number;
  social: number;
  maestria: number;
  conquista: number;
  imersão: number;
  criatividade: number;
};
function GameCreator() {
  const resultApi = new ResultApi();
  const [gameValues, setgameValues] = useState(resultApi.Inputs);
  function setGameValues(valor: keyof gameValues, acrescimo: number) {
    const novoEstadoValues = { ...gameValues };
    novoEstadoValues[valor] = acrescimo;
    setgameValues(novoEstadoValues);
  }

  const gameFeature: GameFeatureProps[] = [
    {
      textLabel: "Ação",
      textdescription: "Foco em destruição e excitação intensa.",
      setValue: (value: number) => setGameValues("ação", value),
    },
    {
      textLabel: "Social",
      textdescription: " Competição e interação em comunidade.",
      setValue: (value: number) => setGameValues("social", value),
    },
    {
      textLabel: "Maestria",
      textdescription: "Desafio e desenvolvimento de estratégias",
      setValue: (value: number) => setGameValues("maestria", value),
    },
    {
      textLabel: "Conquista",
      textdescription: "Completar objetivos e obter poder.",
      setValue: (value: number) => setGameValues("conquista", value),
    },
    {
      textLabel: "Imersão",
      textdescription: "Exploração de fantasia e histórias profundas",
      setValue: (value: number) => setGameValues("imersão", value),
    },
    {
      textLabel: "Criatividade",
      textdescription: "Personalização e descoberta de novidades.",
      setValue: (value: number) => setGameValues("criatividade", value),
    },
  ];
  const data = [
    { id: "1", name: "Unread" },
    { id: "2", name: "Threads" },
    {
      id: "3",
      name: "Chat Rooms",
      children: [
        { id: "c1", name: "General" },
        { id: "c2", name: "Random" },
        { id: "c3", name: "Open Source Projects" },
      ],
    },
    {
      id: "4",
      name: "Direct Messages",
      children: [
        { id: "d1", name: "Alice" },
        { id: "d2", name: "Bob" },
        { id: "d3", name: "Charlie" },
      ],
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
            <Tree initialData={data} />
            </TabsContent>
          </Tabs>
        </aside>
        <div className="Results">
          <Resultado gameValues={gameValues} resultApi={resultApi} />
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default GameCreator;
