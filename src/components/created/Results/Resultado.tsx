import "./Resultado.css";
import {  PersonasApi } from "@/apis/PersonasApi";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";

import { ComparativeChart } from "./Graphs/ComparitiveChart/ComparativeChart";
import { VictoryChart } from "./Graphs/VictoryChart/VictoryChart";
import SteamGameApi from "../SteamGameApi/SteamGameApi";
import { DataGenerator } from "@/apis/DataGeneratorApi";

type ResultadoProps = {
  personasTree: PersonasApi;
  actualResult:"Comparative" | "Media" | "qFoundry" | "steamGames";
  setActualResult: (value: "Comparative" | "Media" | "qFoundry" | "steamGames") => void;
};

function Resultado({ personasTree, actualResult,setActualResult }: ResultadoProps) {
  const dataGenerator = new DataGenerator(personasTree);
  const abosoluteDataset = dataGenerator.getAbsoluteDataSet();
  const avaregeDataSet = dataGenerator.getAvaregeDataSet();
  const gameValues = personasTree.arvorePersonas[0].pesos;	

  
  
   
  return (
    <div className="ResultadoCtn">
      <h2>Resultado</h2>
      <Tabs defaultValue="Comparative" className="tabLayouyt">
        <div className="Graphs">
          <TabsContent className="space-y-2" value="Comparative">
            {!!abosoluteDataset && (
              <ComparativeChart
                chartData={abosoluteDataset.data}
                titulo="Comparativo"
                personasNomes={abosoluteDataset.dataKeys}
              ></ComparativeChart>
            )}
          </TabsContent>
          <TabsContent className="space-y-2" value="qFoundry">
            {!!abosoluteDataset && (
              <VictoryChart
                gameValues={gameValues}
              ></VictoryChart>
            )}
          </TabsContent>
          <TabsContent className="space-y-2" value="Media">
            {!!abosoluteDataset && (
              <ComparativeChart
                chartData={avaregeDataSet.data}
                titulo="Comparativo"
                personasNomes={avaregeDataSet.dataKeys}
              ></ComparativeChart>
            )}
          </TabsContent>
          <TabsContent className="space-y-2" value="steamGames">
            <SteamGameApi jogo={personasTree.arvorePersonas[0]}/>
          </TabsContent>
        </div>

        <TabsList className="OperationsPanel">
          <TabsTrigger className="TabBtn" value="Comparative">
            Comparar Personas
          </TabsTrigger>
          <TabsTrigger className="TabBtn" value="Media">
            Média
          </TabsTrigger>
          <TabsTrigger className="TabBtn" value="qFoundry">
            QuanticFoundryPersonas
          </TabsTrigger>
          <TabsTrigger className="TabBtn" value="steamGames">
            Steam Games
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}

export default Resultado;
