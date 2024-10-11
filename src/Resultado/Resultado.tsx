import React from 'react';
import { VictoryChart } from 'victory';

function Resultado() {

    return (
        <h2>Resultado</h2>
        <div>
  <VictoryChart
    theme={VictoryTheme.material}>
    <VictoryArea data={sampleData}/>
    <VictoryAxis/>
  </VictoryChart>
  <VictoryChart polar
    theme={VictoryTheme.material}
  >
    <VictoryArea data={sampleData}/>
    <VictoryPolarAxis/>
  </VictoryChart>
</div>

    )

}


export default Resultado