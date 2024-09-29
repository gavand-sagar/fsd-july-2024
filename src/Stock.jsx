
export default function Stock({ newValue, oldValue, name }) {
    let change = (newValue - oldValue).toFixed(2);
    let changePercent = (change * 100 / oldValue).toFixed(2)
    return (<fieldset className="stock-item">
      {name} {newValue}
      <br />
      <span className={(change >= 0 ? "green small-text" : "red small-text")}>{change}</span>
      &nbsp;
      {change >= 0 ? <span className='green small-text'>&uarr;</span> : <span className='red'>&darr;</span>}
      &nbsp;
      <span className={(changePercent >= 0 ? "green small-text" : "red small-text")}>({changePercent}%)</span>
    </fieldset>)
  }
  