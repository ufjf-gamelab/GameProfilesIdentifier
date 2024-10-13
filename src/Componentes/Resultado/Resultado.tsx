import React from 'react';
import { VictoryChart, VictoryBar,VictoryArea, VictoryPolarAxis, VictoryTheme } from 'victory';
import selectGameAPI from '../../Controlers/SelectGameApi';

function Resultado() {
    let  categorias =[ selectGameAPI.Perfis('Ação'),
                        selectGameAPI.Perfis('Social'),
                        selectGameAPI.Perfis('Maestria'),
                        selectGameAPI.Perfis('Conquista'),
                        selectGameAPI.Perfis('Imersão'),
                        selectGameAPI.Perfis('Criatividade')
                      ]
    
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
              { x: categorias[0], y: selectGameAPI.Resultado.ação },
              { x: categorias[1], y: selectGameAPI.Resultado.conquista },
              { x: categorias[2], y: selectGameAPI.Resultado.criatividade },
              { x: categorias[3], y: selectGameAPI.Resultado.imersão },
              { x: categorias[4], y: selectGameAPI.Resultado.maestria },
              { x: categorias[5], y: selectGameAPI.Resultado.social }

            ]}
          />
            </VictoryChart>
          </div>
        </div>
      </div>


    )

}


export default Resultado