import { Tree } from "react-arborist";
import "./PersonasTree.css";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { DialogCloseButton } from "./DialogCloseButton";
import { PersonasApi } from "@/apis/PersonasApi";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone, faTrash } from '@fortawesome/free-solid-svg-icons'
config.autoAddCss = false

type PersonaProps = {
  arvoreApi: PersonasApi;
  addPersonaHandler: (arvore: String) => void;
  pushNosSelecionados: (uuid: String) => void;
  removeNosSelecionados: (uuid: String) => void;
  mudaNoEditavel: (uuid: String) => void;
  clonaNo: (uuid: String) => void;
  deletaNo: (uuid: String) => void;
  setActualResult: (value: "Comparative" | "Media" | "qFoundry" | "steamGames") => void;

};

function PersonasTree({
  arvoreApi,
  addPersonaHandler,
  pushNosSelecionados,
  removeNosSelecionados,
  mudaNoEditavel,
  clonaNo,
  deletaNo,
  //setActualResult,
}: PersonaProps) {
  return (
    <div>
      <h1 className="PersonasTreeH1">Arvore de Personas</h1>
      <div className="menuBotoes">
        <DialogCloseButton callback={addPersonaHandler}></DialogCloseButton>
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
            deletaNo={deletaNo}
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
  deletaNo,
  arvoreApi,
  
}: {
  node: any;
  style: React.CSSProperties;
  dragHandle?: React.Ref<HTMLDivElement>;
  pushNosSelecionados: (uuid: String) => void;
  removeNosSelecionados: (uuid: String) => void;
  mudaNoEditavel: (uuid: string) => void;
  clonaNo: (uuid: string) => void;
  deletaNo: (uuid: String) => void;
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
    <div className="Node" ref={dragHandle} onClick={() => mudaNoEditavel(node.id)}>
        <section className="NodeContent">
          <Checkbox className="checkbox" checked={selected} onClick={handleCheck} />
          <div style={style}>
            {"🙂"}
            {node.data.name}
          </div>
        </section>
      <section className="NodeButtons">
        <Button onClick={() => clonaNo(node.id)}><FontAwesomeIcon icon={faClone} /></Button>
        <Button onClick={() => deletaNo(node.id)}><FontAwesomeIcon icon={faTrash} /></Button> 

      </section>

    </div>
  );
}
export default PersonasTree;
