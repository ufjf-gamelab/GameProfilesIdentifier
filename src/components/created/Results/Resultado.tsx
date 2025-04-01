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
  actualResult: "Comparative" | "Media" | "qFoundry" | "steamGames" | "SelectedNode" | "averageChildren" | "sumChildren";
};

function Resultado({ personasTree, actualResult }: ResultadoProps) {
  const dataGenerator = new DataGenerator(personasTree);
  const abosoluteDataset = dataGenerator.getAbsoluteDataSet();
  const selectedDataset = dataGenerator.getAbsoluteSelectedDataSet();
  const averageChildrenDataset = dataGenerator.getAvaregeChildrenDataSet();
  const sumChildrenDataset = dataGenerator.getSumChildrenDataSet();
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
            {actualResult === "SelectedNode" && (
              <ComparativeChart
                chartData={selectedDataset.data}
                titulo="Nó Selecionado"
                personasNomes={selectedDataset.dataKeys}
              ></ComparativeChart>
            )}
          {actualResult === "averageChildren" && (
            <ComparativeChart
              chartData={averageChildrenDataset.data}
              titulo="Média dos filhos"
              personasNomes={averageChildrenDataset.dataKeys}
            ></ComparativeChart>
          )}
            {actualResult === "sumChildren" && (
            <ComparativeChart
              chartData={sumChildrenDataset.data}
              titulo="Soma dos filhos"
              personasNomes={sumChildrenDataset.dataKeys}
            ></ComparativeChart>
          )}
          </div>
        )}
      </div>
      <div className="OperationsPanel">
        
      </div>

    </div>
  );
}

export default Resultado;
