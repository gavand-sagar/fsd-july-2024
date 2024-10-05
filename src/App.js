import logo from './logo.svg';
import './App.css';
import ListRenderingWithObjects from './ListRenderingWithObjects';
import ToggleClass from './ToggleClass';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Orders from './Orders';
import Circle from './Circle';
import BasicForm from './BasicForm';
import InterestCalculator from './InterestCalculator';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/basic-form' element={<BasicForm/>}/>
        <Route path='/interest-calculator' element={<InterestCalculator/>}/>
        <Route path='/circle/my' element={<Circle/>}/>
        <Route path='/stock-list' element={<ListRenderingWithObjects/>}/>
      </Routes>
    </div>
  );
}

export default App;

