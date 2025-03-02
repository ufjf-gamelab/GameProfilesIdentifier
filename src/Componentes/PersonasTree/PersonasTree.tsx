
import { Tree } from 'react-arborist';
import './PersonasTree.css';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Dialog } from '@radix-ui/react-dialog';
import { DialogCloseButton } from './DialogCloseButton';
function PersonasTree() {
 
  const [data, setData] = useState([
    {
      id: "Jogo",
      name: "Jogo",
      children: [
      ]
    },
  ]);
 
  function addPersona( valor: String) {
    data[0].children.push(
      {
      id: uuidv4(),
      name: valor,
      children:[]
    }as never
    );
    setData([...data]);
    
  } 

  return (
  
    <div>
      <div className='menuBotoes'>
        <DialogCloseButton callback={addPersona}></DialogCloseButton>
      </div>
     

      <Tree className='Tree'
            initialData={data}
            openByDefault={true}
            height={1000}
            rowHeight={50}
            overscanCount={1}
            indent={24}
            paddingTop={30}
            paddingBottom={10}
            padding={25 /* sets both */}
          >
            {Node}
    </Tree>
    </div>

    
    
  );
}

function Node({ node, style, dragHandle }: { node:any, style: React.CSSProperties, dragHandle?: React.Ref<HTMLDivElement> }) {
  const [checked, setChecked] = useState(false);
  const handleCheck = () => setChecked(!checked);  
  return (
      <div className='Node' onClick={handleCheck}  ref={dragHandle} >
       
        <div style={style} >
          {"🙂"}
          {node.data.name}

        </div>
        {
          checked && (
            <div className='checkbox'>
              <Checkbox checked={checked} onChange={handleCheck} />
            </div>
          )
        }
      </div>
     
    );
  }
export default PersonasTree;
