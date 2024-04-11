import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';

// COMPONENTS
import MyButton from './components/MyButton';
import MyHeader from './components/MyHeader';

import { getEmotionImage } from './util/get-emotion';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader
          headText={'App'}
          leftChild={<MyButton text={'왼쪽 버튼'} onClick={() => alert('a')} />}
          rightChild={<MyButton text={'오른쪽 버튼'} onClick={() => alert('a')} />}
        />

        <h2>App.js</h2>

        <MyButton type={'positive'} text="asd" onClick={() => alert('click')} />
        <MyButton type={'negative'} text="asd" onClick={() => alert('click')} />
        <MyButton text="asd" onClick={() => alert('click')} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
