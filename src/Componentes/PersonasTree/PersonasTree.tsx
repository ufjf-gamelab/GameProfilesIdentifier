import { Tree } from "react-arborist";
import "./PersonasTree.css";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Dialog } from "@radix-ui/react-dialog";
import { DialogCloseButton } from "./DialogCloseButton";
import { treeData } from "@/Controlers/TreeApi";
type PersonaProps = {
  arvore: treeData[];
  addPersonaHandler: (arvore: String) => void;
  pushNosSelecionados: (uuid: String) => void;
  removeNosSelecionados: (uuid: String) => void;
};

function PersonasTree({
  arvore,
  addPersonaHandler,
  pushNosSelecionados,
  removeNosSelecionados,
}: PersonaProps) {
  console.log(arvore);
  return (
    <div>
      <div className="menuBotoes">
        <DialogCloseButton callback={addPersonaHandler}></DialogCloseButton>
      </div>
      <Tree
        className="Tree"
        initialData={arvore}
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
  
}: {
  node: any;
  style: React.CSSProperties;
  dragHandle?: React.Ref<HTMLDivElement>;
  pushNosSelecionados: (uuid: String) => void;
  removeNosSelecionados: (uuid: String) => void;
}) {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    if (checked) {
      setChecked((checked) => {
        removeNosSelecionados(node.id);
        return !checked;
      });
      return;
    } else {
      setChecked((checked) => {
        pushNosSelecionados(node.id);
        return !checked;
      });
      return;
    }
  };
  return (
    <div className="Node" onClick={handleCheck} ref={dragHandle}>
      <div style={style}>
        {"🙂"}
        {node.data.name}
      </div>
      {checked && (
        <div className="checkbox">
          <Checkbox checked={checked} onChange={handleCheck} />
        </div>
      )}
    </div>
  );
}
export default PersonasTree;
