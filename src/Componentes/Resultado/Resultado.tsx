import React, { useEffect, useState } from 'react';
import { VictoryChart, VictoryBar,VictoryArea, VictoryPolarAxis, VictoryTheme } from 'victory';
import resultApi from '../../Controlers/ResultGameApi';
import { useNavigate } from 'react-router-dom';

function Resultado() {
    let  categorias =resultApi.Nomes
    const navigate = useNavigate();

    console.log(resultApi.Resultados) 
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
              { x: categorias[0], y:  resultApi.Agradabilidades[0].agradabilidade },
              { x: categorias[1], y: resultApi.Agradabilidades[1].agradabilidade },
              { x: categorias[2], y: resultApi.Agradabilidades[2].agradabilidade },
              { x: categorias[3], y: resultApi.Agradabilidades[3].agradabilidade },
              { x: categorias[4], y: resultApi.Agradabilidades[4].agradabilidade },
              { x: categorias[5], y:  resultApi.Agradabilidades[5].agradabilidade },
              { x: categorias[6], y:  resultApi.Agradabilidades[6].agradabilidade },
              { x: categorias[7], y:  resultApi.Agradabilidades[7].agradabilidade },
              { x: categorias[8], y:  resultApi.Agradabilidades[8].agradabilidade }

            ]}
          />
            </VictoryChart>
          </div>
          <button onClick={()=>{                            navigate('/');
  }}>Voltar</button>
        </div>
      </div>


    )

}


export default Resultado