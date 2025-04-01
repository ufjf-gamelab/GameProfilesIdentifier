import { Button } from "@/components/ui/button";
import "./GameFeaturesPicker.css";

import GameFeature from "./gameFeature/gameFeature";
import {  SelectGameProps } from "@/apis/Types/TypesProps";
import { DialogCloseButton } from "../PersonasTree/DialogCloseButton";
import { DialogNameButton } from "./DialogNameButton";



function GameFeaturesPicker({ Features,disabled,namePersona,editPersonaName,mostrarNoEmEdicao, mostrarMediaFilhos, mostrarSomaFilhos}: SelectGameProps) {
  if(!disabled){
  return (
    (
      <div className="GameSelectCtn">
        <section className="editPersonaName">
          <h1>nó em edição: {namePersona}</h1>
          <section style={
            {display: "flex", flexDirection: "row",gap:'10px',justifyContent: "flex-end", alignItems: "center"} 
          } >

            <DialogNameButton callback={editPersonaName}></DialogNameButton>
          </section>

        </section>
        <section className="GameSelectCtn__btns">

          <Button onClick={
            () => mostrarMediaFilhos()
          }>
            media dos filhos
          </Button>
          <Button onClick={
            () => mostrarSomaFilhos()
          }>
            soma dos filhos
          </Button>
          <Button onClick={() => mostrarNoEmEdicao()}>valores absolutos</Button>
        </section>

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
