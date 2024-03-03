import React, { useState } from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import Node from './Node';

const nodeTypes = { customNode: Node };
type node = {
    "id": string
    "type": string
    "data": {
        "label": string
    },
    "position": {
        "x": number,
        "y": number
    }
}

type edges = {
    "id": string,
    "source": string,
    "target": string
}
const Flowchart = ({ nodes, edges, height1 }:{nodes:node[],edges:edges[],height1:number}) => {
  const [isMobile] = useState(window.innerWidth < 540 ? true : false);
  return (
    <div className=" py-5 sm:px-20 bg-[#0A0A0A] flex items-center md:px-40 lg:px-64 xl:px-80">
      <div className={`h-[200vh] w-[90vw] items-center flex`}>
        <ReactFlow
        style={{background:"#0A0A0A"}}
          nodeTypes={nodeTypes}
          nodes={nodes}
          edges={edges}
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          selectionOnDrag={false}
          panOnScroll={false}
          preventScrolling={false}
          defaultViewport={
            isMobile ? { x: -160, y: 0, zoom: 0.5 } : { x: 100, y: 0, zoom: 0.9 }
          }
        >
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Flowchart;
