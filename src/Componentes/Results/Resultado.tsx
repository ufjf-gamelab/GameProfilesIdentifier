
import "./Resultado.css";
import { Component } from "./Graphs/BarChart/BarChart";
import { Button } from "@/components/ui/button";
import { treeData } from "@/Controlers/TreeApi";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import gameFeature from "../gameFeaturesPicker/gameFeature/gameFeature";
import GameFeaturesPicker from "../gameFeaturesPicker/GameFeaturesPicker";
import PersonasTree from "../PersonasTree/PersonasTree";
import { ComparativeChart } from "./Graphs/ComparitiveChart/ComparativeChart";

type ResultadoProps = {
  arvore: treeData
}

function Resultado({arvore}: ResultadoProps) {
 
  
  return (
    <div className="ResultadoCtn">
      <h2>Resultado</h2>
      <Tabs defaultValue="account" className="tabLayouyt">
       
        <div className="Graphs">
          <TabsContent className="space-y-2" value="SeeGame">
            <Component
              data={arvore.gameValtoData()}
              titulo="Resultado"
              descricao={"ResultadoTexto"}
            ></Component>
          </TabsContent>
          <TabsContent className="space-y-2" value="Comparative">
            <ComparativeChart
            
            ></ComparativeChart>
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
