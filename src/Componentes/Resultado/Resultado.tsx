import React from 'react';
import { VictoryChart, VictoryBar,VictoryArea, VictoryPolarAxis, VictoryTheme } from 'victory';
import selectGameAPI from '../../Controlers/SelectGameApi';
import resultApi from '../../Controlers/ResultGameApi';
function Resultado() {
    let  categorias =resultApi.Nomes
    return (
      <div>
        <div>
          <h2>Resultado</h2>
          <div>
          <VictoryChart polar
            theme={VictoryTheme.material}
          >
            {
              categorias?.map((d, i) => {
                return (
                  <VictoryPolarAxis dependentAxis
                    key={i}
                    label={d}
                    labelPlacement="perpendicular"
                    style={{ tickLabels: { fill: "none" } }}
                    axisValue={d}
                  />
                );
              })
            }
             <VictoryArea
            style={{ data: { fill: "#00000080", width: 100 } }}
            data={[
              { x: categorias[0], y:  resultApi.Resultados[0].agradabilidade },
              { x: categorias[1], y: resultApi.Resultados[1].agradabilidade },
              { x: categorias[2], y: resultApi.Resultados[2].agradabilidade },
              { x: categorias[3], y: resultApi.Resultados[3].agradabilidade },
              { x: categorias[4], y: resultApi.Resultados[4].agradabilidade },
              { x: categorias[5], y:  resultApi.Resultados[5].agradabilidade },
              { x: categorias[6], y:  resultApi.Resultados[6].agradabilidade },
              { x: categorias[7], y:  resultApi.Resultados[7].agradabilidade },
              { x: categorias[8], y:  resultApi.Resultados[8].agradabilidade }

            ]}
          />
            </VictoryChart>
          </div>
        </div>
      </div>


    )

}


export default Resultado