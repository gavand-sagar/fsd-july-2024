import logo from './logo.svg';
import './App.css';
import ListRenderingWithObjects from './ListRenderingWithObjects';
import ToggleClass from './ToggleClass';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Orders from './Orders';
import Circle from './Circle';

function App() {
  return (
    <div className="App">
      <h1>This thing is common</h1>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/circle/my' element={<Circle/>}/>
        <Route path='/stock-list' element={<ListRenderingWithObjects/>}/>
      </Routes>
    </div>
  );
}

export default App;

