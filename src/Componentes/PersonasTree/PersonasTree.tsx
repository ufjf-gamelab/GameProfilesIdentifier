import { Tree } from "react-arborist";
import "./PersonasTree.css";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Dialog } from "@radix-ui/react-dialog";
import { DialogCloseButton } from "./DialogCloseButton";
import { PersonasTreeApi, treeData } from "@/Controlers/TreeApi";
type PersonaProps = {
  arvoreApi: PersonasTreeApi;
  addPersonaHandler: (arvore: String) => void;
  pushNosSelecionados: (uuid: String) => void;
  removeNosSelecionados: (uuid: String) => void;
};

function PersonasTree({
  arvoreApi,
  addPersonaHandler,
  pushNosSelecionados,
  removeNosSelecionados,
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
  arvoreApi,
  
}: {
  node: any;
  style: React.CSSProperties;
  dragHandle?: React.Ref<HTMLDivElement>;
  pushNosSelecionados: (uuid: String) => void;
  removeNosSelecionados: (uuid: String) => void;
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
    <div className="Node" onClick={handleCheck} ref={dragHandle}>
      <div style={style}>
        {"🙂"}
        {node.data.name}
      </div>
      {selected && (
        <div className="checkbox">
          <Checkbox checked={selected} onChange={handleCheck} />
        </div>
      )}
    </div>
  );
}
export default PersonasTree;
