import "./Resultado.css";
import { PersonasTreeApi } from "@/apis/TreeApi";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";

import { ComparativeChart } from "./Graphs/ComparitiveChart/ComparativeChart";
import { VictoryChart } from "./Graphs/VictoryChart/VictoryChart";
import SteamGameApi from "../SteamGameApi/SteamGameApi";

type ResultadoProps = {
  personasTree: PersonasTreeApi;
};

function Resultado({ personasTree }: ResultadoProps) {
  console.log("personasTree",personasTree) 
  const dataset = personasTree.getDataSet();
  const avaregeDataSet = personasTree.getAvaregeDataSet();
  const gameValues = personasTree.arvorePersonas[0].pesos;	
  return (
    <div className="ResultadoCtn">
      <h2>Resultado</h2>
      <Tabs defaultValue="Comparative" className="tabLayouyt">
        <div className="Graphs">
          <TabsContent className="space-y-2" value="Comparative">
            {!!dataset && (
              <ComparativeChart
                chartData={dataset.data}
                titulo="Comparativo"
                personasNomes={dataset.dataKeys}
              ></ComparativeChart>
            )}
          </TabsContent>
          <TabsContent className="space-y-2" value="qFoundry">
            {!!dataset && (
              <VictoryChart
                gameValues={gameValues}
              ></VictoryChart>
            )}
          </TabsContent>
          <TabsContent className="space-y-2" value="Media">
            {!!dataset && (
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
