import "./SelectGame.css";
import CircularProgress from "@mui/joy/CircularProgress";
import { Slider } from "@/components/ui/slider"
import GameFeature from "../gameFeature/gameFeature";
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
            Ao selecionar os Motivações do seu jogo abaixo, um grafico será gerado com o resultado da taxa de agradabilidade estimada para cada perfil de jogador.
        </h2>
        <section>
          <ul>
            {inputs.map((input, index) => (
              <li key={index}>
                <GameFeature
                  textLabel={input.label}
                  textdescription={input.description}
                  setValue={input.setValue}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    )
  );
}

export default SelectGame;
