import "./GameFeaturesPicker.css";

import GameFeature from "./gameFeature/gameFeature";
import {  SelectGameProps } from "@/apis/Types";



function GameFeaturesPicker({ Features,disabled }: SelectGameProps) {
  if(!disabled){
  return (
    (
      <div className="GameSelectCtn">
        <h2>
            Ao selecionar os Motivações do seu jogo abaixo, um grafico será gerado com o resultado da taxa de agradabilidade estimada para cada perfil de jogador.
        </h2>
        <section>
          <ul>
            {Features.map((feature, index) => (
              <li key={index}>
                <GameFeature
                  textLabel={feature.textLabel}
                  textdescription={feature.textdescription}
                  setValue={feature.setValue}
                  valorProp={feature.valorProp}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    )
  );
  }else{
    return (
      (
        <div className="GameSelectCtn">
          <h2>
              Selecione um nó no gráfico a esquerda para editar as motivações.
              Apenas um nó pode ser editado por vez.
          </h2>
        </div>
      )
    );
  }
}

export default GameFeaturesPicker;
