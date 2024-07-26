import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Field from './views/field';
import Main from './views/main';

import DndPractice from './views/dnd_practice';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/dnd' element={<DndPractice />} />
        <Route path='/field' element={<Field />} />
      </Routes>
    </>
  );
}

export default App;
