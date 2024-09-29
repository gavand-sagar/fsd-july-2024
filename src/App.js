import logo from './logo.svg';
import './App.css';
import { CircleContainer } from './CircleContainer';
import TopContainer from './TopContainer';
import { Component } from 'react';

function Upper({ value }) {
  return (<span className={(value >= 0 ? "green" : "red")}>({value})</span>)
}

function Stock({ newValue, oldValue, name }) {
  let change = (newValue - oldValue).toFixed(2);
  let changePercent = (change * 100 / oldValue).toFixed(2)
  return (<fieldset>
    {name} {newValue}
    <br />
    <span className={(change >= 0 ? "green small-text" : "red small-text")}>{change}</span>
    &nbsp;
    {change >= 0 ? <span className='green small-text'>&uarr;</span> : <span className='red'>&darr;</span>}
    &nbsp;
    <span className={(changePercent >= 0 ? "green small-text" : "red small-text")}>({changePercent}%)</span>
  </fieldset>)
}


function App() {
  return (
    <div className="App">
      <Upper value={8}></Upper>
      {/* <Stock name={"IOP"} newValue={300} oldValue={220} />
      <Stock name={"DSG"} newValue={50} oldValue={40}></Stock>
      <Stock name={"HGJ"} newValue={30} oldValue={40}></Stock>
      <Stock name={"IUU"} newValue={30} oldValue={70}></Stock> */}
    </div>
  );
}

export default App;

