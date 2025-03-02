
import { Tree } from 'react-arborist';
import './PersonasTree.css';

function PersonasTree() {
 

  const data = [
    { id: "1", name: "Unread" },
    { id: "2", name: "Threads" },
    {
      id: "3",
      name: "Chat Rooms",
      children: [
        { id: "c1", name: "General" },
        { id: "c2", name: "Random" },
        { id: "c3", name: "Open Source Projects" },
      ],
    },
    {
      id: "4",
      name: "Direct Messages",
      children: [
        { id: "d1", name: "Alice" },
        { id: "d2", name: "Bob" },
        { id: "d3", name: "Charlie" },
      ],
    },
  ];
  return (
    <Tree className='Tree'
      initialData={data}
      openByDefault={false}
      height={1000}
      rowHeight={36}
      overscanCount={1}
      
    >
      {Node}
    </Tree>
  );
}

function Node({ node, style, dragHandle }: { node:any, style: React.CSSProperties, dragHandle?: React.Ref<HTMLDivElement> }) {
    return (
      <div style={style} ref={dragHandle}>
        {node.isLeaf ? "🙂" : "⬇️"}
        {node.data.name}
      </div>
    );
  }
export default PersonasTree;
