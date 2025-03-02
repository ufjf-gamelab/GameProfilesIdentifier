
import "./Resultado.css";
import { Component } from "./Graphs/BarChart/BarChart";
import { Button } from "@/components/ui/button";
import { treeData } from "@/Controlers/TreeApi";

type ResultadoProps = {
  arvore: treeData
}

function Resultado({arvore}: ResultadoProps) {
 
  
  return (
    <div className="ResultadoCtn">
      <h2>Resultado</h2>
      <div className="Graphs">
        <Component
          data={
            arvore.gameValtoData()
          }
          titulo="Resultado"
          descricao={"ResultadoTexto"}
        ></Component>
      </div>
      <div className="OperationsPanel">
          <Button >Salvar</Button>
          <Button >Salvar</Button>
          <Button >Salvar</Button>
      </div>
    </div>
  );
}

export default Resultado;
