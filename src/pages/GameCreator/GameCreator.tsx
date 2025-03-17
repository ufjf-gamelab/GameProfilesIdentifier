import "./GameCreator.css";
import Header from "../../Componentes/Header/Header.js";
import Footer from "../../Componentes/Footer/Footer.js";
import GameFeaturesPicker from "../../Componentes/gameFeaturesPicker/GameFeaturesPicker.js";
import Resultado from "../../Componentes/Results/Resultado.js";
import { useReducer } from "react";
import PersonasTree from "@/Componentes/PersonasTree/PersonasTree.tsx";
import {
  PersonasTreeApi,
  selectEditedNode,
  TreeReducer,
} from "@/Controlers/TreeApi.ts";
import { getActions } from "@/Controlers/ActionsApi.tsx";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarProvider } from "@/components/ui/sidebar.tsx";

function GameCreator() {
  const [estado, dispatch] = useReducer(TreeReducer, new PersonasTreeApi());
  const selectedNode = selectEditedNode(estado);
  const actions =  getActions(selectedNode!, dispatch);
  console.log(estado);
  //console.log(gameEditor);
  return (
        <div className="GameCreatorCtn">
          <Header></Header>
            <main>
              <SidebarProvider>
                <Sidebar side="left">
                  <SidebarHeader>Seleção de Personas</SidebarHeader>
                  <SidebarContent>
                    <SidebarGroup>
                      <SidebarGroupContent>
                        <SidebarMenu>
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
                        </SidebarMenu>
                      </SidebarGroupContent>
                    </SidebarGroup>
                  </SidebarContent>
                </Sidebar>
                <div className="Results">
                  <Resultado personasTree={estado} />
                </div>

                <Sidebar side="right">
                  <SidebarHeader>Editar Persona</SidebarHeader>
                  <SidebarContent>
                    <SidebarGroup>
                      <SidebarGroupContent>
                        <SidebarMenu>
                        <GameFeaturesPicker
                          Features={actions}
                          disabled={selectedNode === undefined}
                        />
                        </SidebarMenu>
                      </SidebarGroupContent>
                    </SidebarGroup>
                  </SidebarContent>
                </Sidebar>

              </SidebarProvider>
            </main>
            <Footer></Footer>
        </div> 
  );
}

export default GameCreator;