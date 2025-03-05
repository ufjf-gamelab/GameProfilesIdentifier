import "./GameCreator.css";
import Header from "../../Componentes/Header/Header.js";
import Footer from "../../Componentes/Footer/Footer.js";
import GameFeaturesPicker from "../../Componentes/gameFeaturesPicker/GameFeaturesPicker.js";
import Resultado from "../../Componentes/Results/Resultado.js";
import { useState } from "react";
import ResultApi from "../../Controlers/ResultGameApi.js";
import { GameFeatureProps } from "../../Controlers/Types.ts";


import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs.js";
import PersonasTree from "@/Componentes/PersonasTree/PersonasTree.tsx";
import {  Motivações, PersonasTreeApi, treeData } from "@/Controlers/TreeApi.ts";
import { cloneWithMethods } from "@/Componentes/utils/deepClone.ts";

function selectEditedNode( personasTreeApi: PersonasTreeApi){ 
  const justOne = personasTreeApi.nosSelecionados.length ==1
  if(justOne){
    return personasTreeApi.nosSelecionados[0];
  }else{
    return undefined;
  }
}
function GameCreator() {
  
  const [personasTreeApi, setPersonasTree] = useState<PersonasTreeApi>(new PersonasTreeApi());


  function addPersonaHandler(value: String) {
    const novoEstadoTree = cloneWithMethods(personasTreeApi);
    personasTreeApi.addPersona(
      value
    );
    setPersonasTree(novoEstadoTree);
  }
  function addSelecedNode(uuid: String) {
    const novoEstadoTree = cloneWithMethods(personasTreeApi);
    const no = novoEstadoTree.findbyUUID(novoEstadoTree.tree[0],uuid) ;
   
    novoEstadoTree.nosSelecionados.push(no);
    setPersonasTree(novoEstadoTree);
    console.log(novoEstadoTree.nosSelecionados);

  }
  function removeSelecedNode(uuid: String) {
    const novoEstadoTree = cloneWithMethods(personasTreeApi);
    novoEstadoTree.nosSelecionados = novoEstadoTree.nosSelecionados.filter((item: { id: String; }) => {
      return item.id !== uuid;
    });
    setPersonasTree(novoEstadoTree);
    console.log(novoEstadoTree.nosSelecionados);

  }

  function setPesosValues(uuid: String, valor: keyof Motivações, acrescimo: number) {
    const novoEstadoTree = cloneWithMethods(personasTreeApi);
    const no = personasTreeApi.findbyUUID(personasTreeApi.tree[0], uuid) as treeData;
    if (no) {
      no.pesos[valor] = acrescimo;
      setPersonasTree(novoEstadoTree);
    }
  }
  const gameEditor = selectEditedNode(personasTreeApi);
 
  const gameFeature: GameFeatureProps[] = [
    {
      textLabel: "Ação",
      textdescription: "Foco em destruição e excitação intensa.",
      setValue: (value: number) => setPesosValues(gameEditor!.id,"ação", value),
          valorProp: gameEditor?.pesos.ação! ,

    },
    {
      textLabel: "Social",
      textdescription: " Competição e interação em comunidade.",
      setValue: (value: number) => setPesosValues(gameEditor!.id,"social", value),
        valorProp: gameEditor?.pesos.social !,

    },
    {
      textLabel: "Maestria",
      textdescription: "Desafio e desenvolvimento de estratégias",
      setValue: (value: number) => setPesosValues(gameEditor!.id,"maestria", value),
      valorProp: gameEditor?.pesos.maestria!,

    },
    {
      textLabel: "Conquista",
      textdescription: "Completar objetivos e obter poder.",
      setValue: (value: number) => setPesosValues(gameEditor!.id,"conquista", value),
      valorProp: gameEditor?.pesos.conquista! ,
    
    },
    {
      textLabel: "Imersão",
      textdescription: "Exploração de fantasia e histórias profundas",
      setValue: (value: number) => setPesosValues(gameEditor!.id,"imersão", value),
      valorProp: gameEditor?.pesos.imersão! ,

    },
    {
      textLabel: "Criatividade",
      textdescription: "Personalização e descoberta de novidades.",
      setValue: (value: number) => setPesosValues(gameEditor!.id,"criatividade", value),
      valorProp: gameEditor?.pesos.criatividade! ,

    },
  ];
 
  console.log(gameEditor);
  return (
    <div className="GameCreatorCtn">
      <Header></Header>

      <main>
        <aside className="DataInput">
          <Tabs defaultValue="account" className="tabLayouyt">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Editar Valores</TabsTrigger>
              <TabsTrigger value="password">Selecionar Elementos</TabsTrigger>
            </TabsList>
            <TabsContent className="space-y-2" value="account">
              <GameFeaturesPicker Features={gameFeature}  disabled={ gameEditor===undefined}/>
            </TabsContent>
            <TabsContent className="space-y-2" value="password">
              <PersonasTree 
              addPersonaHandler={addPersonaHandler} 
              pushNosSelecionados ={
                addSelecedNode
              } 
              removeNosSelecionados={
                removeSelecedNode
              }
              
              arvoreApi={personasTreeApi}/>
            </TabsContent>
          </Tabs>
        </aside>
        <div className="Results">
          <Resultado personasTree={personasTreeApi}  />
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default GameCreator;
