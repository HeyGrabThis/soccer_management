import { useState } from 'react';
import Draggable, { DraggableCore } from 'react-draggable';

const DndPractice = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 }); // position값 저장
  const updatePos = (data) => {
    setPosition({ x: data.x, y: data.y }); // position변경
  };
  const [position2, setPosition2] = useState({ x: 0, y: 0 }); // position값 저장
  const updatePos2 = (data) => {
    setPosition2({ x: data.x, y: data.y }); // position변경
  };
  return (
    <div>
      <div className='boxContainer'>
        <Draggable
          bounds='.boxContainer'
          handle='.handle'
          onDrag={(data) => {
            setPosition(data);
          }}
        >
          <div className='box'>
            <div className='handle'>Drag from here</div>
            <span>Box</span>
            <br></br>
            <span>
              {position.x},{position.y}
            </span>
          </div>
        </Draggable>
      </div>
      <Draggable
        onDrag={(e, data) => {
          updatePos2(data);
        }}
      >
        <div className='box'>
          <span>Box2</span>
          <br></br>
          <span>
            {position2.x},{position2.y}
          </span>
        </div>
      </Draggable>
    </div>
  );
};

export default DndPractice;
