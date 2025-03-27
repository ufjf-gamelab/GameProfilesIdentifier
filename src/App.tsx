import "./App.css";
import Header from "./Componentes/Header/Header.tsx";
import Footer from "./Componentes/Footer/Footer.tsx"
import GameFeaturesPicker from "./Componentes/gameFeaturesPicker/GameFeaturesPicker.tsx";
import Resultado from "./Componentes/Results/Resultado.tsx";
import { useReducer } from "react";
import PersonasTree from "@/Componentes/PersonasTree/PersonasTree.tsx";
import {
  PersonasTreeApi,
  TreeReducer,
} from "@/Controlers/TreeApi.ts";
import { getActions } from "@/Controlers/ActionsApi.tsx";

function App() {
  const [estado, dispatch] = useReducer(TreeReducer, new PersonasTreeApi());
  const selectedNode = estado.noEmEdicao;
  const actions =  getActions(selectedNode!, dispatch);
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
export default App;