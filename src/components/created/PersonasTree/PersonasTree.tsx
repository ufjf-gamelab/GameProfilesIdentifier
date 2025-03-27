import { Tree } from "react-arborist";
import "./PersonasTree.css";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Dialog } from "@radix-ui/react-dialog";
import { DialogCloseButton } from "./DialogCloseButton";
import { PersonasTreeApi } from "@/apis/TreeApi";
type PersonaProps = {
  arvoreApi: PersonasTreeApi;
  addPersonaHandler: (arvore: String) => void;
  pushNosSelecionados: (uuid: String) => void;
  removeNosSelecionados: (uuid: String) => void;
  mudaNoEditavel: (uuid: String) => void;
};

function PersonasTree({
  arvoreApi,
  addPersonaHandler,
  pushNosSelecionados,
  removeNosSelecionados,
  mudaNoEditavel,
}: PersonaProps) {
  return (
    <div>
      <div className="menuBotoes">
        <DialogCloseButton callback={addPersonaHandler}></DialogCloseButton>
      </div>
      <Tree
        className="Tree"
        initialData={arvoreApi.tree}
        openByDefault={true}
        height={1000}
        rowHeight={50}
        overscanCount={1}
        indent={24}
        paddingTop={30}
        paddingBottom={10}
        padding={25 /* sets both */}
      >
        {(nodeProps) => (
          <Node
            {...nodeProps}
            pushNosSelecionados={pushNosSelecionados}
            removeNosSelecionados={removeNosSelecionados}
            mudaNoEditavel={mudaNoEditavel}
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
  arvoreApi,
  
}: {
  node: any;
  style: React.CSSProperties;
  dragHandle?: React.Ref<HTMLDivElement>;
  pushNosSelecionados: (uuid: String) => void;
  removeNosSelecionados: (uuid: String) => void;
  mudaNoEditavel: (uuid: string) => void;
  arvoreApi:PersonasTreeApi
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
      <div className="flex-row" onClick={handleCheck}>
          <div className="checkbox">
            <Checkbox checked={selected} onChange={handleCheck} />
          </div>
        <div style={style}>
          {"🙂"}
          {node.data.name}
        </div>
      </div>
      <Button onClick={() => mudaNoEditavel(node.id)}>🖋️</Button>
    </div>
  );
}
export default PersonasTree;
