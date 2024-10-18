import { Slider } from "@mui/joy";
import "./SelectGame.css";
import CircularProgress from "@mui/joy/CircularProgress";
function SelectGame(props: any) {
  const inputs = [
    {
      label: "Ação",
      value: props.ação,
      setValue: props.setAção,
      description: "Foco em destruição e excitação intensa.",
    },
    {
      label: "Social",
      value: props.social,
      setValue: props.setSocial,
      description: " Competição e interação em comunidade.",
    },
    {
      label: "Maestria",
      value: props.maestria,
      setValue: props.setMaestria,
      description: "Desafio e desenvolvimento de estratégias",
    },
    {
      label: "Conquista",
      value: props.conquista,
      setValue: props.setConquista,
      description: "Completar objetivos e obter poder.",
    },
    {
      label: "Imersão",
      value: props.imersão,
      setValue: props.setImersão,
      description: "Exploração de fantasia e histórias profundas",
    },
    {
      label: "Criatividade",
      value: props.criatividade,
      setValue: props.setCriatividade,
      description: "Personalização e descoberta de novidades.",
    },
  ];
  return (
    console.log(props),
    (
      <div className="GameSelectCtn">
        <h2>
          Selecione as Motivações pro seu jogo, e veja quais perfis de Jogadores
          ele agrada
        </h2>
        <section>
          <ul>
            {inputs.map((input, index) => (
              <li key={index}>
                <div className="InputDescription">
                  <Slider
                    color="primary"
                    disabled={false}
                    marks={false}
                    orientation="horizontal"
                    size="md"
                    value={input.value}
                    onChange={(e) =>
                      input.setValue((e.target as HTMLInputElement).value)
                    }
                    valueLabelDisplay="off"
                    variant="soft"
                  />
                  <label>
                    🛈 {input.label}: {input.description}
                  </label>
                </div>

                <label>
                  <CircularProgress
                    determinate
                    size="md"
                    value={input.value}
                    variant="solid"
                  >
                    <h2> {input.value}</h2>
                  </CircularProgress>
                </label>
              </li>
            ))}
          </ul>
        </section>
      </div>
    )
  );
}

export default SelectGame;
