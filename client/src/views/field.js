const Field = () => {
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
      </div>
      <FieldList></FieldList>
    </div>
  );
};

const FieldList = () => {
  return (
    <div className='fieldList-container'>
      <div className='fieldList-list'>
        <div className='fieldList-num'>
          <text className='fieldList-num-text'>1</text>
        </div>
        <div className='fieldList-textArea'>
          <text className='fieldList-mainText'>선수이름</text>
          <text className='fieldList-subText'>선수 설명</text>
        </div>
      </div>
      <div className='fieldList-list'></div>
    </div>
  );
};

export default Field;
