
import "./Resultado.css";
import { Component } from "./Graphs/BarChart/BarChart";
import { Button } from "@/components/ui/button";
function Resultado(props: any) {
  const resultApi = props.resultApi;

  
  const ResultadoTexto = resultApi.getTextoResultado();
  return (
    <div className="ResultadoCtn">
      <h2>Resultado</h2>
      <div>
        <Component
          data={
            [
              { month: "Janeiro", desktop: 10 },
              { month: "Fevereiro", desktop: 20 },
              { month: "Março", desktop: 30 },
              { month: "Abril", desktop: 40 },
            ]
          }
          titulo="Resultado"
          descricao={"ResultadoTexto"}
        ></Component>
      </div>
      <div className="OperationsPanel">
          <Button onClick={() => {resultApi.saveResult()}}>Salvar</Button>
          <Button onClick={() => {resultApi.saveResult()}}>Salvar</Button>
          <Button onClick={() => {resultApi.saveResult()}}>Salvar</Button>
      </div>
    </div>
  );
}

export default Resultado;
