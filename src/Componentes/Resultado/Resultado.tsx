import {
  VictoryChart,
  VictoryArea,
  VictoryPolarAxis,
  VictoryTheme,
} from "victory";
import "./Resultado.css";
function Resultado(props: any) {
  const resultApi = props.resultApi;
  let categorias = resultApi.Nomes;
  resultApi.Inputs.ação = props.ação;
  resultApi.Inputs.social = props.social;
  resultApi.Inputs.maestria = props.maestria;
  resultApi.Inputs.conquista = props.conquista;
  resultApi.Inputs.imersão = props.imersão;
  resultApi.Inputs.criatividade = props.criatividade;
  
  const ResultadoTexto = resultApi.getTextoResultado();
  return (
    <div className="ResultadoCtn">
      <h2>Resultado</h2>
      <div>
        <VictoryChart polar theme={VictoryTheme.material}>
          {categorias?.map((nome: any, i: any) => {
            return (
              <VictoryPolarAxis
                dependentAxis
                key={i}
                
                label={nome + '\n' + resultApi.Agradabilidades[i].agradabilidade.toFixed(0)+"%" }
                labelPlacement="perpendicular"
                style={{ tickLabels: { fill: "none" } }}
                axisValue={nome}
              />
            );
          })}
          <VictoryArea
            style={{ data: { fill: "#00000080", width: 100 } }}
            data={[
              {
                x: categorias[0],
                y: resultApi.Agradabilidades[0].agradabilidade,
              },
              {
                x: categorias[1],
                y: resultApi.Agradabilidades[1].agradabilidade,
              },
              {
                x: categorias[2],
                y: resultApi.Agradabilidades[2].agradabilidade,
              },
              {
                x: categorias[3],
                y: resultApi.Agradabilidades[3].agradabilidade,
              },
              {
                x: categorias[4],
                y: resultApi.Agradabilidades[4].agradabilidade,
              },
              {
                x: categorias[5],
                y: resultApi.Agradabilidades[5].agradabilidade,
              },
              {
                x: categorias[6],
                y: resultApi.Agradabilidades[6].agradabilidade,
              },
              {
                x: categorias[7],
                y: resultApi.Agradabilidades[7].agradabilidade,
              },
              {
                x: categorias[8],
                y: resultApi.Agradabilidades[8].agradabilidade,
              },
            ]}
          />
        </VictoryChart>
      </div>
      <div className="resultText">
        <br />
        {ResultadoTexto.nomeMaiorElemento !== "" ? (
          
          <>
            {"O perfil que mais gostaria do seu jogo é: "}
            {ResultadoTexto.nomeMaiorElemento + "," + ResultadoTexto.textoPrimeiro}
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Resultado;
