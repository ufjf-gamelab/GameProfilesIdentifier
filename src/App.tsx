import "./App.css";
import Header from "./components/created/Header/Header.tsx";
import Footer from "./components/created/Footer/Footer.tsx"
import GameFeaturesPicker from "./components/created/gameFeaturesPicker/GameFeaturesPicker.tsx";
import Resultado from "./components/created/Results/Resultado.tsx";
import { useReducer } from "react";
import PersonasTree from "@/components/created/PersonasTree/PersonasTree.tsx";
import {
  PersonasApi,
} from "@/apis/PersonasApi.ts";
import { getActions } from "@/apis/ActionsApi.tsx";
import { TreeReducer } from "./apis/TreeReduce.tsx";
import { Button } from "./components/ui/button.tsx";

function App() {
  const [estado, dispatch] = useReducer(TreeReducer, new PersonasApi());
  type Results = "Comparative" | "Media" | "qFoundry" | "steamGames" | "SelectedNode" | "averageChildren" | "sumChildren";
  const [actualResult, setActualResult] = useReducer<(state: Results, action: React.SetStateAction<Results>) => Results>(
    (state, action) => {
      return action as Results;
    },

    "Comparative" // Initial state
  );

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
                  clonaNo={(value) => {
                    dispatch({ type: "CLONA_PERSONA", value})
                  }}
                  deletaNo={(value) => {
                    dispatch({ type: "DELETA_PERSONA", value})
                  }}
                  arvoreApi={estado}
                  setActualResult={
                    (value) => {
                      setActualResult(value);
                    }
                  }
                />
              </aside>
                
              <div className="Results">
                <Resultado personasTree={estado}
                  actualResult={actualResult}
                  >
                </Resultado>
                <div>
                  <Button className="TabBtn" variant="outline" onClick={() => {
                    setActualResult("Comparative");
                  }}>
                    Comparar Nós
                  </Button>
                  <Button className="TabBtn" variant="outline" onClick={() => {
                    setActualResult("Media");
                  }}>
                    Média dos Nós
                  </Button>
                  <Button className="TabBtn" variant="outline" onClick={() => {
                    setActualResult("qFoundry");
                  }}>
                    Analisar Jogo (Quantic Foundry)
                  </Button>
                  <Button className="TabBtn" variant="outline" onClick={() => {
                    setActualResult("steamGames");
                  }
                  }>
                    Jogos Semelhantes(Steam)
                  </Button>
                </div>
              </div>

              <aside>
                <GameFeaturesPicker
                  Features={actions}
                  editPersonaName={(value) => {
                      dispatch({ type: "SET_PERSONA_NAME", value });
                    }
                  }
                  mostrarNoEmEdicao={() => {
                    setActualResult('SelectedNode');
                    }
                  }
                  mostrarMediaFilhos={() => {
                    setActualResult('averageChildren');
                    }
                  }
                  mostrarSomaFilhos={() => {
                    setActualResult('sumChildren');
                  }}
                  mostrarDifFilhos={() => {
                    setActualResult('diffChildren');
                  }}
                  namePersona={selectedNode?.name}
                  disabled={selectedNode === undefined}
                />
              </aside>
            </main>
            <Footer></Footer>
        </div> 
  );
}
export default App;