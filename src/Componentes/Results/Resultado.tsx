
import "./Resultado.css";
import { Component } from "./Graphs/BarChart/BarChart";
import { PersonasTreeApi, treeData } from "@/Controlers/TreeApi";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";

import { ComparativeChart } from "./Graphs/ComparitiveChart/ComparativeChart";

type ResultadoProps = {
  personasTree: PersonasTreeApi
}

function Resultado({personasTree}: ResultadoProps) {
 
  const dataset = personasTree.compartiveDataSet(personasTree.nosSelecionados)
  //const dataKeys = dataset.dataKeys;
  console.log(dataset)
  return (
    <div className="ResultadoCtn">
      <h2>Resultado</h2>
      <Tabs defaultValue="account" className="tabLayouyt">
       
        <div className="Graphs">
          <TabsContent className="space-y-2" value="SeeGame">
            <Component
              data={personasTree.tree[0].gameValtoData()}
              titulo="Resultado"
              descricao={"ResultadoTexto"}
            ></Component>
          </TabsContent>
          <TabsContent className="space-y-2" value="Comparative">
            {
              !!dataset &&
          <ComparativeChart

              chartData={dataset.data}
              titulo="Comparativo"
              personasNomes={dataset.dataKeys}
            ></ComparativeChart>
            }
         
          </TabsContent>
        </div>
          <TabsList className="OperationsPanel">
            <TabsTrigger className="TabBtn" value="SeeGame">Ver Jogo</TabsTrigger>
            <TabsTrigger className="TabBtn" value="Comparative">Tree</TabsTrigger>
          </TabsList>
     
      </Tabs>
      
         
     
    </div>
  );
}

export default Resultado;
