
import "./Resultado.css";
import { Component } from "./Graphs/BarChart/BarChart";
import { Button } from "@/components/ui/button";
type gameValues = {
  ação: number
  social: number
  maestria: number
  conquista: number
  imersão: number
  criatividade: number
}
type ResultadoProps = {
  gameValues: gameValues
  resultApi: any
}
function gameValtoData(gameValues:gameValues){
  return [
    { month: "Ação", dataKey: gameValues.ação },
    { month: "Social", dataKey: gameValues.social },
    { month: "Maestria", dataKey: gameValues.maestria },
    { month: "Conquista", dataKey: gameValues.conquista },
    { month: "Imersão", dataKey: gameValues.imersão },
    { month: "Criatividade", dataKey: gameValues.criatividade },
  ]
}
function Resultado({gameValues,resultApi}: ResultadoProps) {

  
  return (
    <div className="ResultadoCtn">
      <h2>Resultado</h2>
      <div className="Graphs">
        <Component
          data={
            gameValtoData(gameValues)
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
