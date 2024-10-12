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
import UseEffectsDemo from './UseEffectsDemo';
import ApiDemo from './ApiDemo';
import DogsImagesApi from './DogsImagesApi';
import UsersApi from './UsersApi';
import HookForms from './HookForms';
import PropDrilling from './PropDrilling/PropDrilling';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/basic-form' element={<BasicForm />} />
        <Route path='/interest-calculator' element={<InterestCalculator />} />
        <Route path='/use-effect' element={<UseEffectsDemo />} />
        <Route path='/circle/my' element={<Circle />} />
        <Route path='/stock-list' element={<ListRenderingWithObjects />} />
        <Route path='/api-demo' element={<ApiDemo />} />
        <Route path='/dogs-image-api' element={<DogsImagesApi />} />
        <Route path='/users-api' element={<UsersApi />} />
        <Route path='/hook-form' element={<HookForms />} />
        <Route path='/prop-drilling' element={<PropDrilling />} />
      </Routes>
    </div>
  );
}

export default App;

