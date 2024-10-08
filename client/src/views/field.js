import { useEffect, useState } from 'react';
import { Reorder, useDragControls } from 'framer-motion';
import Draggable from 'react-draggable';

const Field = () => {
  const [position1, setPosition1] = useState({ x: 0, y: 0 }); // position값 저장
  const updatePos1 = (data) => {
    setPosition1({ x: data.x, y: data.y }); // position변경
  };
  const changePos = () => {
    setPosition1({ x: 0, y: 0 });
  };
  return (
    <div className='fd-background'>
      <div className='field'>
        <div className='center-line'></div>
        <div className='center-circle'></div>
        <div className='penalty-area top'></div>
        <div className='penalty-area bottom'></div>
        <div className='goal-area top'></div>
        <div className='goal-area bottom'></div>
        <div className='goal top'></div>
        <div className='goal bottom'></div>
        <div className='penalty-spot top'></div>
        <div className='penalty-spot bottom'></div>
        <Draggable onDrag={(e, data) => {}} bounds='.field'>
          <div className='field-ball'></div>
        </Draggable>
        <Draggable
          onDrag={(e, data) => {
            updatePos1(data);
          }}
          bounds='.field'
          position={position1}
        >
          <div className='field-player'>
            <span className='field-player-text'>1</span>
          </div>
        </Draggable>
        <Draggable onDrag={(e, data) => {}} bounds='.field'>
          <div className='field-player'>
            <span className='field-player-text'>2</span>
          </div>
        </Draggable>
      </div>
      <FieldList></FieldList>
    </div>
  );
};

const FieldList = () => {
  //오른쪽 탭 상태 나타내는 status
  let [tabStatus, setTabStatus] = useState(1);
  const changeTab = () => {
    if (tabStatus === 0) {
      setTabStatus(1);
    } else {
      setTabStatus(0);
    }
  };
  //플레이어 목록 가져오고 저장
  let [players, setPlayers] = useState([
    {
      num: 1,
      name: 'Hong',
      description: 'striker',
    },
    {
      num: 2,
      name: 'Lim',
      description: 'keeper',
    },
    {
      num: 3,
      name: 'Park',
      description: 'defender',
    },
    {
      num: 4,
      name: 'Hong',
      description: 'striker',
    },
    {
      num: 5,
      name: 'Lim',
      description: 'keeper',
    },
    {
      num: 6,
      name: 'Park',
      description: 'defender',
    },
    {
      num: 7,
      name: 'Hong',
      description: 'striker',
    },
    {
      num: 8,
      name: 'Lim',
      description: 'keeper',
    },
    {
      num: 9,
      name: 'Park',
      description: 'defender',
    },
    {
      num: 10,
      name: 'Hong',
      description: 'striker',
    },
    {
      num: 11,
      name: 'Lim',
      description: 'keeper',
    },
  ]);

  //색 바꾸면 번호 색 바꾸기
  let [colorStatus, setColorStatus] = useState('#1f2024');

  return tabStatus === 1 ? (
    <div className='fieldList-container'>
      <div className='fieldList-Rtab'>
        <div
          className='fieldList-RtabBtn'
          onClick={() => {
            changeTab();
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M15.54 11.29L9.88 5.64004C9.78704 5.54631 9.67644 5.47191 9.55458 5.42115C9.43272 5.37038 9.30201 5.34424 9.17 5.34424C9.03799 5.34424 8.90728 5.37038 8.78542 5.42115C8.66356 5.47191 8.55296 5.54631 8.46 5.64004C8.27375 5.8274 8.16921 6.08085 8.16921 6.34504C8.16921 6.60922 8.27375 6.86267 8.46 7.05004L13.41 12.05L8.46 17C8.27375 17.1874 8.16921 17.4409 8.16921 17.705C8.16921 17.9692 8.27375 18.2227 8.46 18.41C8.55261 18.5045 8.66306 18.5797 8.78493 18.6312C8.90681 18.6827 9.03769 18.7095 9.17 18.71C9.30231 18.7095 9.43319 18.6827 9.55507 18.6312C9.67694 18.5797 9.78739 18.5045 9.88 18.41L15.54 12.76C15.6415 12.6664 15.7225 12.5527 15.7779 12.4262C15.8333 12.2997 15.8619 12.1631 15.8619 12.025C15.8619 11.8869 15.8333 11.7503 15.7779 11.6238C15.7225 11.4973 15.6415 11.3837 15.54 11.29Z'
              fill='#1B1B1B'
            />
          </svg>
        </div>
      </div>
      <div className='fieldList-colorsCon'>
        <div
          className='fieldList-colors black'
          onClick={() => {
            setColorStatus('#1f2024');
          }}
        ></div>
        <div
          className='fieldList-colors orange'
          onClick={() => {
            setColorStatus('#ffaa00');
          }}
        ></div>
        <div
          className='fieldList-colors blue'
          onClick={() => {
            setColorStatus('#3457e4');
          }}
        ></div>
        <div
          className='fieldList-colors red'
          onClick={() => {
            setColorStatus('#e74c4c');
          }}
        ></div>
      </div>
      <Reorder.Group
        className='fieldList-reorder'
        axis='y'
        values={players}
        onReorder={setPlayers}
        layoutScroll
        style={{ overflowY: 'scroll' }}
      >
        {players.map((player) => {
          return (
            <PlayerList
              key={player.num}
              player={player}
              colorStatus={colorStatus}
            ></PlayerList>
          );
        })}
      </Reorder.Group>
      <div className='fieldList-playerBtn'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            d='M12.3 12.22C12.8336 11.7581 13.2616 11.1869 13.5549 10.545C13.8482 9.90316 14 9.20571 14 8.5C14 7.17392 13.4732 5.90215 12.5355 4.96447C11.5979 4.02678 10.3261 3.5 9 3.5C7.67392 3.5 6.40215 4.02678 5.46447 4.96447C4.52678 5.90215 4 7.17392 4 8.5C3.99999 9.20571 4.1518 9.90316 4.44513 10.545C4.73845 11.1869 5.16642 11.7581 5.7 12.22C4.30014 12.8539 3.11247 13.8775 2.27898 15.1685C1.4455 16.4596 1.00147 17.9633 1 19.5C1 19.7652 1.10536 20.0196 1.29289 20.2071C1.48043 20.3946 1.73478 20.5 2 20.5C2.26522 20.5 2.51957 20.3946 2.70711 20.2071C2.89464 20.0196 3 19.7652 3 19.5C3 17.9087 3.63214 16.3826 4.75736 15.2574C5.88258 14.1321 7.4087 13.5 9 13.5C10.5913 13.5 12.1174 14.1321 13.2426 15.2574C14.3679 16.3826 15 17.9087 15 19.5C15 19.7652 15.1054 20.0196 15.2929 20.2071C15.4804 20.3946 15.7348 20.5 16 20.5C16.2652 20.5 16.5196 20.3946 16.7071 20.2071C16.8946 20.0196 17 19.7652 17 19.5C16.9985 17.9633 16.5545 16.4596 15.721 15.1685C14.8875 13.8775 13.6999 12.8539 12.3 12.22ZM9 11.5C8.40666 11.5 7.82664 11.3241 7.33329 10.9944C6.83994 10.6648 6.45542 10.1962 6.22836 9.64805C6.0013 9.09987 5.94189 8.49667 6.05764 7.91473C6.1734 7.33279 6.45912 6.79824 6.87868 6.37868C7.29824 5.95912 7.83279 5.6734 8.41473 5.55764C8.99667 5.44189 9.59987 5.5013 10.1481 5.72836C10.6962 5.95542 11.1648 6.33994 11.4944 6.83329C11.8241 7.32664 12 7.90666 12 8.5C12 9.29565 11.6839 10.0587 11.1213 10.6213C10.5587 11.1839 9.79565 11.5 9 11.5ZM18.74 11.82C19.38 11.0993 19.798 10.2091 19.9438 9.25634C20.0896 8.30362 19.9569 7.32907 19.5618 6.45C19.1666 5.57093 18.5258 4.8248 17.7165 4.30142C16.9071 3.77805 15.9638 3.49974 15 3.5C14.7348 3.5 14.4804 3.60536 14.2929 3.79289C14.1054 3.98043 14 4.23478 14 4.5C14 4.76522 14.1054 5.01957 14.2929 5.20711C14.4804 5.39464 14.7348 5.5 15 5.5C15.7956 5.5 16.5587 5.81607 17.1213 6.37868C17.6839 6.94129 18 7.70435 18 8.5C17.9986 9.02524 17.8593 9.5409 17.5961 9.99542C17.3328 10.4499 16.9549 10.8274 16.5 11.09C16.3517 11.1755 16.2279 11.2977 16.1404 11.4447C16.0528 11.5918 16.0045 11.7589 16 11.93C15.9958 12.0998 16.0349 12.2678 16.1137 12.4183C16.1924 12.5687 16.3081 12.6967 16.45 12.79L16.84 13.05L16.97 13.12C18.1754 13.6917 19.1923 14.596 19.901 15.7263C20.6096 16.8566 20.9805 18.1659 20.97 19.5C20.97 19.7652 21.0754 20.0196 21.2629 20.2071C21.4504 20.3946 21.7048 20.5 21.97 20.5C22.2352 20.5 22.4896 20.3946 22.6771 20.2071C22.8646 20.0196 22.97 19.7652 22.97 19.5C22.9782 17.9654 22.5938 16.4543 21.8535 15.1101C21.1131 13.7659 20.0413 12.6333 18.74 11.82Z'
            fill='#fff'
          />
        </svg>
        <span className='fieldList-playerBtnText'>PLAYERS</span>
      </div>
    </div>
  ) : (
    <ClosedFieldList changeTab={changeTab}></ClosedFieldList>
  );
};

const ClosedFieldList = (props) => {
  return (
    <div className='fieldList-Rtab-closed'>
      <div
        className='fieldList-RtabBtn-closed'
        onClick={() => {
          props.changeTab();
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            d='M8.5 12.8L14.2 18.4C14.6 18.8 15.2 18.8 15.6 18.4C16 18 16 17.4 15.6 17L10.7 12L15.6 7.00005C16 6.60005 16 6.00005 15.6 5.60005C15.4 5.40005 15.2 5.30005 14.9 5.30005C14.6 5.30005 14.4 5.40005 14.2 5.60005L8.5 11.2C8.1 11.7 8.1 12.3 8.5 12.8C8.5 12.7 8.5 12.7 8.5 12.8Z'
            fill='#1B1B1B'
          />
        </svg>
      </div>
      <div className='fieldList-RtabPlayers-closed'>
        <div className='fieldList-RtabPlayersCon-closed'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='22'
            height='22'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M12.3 12.22C12.8336 11.7581 13.2616 11.1869 13.5549 10.545C13.8482 9.90316 14 9.20571 14 8.5C14 7.17392 13.4732 5.90215 12.5355 4.96447C11.5979 4.02678 10.3261 3.5 9 3.5C7.67392 3.5 6.40215 4.02678 5.46447 4.96447C4.52678 5.90215 4 7.17392 4 8.5C3.99999 9.20571 4.1518 9.90316 4.44513 10.545C4.73845 11.1869 5.16642 11.7581 5.7 12.22C4.30014 12.8539 3.11247 13.8775 2.27898 15.1685C1.4455 16.4596 1.00147 17.9633 1 19.5C1 19.7652 1.10536 20.0196 1.29289 20.2071C1.48043 20.3946 1.73478 20.5 2 20.5C2.26522 20.5 2.51957 20.3946 2.70711 20.2071C2.89464 20.0196 3 19.7652 3 19.5C3 17.9087 3.63214 16.3826 4.75736 15.2574C5.88258 14.1321 7.4087 13.5 9 13.5C10.5913 13.5 12.1174 14.1321 13.2426 15.2574C14.3679 16.3826 15 17.9087 15 19.5C15 19.7652 15.1054 20.0196 15.2929 20.2071C15.4804 20.3946 15.7348 20.5 16 20.5C16.2652 20.5 16.5196 20.3946 16.7071 20.2071C16.8946 20.0196 17 19.7652 17 19.5C16.9985 17.9633 16.5545 16.4596 15.721 15.1685C14.8875 13.8775 13.6999 12.8539 12.3 12.22ZM9 11.5C8.40666 11.5 7.82664 11.3241 7.33329 10.9944C6.83994 10.6648 6.45542 10.1962 6.22836 9.64805C6.0013 9.09987 5.94189 8.49667 6.05764 7.91473C6.1734 7.33279 6.45912 6.79824 6.87868 6.37868C7.29824 5.95912 7.83279 5.6734 8.41473 5.55764C8.99667 5.44189 9.59987 5.5013 10.1481 5.72836C10.6962 5.95542 11.1648 6.33994 11.4944 6.83329C11.8241 7.32664 12 7.90666 12 8.5C12 9.29565 11.6839 10.0587 11.1213 10.6213C10.5587 11.1839 9.79565 11.5 9 11.5ZM18.74 11.82C19.38 11.0993 19.798 10.2091 19.9438 9.25634C20.0896 8.30362 19.9569 7.32907 19.5618 6.45C19.1666 5.57093 18.5258 4.8248 17.7165 4.30142C16.9071 3.77805 15.9638 3.49974 15 3.5C14.7348 3.5 14.4804 3.60536 14.2929 3.79289C14.1054 3.98043 14 4.23478 14 4.5C14 4.76522 14.1054 5.01957 14.2929 5.20711C14.4804 5.39464 14.7348 5.5 15 5.5C15.7956 5.5 16.5587 5.81607 17.1213 6.37868C17.6839 6.94129 18 7.70435 18 8.5C17.9986 9.02524 17.8593 9.5409 17.5961 9.99542C17.3328 10.4499 16.9549 10.8274 16.5 11.09C16.3517 11.1755 16.2279 11.2977 16.1404 11.4447C16.0528 11.5918 16.0045 11.7589 16 11.93C15.9958 12.0998 16.0349 12.2678 16.1137 12.4183C16.1924 12.5687 16.3081 12.6967 16.45 12.79L16.84 13.05L16.97 13.12C18.1754 13.6917 19.1923 14.596 19.901 15.7263C20.6096 16.8566 20.9805 18.1659 20.97 19.5C20.97 19.7652 21.0754 20.0196 21.2629 20.2071C21.4504 20.3946 21.7048 20.5 21.97 20.5C22.2352 20.5 22.4896 20.3946 22.6771 20.2071C22.8646 20.0196 22.97 19.7652 22.97 19.5C22.9782 17.9654 22.5938 16.4543 21.8535 15.1101C21.1131 13.7659 20.0413 12.6333 18.74 11.82Z'
              fill='#fff'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

const PlayerList = (props) => {
  //frame-motion Reorder
  const dragControls = useDragControls();
  return (
    <Reorder.Item
      value={props.player}
      dragListener={false}
      dragControls={dragControls}
      className='fieldList-list'
    >
      <div className='fieldList-num' style={{ background: props.colorStatus }}>
        <span className='fieldList-num-text'>{props.player.num}</span>
      </div>
      <div className='fieldList-textArea'>
        <span className='fieldList-mainText'>{props.player.name}</span>
        <span className='fieldList-subText'>{props.player.description}</span>
      </div>
      <ReorderIcon dragControls={dragControls}></ReorderIcon>
    </Reorder.Item>
  );
};

const ReorderIcon = (props) => {
  return (
    <div className='fieldList-hamburgerIcon'>
      <svg
        onPointerDown={(e) => {
          props.dragControls.start(e);
          e.preventDefault();
        }}
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
      >
        <path
          d='M3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z'
          fill='#71727a'
        />
      </svg>
    </div>
  );
};

export default Field;
