import "./GameCreator.css";
import Header from "../../Componentes/Header/Header.js";
import Footer from "../../Componentes/Footer/Footer.js";
import GameFeaturesPicker from "../../Componentes/gameFeaturesPicker/GameFeaturesPicker.js";
import Resultado from "../../Componentes/Results/Resultado.js";
import { useState } from "react";
import ResultApi from "../../Controlers/ResultGameApi.js";
import { GameFeatureProps } from "../../Controlers/Types.ts";
import { Tree } from 'react-arborist';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs.js";
import PersonasTree from "@/Componentes/PersonasTree/PersonasTree.js";
import { Jogo, Motivações } from "@/Controlers/AnalysisApi.ts";

function GameCreator() {
  const resultApi = new ResultApi();
  const [gameValues, setgameValues] = useState(resultApi.Inputs);
  function setGameValues(valor: keyof Motivações, acrescimo: number) {
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
  
  const raiz:Jogo = {
    nome: "Jogo",
    imagem: "",
    descricao: "",
    categoria: "",
    quantidade: 0,
    Valores: gameValues
  }
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
              <PersonasTree />
            </TabsContent>
          </Tabs>
        </aside>
        <div className="Results">
          <Resultado jogo={raiz}  />
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default GameCreator;
