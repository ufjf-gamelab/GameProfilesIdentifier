import "./GameCreator.css";
import Header from "../../Componentes/Header/Header.js";
import Footer from "../../Componentes/Footer/Footer.js";
import GameFeaturesPicker from "../../Componentes/gameFeaturesPicker/GameFeaturesPicker.js";
import Resultado from "../../Componentes/Results/Resultado.js";
import { useReducer } from "react";
import PersonasTree from "@/Componentes/PersonasTree/PersonasTree.tsx";
import {
  PersonasTreeApi,
  TreeReducer,
} from "@/Controlers/TreeApi.ts";
import { getActions } from "@/Controlers/ActionsApi.tsx";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarInset, SidebarMenu, SidebarProvider } from "@/components/ui/sidebar.tsx";

function GameCreator() {
  const [estado, dispatch] = useReducer(TreeReducer, new PersonasTreeApi());
  const selectedNode = estado.noEmEdicao;
  const actions =  getActions(selectedNode!, dispatch);
  console.log(estado);
  console.log("aaaaaaaaaaaaaaaah")
  //console.log(gameEditor);
  return (
        <div className="GameCreatorCtn">
          <Header></Header>
            <main>
              <aside>
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
                  mudaNoEditavel={(value) => {
                    dispatch({ type: "MUDA_EDITABLE_NODE", value})
                  }}
                  arvoreApi={estado}
                />
              </aside>
                
              <div className="Results">
                <Resultado personasTree={estado} />
              </div>

              <aside>
                <GameFeaturesPicker
                  Features={actions}
                  disabled={selectedNode === undefined}
                />
              </aside>
            </main>
            <Footer></Footer>
        </div> 
  );
}

export default GameCreator;