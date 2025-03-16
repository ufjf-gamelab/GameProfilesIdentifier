import "./GameCreator.css";
import Header from "../../Componentes/Header/Header.js";
import Footer from "../../Componentes/Footer/Footer.js";
import GameFeaturesPicker from "../../Componentes/gameFeaturesPicker/GameFeaturesPicker.js";
import Resultado from "../../Componentes/Results/Resultado.js";
import { useReducer, useState } from "react";
import ResultApi from "../../Controlers/ResultGameApi.js";
import { GameFeatureProps } from "../../Controlers/Types.ts";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs.js";
import PersonasTree from "@/Componentes/PersonasTree/PersonasTree.tsx";
import {
  getActions,
  PersonasTreeApi,
  selectEditedNode,
  TreeReducer,
} from "@/Controlers/TreeApi.ts";
function GameCreator() {
  const [estado, dispatch] = useReducer(TreeReducer, new PersonasTreeApi());
  const selectedNode = selectEditedNode(estado);
  const actions =  getActions(selectedNode!, dispatch);
  
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
              <GameFeaturesPicker
                Features={actions}
                disabled={selectedNode === undefined}
              />
            </TabsContent>
            <TabsContent className="space-y-2" value="password">
              <PersonasTree
                addPersonaHandler={(value) => {
                  dispatch({ type: "ADD_PERSONA", value });
                }}
                pushNosSelecionados={(value) => {
                  dispatch({ type: "ADD_SELECTED_NODE", value });
                }}
                removeNosSelecionados={(value) => {
                  dispatch({ type: "REMOVE_SELECTED_NODE", value });
                }}
                arvoreApi={estado}
              />
            </TabsContent>
          </Tabs>
        </aside>
        <div className="Results">
          <Resultado personasTree={estado} />
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default GameCreator;
