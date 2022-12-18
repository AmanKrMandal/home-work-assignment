import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Entry from './component/Entry/Entry';
import Register from './component/Register/Register';
import Login from './component/Login/Login';
import Move from './component/Move/Move';
import NewGame from './component/NewGame/NewGame';
import Home from './component/Home/Home';





function App() {
  return (
    <div className="App">
      <Routes>
        < Route path='/' element={<Entry />} />
        < Route path='/Register' element={<Register />} />
        < Route path='/Home' element={<Home />} />
        < Route path='/NewGame' element={<NewGame />} />
        < Route path='/Move' element={<Move />} />
        < Route path='/Login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
