import { Handle } from 'reactflow';
import { NodeProps } from 'react-flow-renderer';

const Node:React.FC<NodeProps>= ({ data, targetPosition, sourcePosition })=>{
  return (
    <div className="bg-white text-black min-w-10rem p-4 text-center text-xs rounded-lg border border-black shadow-md transition-transform hover:shadow-lg hover:scale-110">
        {((sourcePosition && targetPosition) && sourcePosition.length >0 && targetPosition.length>0)&&
        <>
      <Handle type="source" position={sourcePosition} />
      {data.label}
      <Handle type="target" position={targetPosition} />
      </>
    }
    </div>
  );
}

export default Node;
