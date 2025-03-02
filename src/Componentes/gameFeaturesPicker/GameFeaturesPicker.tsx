import "./GameFeaturesPicker.css";

import GameFeature from "./gameFeature/gameFeature";
import {  SelectGameProps } from "@/Controlers/Features/FeaturesData";



function GameFeaturesPicker({ Features }: SelectGameProps) {
  
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
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    )
  );
}

export default GameFeaturesPicker;
