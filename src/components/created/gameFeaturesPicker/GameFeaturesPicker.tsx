import { Button } from "@/components/ui/button";
import "./GameFeaturesPicker.css";

import GameFeature from "./gameFeature/gameFeature";
import {  SelectGameProps } from "@/apis/Types/TypesProps";
import { DialogCloseButton } from "../PersonasTree/DialogCloseButton";
import { DialogNameButton } from "./DialogNameButton";



function GameFeaturesPicker({ Features,disabled,namePersona,editPersonaName,mostrarNoEmEdicao, mostrarMediaFilhos, mostrarSomaFilhos,mostrarDifFilhos}: SelectGameProps) {
  if(!disabled){
  return (
    (
      <div className="GameSelectCtn">
        <section className="editPersonaName">
          <h1>Nó em edição: {namePersona}</h1>
         

        </section>
        <section className="GameSelectCtn__btns">

          <Button  variant={"outline"} onClick={
            () => mostrarMediaFilhos()
          }>
            Média dos filhos
          </Button>
          <Button  variant={"outline"}onClick={
            () => mostrarSomaFilhos()
          }>
            Soma dos filhos
          </Button>
          <Button  variant={"outline"}onClick={
            () => mostrarDifFilhos()
          }>
            Comparar filhos
          </Button>
          <Button  variant={"outline"}onClick={() => mostrarNoEmEdicao()}>valores absolutos</Button>
          <DialogNameButton callback={editPersonaName}></DialogNameButton>

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
