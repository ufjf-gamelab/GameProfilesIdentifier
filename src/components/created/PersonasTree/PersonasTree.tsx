import { Tree } from "react-arborist";
import "./PersonasTree.css";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { DialogCloseButton } from "./DialogCloseButton";
import { PersonasApi } from "@/apis/PersonasApi";
type PersonaProps = {
  arvoreApi: PersonasApi;
  addPersonaHandler: (arvore: String) => void;
  pushNosSelecionados: (uuid: String) => void;
  removeNosSelecionados: (uuid: String) => void;
  mudaNoEditavel: (uuid: String) => void;
  clonaNo: (uuid: String) => void;
  setActualResult: (value: "Comparative" | "Media" | "qFoundry" | "steamGames") => void;

};

function PersonasTree({
  arvoreApi,
  addPersonaHandler,
  pushNosSelecionados,
  removeNosSelecionados,
  mudaNoEditavel,
  clonaNo,
  setActualResult,
}: PersonaProps) {
  return (
    <div>
      <h1>Ações em bloco</h1>
      <div className="menuBotoes">
        <DialogCloseButton callback={addPersonaHandler}></DialogCloseButton>
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
      <Tree
        className="Tree"
        initialData={arvoreApi.arvorePersonas}
        openByDefault={true}
        rowHeight={50}
        overscanCount={1}
        indent={24}
        width={'100%'}
 
      >
        {(nodeProps) => (
          <Node
            {...nodeProps}
            pushNosSelecionados={pushNosSelecionados}
            removeNosSelecionados={removeNosSelecionados}
            mudaNoEditavel={mudaNoEditavel}
            clonaNo = {clonaNo}
            arvoreApi={arvoreApi}
          />
        )}
      </Tree>
    </div>
  );
}

function Node({
  node,
  style,
  dragHandle,
  pushNosSelecionados,
  removeNosSelecionados,
  mudaNoEditavel,
  clonaNo,
  arvoreApi,
  
}: {
  node: any;
  style: React.CSSProperties;
  dragHandle?: React.Ref<HTMLDivElement>;
  pushNosSelecionados: (uuid: String) => void;
  removeNosSelecionados: (uuid: String) => void;
  mudaNoEditavel: (uuid: string) => void;
  clonaNo: (uuid: string) => void;
  arvoreApi:PersonasApi
}) {
  const  selected = arvoreApi.areSelected(node.id)
  const handleCheck = () => {
    
    if(selected){
      removeNosSelecionados(node.id)

    }else{
      pushNosSelecionados(node.id)
    }
    
  };
  return (
    <div className="Node" ref={dragHandle}>
        <section className="NodeContent">
          <Checkbox className="checkbox" checked={selected} onClick={handleCheck} />
          <div style={style}>
            {"🙂"}
            {node.data.name}
          </div>
        </section>
      <section className="NodeButtons">
        <Button onClick={() => mudaNoEditavel(node.id)}>🖋️</Button>
        <Button onClick={() => clonaNo(node.id)}>🟥</Button>
      </section>

    </div>
  );
}
export default PersonasTree;
