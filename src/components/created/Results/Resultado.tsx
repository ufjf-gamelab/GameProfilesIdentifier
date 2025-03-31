import "./Resultado.css";
import { PersonasApi } from "@/apis/PersonasApi";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";

import { ComparativeChart } from "./Graphs/ComparitiveChart/ComparativeChart";
import { VictoryChart } from "./Graphs/VictoryChart/VictoryChart";
import SteamGameApi from "../SteamGameApi/SteamGameApi";
import { DataGenerator } from "@/apis/DataGeneratorApi";
import { Button } from "@/components/ui/button";

type ResultadoProps = {
  personasTree: PersonasApi;
  actualResult: "Comparative" | "Media" | "qFoundry" | "steamGames";
  setActualResult: (value: "Comparative" | "Media" | "qFoundry" | "steamGames") => void;
};

function Resultado({ personasTree, actualResult, setActualResult }: ResultadoProps) {
  const dataGenerator = new DataGenerator(personasTree);
  const abosoluteDataset = dataGenerator.getAbsoluteDataSet();
  const avaregeDataSet = dataGenerator.getAvaregeDataSet();
  const gameValues = personasTree.arvorePersonas[0].pesos;	

  return (
    <div className="ResultadoCtn">
      <h2>Resultado</h2>
      <div className="TabLayout">
        {!!abosoluteDataset && (
          <div className="=graphs">
            {actualResult === "Comparative" && (
              <ComparativeChart
                chartData={abosoluteDataset.data}
                titulo="Comparativo"
                personasNomes={abosoluteDataset.dataKeys}
              ></ComparativeChart>
            )}
            {actualResult === "Media" && (
              <ComparativeChart
                chartData={avaregeDataSet.data}
                titulo="Comparativo"
                personasNomes={avaregeDataSet.dataKeys}
              ></ComparativeChart>
            )}
            {actualResult === "qFoundry" && (
              <VictoryChart
                gameValues={gameValues}
              ></VictoryChart>
            )}
            {actualResult === "steamGames" && (
              <SteamGameApi
                jogo={personasTree.arvorePersonas[0]}
              ></SteamGameApi>
            )}

          </div>
        )}
      </div>
      <div className="OperationsPanel">
        <Button className="TabBtn" variant="outline" onClick={() => {
          setActualResult("Comparative");
        }}>
          Comparativo
        </Button>
        <Button className="TabBtn" variant="outline" onClick={() => {
          setActualResult("Media");
        }}>
          Média
        </Button>
        <Button className="TabBtn" variant="outline" onClick={() => {
          setActualResult("qFoundry");
        }}>
          Quantic Foundry
        </Button>
        <Button className="TabBtn" variant="outline" onClick={() => {
          setActualResult("steamGames");
        }
        }>
          Steam Games
        </Button>
      </div>

    </div>
  );
}

export default Resultado;
