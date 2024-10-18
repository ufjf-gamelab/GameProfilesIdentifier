import "./SelectGame.css";

function SelectGame(props: any) {
  const inputs = [
    {label: "Ação", value: props.ação, setValue: props.setAção, description:"bla bla" },
    {label: "Social", value: props.social, setValue: props.setSocial, description:"bla bla" },
    {label: "Maestria", value: props.maestria, setValue: props.setMaestria, description:"bla bla" },
    {label: "Conquista",value: props.conquista,setValue: props.setConquista, description:"bla bla",},
    {label: "Imersão", value: props.imersão, setValue: props.setImersão, description:"bla bla" },
    {label: "Criatividade",value: props.criatividade,setValue: props.setCriatividade, description:"bla bla",},
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
                    <input
                    value={input.value}
                    onChange={(e) => input.setValue(e.target.value)}
                    type="range"
                    min="0"
                    max="100"
                    />
                    <label>{input.description}</label>
                </div>
                
                <label>
                  {input.label}
                  <br />
                  {input.value + "%"}
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
