
import "./Resultado.css";
import { Component } from "./Graphs/BarChart/BarChart";
import { Button } from "@/components/ui/button";
import { gameValtoData, Jogo } from "@/Controlers/AnalysisApi";

type ResultadoProps = {
  jogo: Jogo
}

function Resultado({jogo}: ResultadoProps) {

  
  return (
    <div className="ResultadoCtn">
      <h2>Resultado</h2>
      <div className="Graphs">
        <Component
          data={
            gameValtoData(jogo.Valores)
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
